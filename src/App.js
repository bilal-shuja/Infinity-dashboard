import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailComp from './Components/EmailComp.jsx';
import SideBar from './Components/SideBar.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <div>
  <Router>
    <SideBar/>
    <Routes>
          <Route path={`/emailComp`} element={EmailComp} />
         


        </Routes>
    <Footer/>
    </Router>

    </div>
  );
}

export default App;
