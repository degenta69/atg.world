import { Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/system'
import atg_illustration from './atg_illustration.png'
import React, { useState } from 'react'
import LoginSide from './LoginSide'
import SignupSide from './SignupSide'

const AuthModal = props => {
  const { open, handleClose } = props
  const [Auth, setAuth] = useState(true)
  const handleAuth = () => {
    setAuth(Auth => !Auth)
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          position: 'absolute'
        }}
        container={document.getElementById('root')}
      >
          <>
          <Typography sx={{
              position:'absolute',
              top:'98px' ,
              left:{
                  lg0:'939px',
                lg1:'956px',
                lg2:'965px',
                lg3:'994px',
                  xl:'1011px',
                  xl2:'1066px',
                  xxl:'1105px',
              },
              zIndex:'2',
          }}>

          <i onClick={handleClose} className="fa fa-lg position-absolute fa-times-circle" style={{}} aria-hidden="true"></i>
          </Typography>
        <Box
            id='modal'
          className='d-flex flex-column m-auto top-0 start-0 bottom-0 end-0 position-fixed bg-white shadow'
          sx={{

              borderRadius:'8px',
            height:`${Auth ? '457px': '500px'}`,
            width: '736px'
          }}
        >
          <Box
            className='text-center d-flex flex-row justify-content-center'
            sx={{
              borderRadius:'8px 8px 0px 0px',
              flexWrap: 'nowrap',
              height: '12%',
              backgroundColor: 'rgb(170 255 167 / 60%)',
              color: '#008A45'
            }}
          >
            <Typography
              className='my-auto'
              sx={{
                fontSize: '14px',
                fontWeight: '700'
              }}
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </Typography>
          </Box>
          <Box className='row'>
            <div className='col m-auto'>
              {Auth ? <LoginSide /> : <SignupSide />}
            </div>
            <div className='col d-flex flex-column justify-content-around'>
              <Typography
                variant='h6'
                sx={{ textAlign: 'center', fontSize: '13px' }}
              >
                {Auth ? (
                  <>
                    Click this for sign up form{' '}
                    <i class='fa fa-hand-o-right' aria-hidden='true'></i>
                    <span
                      onClick={handleAuth}
                      style={{
                        cursor: 'pointer',
                        fontSize: '13px',
                        color: 'blue'
                      }}
                    >
                      {' '}
                      Create new for free!{' '}
                    </span>
                  </>
                ) : (
                  <>
                    {' '}
                    Already have an account?{' '}
                    <i class='fa fa-hand-o-right' aria-hidden='true'></i>
                    <span
                      onClick={handleAuth}
                      style={{
                        cursor: 'pointer',
                        fontSize: '13px',
                        color: 'blue'
                      }}
                    >
                      {' '}
                      Sign In{' '}
                    </span>
                  </>
                )}
              </Typography>
              <Box
                sx={{
                  height: '320px',
                  backgroundImage: ` url("${atg_illustration}")`,
                  position: 'relative',
                  objectFit: 'contain',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              ></Box>
              {!Auth && (
                <Typography
                  variant='span'
                  className=''
                  sx={{
                    letterSpacing: '-0.008em',
                    textAlign: 'center',
                    fontSize: '11px'
                  }}
                >
                  By signing up, you agree to our Terms & condition; privacy
                  policy
                </Typography>
              )}
            </div>
          </Box>
        </Box>
        </>
      </Modal>
    </>
  )
}

export default AuthModal
