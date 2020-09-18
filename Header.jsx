import React from 'react';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

function Header() {
	return (
		<div className='header'>
			<div className='header_left'>
				<h1>
					TurnOn
					<span>Sounds</span>
				</h1>
			</div>
			<div className='header_input'>
				<SearchIcon />
				<input type='search' />
			</div>
			<div className='header_icons' />
			<NotificationIcon />
			<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
		</div>
	);
}

export default Header;
