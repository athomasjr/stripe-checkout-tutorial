import styled from 'styled-components'

export const CheckoutContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ProductCard = styled.div`
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border-radius: 10px;
	box-shadow: 1px 2px 2px hsl(0 0% 50% / 0.2), 2px 4px 4px hsl(0 0% 50% / 0.2),
		4px 8px 8px hsl(0 0% 50% / 0.2), 8px 16px 16px hsl(0 0% 50% / 0.2),
		16px 32px 32px hsl(0 0% 50% / 0.2);
	width: 350px;
	height: 400px;
	align-items: center;
	text-align: center;
`

export const ProductDetails = styled.div`
	h3 {
		font-size: 2.4rem;
		margin-bottom: 4px;
	}

	h5 {
		position: relative;
		font-size: 1.6rem;
		margin-bottom: 40px;

		&:after {
			content: ' ';
			position: absolute;
			display: block;
			background: #72757e40;
			height: 2px;
			width: 150%;
			bottom: -16px;
			left: 50%;
			transform: translate(-50%, 0);
			border-radius: 4px;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 8px;
		text-align: left;
	}
`

export const Feature = styled.li`
	font-size: 1.8rem;
	&:before {
		content: '\\2713';
		margin-right: 24px;
	}
`

export const Button = styled.button`
	background: #e67369;
	color: white;
	width: 45%;
	padding: 12px 16px;
	border-radius: 4px;
	box-shadow: 0.5px 1px 1px hsl(0 0% 50% / 0.7);
	transition: all 0.3s ease;
	border: none;
	cursor: pointer;
	font-size: 1.6rem;

	&:hover {
		box-shadow: 1px 2px 2px hsl(0 0% 50% / 0.333),
			2px 4px 4px hsl(0 0% 50% / 0.333), 3px 6px 6px hsl(0 0% 50% / 0.333);
		transform: scale(1.01);
	}
`

export const Loading = styled.div`
	font-size: 2.4rem;
`
