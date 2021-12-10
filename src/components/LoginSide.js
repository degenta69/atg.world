import React from 'react'
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery
  } from '@mui/material'
  import { Box, useTheme } from '@mui/system'


const LoginSide = (props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
              <Typography
                variant='h4'
                sx={{ marginLeft: '7%' }}
                className='my-4 d-flex flex-row justify-content-between text-dark fw-bolder'
                align='justify'
              >
               {matches?'Welcome Back':'Sign In'}
               {matches &&   <i onClick={props.handleOpen} className="fa fa-sm fa-times-circle" style={{}} aria-hidden="true"></i>
}
              </Typography>
              <Box className='container mx-auto'>
                <TextField
                  className='bg-light-grey'
                  sx={{}}
                  fullWidth
                  label='Email'
                  id='fullWidth'
                />
                <FormControl fullWidth sx={{ }} className='bg-light-grey' variant="outlined">
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
                  sx={{}}
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
                <div className={`${matches?'':'d-grid gap-2'} my-3`}>
                  <button
                  onClick={() => {
                    localStorage.setItem('loggedIn',true)
                    alert('please refresh the page to see the logged in state')
                  }}
                    className='btn btn-primary text-white '
                    style={{ backgroundColor: '#2f6ce5', borderRadius: '20px', fontWeight:'500',width:`${matches?'50%':''}` }}
                    type='button'
                  >
                    Sign In
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
                    Sign in with Facebook
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
                    <i class='fa fa-google' aria-hidden='true'></i> Sign in with
                    Google
                  </button>
                </div>
              </Box>
              <Typography
                variant='h6'
                className='fw-bolder text-black text-center my-4'
                sx={{ fontSize: '13px', zIndex:'2'}}
              >
                Forgot Password?
              </Typography>
        </>
    )
}

export default LoginSide
