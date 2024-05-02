import React from 'react';

const navItems = ["Home" , "Services", "Contact", "Portfolio"];


const products = [
  {id: 1, name: 'Rasm 1', photo: 'https://picsum.photos/150'},
  {id: 2, name: 'Rasm 2', photo: 'https://picsum.photos/150'},
  {id: 3, name: 'Rasm 3', photo: 'https://picsum.photos/150'},
]

const Header = ({state}) => {
  return (
    <div className='header header__container'>
      {/* LOGO */}
      <div className="logo">
        Logo
      </div>
      {/* LOGO */}

      {/* NAVBAR  START */}
      <nav className='nav'>
        <ol className='nav__list'>
          {navItems.map((item) => {
            return (
              <li>{item}</li>
            )
          })}
        </ol>
      </nav>
      {/* NAVBAR END */}

      <span>{state}</span>
    </div>
  )
}

export default Header;