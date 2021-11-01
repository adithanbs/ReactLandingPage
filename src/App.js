import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Analytics from './components/Analytics/Analytics'
import Features from './components/Features/Features'
import Review from './components/Review/Review'
import Planprice from './components/PlanPrice/Planprice'


// import { Navbar, Footer } from './components';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Analytics/>
      <Features/>
      <Review/>
      <Planprice/>
      <Footer/>
    </>
  )
}

export default App
