
import React from 'react'
import Content from '../../components/Content'
import Favorites from '../../components/Favorites'
import Navbar from '../../components/Navbar'
import Searchbox from '../../components/Searchbox'

function MainPage() {
  return (
    <div>
        <Navbar/>
        <Favorites/>
        <Searchbox/>
        <Content/>
    </div>
  )
}

export default MainPage