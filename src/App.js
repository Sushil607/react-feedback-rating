import "./App.css";

// Importing Data
import feedbackData from "./data/Data";

// Importing Hooks
import { useState, createContext } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importing Components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

export const FeedbackContext = createContext();

function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackData);
  let [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  // Adding feedback
  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    const newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(newFeedbacks);
  };

  // Handle Edit
  const handleEdit = (id) => {
    setIsEditing(true);
    setEditID(id);
    // populate data in fields
    let targetFeedback = feedbacks.filter((feedback) => feedback.id === id)[0];
    setReview(targetFeedback.review);
    setRating(targetFeedback.rating);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        setFeedbacks,
        addFeedback,
        deleteFeedback,
        handleEdit,
        rating,
        setRating,
        review,
        setReview,
        isEditing,
        editID,
        setIsEditing,
      }}
    >
      <div className="App">
        <Router>
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    feedbacks={feedbacks}
                    addFeedback={addFeedback}
                    deleteFeedback={deleteFeedback}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </main>
        </Router>
      </div>
    </FeedbackContext.Provider>
  );
}

export default App;
