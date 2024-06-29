import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownlaod = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>Download Our App</p>
      <div className="app-downlaod-plaform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownlaod
