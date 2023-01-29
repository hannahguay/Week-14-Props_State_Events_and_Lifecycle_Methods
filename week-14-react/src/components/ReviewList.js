import React from 'react'
import ReviewForm from './ReviewForm'

export default function ReviewList() {
  return (
    <div>
        <h3>I am ReviewList component</h3>
            <ul>
             <li>ReviewList</li>
                <ul>
                    <li>Container instead of a Movie that houses Review components</li>
                </ul>
            </ul>
        <ReviewForm/>
    </div>
  )
}
