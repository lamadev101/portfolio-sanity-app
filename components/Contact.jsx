import React from 'react'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1>I Am Available For Freelancer Too !</h1>
      <div className='phoneMail'>
        <span className='phone'>
          <BsFillTelephoneOutboundFill/> +977 9880081993
        </span>
        <span className='mail'>
          <TfiEmail/> ghisingkarma740@gmail.com
        </span>
      </div>
    </div>
  )
}

export default Contact