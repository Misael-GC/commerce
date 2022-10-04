import React from 'react';
import '../styles/MenuMobile.scss';

function MenuMobile() {
  return (
    <div className='mobile-menu'>
     
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/orders">My orders</a>
        </li>
        <li>
          <a href="/account">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className="email">
            mail@example.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
      
    </div>
  )
}

export default MenuMobile;