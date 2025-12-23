import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gifts } from "../data/giftData";
import "./Form.css";

function Form() {
  const { recipient } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",             // new age input
    interests: [],
    category: "",
    priceRange: "",
  });

  const interestsList = ["Tech", "Fashion", "Books", "Beauty", "Home", "Sports", "Music", "Food"];

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const checkPriceRange = (range, price) => {
    switch (range) {
      case "Under 500":
        return price < 500;
      case "500 - 2000":
        return price >= 500 && price <= 2000;
      case "2000 - 5000":
        return price >= 2000 && price <= 5000;
      case "Over 5000":
        return price > 5000;
      default:
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let recommendations = gifts
      .map((gift) => {
        let score = 0;

        // recipient match
        if (gift.recipient.includes(recipient)) score += 2;

        // age match (soft filter)
        if (formData.age && formData.age >= gift.minAge && formData.age <= gift.maxAge) score += 1;

        // optional criteria
        if (formData.category && gift.category === formData.category) score += 1;
        if (formData.priceRange && checkPriceRange(formData.priceRange, gift.price)) score += 1;
        if (formData.interests.length > 0 && gift.interests.some((i) => formData.interests.includes(i))) score += 1;

        return { gift, score };
      })
      .filter((item) => item.score > 1)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.gift);

    // fallback if no results
    if (recommendations.length === 0) {
      recommendations = gifts.filter((gift) => gift.recipient.includes(recipient)).slice(0, 5);
    }

    navigate("/results", { state: { recommendations, recipient } });
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Gift Ideas for {recipient} 🎁</h1>
        <p>Fill some preferences to get personalized gift suggestions!</p>

        <form onSubmit={handleSubmit}>
          {/* Age */}
          <div className="form-group">
            <label>Age (optional)</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g., 25"
              min="1"
            />
          </div>

          {/* Interests */}
          <div className="form-group">
            <label>Interests (optional, select all that apply)</label>
            <div className="checkbox-group">
              {interestsList.map((interest) => (
                <label key={interest} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Gift Category (optional)</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Any category</option>
              <option>Electronics</option>
              <option>Fashion & Beauty</option>
              <option>Home & Kitchen</option>
              <option>Books</option>
              <option>Sports</option>
              <option>Other</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="form-group">
            <label>Price Range (optional, ETB)</label>
            <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
              <option value="">Any price</option>
              <option>Under 500</option>
              <option>500 - 2000</option>
              <option>2000 - 5000</option>
              <option>Over 5000</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Generate Gift Ideas 🎄
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
