import React from 'react';
import TitlePage from "../../components/UI/Title/TitlePage";
import Menu from '../../components/layouts/Menu';
import JSXStyle from 'styled-jsx/style';
import Home from '../index';
const Index = () => {
	return (
			<div>
				<TitlePage title="Acceuil"/>
				<form>
				<Menu/>
				<Home/>
				</form>
			</div>
	);
}

export default Index;
