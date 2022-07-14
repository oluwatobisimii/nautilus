import React from 'react'
import CaseStudies from '../components/CaseStudies'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import { NewsLetter } from '../components/NewsLetter'
import Partners from '../components/Partners'
import Specialization from '../components/Specialization'
import SpecializationNew from '../components/SpecializationNew'

export const Home = () => {
  return (
    <>
    <Hero/>
    <SpecializationNew/>
    {/* <Specialization/> */}
    <CaseStudies/>
    <FAQ/>
    <NewsLetter/>
    <Partners/>
    </>
  )
}
