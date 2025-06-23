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
    if (document?.body?.scrollTop || document?.documentElement?.scrollTop > 100) {
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
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 1000)
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarFixed)
    return () => window.removeEventListener('scroll', navbarFixed)
  }, [])

  return (
    <div className='bottom-header bg-white shadow-lg py-[8px]' id='homeSection'>
      <CNavbar expand="lg" className={`bg-body-tertiary ${nav ? 'header_fixed' : ''}`}>
        <CContainer>
          <CNavbarBrand href="#homeSection" onClick={(e) => sectionToScroll(e, 'homeSection')}>
            <img src={logo} alt="Logo" className='w-[150px]' />
          </CNavbarBrand>

          <CNavbarToggler onClick={() => setVisible(!visible)} />

          {/* BACKDROP when menu is open */}
          {visible && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setVisible(false)}
            ></div>
          )}

          {/* MOBILE SLIDE-IN MENU FROM LEFT */}
          <CCollapse
            className={`navbar-collapse transform transition-all duration-500 ease-in-out z-50
              ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
              fixed top-0 left-0 h-full w-[100%] max-w-[380px] bg-white p-1 lg:static lg:translate-x-0 lg:opacity-100 lg:flex`}
            visible={visible}
          >
            <div className='close_icon'> {/* ❌ Close icon inside menu */}
            <div className="absolute top-0 right-[25px] lg:hidden">
              <button onClick={() => setVisible(false)} className="text-2xl font-bold mb-4">
                &times;
              </button>
            </div>
            </div>
            <CNavbarNav className="flex flex-col lg:flex-row lg:ms-auto space-y-4 lg:space-y-0">
              <CNavItem>
                <Link to="#homeSection" onClick={(e) => sectionToScroll(e, 'homeSection')} className='block py-2 px-4'>
                  Home
                </Link>
              </CNavItem>
              <CNavItem>
                <Link to="#aboutSection" onClick={(e) => sectionToScroll(e, 'aboutSection')} className='block py-2 px-4'>
                  About Us
                </Link>
              </CNavItem>
              <CNavItem>
                <Link to="#serviceSection" onClick={(e) => sectionToScroll(e, 'serviceSection')} className='block py-2 px-4'>
                  Our Service
                </Link>
              </CNavItem>
              <CNavItem>
                <Link to="#portfolioSection" onClick={(e) => sectionToScroll(e, 'portfolioSection')} className='block py-2 px-4'>
                  Portfolio
                </Link>
              </CNavItem>
              <CNavItem>
                <Link to="#shopSection" onClick={(e) => sectionToScroll(e, 'shopSection')} className='block py-2 px-4'>
                  Shop
                </Link>
              </CNavItem>
              <CNavItem>
                <Link to="#blogSection" onClick={(e) => sectionToScroll(e, 'blogSection')} className='block py-2 px-4'>
                  Blog
                </Link>
              </CNavItem>
              <div className="pt-4 px-4">
                <CustomButton text="Get In Touch" to="/" bgColor="var(--bg-color)" />
              </div>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </div>
  )
}
