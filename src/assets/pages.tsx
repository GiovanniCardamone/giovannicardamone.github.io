import React, { JSXElementConstructor } from 'react'

import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon'

import HomeIcon from '@material-ui/icons/Home'
import Home from '../pages/Home'

import ContactMeIcon from '@material-ui/icons/RecentActors'

import CurriculumIcon from '@material-ui/icons/InsertDriveFile'

interface Page {
  name: string
  url: string
  icon: JSXElementConstructor<OverridableComponent<SvgIconTypeMap<{}, 'svg'>>>
  Component: JSXElementConstructor<any>
}

const pages: Page[] = [
  {
    name: 'Home',
    url: '/home',
    icon: () => <HomeIcon />,
    Component: (props) => <Home {...props} />,
  },
  {
    name: 'Contact Me',
    url: '/contacts',
    icon: () => <ContactMeIcon />,
    Component: (props) => <Home {...props} />,
  },
  {
    name: 'Curriculum',
    url: '/curriculum',
    icon: () => <CurriculumIcon />,
    Component: (props) => <Home {...props} />,
  },
]

export default pages
