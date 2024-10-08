import React from 'react'
import Header from '../components/Header'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policies from '../components/Policies'
import Subscription from '../components/Subscription'

function Home() {
  return (
    <div>
    <Header/>
    <LatestCollection/>
    <BestSeller/>
    <Policies/>
    <Subscription/>
    </div>
  )
}

export default Home
