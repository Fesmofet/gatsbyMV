import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Header = ({ siteTitle }) => {
  const menu = [
    {title: 'Главная', id: 0, url: '/'},
    {title: 'Обо мне', id: 1, url: '/about'},
    {title: 'Как я работаю', id: 2, url: '/methodology'},
    {title: 'Отзывы', id: 3, url: '/reviews'},
    {title: 'Это должно быть у всех', id: 4, url: '/products'},
    {title: 'Контакты', id: 5, url: '/contacts'},

  ]
  return (
  <header
    style={{
      background: `rosybrown`,
      marginBottom: `1.45rem`,
      position: `fixed`,
      top: 0,
      width: `100%`,
      zIndex: `100`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex"
      }}
    >
        {menu.map(menuItem => (
          <div key={menuItem.id} style={{padding: '10px'}}>
            <Link
              to={menuItem.url}
              style={{
              color: `white`,
              textDecoration: `none`,
              }}
            >
              {menuItem.title}
            </Link>
          </div>
        ))}
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
