import React from 'react';
import Display from './components/activities';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import FilteredActivites from './components/filteredActivites';

const settings = {
    colors: {
        grey: '#3F4045',
        blue: '#5BC0BE',
        darkBlue: '#0B132B',
        white: '#F4F4F8',
        yellow: '#FED766'
    },
    font: `'Montserrat', sans-serif`
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  html, body {
    font-family: ${settings.font};
	color: ${settings.colors.grey};
  }
  strong{
	font-weight: 700;
	}
`
const Nav = styled.nav`
	background-color: ${settings.colors.grey};
`
const Container = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 20px 0;
`
const Ul = styled.ul`
	display: flex;
`
const Li = styled.li`
	padding: 0 20px;
	&:first-child{
		padding-left: 0;
	}
	&:last-child{
		padding-right: 0;
	}
	&:not(:last-child){
		border-right: 1px dotted #F4F4F8;
	}
	a{
		color: ${settings.colors.white};
		transition: all .3s;
		font-weight: 700;

		&:hover{
			color: ${settings.colors.blue};
		}
	}
`
const App = () => (
	<Router>
		<>
			<GlobalStyle />
			<Nav>
				<Container>
					<Ul>
						<Li>
							<Link to="/">Random activity</Link>
						</Li>
						<Li>
							<Link to="/filter/">Filtered activity</Link>
						</Li>
					</Ul>
				</Container>
			</Nav>
			<main>
				<Container>
					<Route path="/" exact render={() => <Display />} />
					<Route path="/filter/" component={FilteredActivites} />
				</Container>
			</main>
		</>
	</Router>
);

export default App;