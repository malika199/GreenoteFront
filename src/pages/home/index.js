import React from "react";
import Home from "../../components/layouts/Home";
import {Dashboard} from '@material-ui/icons';
import Editor from "../../components/Editor";

const Index = () => {
	return (
			<div>
				<form>
				<Editor />
					<Dashboard/>
					
				</form>
			</div>
	);
};

export default Index;
