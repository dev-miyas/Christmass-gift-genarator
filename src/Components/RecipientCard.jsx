import { useNavigate } from "react-router-dom";
import "./RecipientCard.css";

function RecipientCard() {
  const navigate = useNavigate();

  const handleClick = (recipient) => {
   
    navigate(`/form/${recipient}`);
  };

  return (
    <div className="main-wrapper">
        {[...Array(30)].map((_, i) => (
  <div key={i} className="snowflake">❄ Marry christmass</div>
))}
      <div className="header-txt">
        <h1>Christmas Gift List</h1>
        <p>Plan your Christmas gifts for your loved ones!</p>
      </div>
      <div className="card-wrapper">
        <div className="cards mother" onClick={() => handleClick("Mother")}>
          <p>For Mother</p>
        </div>
        <div className="cards father" onClick={() => handleClick("Father")}>
          <p>For Father</p>
        </div>
        <div className="cards girlfriend" onClick={() => handleClick("Girlfriend")}>
          <p>For Girlfriend</p>
        </div>
        <div className="cards boyfriend" onClick={() => handleClick("Boyfriend")}>
          <p>For Boyfriend</p>
        </div>
        <div className="cards friend" onClick={() => handleClick("Friend")}>
          <p>For Friend</p>
        </div>
      </div>
      <footer>
        <p>© 2025 Christmas Gift List. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RecipientCard;
