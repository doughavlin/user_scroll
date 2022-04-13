import React from 'react'

const User = ({user}) => {
  const fullName = `${user.name.first} ${user.name.last}`
  return (
    <div className='card-detail'>
      <img src={user.picture.large} alt={`Face of ${fullName}`} />
      <h3>{fullName}</h3>
    </div>
  )
}

export default User