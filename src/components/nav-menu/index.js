import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from './styles';

const NavMenu = () => (
	<StyledMenu>
		<li>
			<Link to="/">Todos</Link>
		</li>
		<li>
			<Link to="/favs">Favorites</Link>
		</li>
		<li>
			<Link to="/incomplete">Incompleted</Link>
		</li>
</StyledMenu>
);

export default NavMenu;
