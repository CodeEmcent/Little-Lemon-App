import { FaShoppingCart } from 'react-icons/fa'

const data = [
  {
    id: '1',
    title: 'Greek Salad',
    image: '/images/greeksalad.jpg',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    request: 'Order a delivery',
  },
  {
    id: '2',
    title: 'Bruuchetta',
    image: '/images/bruchetta.svg',
    price: '5.99',
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. This is a delicacy that dont't want to miss. ",
    request: 'Order a delivery',
  },
  {
    id: '3',
    title: 'Lemon Desert',
    image: '/images/lemondessert.jpg',
    price: '5.0',
    description:
      "This unique lemon dessert comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    request: 'Order a delivery',
  },
]

export default function Menu() {
  const listItems = data.map((menu) => {
    const itemTitle = `${menu.title}`
    const itemImg = `${menu.image}`
    const itemprice = `${menu.price}`
    const itemdesc = `${menu.description}`
    const itemact = `${menu.request}`
    return (
      <div className='menu-container'>
        <div>
          <img src={itemImg} alt='specialfood' className='special-food' />
        </div>
        <div className='food-price'>
          <h3 className='menu-title'>{itemTitle}</h3>
          <h3 className='menu-price'>$ {itemprice}</h3>
        </div>
        <p className='menu-p'>{itemdesc}</p>
        <div className='menu-button'>
          <button className='btn menu-btn'>
            {itemact} <FaShoppingCart />
          </button>
        </div>
      </div>
    )
  })
  return (
    <div className='menu-section'>
      <div className='menu-tab'>
        <h2 className='section-heading'>This Week's Specials!</h2>
        <button className='btn menu-btn more-btn'>Online Menu</button>
      </div>
      <div className='menu-case'>{listItems}</div>
    </div>
  )
}
