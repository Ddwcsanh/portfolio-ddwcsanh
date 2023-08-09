import { Box } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

const Contact = () => {
  return (
    <section id='Contact'>
      <Fade direction='up' triggerOnce duration={1200}>
        <Box height={'calc(100vh - 80px)'}></Box>
      </Fade>
    </section>
  )
}

export default Contact
