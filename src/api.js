import axios from 'axios';

const api = axios.create({
	baseURL: '/api/',
});

export const booksApi = {
	search: item =>
		api.get('search.api', {
			params: {
				key: process.env.REACT_APP_API_KEY,
				query: item,
				output: 'json',
			},
		}),
	getList: category =>
		api.get(`sendBooks`),
};
