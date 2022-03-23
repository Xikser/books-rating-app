export interface IInputProps {
	id: number | string
	inputType: string
	placeholder: string
	label: string
	name?: string
	minLength?: number
	maxLength?: number
	regexp?: RegExp
	onChange(value: string): void
	setInputValidationResults: any
}
