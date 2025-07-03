import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className='left'>
        <div className="title">
          <h2>shopping mall</h2>
        </div>
      </div>
      <div className='middle'>
        <ul>
          <li>women</li>
          <li>men</li>
          <li>children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" className='sear' placeholder='Search...' />
      </div>
      <div className='right'>
        <div className="signin">
          signin/singup
        </div>
        <div className="cart">
          Cart
        </div>
      </div>
    </div>
  )
}

export default Header
