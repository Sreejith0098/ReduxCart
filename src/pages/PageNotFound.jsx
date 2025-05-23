import React from 'react'
import img1 from '../assets/PageError.gif'
const PageNotFound = () => {
  return (
    <div>
    <h1 style={{paddingTop:'100px' ,fontSize:'60px'}}  className='text-center text-2xl font-bold text-yellow-600'>Page <span className='text-blue-500'>not</span> Found</h1>
    <div style={{marginLeft:'300px'}} className=''>
       <img src={img1} alt="loading" />
       {/* <img src={require('../assets/PageError.gif')} alt="" /> */}
    </div>
    </div>
  )
}

export default PageNotFound