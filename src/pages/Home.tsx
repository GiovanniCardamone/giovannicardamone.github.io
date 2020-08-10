import React from 'react'

import socials from '../assets/socials'

import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useHomeStyle = makeStyles((theme) => ({
  userbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
  socialsbox: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  username: {
    marginLeft: theme.spacing(1),
  },
}))

interface HomeProps {}

export default function Home({}: HomeProps) {
  const classes = useHomeStyle()

  return (
    <Box className={classes.userbox}>
      <Box>
        <Avatar src='https://avatars0.githubusercontent.com/u/5117748?s=460&u=d3e29f822ff593d2e796a3c69f3ef58dabf0733a&v=4' />
        <Typography variant='subtitle2' className={classes.username}>
          Giovanni
          <br />
          Cardamone
        </Typography>
      </Box>
      <Paper className={classes.socialsbox}>
        <Box>
          {socials.map((social, socialIndex) => (
            <IconButton key={socialIndex} aria-label={social.name} onClick={() => window.open(social.url, '_blank')}>
              <SvgIcon style={{ cursor: 'pointer' }} component={social.icon} />
            </IconButton>
          ))}
        </Box>
        <Typography align='center' variant='body2'>
          Follow me!
        </Typography>
      </Paper>
    </Box>
  )
}
