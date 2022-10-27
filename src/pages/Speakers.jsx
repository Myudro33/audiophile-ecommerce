import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Speakers = () => {
  const {sethash} = useContext(UserContext)
  sethash('/speakers')
  return (
    <div>Speakers</div>
  )
}

export default Speakers