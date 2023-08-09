import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '200px',
        bgcolor: 'var(--black-color)',
        color: 'var(--white-color)'
      }}
    >
      <Box
        component='footer'
        sx={{
          margin: 'auto'
        }}
      >
        <Typography variant='body2' textAlign={'center'}>
          {'Copyright ©'}
          {new Date().getFullYear()}
          {' Le Do Duc Anh | All rights reserved.'}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
