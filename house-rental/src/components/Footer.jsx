import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-10 mt-5'>
       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Brand / Logo */}
    <div>
      <h1 className="text-2xl font-bold">YourBrand</h1>
      <p className="mt-2 text-gray-400 text-sm">Empowering web experiences with love & code.</p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    {/* Social / Contact */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
      <ul className="flex space-x-4 text-gray-400 text-xl">
        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
      </ul>
      <p className="mt-4 text-sm text-gray-500">contact@yourbrand.com</p>
    </div>

  </div>

  {/* Bottom */}
  <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
    © 2025 YourBrand. All rights reserved.
  </div>
    </div>
  )
}

export default Footer
