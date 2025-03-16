import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-45 bg-amber-900 flex justify-center items-center'>
      <div className='flex justify-between w-2/3 text-white'>
        <div>
          <h2 className='text-lg font-light mb-3'>Company</h2>
          <ul className='font-light'>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-light mb-3'>Support</h2>
          <ul className='font-light'>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-light mb-3'>Social Media</h2>
          <ul className='font-light'>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
