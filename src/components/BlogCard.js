import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Avatar, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import { Box } from '@mui/system'
import MediaQuery from "react-responsive";


export default function BlogCard (props) {
  const { id, likes, userName, imgURL, alt, title, date } = props
  return (
    <Card
      classes='shadow'
      sx={{
        boxShadow:' 0px 0px 0px 1px rgb(74 73 73 / 24%)',
        marginLeft: {
          xs: '0px',
          md: '10px',
          lg: '90px'
        },
        width: {
          xs: 'auto',
          sm: 'auto',
          md: 500,
          lg: 627
        },
        margin: {
          sm: 'auto'
        },
        marginBottom: {
          xs: 0,
          sm: '10px',
          md: '10px',
          lg: '16px'
        }
      }}
    >
      <CardMedia
        component='div'
        height='250'
        sx={{
          height: '250px',
          backgroundImage: ` url("${imgURL}")`,
          width: '100%',
          position: 'relative',
          objectFit: 'contain',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        alt='no img'
      />
      <CardContent>
          <Typography variant='small' sx={{}}>
            ✍<span style={{flexWrap:'nowrap' ,fontWeight:'600'}}>Article</span>
          </Typography>
          <Box className='d-flex justify-content-between'>
        <Typography gutterBottom variant='h5' sx={{fontWeight:'600'}} component='div'>
          {title}
        </Typography>
          <Typography >
            <i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
          </Typography>
          </Box>

        <Typography variant='body2' color='text.secondary'>
          {alt}
        </Typography>
      </CardContent>
      <CardContent className='row'>
        <Box className='col d-flex flex-row flex-md-column' 
        >
        <div className='d-flex flex-row'>

          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
          <Typography variant='p' sx={{marginLeft:'2%'}} className='d-flex flex-column fw-bolder my-auto'>
            {userName}
            <MediaQuery maxWidth={768}><p style={{fontSize:'12px',fontWeight:'lighter'}}>{likes} Views</p></MediaQuery>
          </Typography>
        </div>
        </Box>
        <Box className='col d-flex justify-content-end'>
        <MediaQuery minWidth={768}>
                <IconButton size='small' sx={{marginRight:'10%'}} edge='end' aria-labelledby='ViewsIcon'><i class="fa fa-eye" aria-hidden="true">{likes} views</i></IconButton>
                </MediaQuery>
        <Box className='btn btn-secondary my-auto align-self-center bg-secondary' 
        // sx={{
        //     marginLeft:{
        //         xs: '70%',
        //         sm: '70%',
        //         md: '70%',
        //         lg: '3%',
        //         xl: '3%'
        // }
        // }} 
        >
               
          <i class='fa fa-share-alt' aria-hidden='true'></i> <MediaQuery maxWidth={768}>Share</MediaQuery>
        </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
