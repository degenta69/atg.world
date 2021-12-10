import { Slide } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import LoginSide from './LoginSide';
import SignupMobile from './SignupMobile';

const MobileAuthModal = (props) => {
    const {show, handleOpen} = props;

    const [Auth, setAuth] = useState(true)
    const handleAuth = () => {
        setAuth(Auth => !Auth)
      }
    return (
        <div>
           <Slide in={show} direction='up'  container={document.getElementsByTagName('body')[1]}>
           <Box
            id='modal'
          className='d-flex flex-column m-auto top-70 start-0 bottom-0 end-0 position-fixed bg-white shadow'
          sx={{
            zIndex:'4',
              borderRadius:'18px 18px 0px 0px',
            height:{
                xs:`${Auth ? '457px': '500px'}`,

            },
            width: '100%'
          }}
        >
          
            <div className='col m-auto'>
              {Auth ? <LoginSide handleOpen={handleOpen}/> : <SignupMobile />}
              {Auth ? (
                  <>
                    <span
                      onClick={handleAuth}
                      style={{
                          transition:'all 0s ease 0s',
                          position:'absolute',
                        fontWeight:'500',
                        cursor: 'pointer',
                        fontSize: '13px',
                        color: 'blue',
                        top:'50%',
                        right:'20%'
                      }}
                    >
                      {' '}
                      or, Create Account{' '}
                    </span>
                  </>
                ) : (
                  <>
                  <span
                      onClick={handleAuth}
                      style={{
                        transition:'all 0s ease 0s',
                          position:'absolute',
                        fontWeight:'500',
                        cursor: 'pointer',
                        fontSize: '13px',
                        color: 'blue',
                        top:'59%',
                        right:'20%'
                      }}
                    >
                      {' '}
                    or, Sign in{' '}
                    </span>
                  </>
                )}
            </div>
            </Box>
            </Slide> 
        </div>
    )
}

export default MobileAuthModal
