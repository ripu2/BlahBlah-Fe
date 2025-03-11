import React from 'react'
import { HomeContainer } from './styles'
import Layout from './components/Layout'
import Channels from './components/Channels'

function index() {
    console.log("🏠 Home Component Rendered");
  return (
    <HomeContainer>
          <Layout
            leftComponent={<Channels />}
            rightComponent={<h1>content</h1>}
          /> 
    </HomeContainer>
  )
}

export default index