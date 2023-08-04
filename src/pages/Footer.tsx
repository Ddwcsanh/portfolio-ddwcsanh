import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Copyright() {
  return (
    <Typography variant='body2' textAlign={'center'}>
      {'Copyright ©'}
      {new Date().getFullYear()}
      {' Le Do Duc Anh | All rights reserved.'}
    </Typography>
  )
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '200px'
      }}
    >
      <Box
        component='footer'
        sx={{
          margin: 'auto'
        }}
      >
        <Copyright />
      </Box>
    </Box>
  )
}
