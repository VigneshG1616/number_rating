import { useState, useCallback } from "react";
import "./number_rating_component_style.css";

const NumberRating = ({ maxRating = 10 }) => {

  const [currentRating, setCurrentRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const currentRatingHandler = useCallback((getRatingValue) => {
    getRatingValue == currentRating ? setCurrentRating(0) : setCurrentRating(getRatingValue);
  }, [currentRating]);
  return (

    <div className="number-rating-container">{
      [...Array(maxRating)].map((_, idx) => {
        const ratingValue = idx + 1;
        return <h2
          className={`number-rating ${ratingValue <= (hoverValue || currentRating) ? 'active' : ''}`}
          key={idx}
          onClick={() => currentRatingHandler(ratingValue)}
          onMouseEnter={() => setHoverValue(ratingValue)}
          onMouseLeave={() => setHoverValue(0)}>
          {ratingValue}
        </h2>
      }
      )
    }
    </div>
  );
}

export default NumberRating;