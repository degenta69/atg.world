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
  const { likes, userName, imgURL, alt, title,tagText, tagEmoji, buttonState, buttonText, date, location } = props
  return (
    <Card
      classes='shadow'
      sx={{
        overflow:'hidden',
        boxShadow:' 0px 0px 0px 1px rgb(74 73 73 / 24%)',
        marginLeft: {
          xs: '0px',
          sm: '0px',
          md: '0px',
          lg: '10px',
          xl: '90px'
        },
        width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: 650,
          xxl: 680
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
     {imgURL && <CardMedia
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
      }
      <CardContent>
          <Typography variant='small' sx={{}}>
            {tagEmoji}<span style={{flexWrap:'nowrap' ,fontWeight:'600'}}>{tagText}</span>
          </Typography>
          <Box className='d-flex justify-content-between'>
        <Typography gutterBottom variant='h5' sx={{fontWeight:'600'}} component='div'>
          {title}
        </Typography>
          <Typography >
            <i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
          </Typography>
          </Box>

        {!buttonState? <Typography variant='body2' color='text.secondary'>
          {alt}
        </Typography>:
        <><Box className='d-flex my-1 flex-row' sx={{textAlign:'left'}}>
          <Typography sx={{marginRight:'6em', fontWeight:'500',fontSize:'17px'}}>{!alt?<><i class="fa fa-calendar fa-md" aria-hidden="true"></i> {date}</> : <><i class="fa fa-briefcase fa-md" aria-hidden="true"></i> {date}</>}</Typography>
          <Typography sx={{marginRight:'6em', fontWeight:'500',fontSize:'17px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> {location}</Typography>
          </Box> 
          <button
                    className='btn my-1 btn-white'
                    style={{
                      width:'100%',
                      borderRadius: '2px',
                      boxSizing: 'border-box',
                      border: '0.6px solid rgb(185 185 185)',                     
                    }}
                    type='button'
                  >
                   {!imgURL?<Typography sx={{ fontWeight:'600',
                      fontSize:'15px',color: '#02BB75' }}>
                       {buttonText}
                    </Typography>:<Typography sx={{ fontWeight:'600',
                      fontSize:'15px',color: '#E56135' }}>
                       {buttonText}
                    </Typography>}
                  </button>
          </>
        }
      </CardContent>
      <CardContent className='row'>
        <Box className='col d-flex flex-row flex-md-column' 
        >
        <div className='d-flex flex-row'>

          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
          <Typography variant='p' sx={{marginLeft:'2%', width:{xs:'8em',sm:'8em',md:'8em',lg:'auto'}}} className='d-flex flex-column fw-bolder my-auto'>
            {userName}
            <MediaQuery maxWidth={768}><p style={{fontSize:'12px',fontWeight:'lighter'}}>{likes}</p></MediaQuery>
          </Typography>
        </div>
        </Box>
        <Box className='col d-flex justify-content-end'>
        <MediaQuery minWidth={768}>
                <IconButton size='small' sx={{marginRight:'10%'}} edge='end' aria-labelledby='ViewsIcon'><i class="fa fa-eye" aria-hidden="true">{likes}</i></IconButton>
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
