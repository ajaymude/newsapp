import React, { useState } from 'react'
import Main from './components/Main'
import Hero from './components/Hero'
import Category from './components/Category'

const App = () => {
  const [search, setSearch] = useState("everything")
  return (
    <div>
    <Hero setSearch={setSearch} />
    <Category setSearch={setSearch} />
    <Main search={search}/>
    </div>
  )
}

export default App
