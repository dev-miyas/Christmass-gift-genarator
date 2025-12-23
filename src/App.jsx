import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage"
import FormPage from "./pages/Formpage"
 import ResultsPage from "./pages/ResultsPage";
function App() {
  return (
  
<Router>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/form/:recipient" element={<FormPage />} />
  <Route path="/results" element={<ResultsPage />} />
</Routes>
</Router>



  )
}

export default App