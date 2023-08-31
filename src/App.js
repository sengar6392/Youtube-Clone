
import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'
import Feed from './components/Feed'

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetail/>}/>
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App