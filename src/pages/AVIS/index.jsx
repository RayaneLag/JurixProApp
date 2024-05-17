import React, { useState } from "react";
import classes from "./Avis.module.css";
import { FaStar } from "react-icons/fa";

const Avis = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Omar",
      rating: 5,
      comment: "Excellent service, very satisfied!",
    },
    {
      id: 2,
      user: "Ahmed",
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
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };

  const addReview = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const comment = e.target.comment.value;
    const newReview = { id: reviews.length + 1, user, rating, comment };
    setReviews([...reviews, newReview]);
    e.target.reset();
    setRating(0);
  };

  return (
    <div className={classes.avisContainer}>
      <h2 className={classes.avisTitle}>Avis</h2>
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

        <textarea name="comment" placeholder="Your review" required></textarea>
        <button type="submit">Submit Review</button>
      </form>
      <div className={classes.starRating}>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className={classes.star}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={30}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
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
