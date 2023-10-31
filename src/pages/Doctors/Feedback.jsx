import { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

export default function Feedback() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All Reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} className="w-full" alt="" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Ali Ahmed
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate("01-14-2022")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Good service, highly recommended
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(4).keys()].map((_, idx) => (
              <AiFillStar key={idx} color="#0067FF" />
            ))}
            {[...Array(1).keys()].map((_, idx) => (
              <AiFillStar key={idx} className="text-slate-300" />
            ))}
          </div>
        </div>
        {!showFeedbackForm && (
          <div className="text-center ">
            <button onClick={() => setShowFeedbackForm(true)} className="btn">
              Give Feedback
            </button>
          </div>
        )}

        {showFeedbackForm && <FeedbackForm />}
      </div>
    </div>
  );
}
