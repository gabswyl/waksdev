import React from 'react'
import Logo from './Logo'
import MenuList from './MenuList'
import Button from './Button'
import styles from './Header.module.css'

const Header = () => {

  return (
    <header className={`${styles.header}`}>
    <div>
      <Logo />
    </div>
    <div className={styles.menusheader}>
      <MenuList />
      <Button fontSize="1.25rem" />
    </div>
  </header>
  )
}

export default Header