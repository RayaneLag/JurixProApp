import React, { useState } from "react";
import classes from "./Avis.module.css";

const Avis = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Alice",
      rating: 5,
      comment: "Excellent service, very satisfied!",
    },
    {
      id: 2,
      user: "Bob",
      rating: 4,
      comment: "Good service, but could be faster.",
    },
  ]);

  const [faqs, setFaqs] = useState([
    {
      question: "How do I post a review?",
      answer:
        "To post a review, simply fill in your details in the form below and submit.",
    },
    {
      question: "Is there a rating system?",
      answer: "Yes, you can rate our services from 1 to 5 stars.",
    },
    {
      question: "Can I edit my review after submitting?",
      answer:
        "Currently, reviews cannot be edited after submission, but you can contact support for help.",
    },
  ]);

  const [activeFAQIndex, setActiveFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };

  const addReview = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const comment = e.target.comment.value;
    const rating = parseInt(e.target.rating.value);
    const newReview = { id: reviews.length + 1, user, rating, comment };
    setReviews([...reviews, newReview]);
    e.target.reset();
  };

  return (
    <div className={classes.avisContainer}>
      <h2>Avis</h2>
      {reviews.map((review) => (
        <div key={review.id} className={classes.review}>
          <p>
            <strong>{review.user}</strong> ({review.rating} stars)
          </p>
          <p>{review.comment}</p>
        </div>
      ))}
      <form onSubmit={addReview} className={classes.reviewForm}>
        <input type="text" name="user" placeholder="Your name" required />
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          required
        />
        <textarea name="comment" placeholder="Your review" required></textarea>
        <button type="submit">Submit Review</button>
      </form>
      <div className={classes.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={classes.faqItem}>
            <button
              className={classes.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeFAQIndex === index ? "-" : "+"}</span>
            </button>
            <div
              className={
                activeFAQIndex === index
                  ? classes.faqAnswerOpen
                  : classes.faqAnswerClosed
              }
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avis;
