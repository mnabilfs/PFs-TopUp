import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-950">
      <div className="flex justify-center items-center gap-5">
        <h1 className="text-2xl font-medium text-white">404</h1>
        <div className="w-[.5px] bg-white self-stretch"></div>
        <h1 className="text-md font-light text-white">This page could not be found.</h1>
      </div>
    </div>
  )
}

export default NotFound