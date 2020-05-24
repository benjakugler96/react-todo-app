import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toogleModal } from '../../redux/modal/actions';
import { StyledMenu } from './styles';

const NavMenu = () => {
	const dispatch = useDispatch();

	return (
		<StyledMenu>
			<li>
				<Link to="/">Todos</Link>
			</li>
			<li>
				<Link to="/favs">Favorites</Link>
			</li>
			<li>
				<Link to="/incomplete">Incomplete</Link>
			</li>
			<li onClick={() => dispatch(toogleModal())}>
				<a>Create</a>
			</li>
		</StyledMenu>
	);
};

export default NavMenu;
