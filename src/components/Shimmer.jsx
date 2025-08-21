import React from 'react'
import { ShimmerFeaturedGallery } from 'react-shimmer-effects'
import '../shimmer.css'

const Shimmer = () => {
  return (
    <div className="bg-black mt-4 p-4 rounded-lg">
      <ShimmerFeaturedGallery row={2} col={2} card frameHeight={600} />
    </div>
  )
}

export default Shimmer
