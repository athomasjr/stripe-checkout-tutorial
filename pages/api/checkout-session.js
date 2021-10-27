import stripe from '../../utils/stripe'

export default async function checkoutSessionHandler(req, res) {
	const DOMAIN = req.headers.origin

	// create new stripe customer
	const newCustomer = await stripe.customers.create({
		email: 'test@mail.com',
		description: 'New Customer',
	})

	const prices = await stripe.prices.list({
		lookup_keys: [req.body.lookup_key],
		expand: ['data.product'],
	})

	// create stripe session
	const stripeSession = await stripe.checkout.sessions.create({
		billing_address_collection: 'auto',
		payment_method_types: ['card'],
		customer: newCustomer.id,
		line_items: [
			{
				price: prices.data[0].id,
				quantity: 1,
			},
		],
		mode: 'subscription',
		subscription_data: {
			trial_period_days: 30,
		},

		// enter your redirect url for each state
		success_url: `${DOMAIN}/success`,
		cancel_url: `${DOMAIN}/fail`,
	})

	res.status(200).json({ sessionId: stripeSession.id })
}
