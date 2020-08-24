import axios from 'axios';

const api = axios.create({
	baseURL: '/api/',
});

export const booksApi = {
	search: item =>
		api.get('search.api', {
			params: {
				key: '48FA0EAD055D5F272FC1E1F639CA0D5F329FF47F91BABF2FF518B8E746EFB082',
				query: item,
				output: 'json',
			},
		}),
	getList: category =>
		api.get(`${category}.api`, {
			params: {
				key: '48FA0EAD055D5F272FC1E1F639CA0D5F329FF47F91BABF2FF518B8E746EFB082',
				categoryId: '100',
				output: 'json',
			},
		}),
};
