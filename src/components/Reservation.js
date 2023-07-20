import { useState } from 'react'

function Reservation() {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
  }

  return (
    <>
      <section className='form-section'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Reserve a Table</h2>
            <div className='Field'>
              <label htmlFor='name'>Name:</label>
              <input
                id='name'
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button disabled={!name} type='submit'>
              Submit
            </button>
          </fieldset>
        </form>
      </section>
    </>
  )
}

export default Reservation
