import React,{useState} from 'react'
import BurgerMenu from './Components/BurgerMenu'
import Cart from './Components/Cart'
import Heading from './Components/Heading'
import Navbar from './Components/Navbar'

const App = () => {
  const [menuOpen, setmenuOpen] = useState(false)
  const [cartOpen, setcartOpen] = useState(false)
  return (
    <div className='flex flex-col'>
      <Navbar setmenuOpen={setmenuOpen} setcartOpen={setcartOpen} />
      <BurgerMenu menuOpen={menuOpen} />
      <Cart cartOpen={cartOpen} />
      <Heading/>
    </div>
  )
}

export default App