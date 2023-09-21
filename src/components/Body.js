import React from 'react'
import Search from './Search'

const Body = () => {
  return (
    <div className='body_page'>
        <div className='container-all'> 
            <div className='search-container-all-group'>
                <div className='search-container'>
                    <h4 className='track-title'>
                        Track your shipment
                    </h4>
                    <Search/>
                </div>
                <div className='truck-img'></div>
            </div>
        </div>
    </div>
  )
}

export default Body