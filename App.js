import HomePage from './pages/HomePage'
import DashBoard from './pages/DashBoard'
import Onboarding from './pages/Onboarding'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
const App= ()=> {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/DashBoard" element={<DashBoard/>}/>
            <Route path="/Onboarding" element={<Onboarding/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App
