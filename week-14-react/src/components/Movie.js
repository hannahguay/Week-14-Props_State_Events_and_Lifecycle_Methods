import React from 'react'
import ReviewForm from './ReviewForm'

export default function Movie() {
  return (
    <div>
        <h4>Carol</h4>
        <img src="https://m.media-amazon.com/images/M/MV5BMTczNTQ4OTEyNV5BMl5BanBnXkFtZTgwNDgyMDI3NjE@._V1_.jpg" width="200"/>
        <h3>2015</h3>
        <p>Synopsis: An aspiring photographer develops an intimate relationship with an older woman in 1950s New York.</p>
        <ReviewForm />
    </div>
  )
}
