//import uuid v4
import { v4 as uuid } from "uuid";

import { useContext } from "react";
import { FeedbackContext } from "../App";

import Card from "./Card";

const FeedbackForm = () => {
  const {
    addFeedback,
    rating,
    setRating,
    review,
    setReview,
    feedbacks,
    setFeedbacks,
    isEditing,
    editID,
    setIsEditing,
  } = useContext(FeedbackContext);

  // Consoling the data
  const submitData = (e) => {
    // prevent the default action
    e.preventDefault();
    let srating, sreview;
    // if values aren't empty
    if (rating != 0 && review !== "") {
      // if editing mode is ON
      if (isEditing === true) {
        setFeedbacks(
          feedbacks.map((feedback) => {
            if (feedback.id === editID) {
              srating = Number(rating);
              sreview = review;
              // console.log({
              //   rating: Number(srating),
              //   review: sreview,
              //   ...feedback,
              // });
              setIsEditing(false);
              return { rating: Number(srating), review: sreview, id: editID };
            }
            return feedback;
          })
        );
      } else {
        srating = Number(rating);
        let newFeedback = { id: uuid(), rating: srating, review };
        // sending new feedback
        addFeedback(newFeedback);
      }

      // clearing out formfields
      setRating(0);
      setReview("");
    }
  };
  return (
    <Card>
      <form className="feedback-form" onSubmit={submitData}>
        <div className="title">How would you rate this product?</div>
        <div className="ratings-container">
          <div
            className={`circle ${rating == 1 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            1
          </div>
          <div
            className={`circle ${rating == 2 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            2
          </div>
          <div
            className={`circle ${rating == 3 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            3
          </div>
          <div
            className={`circle ${rating == 4 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            4
          </div>
          <div
            className={`circle ${rating == 5 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            5
          </div>
          <div
            className={`circle ${rating == 6 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            6
          </div>
          <div
            className={`circle ${rating == 7 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            7
          </div>
          <div
            className={`circle ${rating == 8 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            8
          </div>
          <div
            className={`circle ${rating == 9 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            9
          </div>
          <div
            className={`circle ${rating == 10 ? "selected" : ""}`}
            onClick={(e) => setRating(e.target.innerText)}
          >
            10
          </div>
        </div>
        <div className="form-control">
          <input
            value={review}
            onChange={(e) => setReview(e.target.value)}
            type="text"
            placeholder="Write a review..."
          />
          <button className="send-btn">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
