import React, { useState } from 'react';
import './styles.css';

import { ReactComponent as MenuIcon } from './../../assets/menu.svg';
import { ReactComponent as ArrowDownIcon } from './../../assets/arrow-down.svg';
import { ReactComponent as ProfileIcon } from './../../assets/profile.svg';
import { ReactComponent as CartIcon } from './../../assets/cart.svg';
import MobileMenu from '../MobileMenu';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<MobileMenu open={isOpen} onClose={() => setIsOpen(false)} />
			<header className='header'>
				<a href='/' className='logo'>
					Logo Here
				</a>
				<button className='menu-btn'>
					<MenuIcon onClick={() => setIsOpen(true)} />
				</button>
				<div className='menu'>
					<nav className='menu-links'>
						<a href='/' className='menu-link'>
							Home
						</a>
						<a href='/' className='menu-link'>
							Features
							<ArrowDownIcon />
						</a>
						<a href='/' className='menu-link'>
							Blog
						</a>
						<a href='/' className='menu-link'>
							Shop
						</a>
						<a href='/' className='menu-link'>
							About
						</a>
						<a href='/' className='menu-link current'>
							Contact
						</a>
					</nav>
					<div className='menu-icons'>
						<a href='/' className='profile'>
							<ProfileIcon />
						</a>
						<a href='/' className='basket'>
							<CartIcon />
						</a>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
