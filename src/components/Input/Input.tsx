import React, {ChangeEvent, useEffect, useState} from "react";
import Error from "../Error/Error";
import './style.scss'
import {IInputProps} from "./interfaces/IInputProps";

const Input = (props: IInputProps) => {
	const {
		id,
		inputType = 'text',
		placeholder,
		label,
		name,
		minLength = 0,
		maxLength = Number.MAX_SAFE_INTEGER,
		regexp = null,
		onChange,
		setInputValidationResults = () => {}
	} = props

	const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const isValid = (): void => {
		if (!value || value.length < minLength) {
			setErrorMessage( `Min length is ${minLength}`)
			return
		}

		if (value.length > maxLength) {
			setErrorMessage( `Max length is ${maxLength}`)
			return
		}

		if (regexp && !regexp.test(value)) {
			setErrorMessage('Wrong characters')
			return
		}

		setErrorMessage(null)
	}

	useEffect(() => {
		isValid()
	}, [value])

	useEffect(() => {
		setInputValidationResults((prev: any) => ({
			...prev,
			[id]: !errorMessage
		}))
	}, [errorMessage])

	return (
		<>
			<div className='form-input'>
				<label>
					{label}
				</label>

				<input
					className='input'
					name={name}
					type={inputType}
					placeholder={placeholder}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						setHasUserInteracted(true)
						setValue(event.target.value)
						onChange(event.target.value)
					}}
				/>
			</div>

			{
				hasUserInteracted && errorMessage && <Error errorMessage={errorMessage}/>
			}
		</>
	)
}

export default Input
