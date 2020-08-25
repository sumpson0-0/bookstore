import React from 'react';
import ItemListPresenter from './ItemListPresenter';
import { booksApi } from 'api';

class ItemListContainer extends React.Component {
	state = {
		items: null,
		params: null,
		loading: true,
	};

	async componentDidMount() {
		try {
			const params = this.props.match.params.queryType;
			const {
				data: { item: items },
			} = await booksApi.getList(params);
			this.setState({ items, params });
		} catch (error) {
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { items, params, loading } = this.state;
		console.log(items);
		return <ItemListPresenter items={items} params={params} loading={loading} />;
	}
}

export default ItemListContainer;
