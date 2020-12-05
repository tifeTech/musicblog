import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'

function Trendingus () {
    Axios.get('https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=fa8c540e4c6f5d280e2cd88dfbba1e66').then((response)=>{
        console.log(response);
    }) 

    return (
        <Trend> Trending Music in the US Get trending musics now 

        </Trend>
    )
  
   
  }
   


export default Trendingus

const Trend = styled.div `
margin-top: 100px;
`