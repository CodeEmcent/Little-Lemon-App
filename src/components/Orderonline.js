import { useState } from 'react'
import {
  FaUser,
  FaMailBulk,
  FaTelegramPlane,
  FaPhone,
  FaComments,
} from 'react-icons/fa'

function Orderonline() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [people, setPeople] = useState(1)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [occasion, setOccasion] = useState('')
  const [preferences, setPreferences] = useState('')
  const [comments, setComments] = useState('')

  function handleDateChange(e) {
    setDate(e.target.value)
  }

  function handleTimeChange(e) {
    setTime(e.target.value)
  }

  return (
    <section className='food-order'>
      <h2>Reserve a table Today!</h2>
      <p className='order-discount'>
        Get 10% Discount for every table you reserve Online.
      </p>
      <form className='order-form'>
        <div className='row'>
          <div className='order-case'>
            <label htmlFor='firstName'>
              <FaUser className='form-icons' />
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              // placeholder='First Name'
              required
              minLength={2}
              maxLength={50}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>

          <div className='order-case'>
            <label htmlFor='lastName'>
              <FaUser className='form-icons' />
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              // placeholder='Last Name'
              minLength={2}
              maxLength={50}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
        </div>

        <div className='row'>
          <div className='order-case'>
            <label htmlFor='email'>
              <FaMailBulk className='form-icons' />
              Email
            </label>
            <input
              type='email'
              id='email'
              // placeholder='Email'
              value={email}
              required
              minLength={4}
              maxLength={200}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className='order-case'>
            <label htmlFor='phonenum'>
              <FaPhone className='form-icons' />
              Phone Number
            </label>
            <input
              type='tel'
              id='phonenum'
              // placeholder='(xxx)-xxx-xxxx'
              value={tel}
              required
              minLength={11}
              maxLength={12}
              onChange={(e) => setTel(e.target.value)}
            ></input>
          </div>
        </div>

        <div className='row'>
          <div className='order-case invite'>
            <label htmlFor='people'>Number of People</label>
            <input
              type='number'
              id='people'
              // placeholder='Number of People'
              value={people}
              required
              min={1}
              max={100}
              onChange={(e) => setPeople(e.target.value)}
            ></input>
          </div>

          <div className='order-case invite'>
            <label htmlFor='occasion'>Occasion</label>
            <select
              id='occasion'
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
            </select>
          </div>

          <div className='order-case'>
            <label htmlFor='preferences'>Seating preferences</label>
            <select
              id='preferences'
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            >
              <option>None</option>
              <option>Indoors</option>
              <option>Outdoor (Patio)</option>
              <option>Outdoor (Sidewalk)</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='order-case'>
            <label htmlFor='date'>Select Date</label>
            <input
              type='date'
              id='date'
              required
              value={date}
              onChange={handleDateChange}
            ></input>
          </div>

          <div className='order-case'>
            <label htmlFor='orderDate'>Select Time</label>
            <input
              type='time'
              id='time'
              required
              value={time}
              onChange={handleTimeChange}
            ></input>
          </div>
        </div>

        <div className='order-case'>
          <label htmlFor='comments'>
            <FaComments className='form-icons' />
            Additional Comments
          </label>
          <textarea
            id='comments'
            rows={8}
            cols={50}
            // placeholder='Additional Comments'
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>

        <div className='order-case'>
          <p>
            NOTE: <br />
            <span>
              You cannot edit your reservation after submission. Please
              double-check your answer before submitting your reservation
              request.
            </span>
          </p>

          <button className='action-button'>
            Book Table
            <div>
              <FaTelegramPlane className='form-button' />
            </div>
          </button>
        </div>
      </form>
    </section>
  )
}

export default Orderonline
