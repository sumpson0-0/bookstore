import React from 'react';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Item from 'components/Item';

const ItemListPresenter = ({ items, params, loading, handleSubmit, handleChange }) => (
	<>
		{loading ? (
			<Loader />
		) : (
			<>
				<Header handleSubmit={handleSubmit} handleChange={handleChange} />
				<Main>
					{params && params.length > 0 && params === 'bestSeller' && <Title>베스트셀러</Title>}
					{params && params.length > 0 && params === 'recommend' && <Title>추천 도서</Title>}
					{params && params.length > 0 && params === 'newBook' && <Title>신작 도서</Title>}
					{items && items.length > 0 && (
						<Section>
							{items.map(item => (
								<Item
									key={item.itemId}
									title={item.title}
									author={item.author}
									publisher={item.publisher}
									price={item.priceSales}
									description={item.description}
									pubDate={item.pubDate}
									saleStatus={item.saleStatus}
									reviewRank={item.customerReviewRank}
									coverImageS={item.coverSmallUrl}
									coverImageL={item.coverLargeUrl}
									isbn={item.isbn}
									buyLink={item.link}
								/>
							))}
						</Section>
					)}
				</Main>
				<Footer />
			</>
		)}
	</>
);

const Main = styled.main`
	padding: 0 10rem;
	background-color: #f8f3ed;
	@media ${props => props.theme.tabletM} {
		padding: 0 3rem;
	}
	@media ${props => props.theme.tabletS} {
		padding: 0 1.5rem;
	}
`;

const Title = styled.h1`
	padding: 2rem 8rem;
	font-size: 1.6rem;
	@media ${props => props.theme.tabletM} {
		padding: 2rem 4rem;
	}
	@media ${props => props.theme.tabletS} {
		padding: 2rem 1rem;
	}
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default ItemListPresenter;
