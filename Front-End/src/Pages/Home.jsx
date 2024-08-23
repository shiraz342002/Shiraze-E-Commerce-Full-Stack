import React from 'react'
import Header from '../components/Header'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

function Home() {
  return (
    <div>
    <Header/>
    <LatestCollection/>
    <BestSeller/>
    </div>
  )
}

export default Home
