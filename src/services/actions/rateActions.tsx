export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const EDIT = 'EDIT'

export const addRate = ({author, comment, rate}: {author: any, comment: any, rate: any}) => ({
	type: ADD,
	payload: {
		author,
		comment,
		id: Math.floor(Math.random() * 1234),
		rate,
	}
});
