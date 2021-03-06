import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Recommend = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grids>{children}</Grids>
		<Link to={'/list/recommend'}>
			<Btn>More</Btn>
		</Link>
	</Container>
);

const Container = styled.article`
	position: relative;
	width: 60%;
	height: 95%;
	@media ${props => props.theme.tabletM} {
		width: 100%;
		height: 60%;
	}
	@media ${props => props.theme.tabletS} {
		height: 55%;
	}
`;

const Title = styled.h1`
	width: 100%;
	font-size: 1.5rem;
	@media ${props => props.theme.tabletS} {
		position: absolute;
		left: 1rem;
	}
`;

const Grids = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(2, 1fr);
	height: 100%;
	margin-top: 1.2rem;
	@media ${props => props.theme.tabletL} {
		height: 80%;
	}
	@media ${props => props.theme.tabletM} {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${props => props.theme.tabletS} {
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Btn = styled.button`
	position: absolute;
	top: 0;
	right: 1rem;
	width: 4rem;
	height: 1.5rem;
	background: none;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 0.9rem;
	color: grey;
	outline: none;
	cursor: pointer;

	&:hover {
		background-color: #f8f3ed;
		color: #e3900e;
	}
`;

export default Recommend;
