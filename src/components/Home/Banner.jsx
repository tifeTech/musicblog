import React from 'react'
import styled from 'styled-components'
import Trendingus from './Trendingus'

function Banner () {


    return (
        <Homebanner>

        
<Content>
    <span>8.4</span>
    <h1 className='track-title'>30 days to Mars</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo veritatis ea necessitatibus corporis ipsa. Eius saepe nulla repellendus sequi, error optio possimus blanditiis, est nam earum mollitia quod, hic ipsam.
    </p>

    <Row>
    <a href='#'>See Lyrics</a>
    <button>Add to List</button>
    </Row>
    

</Content>

        </Homebanner>
    )
}

const Homebanner = styled.div `
margin-top:100px;
width: 100%;
height: calc (100vh -100px);



`


const Content = styled.div `
width:50%;


`

const Row = styled.div `
display: flex;

width:100%;

a {
    border: 2px solid red;
    background-color: red;
    padding: 10px;
    border-radius: 20px;
    margin-right: 10px;
}


button {
    border:2px solid white;
    background-color: white;
    padding: 10px;
    border-radius: 20px;
}



`



export default Banner