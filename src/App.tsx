import * as React from 'react'

import CursorComponent from './components/Cursor'
import MobileDetect from 'mobile-detect'

import SectionDesktop from './desktop-pages/Section'
import AsideDesktop from './desktop-pages/Aside'
import HeaderDesktop from './desktop-pages/Header'

import HeaderMobile from './mobile-pages/Header'
import SectionMobile from './mobile-pages/Section'

import { useBioRepos, useMotto, useProjects } from './hooks'
import useWindowSize from './hooks/useWindowSize'

const App: React.FunctionComponent<{}> = () => {
  const md = new MobileDetect(window.navigator.userAgent)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const [bMobile, setbMobile] = React.useState<boolean>(md.isPhoneSized())

  const { width } = useWindowSize()

  React.useEffect(() => {
    const m = md.isPhoneSized()

    if (m != bMobile) setbMobile(m)
  }, [width])

  const [bio, repos] = useBioRepos('41a9a7b9dc848db63608a20384d94128')
  const motto = useMotto()
  const projects = useProjects(repos || [])

  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1200)
  }, [])

  return bMobile ? (
    <main className='mobile' id='main'>
      <HeaderMobile />
      <SectionMobile
        motto={motto || ''}
        bio={bio || ''}
        loaded={loaded}
        projects={projects || []}
      />
    </main>
  ) : (
    <React.Fragment>
      <CursorComponent />
      <main className='desktop' id='main'>
        <SectionDesktop
          bio={bio || ''}
          loaded={loaded}
          projects={projects || []}
        />
        <AsideDesktop motto={motto || ''} loaded={loaded} />
        <HeaderDesktop />
      </main>
    </React.Fragment>
  )
}

export default App
