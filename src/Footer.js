import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {

  render () {
    return (
    <div className= 'footercontainer'>
      <div className='footerleft'>allthingsdarren.com</div>
      <div className='footerright'>© 2016 The Iron Yard. All rights reserved. <div className='tiylogo'><img src='/src/ironyardlogo.png' alt='The Iron Yard Logo'/>
      </div>
      </div>
    </div>
        )
  }
}
export default Footer
