import React from 'react'
import img1 from '../assets/PageError.gif'
const PageNotFound = () => {
  return (
    <div>
    <h1 className=''>Page not Found</h1>
    <div className=''>
       <img src={img1} alt="loading" />
       {/* <img src={require('../assets/PageError.gif')} alt="" /> */}
    </div>
    </div>
  )
}

export default PageNotFound