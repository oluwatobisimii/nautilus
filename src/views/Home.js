import React from 'react'
import CaseStudies from '../components/CaseStudies'
import Contacts from '../components/Contacts'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import { NewsLetter } from '../components/NewsLetter'
import Partners from '../components/Partners'
import SpecializationNew from '../components/SpecializationNew'

export const Home = () => {
  return (
    <>
    <Hero/>
    <div className="h-16"></div>
    <SpecializationNew/>
    <div className="h-16"></div>
    {/* <Specialization/> */}
    <CaseStudies/>
    <div className="h-16"></div>
    <FAQ/>
    <div className="h-16"></div>
    <NewsLetter/>
    <div className="h-16"></div>
    <Partners/>
    <div className="h-16"></div>
    <Contacts/>
    <div className="h-16"></div>
    
    </>
  )
}
