import React,{useState} from 'react'
import BurgerMenu from './Components/BurgerMenu'
import Navbar from './Components/Navbar'

const App = () => {
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className='flex flex-col'>
      <Navbar setmenuOpen={setmenuOpen}/>
      <BurgerMenu menuOpen={menuOpen} />
    </div>
  )
}

export default App