import React, { useContext } from "react";
import './style.scss'

const Input = (props: any) => {
	const {type = 'text', placeholder, label, onChange, value} = props

	return (
		<>
			<div className='form-input'>
				<label>
					{label}
				</label>

				<input
					className='input'
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>
			</div>
		</>
	)
}

export default Input
