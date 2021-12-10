import React, { useState } from 'react'
import 'bootstrap'
import '../App.scss'
import MediaQuery from 'react-responsive'
import { Box } from '@mui/system'
import AuthModal from './AuthModal'

const HomeNavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <MediaQuery minWidth={767}>
    <div>
      <nav
        className='navbar mainNav hidden-phone navbar-expand-lg navbar-light bg-light'
        style={{position:'relative',paddingBottom: '0rem',width:'85%',margin:'auto' }}
      >
        <div className='container-fluid d-flex flex-row justify-content-between' style={{flexWrap:'nowrap'}}>
          <Box 
          sx={{
             marginRight: {
              xs: 0,
              sm: 0,
              md: '-5%',
              lg: '10%', 
              xl:'10%'
             }
          }}>
            <a className='navLink active navLink-grow-up ' href='/'>
              All post(32)
            </a>

            <a className='navLink navLink-grow-up' href='/'>
              Article
            </a>

            <a className='navLink navLink-grow-up' href='/'>
              Event
            </a>
            <a className='navLink navLink-grow-up' href='/'>
              Education
            </a>
            <a className='navLink navLink-grow-up' href='/'>
              Job
            </a>
          </Box>

          <div style={{fontSize:'0.9em'}} className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <MediaQuery minWidth={908}>

            <a
              className='btn btn-outline-transparent bg-secondary me-md-2'
              href='\'
              type='button'
              style={{fontSize: '0.9em', height: '36px', width: '133px' }}
              >
              Write a Post   
              <i class='fa fa-arrow-circle-down h-50 mx-1' aria-hidden='true'></i>
            </a>
              </MediaQuery>
            <button onClick={handleOpen} className='btn btn-outline-navyBlue' href='\' type='button'  style={{ fontSize: '0.9em', flexWrap:'nowrap' , height: '36px', width: '133px' }}>
              <i class='fa fa-group h-50 mx-1' aria-hidden='true'></i>    Join Group
            </button>
        <AuthModal open={open} handleClose={handleClose}/>
          </div>
        </div>
      </nav>
      <hr style={{position:'relative', borderBottom: '1px solid rgb(100,100,100)',width:'85%',margin:'auto',marginBottom:'2rem'}} />
    </div>
    </MediaQuery>
    <MediaQuery maxWidth={767}>
      <nav className='navbar navbar-light bg-light' style={{position:'relative',paddingBottom: '0rem',width:'85%',margin:'auto' }}>
        <div className='container-fluid d-flex flex-row px-1 py-1 justify-content-between'>
        <h6 className='my-auto fw-bolder' style={{fontWeight:'700',fontSize:'15px'}} href='/'>
              Posts(368)
        </h6>
          <div>

          <a className='btn btn-plain-5 text-dark bg-secondary ' href='\' type='button'>
             <span style={{fontWeight:'500', fontSize:'13px'}}>Filter All</span><i class="fa fa-angle-down mx-1" aria-hidden="true"></i>
          </a>
          </div>
         
        </div>
      </nav>
      </MediaQuery>
    </>
  )
}

export default HomeNavBar
