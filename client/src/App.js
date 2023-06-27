import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './component/pages/Header';
import ExploreDesign from './component/pages/ExploreDesign';
import Homedesign from './component/pages/Homedesign';
import FindProfessionals from './component/pages/FindProfessionals';
import Nowliveat from './component/pages/Nowliveat';
import UperFooter from './component/pages/UperFooter';
import Footer from './component/pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ExploreDesign/>
      <Homedesign/>
      <FindProfessionals/>
      <Nowliveat/>
      <UperFooter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
