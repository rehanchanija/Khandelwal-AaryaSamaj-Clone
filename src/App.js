import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Sponsor from './pages/Sponsor';
import Commite from './pages/Commite';
import Navbar from './components/Navbar';
import Sponsorpage from './components/sponsorpage';
import Commitepage from './components/Commitepage';
import Footer from './components/footer';
import Termspage from './components/termspage';
import Hotelpage from './pages/hotelpage';
import Visitorspage from './pages/visitorspage';
import Register from './pages/Register';

  
const App = () => {
  return (
    <div className="App">
	<Navbar/>
    <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/sponsor' element={<Sponsorpage/>}></Route>
                 <Route exact path='/Comitee' element={< Commitepage />}></Route>
                 <Route exact path='/terms' element={<Termspage/>}></Route>
                 <Route exact path='/hotel' element={<Hotelpage/>}></Route>
                 <Route exact path='/visitor' element={<Visitorspage/>}></Route>
                 <Route exact path='/Register' element={<Register/>}></Route>


          </Routes>
          <Footer/>
</div>


  )
}
 
export default App