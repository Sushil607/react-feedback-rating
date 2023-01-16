import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

const Home = ({
  feedbacks,
  addFeedback,
  deleteFeedback,
  handleEdit,
  isEditing,
  editId,
}) => {
  return (
    <div className="home">
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList
        feedbacks={feedbacks}
        deleteFeedback={deleteFeedback}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Home;
