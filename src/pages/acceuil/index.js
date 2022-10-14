import React from 'react';
import TitlePage from "../../components/UI/Title/TitlePage";
import Dashbord from '../../components/layouts/Dashbord';
import Home from '../../components/layouts/Home';
const Index = () => {
	return (
			<div>
				<TitlePage title="Acceuil"/>
				<form>
				<Dashbord/>
				<Home/>
				</form>
			</div>
	);
}

export default Index;
