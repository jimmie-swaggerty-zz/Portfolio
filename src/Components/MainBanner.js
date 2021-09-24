import React from 'react'
import logo from '../images/jimmiedesigns3.png'
import background from '../images/mcm-design-01.png'
// import profileimg from '../images/jimmie-transparent.png'
const MainBanner = () => {
        return (
                <div className="main-banner d-flex" style={{ backgroundImage: `url(${background})` }}>
                        {/* <div className="main-logo" style={{ backgroundImage: `url(${profileimg})` }}>
                        </div> */}
                        <div style={{ backgroundImage: `url(${logo})` }} className="main-logo" />
                        <br />
                        {/* <img src={arrows} /> */}
                </div>
        )
}

export default MainBanner