import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Form.css'; // Adjust path if your CSS file has different name/location

function Form() {
  const { recipient } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: '',
    interests: [],
    category: '',
    style: '',
    priceRange: '',
  });

  const interestsList = ['Tech', 'Fashion', 'Books', 'Beauty', 'Home', 'Sports', 'Music', 'Food'];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later you can pass formData to ResultsPage
    navigate('/results');
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Gift Ideas for {recipient} 🎁</h1>
        <p>Tell us more to get personalized local suggestions from Jiji Ethiopia</p>

        <form onSubmit={handleSubmit}>

          {/* Age */}
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g., 35"
              min="1"
            />
          </div>

          {/* Interests */}
          <div className="form-group">
            <label>Interests (select all that apply)</label>
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
            <label>Gift Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select category</option>
              <option>Electronics</option>
              <option>Fashion & Beauty</option>
              <option>Home & Kitchen</option>
              <option>Jewelry</option>
              <option>Books</option>
              <option>Sports</option>
              <option>Other</option>
            </select>
          </div>

          {/* Style */}
          <div className="form-group">
            <label>Gift Style</label>
            <select name="style" value={formData.style} onChange={handleChange}>
              <option value="">Select style</option>
              <option>Practical</option>
              <option>Fun</option>
              <option>Luxury</option>
              <option>Sentimental</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="form-group">
            <label>Price Range (ETB)</label>
            <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
              <option value="">Any price</option>
              <option>Under 500</option>
              <option>500 - 2000</option>
              <option>2000 - 5000</option>
              <option>Over 5000</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Generate Gift Ideas 🎄
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;