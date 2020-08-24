import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;

	width: 30%;
	height: 95%;
`;

const Title = styled.h1`
	font-size: 1.3rem;
`;

const Grids = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: 1fr;
	height: 100%;
	width: 100%;
	margin-top: 1.2rem;
	background-color: #f8f3ed;
	border-radius: 12px;
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
		background-color: black;
		color: white;
	}
`;

const NewBook = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grids>{children}</Grids>
		<Btn>More</Btn>
	</Container>
);

export default NewBook;