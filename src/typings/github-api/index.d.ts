declare module 'github-api' {
  type Auth = { username: string; password: string } | { token: string }
  type Options = {}

  export default class GitHub {
    new(auth?: Auth)

    getGist(id?: string)
    getIssues(user: string, repo: string)
    getOrganization(organization: string): Organization
    getProject(id: string): Project
    getRepo(user: string, repo: string)
    getTeam(teamId: string)
    getUser(user?: string): User
  }

  export class Gist {}

  export class Issue {}

  export class Markdown {}

  export class Organization {}

  export class Project {}

  export class RateLimit {}

  export class Repository {}

  export class Search {}

  export class Team {}

  export class User {
    listRepos(options?: {}, cb?: CallableFunction): Promise<any>
  }
}
