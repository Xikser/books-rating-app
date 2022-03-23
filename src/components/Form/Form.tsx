import React, {useCallback, useState} from "react";
import {connect, useDispatch} from "react-redux";
import {addRate} from "../../services/actions/rateActions";

import Input from '../Input/Input'

import {IRateObject} from "./interfaces/IRateObject";
import {IFormProps} from "./interfaces/IFormProps";

import './style.scss'

const Form = ({
	              username = '',
	              comment = '',
	              id,
	              rate = 0,
	              onFormSend = () => {
	              }
              }: IFormProps) => {

	const dispatch = useDispatch();

	const [usernameInput, setUsernameInput] = useState('')
	const [rateInput, setRateInput] = useState('')
	const [commentInput, setCommentInput] = useState('')
	const [inputValidationResult, setInputValidationResult] = useState<object>({})

	const isValidForm = (): boolean => {
		let result = true
		Object.values(inputValidationResult).forEach(validationResult => result &&= validationResult)
		return result
	}

	const handleOnSubmit = (event: any) => {
		event.preventDefault()

		const rateObject: IRateObject = {
			username: usernameInput,
			comment: commentInput,
			rate: Number(rateInput)
		}

		onFormSend(true)
		dispatch(addRate(rateObject))
	}

	const x = useCallback(value => {
		setUsernameInput(value)
	}, [usernameInput])

	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<div className='input-container'>
					<Input
						id={0}
						inputType={'text'}
						placeholder={'Username'}
						onChange={x}
						name={'username'}
						label={'Username'}
						minLength={3}
						maxLength={15}
						regexp={/^\w+$/}
						setInputValidationResults={setInputValidationResult}
					/>
					<Input
						id={1}
						inputType={'number'}
						placeholder={'Your rate 0 - 5'}
						onChange={setRateInput}
						name={'rate'}
						label={'Rate'}
						minLength={1}
						maxLength={1}
						regexp={/^\D+$/}
						setInputValidationResults={setInputValidationResult}
					/>
					<Input
						id={2}
						inputType={'text'}
						placeholder={'Comment'}
						onChange={setCommentInput}
						name={'comment'}
						label={'Comment'}
						minLength={20}
						maxLength={250}
						regexp={/^\W+$/}
						setInputValidationResults={setInputValidationResult}
					/>

					<button type='submit' disabled={!isValidForm()}>Submit rate</button>
				</div>
			</form>
		</>
	)
}

const connectActionsToProps = ({
	addRate
})

const FormConsumer = connect(null, connectActionsToProps)(Form)

export default FormConsumer
