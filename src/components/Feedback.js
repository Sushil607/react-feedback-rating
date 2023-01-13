import Card from "./Card";

// Importing icons
import { FaEdit, FaTimes } from "react-icons/fa";

const Feedback = () => {
  return (
    <div>
      <Card>
        <div className="feedback">
          <div className="rating">8.2</div>
          <div className="btns-container">
            <FaEdit className="fa" />
            <FaTimes className="fa" />
          </div>
          <div className="review">
            This is a sample review. This products is good.
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Feedback;
