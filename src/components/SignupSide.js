import React from 'react'
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
  } from '@mui/material'
  import { Box } from '@mui/system'


const SignupSide = () => {
    return (
        <>
              <Typography
                variant='h4'
                sx={{fontSize:'24px',marginLeft:'7%'}}
                className='my-4 fw-bold'
                align='justify'
              >
               Create Account
              </Typography>
              <Box className='container mx-auto'>
                  <Box className='d-flex flex-row justify-content-around'>

                <TextField
                  className='bg-light-grey'
                  sx={{height:'46px'}}
                  fullWidth={false}
                  label='First Name'
                  id='fullWidth'
                />
                <TextField
                  className='bg-light-grey'
                  sx={{height:'46px'}}
                  fullWidth={false}
                  label='Last Name'
                  id='fullWidth'
                />
                  </Box>
                <TextField
                  className='bg-light-grey'
                  sx={{height:'46px'}}
                  fullWidth
                  label='Email'
                  id='fullWidth'
                />
                 <FormControl fullWidth sx={{ height:'46px' }} className='bg-light-grey' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
               <i class='fa fa-eye' aria-hidden='true'></i>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                {/* <TextField
                  className='bg-light-grey'
                  sx={{height:'46px'}}
                  fullWidth
                  label='Password'
                  inputProps={{    
                      
                      endAdornment: (
                          <InputAdornment position='end'>
                        <i class='fa fa-eye' aria-hidden='true'></i>
                      </InputAdornment>
                    )
                }}
                  id='fullWidth'
                /> */}
                <TextField
                  className='bg-light-grey'
                  sx={{height:'56px'}}
                  fullWidth
                  label='Confirm Password'
                  id='fullWidth'
                />
                <div className='d-grid my-3 gap-2'>
                  <button
                  onClick={() => {
                    localStorage.setItem('loggedIn',true)
                    alert('please refresh the page to see the logged in state')
                  }}
                    className='btn btn-primary text-white '
                    style={{ backgroundColor: '#2f6ce5', borderRadius: '20px', fontWeight:'500' }}
                    type='button'
                  >
                   Create Account
                  </button>
                </div>
                <div className='d-grid gap-2'>
                  <button
                    className='btn btn-white'
                    style={{
                      borderRadius: '2px',
                      boxSizing: 'border-box',
                      border: '0.6px solid rgb(185 185 185)'
                    }}
                    type='button'
                  >
                    <i
                      className='fa fa-facebook'
                      style={{ color: 'blue' }}
                      aria-hidden='true'
                    ></i>{' '}
                    Sign up with Facebook
                  </button>
                  <button
                    className='btn btn-white'
                    style={{
                      borderRadius: '2px',
                      boxSizing: 'border-box',
                      border: '0.6px solid rgb(185 185 185)'
                    }}
                    type='button'
                  >
                    <i class='fa fa-google' aria-hidden='true'></i> Sign up with
                    Google
                  </button>
                </div>
              </Box>
        </>
    )
}

export default SignupSide
