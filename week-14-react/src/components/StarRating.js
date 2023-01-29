import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  return (
    <div>
      {[...Array(5)].map(((star, i) => {
        const ratingValue = i + 1;

        return <label>
          <input type="radio"
          name="rating"
          value = {ratingValue}
          onClick={()=> (setRating(ratingValue))} />
          <FaStar className='star' color={ratingValue <= rating ? "#ffc107" : "999999"} size={30} />
          </label>;
      }))}
      
    </div>
  )
}
