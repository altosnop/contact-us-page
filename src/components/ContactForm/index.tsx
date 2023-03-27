import React, { useState } from 'react';
import './styles.css';

import Input from '../Input';
import RadioGroup from '../RadioGroup';

import LetterImg from './../../assets/letter-send.png';

// Created a variable for easy use of form state
const ContactForm = () => {
	const [inputData, setInputData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
		radioValue: 'r1',
	});

	const handleInputChange = (name: string, value: string) => {
		setInputData({ ...inputData, [name]: value });
	};

	const handleRadioChange = (value: string) => {
		setInputData({ ...inputData, radioValue: value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(inputData);

		setInputData({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			message: '',
			radioValue: 'r1',
		});
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<div className='user-inputs'>
				{/* Created a separate component for input to make it easier to keep track of its state and avoid a lot of the same code */}
				<Input
					label='First Name'
					placeholder='John'
					type='text'
					inputName='firstName'
					value={inputData.firstName}
					handleChange={handleInputChange}
				/>
				<Input
					label='Last Name'
					placeholder='Doe'
					type='text'
					inputName='lastName'
					value={inputData.lastName}
					handleChange={handleInputChange}
				/>
				<Input
					label='Email'
					type='email'
					inputName='email'
					value={inputData.email}
					handleChange={handleInputChange}
				/>
				<Input
					label='Phone Number'
					type='phone'
					inputName='phone'
					value={inputData.phone}
					handleChange={handleInputChange}
				/>
			</div>
			<h4 className='radio-title'>Select Subject?</h4>
			<RadioGroup
				options={[
					{ label: 'General Inquiry', value: 'r1' },
					{ label: 'General Inquiry', value: 'r2' },
					{ label: 'General Inquiry', value: 'r3' },
					{ label: 'General Inquiry', value: 'r4' },
				]}
				value={inputData.radioValue}
				onChange={handleRadioChange}
			/>
			<Input
				label='Message'
				type='text'
				inputName='message'
				value={inputData.message}
				className='message'
				handleChange={handleInputChange}
			/>
			<button type='submit' className='form-submit'>
				Send Message
				<img className='letter-img' src={LetterImg} alt='Letter' />
			</button>
		</form>
	);
};

export default ContactForm;
