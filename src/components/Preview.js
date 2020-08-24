import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLink = styled(Link)`
	text-decoration: none;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const Container = styled.div`
	display: flex;
	height: 100%;
	padding: 1rem;
`;

const Cover = styled.div`
	width: 25%;
	height: auto;
	margin-top: 1.5rem;
	background-image: url(${props => props.bgUrl});
	background-size: contain;
	background-repeat: no-repeat;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 70%;
	padding-left: 1.5rem;
`;

const Title = styled.h1`
	padding-bottom: 1rem;
	font-size: 1.1rem;
	line-height: 1.3rem;
	color: #00317d;
`;
const Author = styled.p`
	padding-bottom: 0.6rem;
	color: black;
`;
const Price = styled.p`
	color: #e3900e;
`;

const Preview = ({
	title,
	author,
	price,
	publisher,
	description,
	pubDate,
	saleStatus,
	coverImageS,
	coverImageL,
	isbn,
	buyLink,
}) => (
	<Container>
		<Cover bgUrl={coverImageS ? coverImageS : require('../assets/image_not_found.jpg')} />
		<Info>
			<SLink to={`book/${title}`}>
				<Title>{title}</Title>
			</SLink>
			<Author>{author}</Author>
			<Price>{`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</Price>
		</Info>
	</Container>
);

export default Preview;
