import React from 'react'

const Layout = ({children}) => {
  return (
    <section className="container mx-auto p-4 md:px-10 lg:px-20 lg:py-36 font-cabinet">{children}</section>
  )
}

export default Layout