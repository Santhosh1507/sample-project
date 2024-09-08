import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Adddata = () => {
  const [name, setName] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const addData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/create', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(name),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Product added successfully')
        // Optionally clear the form after submission
        setName({
          name: "",
          price: "",
          image: "",
        });
      } else {
        toast.error('Failed to add product')
      }
    } catch (error) {
      console.error('Error adding data:', error);
      toast.error('An error occurred while adding the product')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen p-6 '>
      <div className='w-full max-w-md p-8 rounded-lg shadow-lg shadow-black '>
        <h1 className='text-2xl font-semibold mb-6 text-center'>Add New Product</h1>
        <form onSubmit={addData}>
          <div className='mb-4'>
            <label htmlFor="name" className='block text-sm font-medium text-gray-200'>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name.name}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="price" className='block text-sm font-medium text-gray-200'>Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={name.price}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor="image" className='block text-sm font-medium text-gray-200'>Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={name.image}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <button
            type="submit"
            className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default Adddata
