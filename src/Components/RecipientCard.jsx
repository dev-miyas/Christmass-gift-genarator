import "./RecipientCard.css"
function RecipientCard() {
  return (
    <>
    <div className="main-wrapper">
<div className="header-txt">
    <h1>Christmas Gift List</h1>
    <p>Plan your Christmas gifts for your loved ones!</p>
</div>
<div className="card-wrapper">
    <div className="cards mother">
        <p>For Mother</p>
    </div>
    
        <div className="cards father">
        <p>For Father</p>
    </div>
        <div className="cards girlfriend">
        <p>For Girlfriend</p>
    </div>
        <div className="cards boyfriend">
        <p>For Boyfriend</p>
    </div>
      
        <div className="cards friend">
        <p>For Friend</p>
    </div>
</div>
<footer>
    <p>© 2025 Christmas Gift List. All rights reserved.</p>
</footer>
    </div>
    </>
  )
}

export default RecipientCard