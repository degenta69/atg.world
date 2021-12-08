import React from 'react'
import '../App.scss'
import atg_logo from './nav_img_whole.png'
import MediaQuery from "react-responsive";

// import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
    <div className='hide-mobile'>
      <nav className='navbar mainNav hidden-sm hidden-xs navbar-expand-lg navbar-light bg-light' style={{flexWrap:'nowrap'}}>
        <div className='container-fluid d-flex flex-row px-1 py-1 justify-content-between'>
          <a className=' navbar-brand' style={{objectFit:'contain'}} href='/'>
            <img
              className=''
              style={{width:'162.57px',height:'24px', marginLeft:'72px'}}
              src={atg_logo}
              width='80'
              height='60'
              alt=''
            />
          </a>

          
          <div className=' px-auto m-auto' id='navbarScroll'>
          <form className='d-flex ' >
            <div className=' shadow bg-secondary mmauto  rounded-pill rounded-sm d-flex align-items-center' style={{ width:'360px', height:'42px'}}>

          <i className="fa fa-search mx-3" style={{fontSize:'14px'}} aria-hidden="true"></i>
              <input
                className='rounded-pill bg-secondary mx-3 rounded-sm me-2'
                type='search'
                style={{width:'360px', height:'42px', flex: 1, border:'none', outline:'none',fontSize:'14px'}}
                placeholder={` Search for your favorite groups in ATG`}
                aria-label='Search'
                />
                </div>
            </form>
            
          </div>
          <ul
              className='navbar-nav my-2 my-lg-0 d-flex justify-content-end navbar-nav-scroll'
              style={{ '--bs-scroll-height': '100px' }}
            >
             
              
              <li className='nav-item  dropdown'>
                <a
                  className='text-dark dropdown-toggle'
                  href='/'
                  style={{textDecoration:'none' ,marginRight:'72px',fontWeight:'500'}}
                  id='navbarScrollingDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Create account. <span className='text-navyBlue fw-bold'>It's Free</span> 
                </a>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='navbarScrollingDropdown'
                >
                  <li>
                    <a className='dropdown-item' href='/'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />{' '}
                  </li>
                  <li>
                    <a className='dropdown-item' href='/'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
        </div>
      </nav>
      </div>
      <MediaQuery maxWidth={767}>
      <nav className='navbar text-white' style={{background:'transparent', marginBottom:'-60px'}}>
        <div className='container-fluid d-flex flex-row px-1 py-1 justify-content-between'>
          <i className="fa fa-arrow-left h-100" style={{marginLeft:'4%'}} aria-hidden="true"></i>
          
          <button className='btn btn-glass' onClick={()=>{document.getElementById('grp').innerText='Leave Group'}} id='grp' type='button'  style={{border:'0.8px solid' ,height: '36px', width: '133px' }}>
              Join Group
          </button>
         
        </div>
      </nav>
      </MediaQuery>
    </>
  )
}

export default NavBar
