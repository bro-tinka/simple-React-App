import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import About from "./pages/About"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import MyAccount from "./pages/MyAccount"


function App(){

    return (
        <div>
            <Header/>

            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/about' element = {<About/>} />
                <Route path = '/careers' element = {<Career/>} />
                <Route path = '/contact' element = {<Contact/>} />
                <Route path = '/me' element = {<MyAccount />} />
            </Routes>

            <Footer/>
        </div>
    )   
}


export default App
