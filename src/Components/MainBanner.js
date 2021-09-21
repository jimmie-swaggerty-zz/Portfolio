import React from 'react'
import logo from '../images/jimmiedesigns2.png'
import arrows from '../images/arrows.png'

const MainBanner = () => {
        return (
                <div className="main-banner">
                        <div style={{ backgroundImage: `url(${logo})` }} className="main-logo" />
                        <br />
                        {/* <img src={arrows} /> */}
                </div>
        )
}

export default MainBanner