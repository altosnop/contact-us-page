import React from 'react';
import './styles.css';

import { ReactComponent as MailIcon } from './../../assets/mail.svg';
import { ReactComponent as PhoneIcon } from './../../assets/phone-call.svg';
import { ReactComponent as LocationIcon } from './../../assets/location.svg';
import { ReactComponent as TwitterIcon } from './../../assets/twitter.svg';
import { ReactComponent as InstagramIcon } from './../../assets/instagram.svg';
import { ReactComponent as DiscordIcon } from './../../assets/discord.svg';

import ContactForm from '../ContactForm';

const Main = () => {
	return (
		<main className='main'>
			<h1 className='main-title'>Contact Us</h1>
			<p className='description'>
				Any question or remarks? Just write us a message!
			</p>
			<div className='form-wrapper'>
				<div className='form-info'>
					<div className='title-wrapper'>
						<h2 className='info-title'>Contact Information</h2>
						<p className='form-description'>
							Say something to start a live chat!
						</p>
					</div>
					<address className='form-contacts'>
						<a className='contact' href='tel:+1012 3456 789'>
							<PhoneIcon /> +1012 3456 789
						</a>
						<a className='contact' href='mailto:demo@gmail.com'>
							<MailIcon /> demo@gmail.com
						</a>
						<a className='contact' href='/'>
							<LocationIcon className='location-icon' /> 132 Dartmouth Street
							Boston, Massachusetts 02156 United States
						</a>
					</address>
					<ul className='form-socials'>
						<li className='social'>
							<a href='/' className='twitter'>
								<TwitterIcon className='social-icon' />
							</a>
						</li>
						<li className='social'>
							<a href='/' className='instagram'>
								<InstagramIcon className='social-icon' />
							</a>
						</li>
						<li className='social'>
							<a href='/' className='discord'>
								<DiscordIcon className='social-icon' />
							</a>
						</li>
					</ul>
					<div className='circles'>
						<div className='big'>
							<div className='small'></div>
						</div>
					</div>
				</div>
				<ContactForm />
			</div>
		</main>
	);
};

export default Main;
