import Card from "./Card";

const FeedbackForm = () => {
  return (
    <Card>
      <form className="feedback-form">
        <div className="title">How would you rate this product?</div>
        <div className="ratings-container">
          <div className="circle">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
          <div className="circle">5</div>
          <div className="circle">6</div>
          <div className="circle">7</div>
          <div className="circle">8</div>
          <div className="circle">9</div>
          <div className="circle">10</div>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Write a review..." />
          <button className="send-btn">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
