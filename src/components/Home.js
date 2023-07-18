import { Routes, Route, Link } from 'react-router-dom'
import Reservation from './Reservation'

function Home() {
  return (
    <>
      <div className='hero-sec'>
        <div className='hero-intro'>
          <h1>Little Lemon Restaurant</h1>
          <h3 className='intros'>Lagos, Nigeria</h3>
          <p className='intros'>
            <span className='firstcharacter'>W</span>e are family <br />
            Mediterranean restaurant, <br /> focused on traditional <br />
            recipes served with a modern twist.
          </p>
          <div className='reserve-btn'>
            <button className='btn'>
              <Link to='/reservation' className='nav-link'>
                Reserve a Table
              </Link>
            </button>
            <Routes>
              <Route path='/reservation' element={<Reservation />}></Route>
            </Routes>
          </div>
        </div>
        <div className='hero-container'>
          <img
            src='/images/restaurantfood.jpg'
            alt='restaurantfood'
            className='hero-img'
          />
        </div>
      </div>
    </>
  )
}

export default Home
