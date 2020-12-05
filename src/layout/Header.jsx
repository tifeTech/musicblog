import React from 'react'
import styled from 'styled-components';
import {Container} from './Grid';
import Banner from '../components/Home/Banner'
import Trendingus from '../components/Home/Trendingus'

function Header () {
    return (
        <Head>
            <Container>
                <Row>
                <a href='#' className = 'Logo'>TIFE MUSIX</a>
                    <Menu>
                        
                        <a className='Link' href ='#'>Trending</a>
                        <a className='Link' href ='#'>About</a>
                        <a className='Link' href ='#'>Login</a>
                        <a className='Link' href ='#'>Contact</a>
                    </Menu>
               
                </Row>
                <Banner/>
            <Trendingus/>
            </Container>
            
        </Head>
    );
}

export default Header

const Row = styled.div`
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;

`
const Head = styled.div `
height: 100px;
background-color: red;

`
const Logo = styled.div `
font-size: 30px;
font-weight: 700;
`

const Menu = styled.div `
a {
    padding: 0 10px;
}
`