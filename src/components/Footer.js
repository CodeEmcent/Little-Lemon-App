import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div>
        <img src='/Logo.svg' alt='Little-Lemon-logo'></img>
        <p>
          We are family Mediterranean restaurant, focused on traditional recipes
          served with a modern twist.
        </p>
        <p>Little Lemon Website is designed with 💖 by Emekwue Innocent</p>
      </div>

      <div className='site-contents'>
        <h5 className='footer-header'>Site Navigations</h5>
        <ul className='footer-links'>
          <li>
            <Link to='/' className='footer-menu'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='footer-menu'>
              About
            </Link>
          </li>
          <li>
            <Link to='/reservations' className='footer-menu'>
              Reservations
            </Link>
          </li>
          <li>
            <Link to='/order' className='footer-menu'>
              Order
            </Link>
          </li>
          <li>
            <Link to='/login' className='footer-menu'>
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h5 className='footer-header'>Our Contact</h5>
        <ul className='footer-contact'>
          <p>11B Adeyinka Osijo Street, Akoka,</p>
          <p>Yaba, Lagos, Nigeria</p>
          <p>(629)-243-6827</p>
          <a
            href='mailto: info@littlelemon.com'
            target='_blank'
            rel='noreferrer'
            className='footer-menu'
          >
            info@littlelemon.com
          </a>
        </ul>
      </div>

      <div>
        <h5 className='footer-header'>Connect to our Social Medias</h5>
        <ul className='footer-links'>
          <li>
            <a
              href='https://www.facebook.com/thelittlelemonshop/'
              target='_blank'
              rel='noreferrer'
              className='footer-menu'
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/littlelemonmoon/'
              target='_blank'
              rel='noreferrer'
              className='footer-menu'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/watch?v=3Li-FfypZYE'
              target='_blank'
              rel='noreferrer'
              className='footer-menu'
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com/@Little_Lemon'
              target='_blank'
              rel='noreferrer'
              className='footer-menu'
            >
              Twitter
            </a>
          </li>
          <p className='footnote'>JOIN US TODAY!</p>
        </ul>
      </div>
    </footer>
  )
}
