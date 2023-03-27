import React, { useState } from 'react';
import './styles.css';

// Added types for input props, created the necessary functions to make the component controllable

type InputProps = {
	label: string;
	placeholder?: string;
	type: string;
	inputName: string;
	value: string;
	className?: string;
	handleChange: (name: string, value: string) => void;
};

const Input = ({
	label,
	placeholder = '',
	type,
	inputName,
	value,
	className = 'input-wrapper',
	handleChange,
}: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(event.target.name, event.target.value);
	};

	return (
		<div className={className}>
			<label
				htmlFor={inputName}
				className='label'
				style={{ color: isFocused || value ? 'black' : '#8d8d8d' }}
			>
				{label}
			</label>
			<input
				id={inputName}
				required
				type={type}
				name={inputName}
				className='form-input'
				style={{
					borderBottom:
						isFocused || value ? '1px solid black' : '1px solid #8d8d8d',
				}}
				placeholder={placeholder}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default Input;
