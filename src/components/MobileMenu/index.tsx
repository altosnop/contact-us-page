import React, { useMemo, useEffect } from 'react';
import './styles.css';

import { ReactComponent as CrossIcon } from './../../assets/cross.svg';
import { ReactComponent as ArrowDownIcon } from './../../assets/arrow-down.svg';
import { ReactComponent as ProfileIcon } from './../../assets/profile.svg';
import { ReactComponent as CartIcon } from './../../assets/cart.svg';
import { createPortal } from 'react-dom';

// Created a portal for the mobile menu. Since the menu should open on top of all other elements of the page

const menuRootElem = document.querySelector('#menu-root');

const MobileMenu = ({ open, onClose }: any) => {
	const element = useMemo(() => document.createElement('div'), []);

	useEffect(() => {
		if (open) {
			menuRootElem?.appendChild(element);

			return () => {
				menuRootElem?.removeChild(element);
			};
		}
	});

	if (open) {
		return createPortal(
			<div className='mobile-menu'>
				<div className='btn-wrapper'>
					<a href='/' className='logo'>
						Logo Here
					</a>
					<button className='menu-btn'>
						<CrossIcon onClick={onClose} />
					</button>
				</div>
				<nav className='links'>
					<a href='/' className='link'>
						Home
					</a>
					<a href='/' className='link'>
						Features
						<ArrowDownIcon />
					</a>
					<a href='/' className='link'>
						Blog
					</a>
					<a href='/' className='link'>
						Shop
					</a>
					<a href='/' className='link'>
						About
					</a>
					<a href='/' className='link current'>
						Contact
					</a>
				</nav>
				<div className='icons'>
					<a href='/' className='profile'>
						<ProfileIcon />
					</a>
					<a href='/' className='basket'>
						<CartIcon />
					</a>
				</div>
			</div>,
			element
		);
	}

	return null;
};

export default MobileMenu;
