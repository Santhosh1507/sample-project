import React, { useState, useEffect } from 'react'
import Editdata from './Editdata'
import { toast } from 'react-toastify'
import Footer from './Footer'

const ViewProduct = () => {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
  
    const getProduct = async () => {
      try {
        const res = await fetch('/api/get', {
          method: 'GET',
        })
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
        toast.error('Failed to fetch products')
      }
    }
  
    const handleDelete = async (_id) => {
      try {
        const res = await fetch(`/api/delete/${_id}`, {
          method: 'DELETE',
        })
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        toast.success('Product deleted successfully')
        getProduct() // Refresh the product list after deletion
      } catch (error) {
        console.error('Error deleting product:', error)
        toast.error('Failed to delete product')
      }
    }
  
    const handleEdit = (product) => {
      setSelectedProduct(product)
    }
  
    const handleCloseEdit = () => {
      setSelectedProduct(null)
    }
  
    useEffect(() => {
      getProduct()
    }) // Dependency array fixed to run only once on mount
  
    return (
      <div className=' mt-10 '>
        <div className='flex flex-col items-center pt-14 w-11/12 md:w-4/5 lg:w-3/4 mx-auto px-4 '>
          {products.length === 0 ? (
            <p className='text-xl text-gray-300'>No Products Found</p>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-20'>
              {products.map((item) => (
                <div key={item._id} className='border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center'>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className='w-full h-40 object-cover mb-4 rounded-t-lg transition-all duration-300 hover:scale-105' 
                  />
                  <div className='flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row gap-4 items-center'>
                      <h1 className='text-xl font-semibold'>{item.name}</h1>
                      <h2 className='text-lg text-gray-600'>${item.price}</h2>
                    </div>
                    <div className='flex space-x-4'>
                      <button 
                        className='text-red-500 hover:underline' 
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                      <button 
                        className='text-blue-500 hover:underline'
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedProduct && 
          <Editdata 
            product={selectedProduct} 
            close={() => handleCloseEdit()} 
          />
        }
        <Footer />
      </div>
    )
  }
  
  export default ViewProduct

  