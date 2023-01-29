import React from 'react'
import StarRating from './StarRating'

export default function ReviewForm() {
  return (
    <div>

        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1"><h2>Your Name</h2></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1"><h2>Your Review</h2></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
        <h2>Your Rating:</h2>
        <StarRating />
    </div>
  )
}
