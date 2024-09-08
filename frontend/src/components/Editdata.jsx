import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Editdata = ({ product, close }) => {
  const [editedProduct, setEditedProduct] = useState(product)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/update/${editedProduct._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedProduct),
      })
      const data = await response.json()
      if (response.ok) {
        toast.success('Product updated successfully')
      } else {
        toast.error('Failed to update product')
      }
      close() // Close the edit form after saving changes
    } catch (error) {
      console.error('Error updating product:', error)
      toast.error('An error occurred while updating the product')
    }
  }

  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
      <div className='p-6 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-2xl font-semibold mb-4 text-white'>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="name" className='block text-sm font-medium text-gray-200'>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="price" className='block text-sm font-medium text-gray-200'>Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="image" className='block text-sm font-medium text-gray-200'>Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={editedProduct.image}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <button
            type="submit"
            className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={close}
            className='w-full mt-2 bg-gray-300  py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default Editdata
