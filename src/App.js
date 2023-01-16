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

  // Adding feedback
  const addFeedback = (feedback) => {
    const newFeedback = JSON.stringify(feedback);
    setFeedbacks([JSON.parse(newFeedback), ...feedbacks]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    const newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(newFeedbacks);
  };

  return (
    <FeedbackContext.Provider
      value={{ feedbacks, addFeedback, deleteFeedback }}
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
