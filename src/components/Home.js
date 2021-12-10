import Card1_img from './Card1_img.png';
import Card2_img from './Card2_img.png';
import Card3_img from './Card3_img.png';
import React from 'react'
import Banner from './Banner'
import HomeNavBar from './HomeNavBar'
import BlogCard from './BlogCard'
import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment
} from '@mui/material'
import MediaQuery from 'react-responsive'
import { Box } from '@mui/system'

const Home = () => {
  // const [imgURL, setimgURL] = useState([])

  // useEffect(() => {
  //   const getIMG = async () => {
  //     try {
  //       const config = {
  //         method: 'get',
  //         mode: 'cors',
  //         url: `https://api.unsplash.com/search/photos?client_id=dRaQNADpo6jm1SKfaGeLWgv_DeRbJdxnJRAIeKfGriI&page=1&query=${'software' ||
  //           'coding' ||
  //           'finance' ||
  //           'cryptocurrency'}`
  //       }
  //       const res = await axios(config)
  //       //   console.log(res.data.results)
  //       if (res.data.results) {
  //         setimgURL(res.data.results)
  //         // console.log(imgURL)
  //       } else {
  //         setimgURL(res)
  //       }
  //     } catch (error) {
  //       alert(error)
  //       // console.log(imgURL)
  //     }
  //   }
  //   getIMG()
  // }, [])

  const imgURL = [
    {
      alt_description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
      description: 'What if famous brands had regular fonts? Meet RegulaBrands!',
      likes: '1.4k views',
      user: {
        instagram_username: 'Sarthak Kamra',
      },
      urls: {
        full: Card1_img,
        regular: 'atg.world/src/components/Card1_img.png'
      },
      tag: { emoji: '✍️', text: 'Article' },
      button: false,
      buttonText: ' ',
      date: ' ',
      location: ' '
    },
    {
      alt_description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
      description: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
      likes: '3.6k views',
      user: {
        instagram_username: 'Sarah West',
      },
      urls: {
        full: Card2_img,
        regular: 'atg.world/src/components/Card2_img.png'
      },
      tag: { emoji: '🔬️', text: 'Education' },
      button: false,
      buttonText: ' ',
      date: ' ',
      location: ' '
    },
    {
      alt_description: false,
      description: 'Finance & Investment Elite Social Mixer @Lujiazui',
      likes: '2.3k views',
      user: {
        instagram_username: 'Ronal Jones',
      },
      urls: {
        full: Card3_img,
        regular: 'atg.world/src/components/Card3_img.png'
      },
      tag: { emoji: '🗓️', text: 'Meetup' },
      button: true,
      buttonText: 'Visit Website',
      date: 'Fri, 12 Oct, 2018',
      location: 'Ahmedabad, India'
    },
    {
      alt_description: true,
      description: 'Software Developer',
      likes: '1.4k views',
      user: {
        instagram_username: 'Joseph Gray',
      },
      urls: {
        full: null,
        regular: ''
      },
      tag: { emoji: '💼️', text: 'Job' },
      button: true,
      buttonText: 'Apply on Timesjobs',
      date: 'Innovaccer Analytics Private Ltd.',
      location: 'Noida, India'
    }
  ]

  return (
    <div>
      <Banner />
      <MediaQuery maxWidth={2440} minWidth={1088}>
        <div className='row m-auto'>
          <HomeNavBar />
          <div className='col-6 d-flex flex-column align-content-center'>
            {imgURL.map(key => {
              return (
                <BlogCard
                  alt={key.alt_description}
                  title={
                    key.description
                  }
                  likes={key.likes}
                  userName={key.user.instagram_username}
                  imgURL={key.urls.full}
                  tagText={key.tag.text}
                  tagEmoji={key.tag.emoji}
                  buttonState={key.button}
                  buttonText={key.buttonText}
                  date={key.date}
                  location={key.location}
                />
              )
            })}
          </div>
          <div className='col d-flex justify-content-center'>
            <FormControl
              variant='standard'
              sx={{
                marginLeft: '10px',
                width: {
                  xs: '00px',
                  sm: '0px',
                  md: '100px',
                  lg: '200px',
                  xl: '300px',
                  xxl: '400px'
                }
              }}
            >
              <Input
                defaultValue='Noida,India'
                id='input-with-icon-adornment'
                startAdornment={
                  <InputAdornment position='start'>
                    <i class='fa fa-map-marker' aria-hidden='true'></i>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <i class='fa fa-pencil' aria-hidden='true'></i>
                  </InputAdornment>
                }
              />
              <FormHelperText sx={{ marginTop: '20px', flexWrap: 'wrap' }}>
                <i
                  class='fa fa-info-circle'
                  style={{ marginRight: '8.33px' }}
                  aria-hidden='true'
                ></i>{' '}
                Your location will help us serve better and extend a
                personalised experience.
              </FormHelperText>
            </FormControl>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1088}>
        <HomeNavBar />
        <div className='overflow-visible'>
        {imgURL.map(key => {
          return (
            <BlogCard
              alt={key.alt_description}
              title={
                key.description
              }
              likes={key.likes}
              userName={key.user.instagram_username}
              imgURL={key.urls.full}
              tagText={key.tag.text}
              tagEmoji={key.tag.emoji}
              buttonState={key.button}
              buttonText={key.buttonText}
              date={key.date}
              location={key.location}
            />
          )
        })}
        </div>
        <MediaQuery maxWidth={907}>
          <Box
            className='position-fixed top-87  start-87'
            sx={{
              top: {
                xs: '87%',
                sm: '87%',
                md: '84%',
                lg: '87%'
              },
              left: {
                xs: '77%',
                sm: '81%',
                md: '81%',
                lg: '87%'
              },
              width: { xs: '54px', sm: '54px', md: '64px', lg: '100px' },
              borderRadius: '50%',
              height: { xs: '54px', sm: '54px', md: '64px', lg: '100px' },
              background: 'linear-gradient(180deg,#FF5c5c 0%, #F0568A 100%)',
              boxShadow:
                '0px 2px 4px rgba(0, 0, 0, 0.18), 0px 0px 2px rgba(0, 0, 0, 0.08)'
            }}
          >
            <i
              className='fa fa-pencil fa-2x '
              style={{
                marginTop: '22%',
                marginLeft: '26%'
              }}
              aria-hidden='true'
            ></i>
          </Box>
        </MediaQuery>
      </MediaQuery>
    </div>
  )
}

export default Home
// eslint-disable-next-line no-lone-blocks
{
  /* <BlogCard 
  alt={key.alt_description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
  title={key.description || 'Tax Benefits for Investment under National Pension Scheme launched by Government'}
  date={key.updated_at || '2021-12-06T14:05:49-05:00'}
  id={key.id}
  likes={key.likes || '321'}
  userName={key.user.instagram_username||'dipansh'}
  imgURL={key.urls.full || key.urls.regular || 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyODExOTF8MHwxfHNlYXJjaHwxMXx8c29mdHdhcmV8ZW58MHx8fHwxNjM4OTAyMjM5&ixlib=rb-1.2.1&q=85'}
  /> */
}
