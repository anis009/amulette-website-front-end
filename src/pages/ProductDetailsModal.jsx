import React from 'react'
import { BsXCircle } from 'react-icons/bs'
import ProductDetailsPage from './ProductDetailsPage'

// eslint-disable-next-line react/prop-types
const ProductDetailsModal = ({ setShowModal }) => {
  return (
    <div className="fixed top-[74px] right-0 bottom-0 left-0 md:inset-0 md:bg-[rgba(0,0,0,0.3)] z-[140] md:z-[99999] flex  md:items-center justify-center  overflow-y-auto outline-none focus:outline-none">
      <div className="product-details relative md:mx-2 lg:mx-[5%]  md:h-[760px] overflow-y-auto md:overflow-y-hidden bg-white z-[9999] md:my-5 md:rounded-2xl">
        <ProductDetailsPage setShowModal={setShowModal} />
      </div>
    </div>
  )
}

export default ProductDetailsModal


{/* <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-[99999] flex items-center justify-center  overflow-y-auto outline-none focus:outline-none">
      <div className="product-details relative md:mx-2 lg:mx-[5%]  h-[760px] overflow-y-auto md:overflow-y-hidden bg-white z-[9999] my-5 md:rounded-2xl">
        <ProductDetailsPage />
      </div>
    </div> */}