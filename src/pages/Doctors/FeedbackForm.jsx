import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function FeedbackForm() {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = () => {
    console.log(reviewText);
  };

  return (
    <div className="mt-2">
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-2">
        How would you rate the overall experience?
      </h3>

      <div>
        {[...Array(5).keys()].map((_, idx) => {
          idx += 1;
          return (
            <button
              key={idx}
              type="button"
              className={`${
                idx <= ((rating && hover) || hover)
                  ? "text-yellowColor"
                  : "text-gray-300"
              } mr-1`}
              onClick={() => setRating(idx)}
              onMouseEnter={() => setHover(idx)}
              onMouseLeave={() => setHover(rating)}
              onDoubleClick={() => {
                setRating(0);
                setHover(0);
              }}
            >
              <span>
                <AiFillStar />
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-[20px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or suggestions
        </h3>

        <textarea
          rows="5"
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
          className="border resize-none border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full py-3 px-3 rounded-md"
        ></textarea>
      </div>

      <button className="btn mt-5" onClick={handleSubmitReview}>
        Submit Feedback
      </button>
    </div>
  );
}
