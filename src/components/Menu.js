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
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    request: 'Order a deliver',
  },
  {
    id: '3',
    title: 'Lemon Desert',
    image: '/images/lemondessert.jpg',
    price: '5.0',
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    request: 'Order a deliver',
  },
]

export default function Menu() {
  const listItems = data.map((menu) => {
    const itemTitle = `${menu.title}`
    const itemImg = `${menu.image}`
    const itemdesc = `${menu.description}`
    const itemact = `${menu.request}`
    return (
      <div className='menu-container'>
        <h3 className='menu-title'>{itemTitle}</h3>
        <div className='menu-img'>
          <img src={itemImg} alt='specialfood' className='special-food' />
        </div>
        <p className='menu-p'>{itemdesc}</p>
        <button>{itemact}</button>
      </div>
    )
  })
  return (
    <div className='menu-section'>
      <h2>This Weeks Specials!</h2>
      <div className='menu-case'>{listItems}</div>
    </div>
  )
}
