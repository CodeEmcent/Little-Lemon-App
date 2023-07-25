import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Reservation from './Reservation'
import Orderonline from './Orderonline'
import Login from './Login'

function Nav() {
  const siteLogo = <img src='/Logo.svg' alt='logo' className='nav-logo' />
  return (
    <div className='nav-container'>
      <div>
        <Link to='/little-lemon-restuarant' className='nav-link logo'>
          {siteLogo}
        </Link>
        <Routes>
          <Route path='/little-lemon-restaurant' element={<Home />}></Route>
        </Routes>
      </div>
      <nav>
        <ul className='nav-menu'>
          <li>
            <Link to='/little-lemon-restuarant' className='nav-link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about-me' className='nav-link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/menu' className='nav-link'>
              Menu
            </Link>
          </li>
          <li>
            <button className='btn'>
              <Link to='/reservation' className='nav-link'>
                Reservation
              </Link>
            </button>
          </li>
          <li>
            <Link to='/order-online' className='nav-link'>
              Order-online
            </Link>
          </li>
          <li>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path='/little-lemon-restaurant' element={<Home />}></Route>
          <Route path='/about-me' element={<About />}></Route>
          <Route path='/little-lemon-restaurant' element={<Menu />}></Route>
          <Route path='/reservation' element={<Reservation />}></Route>
          <Route path='/order-online' element={<Orderonline />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </nav>
    </div>
  )
}

export default Nav
