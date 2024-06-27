import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/lp-react' Component={Home}></Route>
          <Route path='/contact' Component={Contact}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
