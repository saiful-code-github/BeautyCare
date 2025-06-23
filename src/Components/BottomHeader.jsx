import React, { useEffect, useState } from 'react'
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
} from '@coreui/react'
import logo from '../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Bottomheader.scss'
import { CustomButton } from './ButtonComponent'

export const BottomHeader = () => {
  const [visible, setVisible] = useState(false)
  const [nav, setNav] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navbarFixed = () => {
    if (window.scrollY > 100) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  const sectionToScroll = (e, sectionId) => {
    e.preventDefault()
    setVisible(false)
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 1000)
    } else {
      const section = document.getElementById(sectionId)
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarFixed)
    return () => window.removeEventListener('scroll', navbarFixed)
  }, [])

  return (
    <div className="bottom-header " id="homeSection">
      <CNavbar expand="lg" className={`bg-white shadow-lg py-[8px] ${nav ? 'header_fixed' : ''}`}>
        <CContainer>
          <CNavbarBrand href="#homeSection" onClick={(e) => sectionToScroll(e, 'homeSection')}>
            <img src={logo} alt="Logo" className="w-[150px]" />
          </CNavbarBrand>

          <CNavbarToggler onClick={() => setVisible(!visible)} />

          {/* Backdrop */}
          {visible && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setVisible(false)}
            ></div>
          )}

          {/* Desktop Nav */}
          <CCollapse className="navbar-collapse hidden lg:flex" visible>
            <CNavbarNav className="ms-auto flex-row space-x-4">
              {['homeSection', 'aboutSection', 'serviceSection', 'portfolioSection', 'shopSection', 'blogSection'].map((id) => (
                <CNavItem key={id}>
                  <Link to={`#${id}`} onClick={(e) => sectionToScroll(e, id)} className="px-3 py-2">
                    {id.replace('Section', '').replace( c => c.toUpperCase())}
                  </Link>
                </CNavItem>
              ))}
              <div
                onClick={(e) => sectionToScroll(e, 'footerSection')}
              >
                <CustomButton text="Get In Touch" to="#" bgColor="var(--bg-color)" />
              </div>
            </CNavbarNav>
          </CCollapse>

          {/* Mobile Nav */}
          <CCollapse
            className={`navbar-collapse transform transition-all duration-500 ease-in-out z-50
              ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
              fixed top-0 left-0 h-full w-[100%] max-w-[380px] bg-white p-4 lg:hidden`}
            visible={visible}
          >
            <div className="absolute top-0 right-[15px]">
              <button onClick={() => setVisible(false)} className="text-3xl close_icon font-bold">
                &times;
              </button>
            </div>

            <CNavbarNav className="flex flex-col space-y-4 mt-4 items-center align-middle">
              {['homeSection', 'aboutSection', 'serviceSection', 'portfolioSection', 'shopSection', 'blogSection'].map((id) => (
                <CNavItem key={id}>
                  <Link to={`#${id}`} onClick={(e) => sectionToScroll(e, id)} className="block">
                    {id.replace('Section', '').replace(c => c.toUpperCase())}
                  </Link>
                </CNavItem>
              ))}
              <div
                onClick={(e) => sectionToScroll(e, 'footerSection')}
              >
                <CustomButton text="Get In Touch" to="#" bgColor="var(--bg-color)" />
              </div>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </div>
  )
}
