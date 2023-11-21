import './App.css';
import Listbook from './components/Listbook';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Viewbook from './components/Viewbook';

function App() {
  return (
    <div style={{padding:'2rem'}}>
      <Router>
      <Routes>
        <Route path="/" element={<Listbook />} />
        <Route path="/books/:id" element={<Viewbook />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
