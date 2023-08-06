import { FaStar } from 'react-icons/fa'

const info = [
  {
    id: '1',
    title: 'Such a Delight',
    testimony:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/images/Customer-1.jpg',
    customer: 'Michael Felix',
  },
  {
    id: '2',
    title: 'The Wonderful Kitchen',
    testimony:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/images/Customer-2.jpg',
    customer: 'Joan Priscilia',
  },
  {
    id: '3',
    title: 'My Best Choice for Good Meals ',
    testimony:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic.',
    image: '/images/Customer-3.jpg',
    customer: 'Edwin Peter',
  },
]

function Testimonials() {
  const testinomialInfo = info.map((testament) => {
    const infoTitle = `${testament.title}`
    const infoImg = `${testament.image}`
    const infodesc = `${testament.testimony}`
    const infocus = `${testament.customer}`
    return (
      <div className='testimonial-container'>
        <div className='testimonial-box'>
          <h3 className='testimonial-title'>{infoTitle}</h3>
          <p className='testimonial-p'>{infodesc}</p>
          <img src={infoImg} alt='customer' className='customer-pix' />
          <div className='customer-rating'>

          <p>{infocus}</p>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          </div>

        </div>
      </div>
    )
  })

  return (
    <section className='testimonial-section'>
      <h2 className='testimonial-heading'>Testimonials</h2>
      <div className='testimonial-mssg'>
        <div className='testimonial-case'>{testinomialInfo}</div>
      </div>
    </section>
  )
}

export default Testimonials
