import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
				<Description>{description.substr(0, 180)}...</Description>
				<Price>{`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</Price>
			</Info>
		</Container>
	</SLink>
);

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
	@media ${props => props.theme.tabletM} {
		flex-direction: column;
		padding: 3rem 0 0 0;
	}
	@media ${props => props.theme.tabletS} {
		padding-top: 5rem;
	}
`;

const Cover = styled.div`
	background-image: url(${props => props.url});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center center;
	width: 40rem;
	height: auto;
	@media ${props => props.theme.tabletL} {
		width: 90rem;
	}
	@media ${props => props.theme.tabletM} {
		width: auto;
		height: 15rem;
	}
`;

const Info = styled.div`
	@media ${props => props.theme.tabletM} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}
`;

const Title = styled.h1`
	font-size: 2.5rem;
	color: #00317d;
	@media ${props => props.theme.tabletM} {
		font-size: 2rem;
	}
	@media ${props => props.theme.mobile} {
		width: 80%;
		text-align: center;
	}
`;

const Box = styled.div`
	display: flex;
	padding: 3rem 0 2rem 0;
	text-align: center;
	@media ${props => props.theme.tabletM} {
		font-size: 0.9rem;
		padding: 1rem;
	}
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
	line-height: 1.3rem;
	padding-bottom: 1rem;
	@media ${props => props.theme.tabletM} {
		display: none;
		font-size: 0.9rem;
	}
`;

const Price = styled.p`
	font-size: 1.2rem;
	color: #e3900e;
`;

export default SlideContent;
