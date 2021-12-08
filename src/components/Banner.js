import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, typography } from '@mui/system'
import { Typography } from '@mui/material'

const Banner = () => {
  const [imgURL, setimgURL] = useState('')

  // console.log(data.results[Math.floor(Math.random()*10) || Math.floor(Math.random()*10) || Math.floor(Math.random()*10) ].urls.full)
  useEffect(() => {
    const getIMG = async () => {
      try {
        const config = {
          method: 'get',
          mode: 'cors',
          url:
            'https://api.unsplash.com/search/photos?client_id=dRaQNADpo6jm1SKfaGeLWgv_DeRbJdxnJRAIeKfGriI&page=1&query=programming'
        }
        const res = await axios(config)
        //   console.log(res.data.results)
        if (res.data.results) {
          setimgURL(
            res.data.results[
              Math.floor(Math.random() * 10) ||
                Math.floor(Math.random() * 10) ||
                Math.floor(Math.random() * 10)
            ].urls.full
          )
          console.log(imgURL)
        } else {
          setimgURL(res)
        }
      } catch (error) {
        alert(error)
        console.log(imgURL)
      }
    }
    getIMG()
  }, [])
  return (
    <>
      <div
        className='text-white'
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)',
          height: '440px',
          width: '100%',
          zIndex: '2'
        }}
      >
        <header
          className=' text-white'
          style={{
            opacity: '1',
            backgroundImage: ` url("${imgURL}")`,
            height: '440px',
            width: '100%',
            position: 'relative',
            objectFit: 'contain',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '337px',
            zIndex: '-1'
          }}
        >
          {/* <div className='bg-gradient-to-b from-transparent via-transparent to-black w-auto h-48' style={{
            background: 'linear-gradient(180%, transparent 0%, rgb(0,0,0) 100%)',
            backgroundColor: 'transparent',
            width: 'auto',
            height: '12rem', 
            
        }}></div> */}
        </header>
        <Box
          classes='text-white'
          sx={{
            
            position: 'absolute',
            lineHeight: '2',
            marginLeft: {
                xs: '10px',
                sm: '16px',
                md: '50px',
                lg: '110px'
            },
            marginTop: {
              xs:'-5rem',
              sm: '-5rem',
              md: '-8rem',
              lg: '-11rem'
            },
            opacity: '3',
            zIndex: '3'
          }}
        >
          <Typography
            variant='h1'
            classes='text-sm-left fw-bolder'
            sx={{
              marginBottom: { 
                xs: '2px',
                sm: '3px',
                md: '4px',
                lg: '4px'
              },
              width: {
                xs: 190,
                sm: 190,
                md: 284,
                lg: 450
              },
              height: {
                xs: 15,
                sm: 20,
                md: 22,
                lg: 47
              },
              fontSize:{
                xs: '17px',
                sm: '20px',
                md: '30px',
                lg: '36px'
              }
            }}
          >
            Computer Engineering
          </Typography>
          <Typography
            classes='text-small '
            sx={{
              width:'inherit',
              fontSize: {
                xs: '12px',
                sm: '15px',
                md: '18px',
                lg: '18px'
              },
              height: '28px',
            }}
          >
            142,765 Computer Engineers follow this
          </Typography>
        </Box>
      </div>
    </>
  )
}

export default Banner
