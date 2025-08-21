import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchResults from './GptSearchResults'

const GptSearch = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-900 h-screen'>
      <GptSearchBar />
      <GptSearchResults />
    </div>
  )
}

export default GptSearch
