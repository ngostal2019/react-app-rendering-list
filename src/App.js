import './App.css';


const topDesserts = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00"
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50"
  },
  {
    id: "3",
    title: "Chocolate Mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00"
  },
  {
    id: "4",
    title: "Creamy Apple Cider",
    description: "God's handmade speciality",
    image: "https://picsum.photos/200/300/?random",
    price: "$7.50"
  },
  {
    id: "5",
    title: "Lime Black & White Cake",
    description: "Countryside ecstasic food",
    image: "https://picsum.photos/200/300/?random",
    price: "$3.50"
  },
]

function App() {
  const menuList = topDesserts.map((menu) => {
    const titlePrice = `${menu.title} - ${menu.price}`
    return (
        <>
          <li key={menu.id}>{titlePrice}</li>
          <img alt='Restaurant food' src={menu.image} width='400px' height='400px'></img>
          <p className='Imgmargin'>{menu.description}</p>
        </>
    )
  })
  return (
    <div className='App-header'>
      <h1>Place your Order with Us today</h1>
      <ul className='Listdeco'>
        {menuList}
      </ul>
    </div>
  )
}

export default App;
