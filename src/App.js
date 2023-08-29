
import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import NavBar from './NavBar'
import Feed from './Feed'
import VideoDetail from './VideoDetail'
import ChannelDetail from './ChannelDetail'
import SearchFeed from './SearchFeed'

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