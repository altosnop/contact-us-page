import React from 'react';
import './styles.css';

interface RadioOption {
	label: string;
	value: string;
}

type RadioGroupProps = {
	options: RadioOption[];
	value: string;
	onChange: (value: string) => void;
};

const RadioGroup = ({ options, value, onChange }: RadioGroupProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<div className='radios'>
			{options.map(option => (
				<label key={option.value} className='radio-label'>
					<input
						type='radio'
						className='radio-input'
						value={option.value}
						checked={value === option.value}
						onChange={handleChange}
					/>
					<span className='checkmark'></span>
					{option.label}
				</label>
			))}
		</div>
	);
};

export default RadioGroup;
