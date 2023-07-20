import { useState } from 'react'

function About() {
  const [score, setScore] = useState('10')
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please provide a comment explaining why the experience was poor.')
      return
    }
    setComment('')
    setScore('10')
  }

  return (
    <div className='about-section'>
      <h2>About Little Lemon Restaurant</h2>
      <div>
        <div className='chef-case'>
          <p>
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
          <di className='chef-container'>
            <div className='chef-images'>
              <img
                src='/images/MarioandAdrianb.jpg'
                alt='chefA'
                className='chefA'
              />
              <img
                src='/images/MarioandAdrianA.jpg'
                alt='chefb'
                className='chefb'
              />
            </div>
          </di>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Feedback</h2>
            <label htmlFor='score'>Score: {score}⭐</label>
            <input
              id='score'
              type='range'
              min='0'
              max='10'
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
            <div className='field'>
              <label htmlFor='comment'>Comment</label>
              <textarea
                name='comment'
                id='comment'
                cols='30'
                rows='10'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default About
