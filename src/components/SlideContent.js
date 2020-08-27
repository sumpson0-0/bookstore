import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLink = styled(Link)`
	text-decoration: none;
	color: black;
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
	width: 100%;
	padding-left: 2rem;
`;

const Cover = styled.div`
	background-image: url(${props => props.url});
	background-repeat: no-repeat;
	background-size: contain;
	width: 150%;
	height: auto;
`;

const Info = styled.div`
	padding-left: 2rem;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	color: #00317d;
`;

const Box = styled.div`
	display: flex;
	padding: 3rem 0 2rem 0;
`;

const Author = styled.p`
	padding-right: 0.5rem;
	border-right: 1px solid black;
`;

const Publisher = styled.p`
	padding: 0 0.5rem;
	border-right: 1px solid black;
`;

const PubDate = styled.p`
	padding: 0 0.5rem;
`;

const Description = styled.p`
	font-size: 0.9rem;
	line-height: 1rem;
	padding-bottom: 1rem;
`;

const Price = styled.p`
	font-size: 1.2rem;
	color: #e3900e;
`;

const SlideContent = ({
	title,
	author,
	price,
	publisher,
	description,
	pubDate,
	saleStatus,
	reviewRank,
	coverImageS,
	coverImageL,
	isbn,
	buyLink,
}) => (
	<SLink
		to={{
			pathname: `/book/${title}`,
			state: {
				title,
				author,
				price,
				publisher,
				description,
				pubDate,
				saleStatus,
				reviewRank,
				coverImageL,
				isbn,
				buyLink,
			},
		}}
	>
		<Container>
			<Cover url={coverImageL ? coverImageL : require('../assets/image_not_found.jpg')} />
			<Info>
				<Title>{title}</Title>
				<Box>
					<Author>{author ? author : '저자 미상'}</Author>
					<Publisher>{publisher}</Publisher>
					<PubDate>{`${pubDate.slice(0, 4)}년 ${pubDate.slice(4, 6)}월`}</PubDate>
				</Box>
				<Description>{description}</Description>
				<Price>{`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</Price>
			</Info>
		</Container>
	</SLink>
);

export default SlideContent;