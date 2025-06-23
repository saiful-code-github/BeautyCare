import React from 'react'
import TopFooter from './TopFooter'
import BottomFooter from './BottomFooter'

const Footer = () => {
  return (
    <footer style={{background: "var(--bg-light)", padding: "60px 0 40px 0"}} id="footerSection">
        <TopFooter />
        <BottomFooter/>
    </footer>
  )
}

export default Footer