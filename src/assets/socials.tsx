import React, { JSXElementConstructor } from 'react'

import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon'

interface Social {
  name: string
  url: string
  icon: JSXElementConstructor<OverridableComponent<SvgIconTypeMap<{}, 'svg'>>>
}

const socials: Social[] = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/G.Cardamone2',
    icon: () => <FacebookIcon htmlColor='#3b5998' />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/giovanni-cardamone-41306973/',
    icon: () => <LinkedInIcon htmlColor='#0e76a8' />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/giovannicardamone/',
    icon: () => <InstagramIcon htmlColor='#cd486b' />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/GiovanniCardamone',
    icon: () => <GitHubIcon htmlColor='#24292e' />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/GiovanniCardam2',
    icon: () => <TwitterIcon htmlColor='#1a91da' />,
  },
]

export default socials
