import React from 'react';


function Footer() {
    return (
      <footer className='footer'>
        <div className='footer__container'>
            <text className='footer__container--ip'>IP: 192.168.10.19</text>
            <img src='/images/logo-small.svg' className='footer__container--img'/>
        </div>
      </footer>
      
    );
  }
  

export default Footer;