import React from 'react'
import { BsXCircle } from 'react-icons/bs'
import ProductDetailsPage from './ProductDetailsPage'

const ProductDetailsModal = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-[99999] flex items-center justify-center  overflow-y-auto outline-none focus:outline-none">
      <div className="relative mx-2 lg:mx-[5%]  h-[760px] overflow-y-auto md:overflow-y-hidden bg-white z-[9999] my-6 rounded-2xl">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none  ">
          <div className="absolute top-5 right-5 ">
            <BsXCircle
              onClick={() => setShowModal(false)}
              className="w-6 h-6 text-red-600 cursor-pointer"
            />
          </div>
        </div>
        <ProductDetailsPage />
      </div>
    </div>
  )
}

export default ProductDetailsModal