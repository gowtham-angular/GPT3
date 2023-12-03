import React from 'react'
import './App.css';

import { Cta, Brand, Navbar } from './components';
import { Header, Footer, Features, Blog, Possibility, WhatGPT3 } from './containers';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header></Header>
      </div>
      <Brand />
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default App