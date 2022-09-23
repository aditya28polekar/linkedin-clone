import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='Header'>
        <h1>Header </h1> 
         
        <div className='header_left'>
            
            <div className='header_search'>                
                <input type="text"></input> 
                <SearchIcon/>           
            </div>            
        </div>
        <div className='header_right'>
            
        </div>

    </div>
  )
}

export default Header
