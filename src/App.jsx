import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from "./pages/HomePage"
import FormPage from "./pages/FormPage"
function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>


  )
}

export default App