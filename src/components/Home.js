import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import HomeNavBar from './HomeNavBar'
import BlogCard from './BlogCard'

const Home = () => {
  const [imgURL, setimgURL] = useState([])

  useEffect(() => {
    const getIMG = async () => {
        try {
            
            const config = {
              method: 'get',
              mode: 'cors',
              url: `https://api.unsplash.com/search/photos?client_id=dRaQNADpo6jm1SKfaGeLWgv_DeRbJdxnJRAIeKfGriI&page=1&query=${'software' ||
                'coding' ||
                'finance' ||
                'cryptocurrency'}`
            }
            const res = await axios(config)
            //   console.log(res.data.results)
            if(res.data.results){

                setimgURL(res.data.results)
                console.log(imgURL)
            }else{
               setimgURL(res)
            }
        } catch (error) {
            alert(error)
            console.log(imgURL)
        }
    }
    getIMG()
  }, [])
//   const key={
//       alt_description: null,
//       description:null,
//       updated_at:null,
//       like: null,
//       user:{
//           instagram_username:null,
//           total_photos: null,
//       },
//       urls:{
//           full: null,
//           regular: null,
//       }
//   }
//   console.log(imgURL.map(key=>console.log(key.urls.full)))
  return (
    <div>
      <Banner />
      <HomeNavBar></HomeNavBar>
      <div className='mt-2'>
        {imgURL.map(key => {
          return <BlogCard 
          alt={key.alt_description || 'no img'}
          title={key.description || 'Tax Benefits for Investment under National Pension Scheme launched by Government'}
          date={key.updated_at || '2021-12-06T14:05:49-05:00'}
          id={key.id}
          likes={key.likes || '321'}
          userName={key.user.instagram_username||'dipansh'}
          totalViews={key.user.total_photos || '1.4k'}
          imgURL={key.urls.full || key.urls.regular || 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyODExOTF8MHwxfHNlYXJjaHwxMXx8c29mdHdhcmV8ZW58MHx8fHwxNjM4OTAyMjM5&ixlib=rb-1.2.1&q=85'}
          />
        })}
        {/* <PostWrite></PostWrite> */}
      </div>
    </div>
  )
}

export default Home
// eslint-disable-next-line no-lone-blocks
{/* <BlogCard 
  alt={key.alt_description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
  title={key.description || 'Tax Benefits for Investment under National Pension Scheme launched by Government'}
  date={key.updated_at || '2021-12-06T14:05:49-05:00'}
  id={key.id}
  likes={key.likes || '321'}
  userName={key.user.instagram_username||'dipansh'}
  imgURL={key.urls.full || key.urls.regular || 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyODExOTF8MHwxfHNlYXJjaHwxMXx8c29mdHdhcmV8ZW58MHx8fHwxNjM4OTAyMjM5&ixlib=rb-1.2.1&q=85'}
  /> */}
