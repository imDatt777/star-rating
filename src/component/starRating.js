import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./style.scss";

const StarRating = () => {
    const maxRating = 5;
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <div className='star-container'>
            {[...Array(maxRating)].map((star, idx) => {
                const currentRating = idx + 1;

                return (
                    <label key={idx}>
                        <input
                            type='radio'
                            name='rating'
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className='star'
                            color={
                                currentRating <= (hover || rating)
                                    ? "#F7B603"
                                    : "#C2C2C2"
                            }
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                            size={50}
                        />
                    </label>
                );
            })}

            <p>Your rating is {rating}</p>
        </div>
    );
};

export default StarRating;
