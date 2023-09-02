import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const SideBar = () => {
    let selectedCategory="New";
  return (
    <Stack direction={"row"} sx={{overflowY:"auto", height:{sx:"auto",md:"95%"},flexDirection:{md:"column"}}}>
        {
            categories.map(category=>{
                return(
                    <button className='category-btn' key={category.name} style={{
                        background: category.name === selectedCategory && "#FC1503",
                        color: "white",
                      }}>
                        <span style={{marginRight:"15px"}}>{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                )
            })
        }
    </Stack>
  )
}

export default SideBar