import React, { useState } from 'react';
import './styles.css';

// I use ReactComponent to quickly and easily import SVG icons as a separate component

import { ReactComponent as MailIcon } from './../../assets/mail.svg';
import { ReactComponent as PhoneIcon } from './../../assets/phone-call.svg';
import { ReactComponent as LocationIcon } from './../../assets/location.svg';

const Footer = () => {
	const [email, setEmail] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(email);

		setEmail('');
	};

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='logo-wrapper'>
					<a href='/' className='footer-logo'>
						Logo Here
					</a>
				</div>
				<div className='line'></div>
				<div className='footer-info'>
					<div className='wrapper'>
						<div className='reach-us'>
							<h5 className='block-title'>Reach us</h5>
							<address className='footer-contacts'>
								<a className='footer-contact' href='tel:+1012 3456 789'>
									<PhoneIcon /> +1012 3456 789
								</a>
								<a className='footer-contact' href='mailto:demo@gmail.com'>
									<MailIcon /> demo@gmail.com
								</a>
								<a className='footer-contact loc' href='/'>
									<LocationIcon /> 132 Dartmouth Street Boston, Massachusetts
									02156 United States
								</a>
							</address>
						</div>
						<div className='company'>
							<h5 className='block-title'>Company</h5>
							<ul className='list'>
								<li className='item'>About</li>
								<li className='item'>Contact</li>
								<li className='item'>Blogs</li>
							</ul>
						</div>
					</div>
					<div className='wrapper last'>
						<div className='legal'>
							<h5 className='block-title'>Legal</h5>
							<ul className='list'>
								<li className='item'>Privacy Policy</li>
								<li className='item'>Terms & Services</li>
								<li className='item'>Terms of Use</li>
								<li className='item'>Refund Policy</li>
							</ul>
						</div>
						<div className='quick-links'>
							<h5 className='block-title'>Quick Links</h5>
							<ul className='list'>
								<li className='item'>Techlabz Keybox</li>
								<li className='item'>Downloads</li>
								<li className='item'>Forum</li>
							</ul>
						</div>
					</div>
					<div className='footer-form-wrapper'>
						<h5 className='block-title'>Join Our Newsletter</h5>
						<form className='footer-form' onSubmit={handleSubmit}>
							<input
								type='email'
								name='footerEmail'
								placeholder='Your email address'
								required
								value={email}
								onChange={handleInputChange}
							/>
							<button type='submit'>Subscribe</button>
						</form>
						<p className='footer-form-description'>
							* Will send you weekly updates for your better tool management.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
