import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import { addRate } from "../../Services/Actions/rateAction";

import Input from '../Input/Input'

import './style.scss'

const Form = (
	author = '',
	comment = '',
	id = null,
	rate = 0
) => {
	const inputs = [
		{
			type: 'text',
			placeholder: 'Author name',
			inputName: 'Author',
			label: 'Author',
			onChange: (event) => {
				setAuthorInput(event.target.value)
			}
		},
		{
			type: 'number',
			placeholder: 'Your rating (0 - 5)',
			inputName: 'Rate',
			label: 'Rate',
			onChange: (event) => {
				setRateInput(event.target.value)
			}
		},
		{
			type: 'text',
			placeholder: 'Comment',
			inputName: 'Comment',
			label: 'Comment',
			onChange: (event) => {
				setCommentInput(event.target.value)
			}
		},
	]

	const dispatch = useDispatch();

	const [authorInput, setAuthorInput] = useState('')
	const [rateInput, setRateInput] = useState('')
	const [commentInput, setCommentInput] = useState('')

	const handleOnSubmit = event => {
		event.preventDefault()

		if (!authorInput.length) {
			console.log('author')
			return
		}
		if (!rateInput.length) {
			console.log('rate')
			return
		}
		if (!commentInput.length) {
			console.log('comment')
			return
		}

		const rateObject = {
			author: authorInput,
			comment: commentInput,
			rate: Number(rateInput)
		}

		dispatch(addRate(rateObject))
		console.log(rateObject)
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<div className='input-container'>
				{
					inputs.map((input, i) => {
						return (
							<Input
								key={i}
								type={input.type}
								placeholder={input.placeholder}
								onChange={input.onChange}
								name={input.inputName}
								label={input.label}
								value={input.value}
							/>
						)
					})
				}

				<button type='submit'>Submit rate</button>
			</div>
		</form>
	)
}

const connectActionsToProps = ({
	addRate
})

const FormConsumer = connect(null, connectActionsToProps)(Form)

export default FormConsumer
