import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Earphones = () => {
  const {sethash} = useContext(UserContext)
  sethash('/earphones')
  return (
    <div>Earphones</div>
  )
}

export default Earphones