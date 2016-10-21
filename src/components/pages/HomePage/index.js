import React from 'react';
// import style from '../styles/Helloform.scss';
import styled from 'styled-components';
import { Title, Navbar } from 'components';

console.log('nav', Navbar);

const Wrapper = styled.div`
	align-text: center;
`;

const HomePage = (props) => {
	return (
		<Wrapper {...props}>
			<Navbar></Navbar>
		</Wrapper>
	)
}

export default HomePage;