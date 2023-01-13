import Feedback from "./Feedback";

const FeedbackList = () => {
  return (
    <div className="feedback-list">
      <div className="title">
        <div>4 Reviews</div>
        <div>Average Rating : 8.6</div>
      </div>
      <Feedback />
      <Feedback />
      <Feedback />
      <Feedback />
    </div>
  );
};

export default FeedbackList;
