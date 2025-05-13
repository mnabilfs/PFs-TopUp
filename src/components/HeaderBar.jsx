import React from 'react'

const HeaderBar = ({step, label, width}) => {
  return (
    <div className={`relative h-10 md:h-12 bg-purple-900 rounded-md flex items-center pl-17 md:pl-20 shadow-2xl ${width}`}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 md:w-14 h-10 md:h-12.5 bg-gray-100 rounded-l-sm clip-trapezoid shadow flex items-center justify-center">
        <span className="text-black font-bold text-md md:text-lg z-10">{step}</span>
      </div>

      <h1 className="text-white font-semibold text-sm md:text-md tracking-wide">{label}</h1>
    </div>
  )
}

export default HeaderBar