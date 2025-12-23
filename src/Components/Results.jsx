import { useLocation, useNavigate } from "react-router-dom";
import "./Results.css";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { recommendations, recipient } = location.state || { recommendations: [], recipient: "" };

  return (
    <div className="results-page">
      <div className="snowflakes">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="snowflake">❄</div>
        ))}
      </div>

      <header className="results-header">
        <h1>🎄 Gift Ideas for {recipient} 🎁</h1>
        <p>Here are some suggestions for your Christmas shopping!</p>
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      </header>

      <div className="cards-wrapper">
        {recommendations.map((gift, index) => (
          <div key={index} className="gift-card">
         
            <div className="gift-info">
              <h2>{gift.name}</h2>
              <p>Category: {gift.category}</p>
              <p>Price: ETB {gift.price}</p>
              <p>Style: {gift.style}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="results-footer">
        <p>© 2025 Christmas Gift List. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Results;
