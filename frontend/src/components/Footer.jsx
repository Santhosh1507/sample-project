import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 border-t border-gray-700">
      <div className="container mx-auto text-center flex flex-col md:flex-row items-center justify-between px-32">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        <p className="text-sm">
          <a href="/terms" className="hover:underline">Terms of Service</a> | <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
