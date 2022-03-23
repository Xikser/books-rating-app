export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const EDIT = 'EDIT'

export const addRate = ({username, comment, rate}: {username: any, comment: any, rate: any}) => ({
	type: ADD,
	payload: {
		username,
		comment,
		id: Math.floor(Math.random() * 2317),
		rate,
	}
});
