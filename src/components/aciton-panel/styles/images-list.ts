import styled from 'styled-components';

export const List = styled.ul`
	width: 1460px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;

	list-style-type: none;
`;

export const Item = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 480px;
	box-sizing: border-box;
	margin-right: 10px;
	margin-top: 10px;

	border: 1px solid grey;
	overflow: hidden;

	&:nth-child(3n) {
		margin-right: 0;
	}
`;

export const ItemImg = styled.img``;

export const Groups = styled.div`
	width: 1460px;
	margin: 0 auto;
	margin-top: 20px;
`;

export const Group = styled.div`
	display: flex;
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 10px;
	border: 1px solid grey;
	border-radius: 5px;

	> img {
		margin-left: 10px;
	}
`;

export const GroupTitle = styled.h3`
	margin-left: 10px;
	font-size: 27px;
`;
