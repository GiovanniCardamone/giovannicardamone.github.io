import React, { JSXElementConstructor } from 'react'

import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon'

import FastifyAutoroutesIcon from '@material-ui/icons/Http'

export interface Project {
  // label: string
  url: string
  owner: string
  repo: string
  icon?: JSX.Element
}

const projects: Project[] = [
  {
    url: 'https://github.com/GiovanniCardamone/fastify-autoroutes',
    owner: 'GiovanniCardamone',
    repo: 'fastify-autoroutes',
    icon: <FastifyAutoroutesIcon />,
  },
]

export default projects

export interface GitHubProject {
  id: string //285528829
  node_id: string //'MDEwOlJlcG9zaXRvcnkyODU1Mjg4Mjk='
  name: string //'fastify-autoroutes'
  full_name: string //'GiovanniCardamone/fastify-autoroutes'
  private: boolean
  owner: {
    login: string // 'GiovanniCardamone'
    id: number //5117748
    node_id: string //'MDQ6VXNlcjUxMTc3NDg='
    avatar_url: string //'https://avatars0.githubusercontent.com/u/5117748?v=4'
    gravatar_id: string //''
    url: string //'https://api.github.com/users/GiovanniCardamone'
    html_url: string //'https://github.com/GiovanniCardamone'
    followers_url: string //'https://api.github.com/users/GiovanniCardamone/followers'
    following_url: string //'https://api.github.com/users/GiovanniCardamone/following{/other_user}'
    gists_url: string //'https://api.github.com/users/GiovanniCardamone/gists{/gist_id}'
    starred_url: string //'https://api.github.com/users/GiovanniCardamone/starred{/owner}{/repo}'
    subscriptions_url: string //'https://api.github.com/users/GiovanniCardamone/subscriptions'
    organizations_url: string //'https://api.github.com/users/GiovanniCardamone/orgs'
    repos_url: string //'https://api.github.com/users/GiovanniCardamone/repos'
    events_url: string //'https://api.github.com/users/GiovanniCardamone/events{/privacy}'
    received_events_url: string //'https://api.github.com/users/GiovanniCardamone/received_events'
    type: 'User'
    site_admin: boolean // false
  }
  html_url: string //'https://github.com/GiovanniCardamone/fastify-autoroutes'
  description: string //'Map directory structure to routes url'
  fork: boolean // false
  url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes'
  forks_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/forks'
  keys_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/keys{/key_id}'
  collaborators_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/collaborators{/collaborator}'
  teams_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/teams'
  hooks_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/hooks'
  issue_events_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/issues/events{/number}'
  events_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/events'
  assignees_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/assignees{/user}'
  branches_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/branches{/branch}'
  tags_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/tags'
  blobs_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/git/blobs{/sha}'
  git_tags_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/git/tags{/sha}'
  git_refs_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/git/refs{/sha}'
  trees_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/git/trees{/sha}'
  statuses_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/statuses/{sha}'
  languages_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/languages'
  stargazers_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/stargazers'
  contributors_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/contributors'
  subscribers_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/subscribers'
  subscription_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/subscription'
  commits_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/commits{/sha}'
  git_commits_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/git/commits{/sha}'
  comments_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/comments{/number}'
  issue_comment_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/issues/comments{/number}'
  contents_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/contents/{+path}'
  compare_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/compare/{base}...{head}'
  merges_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/merges'
  archive_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/{archive_format}{/ref}'
  downloads_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/downloads'
  issues_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/issues{/number}'
  pulls_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/pulls{/number}'
  milestones_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/milestones{/number}'
  notifications_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/notifications{?since,all,participating}'
  labels_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/labels{/name}'
  releases_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/releases{/id}'
  deployments_url: string // 'https://api.github.com/repos/GiovanniCardamone/fastify-autoroutes/deployments'
  created_at: string // '2020-08-06T09:26:13Z'
  updated_at: string // '2020-08-10T17:40:24Z'
  pushed_at: string // '2020-08-10T17:07:34Z'
  git_url: string // 'git://github.com/GiovanniCardamone/fastify-autoroutes.git'
  ssh_url: string // 'git@github.com:GiovanniCardamone/fastify-autoroutes.git'
  clone_url: string // 'https://github.com/GiovanniCardamone/fastify-autoroutes.git'
  svn_url: string // 'https://github.com/GiovanniCardamone/fastify-autoroutes'
  homepage: string //''
  size: number // 141
  stargazers_count: number // 2
  watchers_count: number //2
  language: string //'JavaScript'
  has_issues: boolean // true
  has_projects: boolean // true
  has_downloads: boolean // true
  has_wiki: boolean // true
  has_pages: boolean // true
  forks_count: number // 0
  mirror_url: null
  archived: boolean // false
  disabled: boolean // false
  open_issues_count: number // 0
  license: {
    key: string // 'mit'
    name: string // 'MIT License'
    spdx_id: string // 'MIT'
    url: string // 'https://api.github.com/licenses/mit'
    node_id: string // 'MDc6TGljZW5zZTEz'
  }
  forks: number // 0
  open_issues: number // 0
  watchers: number // 2
  default_branch: boolean // 'master'
  temp_clone_token: null
  network_count: number // 0
  subscribers_count: number // 1
}
