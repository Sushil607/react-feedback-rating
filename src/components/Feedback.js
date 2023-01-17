import Card from "./Card";
import { useContext } from "react";
import { FeedbackContext } from "../App";

// Importing icons
import { FaEdit, FaTimes } from "react-icons/fa";

const Feedback = ({ feedback }) => {
  const { deleteFeedback, handleEdit } = useContext(FeedbackContext);
  return (
    <div>
      <Card>
        <div className="feedback">
          <div className="rating">{feedback.rating}</div>
          <div className="btns-container">
            <FaEdit className="fa" onClick={() => handleEdit(feedback.id)} />
            <FaTimes
              className="fa"
              onClick={() => deleteFeedback(feedback.id)}
            />
          </div>
          <div className="review">{feedback.review}</div>
        </div>
      </Card>
    </div>
  );
};

export default Feedback;
