import React, { Fragment, useState, useMemo } from 'react'
import clsx from 'clsx'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  Avatar,
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Hidden,
} from '@material-ui/core'

import Curriculum from ':routes/Curriculum'
import Home from ':routes/Home'
import Contact from ':routes/Contact'
import NoMatch from ':routes/NoMatch'

import HomeIcon from '@material-ui/icons/Home'
import CurriculumIcon from '@material-ui/icons/InsertDriveFile'
import ContactIcon from '@material-ui/icons/AlternateEmail'

import avatar from './images/avatar2.jpg'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

// import GitHub, { User } from 'github-api'

const drawer = (theme: Theme) => {
  return {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    [theme.breakpoints.down('sm')]: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      marginLeft: '0.5em',
    },
    chips: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexGrow: 1,
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    drawer: {
      flexShrink: 0,
      ...drawer(theme),
    },
    drawerLink: {
      color: 'inherit',
      textDecoration: 'none',
    },
    drawerPaper: {
      ...drawer(theme),
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

export default function App() {
  const classes = useStyles()

  const chips = useMemo(() => {
    return [
      {
        icon: <GitHubIcon style={{ color: '#24292e' }} />,
        text: 'GitHub',
        link: 'https://github.com/GiovanniCardamone',
      },
      {
        icon: <LinkedInIcon style={{ color: '#0e76a8' }} />,
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/giovanni-cardamone-41306973/',
      },
      {
        icon: <FacebookIcon style={{ color: '#3b5998' }} />,
        text: 'Facebook',
        link: 'https://www.facebook.com/G.Cardamone2',
      },
      {
        icon: <InstagramIcon style={{ color: '#cd486b' }} />,
        text: 'Instagram',
        link: 'https://instagram.com/giovannicardamone/',
      },
    ]
  }, [])

  const routes = useMemo(() => {
    return [
      {
        icon: <HomeIcon />,
        text: 'Home',
        path: '/home',
        page: <Home />,
      },
      {
        icon: <CurriculumIcon />,
        text: 'Curriculum',
        path: '/curriculum',
        page: <Curriculum />,
      },
      {
        icon: <ContactIcon />,
        text: 'Contatti',
        path: '/contact',
        page: <Contact />,
        separator: true,
      },
    ]
  }, [])

  const handleChipClick = (link: string) => {
    window.location.href = link
  }

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Avatar src={avatar} />
            <Typography variant='h6' noWrap className={classes.title}>
              Giovanni Cardamone
            </Typography>
            <Hidden mdDown>
              <div className={classes.chips}>
                {chips.map(({ icon, text, link }, index) => (
                  <Chip key={index} icon={icon} label={text} onClick={() => handleChipClick(link)} />
                ))}
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {routes.map(({ icon, text, path, separator }, index) => (
                <Fragment>
                  <Link key={path} to={path} className={classes.drawerLink}>
                    <ListItem button>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                  {separator ? <Divider /> : null}
                </Fragment>
              ))}
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>

            {routes.map(({ path, page }, index) => (
              <Route key={index} path={path}>
                {page}
              </Route>
            ))}

            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}
