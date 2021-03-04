import { useState, useEffect } from 'react'

interface GitHubProjects {
  name: string
  description?: string
  stargazers_count: number
  forks_count: number
  html_url: string
}

export interface Project {
  name: string
  description: string
  stars: number
  forks: number
  url: string
}

interface ITimeItem<T> {
  saved: number
  value: T
}

type GetItem<T> = () => T | undefined
type SetItem<T> = (item: T) => void

function useTimeCacheValue<T>(key: string): [GetItem<T>, SetItem<T>] {
  const expire = 60 * 60 * 1000

  return [
    () => {
      const item = localStorage.getItem(key)

      if (item === null) {
        // console.log(`item ${key} is null`)
        return
      }

      const timeItem = JSON.parse(item) as ITimeItem<T>

      if (Date.now() > timeItem.saved + expire) {
        // console.log(`item ${key} is expired`)
        return
      }

      return timeItem.value
    },
    (item: T) => {
      localStorage.setItem(
        key,
        JSON.stringify({ saved: Date.now(), value: item } as ITimeItem<T>)
      )
    }
  ]
}

export function useBioRepos(
  gistId: string
): [string | undefined, string[] | undefined] {
  const [readBio, saveBio] = useTimeCacheValue<string>('bio')
  const [readRepos, saveRepos] = useTimeCacheValue<string[]>('repos')

  const [bio, setBio] = useState(readBio())
  const [repos, setRepos] = useState(readRepos())

  useEffect(() => {
    if (bio === undefined || repos === undefined) {
      // console.info('making request bio')
      fetch(`https://api.github.com/gists/${gistId}`)
        .then((r) => r.json())
        .then((r) => {
          if (r && r.files) {
            saveBio(r.files.Bio.content)
            setBio(r.files.Bio.content)

            const repos = r.files.Repos.content
              .split('\n')
              .filter((repo: string) => repo.length)
              .filter((repo: string) => repo.includes('/'))
            saveRepos(repos)
            setRepos(repos)
          }
        })
    } else {
      // console.info('[CACHE VALUE] bio')
    }
  }, [bio, gistId, saveBio])

  return [bio, repos]
}

export function useMotto(): string | undefined {
  const [readMotto, saveMotto] = useTimeCacheValue<string>('motto')
  const [motto, setMotto] = useState(readMotto())

  useEffect(() => {
    if (motto === undefined) {
      // console.info('making request motto')
      fetch('https://api.github.com/users/GiovanniCardamone')
        .then((r) => r.json())
        .then((r) => {
          saveMotto(r.bio)
          setMotto(r.bio)
        })
    } else {
      // console.info('[CACHE VALUE] motto')
    }
  }, [motto, saveMotto])

  return motto
}

export function useProjects(projectsIds: string[]): Project[] {
  const [readProjects, saveProjects] = useTimeCacheValue<Project[]>('projects')
  const [projects, setProjects] = useState(readProjects())

  useEffect(() => {
    if (projects === undefined || projects.length !== projectsIds.length) {
      // console.info('making request projects')
      Promise.all(
        projectsIds.map((projectId) =>
          fetch(`https://api.github.com/repos/${projectId}`)
        )
      ).then((repos) =>
        Promise.all(repos.map((repo) => repo.json())).then(
          (informations: GitHubProjects[]) => {
            const proj = informations.map((info) => ({
              name: info.name,
              description: info.description || '',
              stars: info.stargazers_count,
              forks: info.forks_count,
              url: info.html_url
            }))

            saveProjects(proj)
            setProjects(proj)
          }
        )
      )
    } else {
      // console.info('[CACHE VALUE] projects')
    }
  }, [projects, saveProjects, projectsIds])

  // @ts-ignore
  return projects
}
