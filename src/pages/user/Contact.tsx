import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
    <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
    <div className="grid grid-cols-2 gap-8">

      <div>
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-600">Email: contact@yourstore.com</p>
        <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
        <p className="text-gray-600">Address: 1234 Main Street, City, Country</p>
        <p className="text-gray-600">Working Hours: Mon-Fri 9:00 AM - 6:00 PM</p>

        <a className="text-indigo-500 hover:text-indigo-600 transition duration-300" href="https://www.google.com/maps?q=1234+Main+Street,+City,+Country" target="_blank">View on Map</a>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500" type="text" id="name" name="name" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500" type="email" id="email" name="email" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500" id="message" name="message"  required></textarea>
          </div>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300" type="submit">Send Message</button>
        </form>
      </div>

    <h3>liên hệ với chúng tôi qua</h3>
      <div className="flex justify-center mt-8"> 
      <a href="https://www.facebook.com/yourstore" target="_blank" className="mr-4">
        <img className='h-30 w-30' src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook"/>
      </a>
      <a href="https://www.twitter.com/yourstore" target="_blank" className="mr-4">
        <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Twitter"/>
      </a>
      <a href="https://www.instagram.com/yourstore" target="_blank" className="mr-4">
        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram"/>
      </a>
      <a href="https://www.linkedin.com/yourstore" target="_blank" className="mr-4">
        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn"/>
      </a>
      <a href="https://www.youtube.com/yourstore" target="_blank" className="mr-4">
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="YouTube"/>
      </a>
    </div>
    </div>
  </div>
  )
}

export default Contact