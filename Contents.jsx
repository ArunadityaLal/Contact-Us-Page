import React from 'react'
import "./Contents.css"
import Logo from './images/Logo.svg';

const Contents = () => {
    return (
        <div className='content'>
            <div className='text'>
                <h1>CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
                    WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT ,
                    YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,
                    OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className="form">
                <div className='fill'>
                    <div className='btn'>
                        <button className='btn-1'>VIA SUPPORT CHAT</button>
                        <button className='btn-2'>VIA CALL</button>

                    </div>
                    <div className="btn-3">
                        <button>VIA EMAIL FORM</button>
                    </div>
                    <div className="container">
                        <label htmlFor="textbox">Name:</label>
                        <input type="text" id="textbox" className="name" />
                        <label htmlFor="textbox">E-Mail:</label>
                        <input type="text" id="textbox" className="email" />
                        <label htmlFor="textbox">TEXT:</label>
                        <input type="text" id="textbox" className="textBox" />
                    </div>
                    <div className='btn-4'>
                        <button>SUBMIT</button>
                    </div>


                </div>
                <div className="image">
                    <img src={Logo} alt="24x7-logo" />
                </div>
            </div>

        </div>
    )
}

export default Contents
