import styled from 'styled-components';

export const Button = styled.button`
	display: block;
	box-sizing: border-box;

	padding: 10px;
	margin-left: 10px;

	border: none;
	border-radius: 5px;
	background-color: ${(props: { loading: string }) =>
		props.loading ? 'grey' : 'green'};

	font-size: 17px;
	font-family: Arial, Helvetica, sans-serif;
	color: white;

	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
	}
`;
