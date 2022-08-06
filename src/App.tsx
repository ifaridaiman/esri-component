import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { NotFoundPage } from './pages/error/NotFoundPage';
import { Sprint1 } from './pages/Sprint1';


const App: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Sprint1/>}></Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
