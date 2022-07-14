import React from 'react'
import {MdChevronRight} from "react-icons/md"
const Button = ({children, styles}) => {
  return (
    <div className={`inline-flex items-center justify-center px-7 py-4 bg-blue-500 rounded-md ${styles}`}>
          <div className="text-white font-medium flex space-x-4 items-center ">{children}
          <MdChevronRight className="text-white text-xl"/>
          </div>
        </div>
  )
}

export default Button