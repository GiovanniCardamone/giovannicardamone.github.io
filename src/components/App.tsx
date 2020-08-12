import React, { Fragment, useState, useEffect } from 'react'
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

import pages from './assets/pages'
import projects, { Project, GitHubProject } from './assets/projects'

import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SvgIcon from '@material-ui/core/SvgIcon'
import Badge from '@material-ui/core/Badge'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

import makeStyles from '@material-ui/core/styles/makeStyles'

import NoMatch from './pages/NoMatch'

import DefaultProjectIcon from '@material-ui/icons/Computer'

const drawerWidth = 240
const useAppStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {},
  avatar: {
    marginRight: theme.spacing(1),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerlink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  drawerSeparator: {
    backgroundColor: theme.palette.grey[100],
  },
  content: {
    flexGrow: 1,
    height: '100%',
    marginLeft: drawerWidth,
    // padding: theme.spacing(),
  },
}))

interface StarProps {
  project: Project
}

const ProjectItem = ({ project }: StarProps) => {
  const [info, setInfo] = useState<GitHubProject>()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production')
      fetch(`https://api.github.com/repos/${project.owner}/${project.repo}`)
        .then((r) => r.json())
        .then((r) => {
          setInfo(r)
        })
  }, [project])

  return (
    <ListItem button onClick={() => window.open(project.url, '_blank')}>
      {info !== undefined ? (
        <Fragment>
          <ListItemIcon>
            <Badge badgeContent={info.stargazers_count} color='secondary'>
              {project.icon ? project.icon : <DefaultProjectIcon />}
            </Badge>
          </ListItemIcon>
          <ListItemText primary={info.name} />
        </Fragment>
      ) : (
        <Box width={1}>
          <Skeleton variant='text' animation='wave' height={10} width='96%' />
          <Skeleton variant='text' animation='wave' height={10} width='38%' />
        </Box>
      )}
    </ListItem>
  )
}

interface AppProps {}

export default function App() {
  const classes = useAppStyle()

  return (
    <div className={classes.root}>
      <HashRouter>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Avatar
              className={classes.avatar}
              src='https://avatars0.githubusercontent.com/u/5117748?s=460&u=d3e29f822ff593d2e796a3c69f3ef58dabf0733a&v=4'
            />
            <Typography variant='h6'>Giovanni Cardamone</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {pages.map((page, pageIndex) => (
                <Link key={pageIndex} to={page.url} className={classes.drawerlink}>
                  <ListItem button>
                    <ListItemIcon>
                      <SvgIcon component={page.icon} />
                    </ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <Box className={classes.drawerSeparator}>
              <Typography align='center' variant='subtitle2'>
                MY GITHUB PROJECTS
              </Typography>
            </Box>
            <List>
              {projects.map((project, projectIndex) => (
                <ProjectItem key={projectIndex} project={project} />
              ))}
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>

            {pages.map(({ url, Component }, pageIndex) => (
              <Route key={pageIndex} exact path={url} render={() => <Component />} />
            ))}

            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </div>
  )
}
