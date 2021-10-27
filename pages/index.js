import { useState } from 'react'
import * as S from '../styles/checkout'
import { fetchPostJSON } from '../utils/fetchPostJson'
import getStripe from '../utils/getStripe'

export default function Home() {
	// Keep track of loading state
	const [loading, setLoading] = useState(false)

	const features = ['feature one', 'feature two', 'feature three']

	const onClickHandler = async (e) => {
		e.preventDefault()
		setLoading(true)

		// use helper function to call our api
		const response = await fetchPostJSON('api/checkout-session', {
			quantity: 1,
		})

		if (response.status === 500) {
			console.error(response.message)
			return
		}

		// use stripe to redirect to our checkout session with the id from our api
		const stripe = await getStripe()
		const { error } = await stripe.redirectToCheckout({
			sessionId: response.sessionId,
		})

		console.warn(error.message)
		setLoading(false)
	}

	return (
		<S.CheckoutContainer>
			{loading ? (
				<S.Loading>...loading</S.Loading>
			) : (
				<S.ProductCard>
					<S.ProductDetails>
						<h3>Test Product</h3>
						<h5>$10.99 / month</h5>
						<ul>
							{features.map((feature) => (
								<S.Feature key={feature}>{feature}</S.Feature>
							))}
						</ul>
					</S.ProductDetails>
					<S.Button disabled={loading} onClick={onClickHandler} role='link'>
						Choose Plan &rarr;
					</S.Button>
				</S.ProductCard>
			)}
		</S.CheckoutContainer>
	)
}
