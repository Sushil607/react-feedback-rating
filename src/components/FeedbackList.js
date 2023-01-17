import Feedback from "./Feedback";
import { useContext } from "react";
import { FeedbackContext } from "../App";

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext);
  // total number of feedbacks
  const noOfFeedbacks = feedbacks.length;

  // average rating
  let avgRating =
    feedbacks.reduce((acc, feedback) => {
      return acc + feedback.rating;
    }, 0) / noOfFeedbacks;

  // average rating up to 2 decimal places
  avgRating = avgRating.toFixed(2);

  return (
    <div className="feedback-list">
      <div className="title">
        <div>{noOfFeedbacks} Reviews</div>
        <div>Average Rating : {noOfFeedbacks ? avgRating : 0}</div>
      </div>
      {feedbacks.map((feedback) => {
        return <Feedback key={feedback.id} feedback={feedback} />;
      })}
    </div>
  );
};

export default FeedbackList;
