import * as React from 'react'

import anime from 'animejs'


import { Project as ProjectType } from './../hooks'

import PaginateProjects from './PaginateProjects'
import { setTo, unset } from '../components/Cursor'

const Section: React.FunctionComponent<{ bio: string, projects: Array<ProjectType>, loaded: boolean }> = (props: { bio: string, projects: Array<ProjectType>, loaded: boolean }) => {

    React.useEffect(() => {

        if (props.loaded)
        {
            anime({
                targets: '#bio path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeOutSine',
                duration: 500,
                opacity: 1,
                delay: (e, i) => 33 + i * 100,
            })

            anime({
                targets: '#myprojects path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeOutSine',
                opacity: 1,
                duration: 500,
                delay: (e, i) => 33 + i * 100,
            })
        }

        const links = document.querySelectorAll('#bio_text a')

        Array.prototype.forEach.call(links, a => {
            a.addEventListener('mouseover', () => { setTo(a as HTMLElement, { radius: '4px' }) }, { passive: true })
            a.addEventListener('mouseout', () => { unset() })
        })
    }, [props.loaded])

    return (
        <section className="center-section" style={{ visibility: props.loaded ? 'visible' : 'hidden', whiteSpace: 'pre' }}>
            <section>
                <svg id="bio" className="h3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.72 11.96">
                    <path d="M9.12 8.28c0 1.68-1.19 3-3.62 3h-5V.62h4.8c2.43 0 3.54 1.19 3.54 2.75 0 1.11-.68 2.03-1.92 2.36 1.39.21 2.2 1.14 2.2 2.55zM3.04 2.41V5h1.59c1.14 0 1.58-.58 1.58-1.3 0-.75-.48-1.29-1.58-1.29H3.04zm3.44 5.66c0-.83-.56-1.38-1.62-1.38H3.04V9.5H4.8c1.15-.01 1.68-.62 1.68-1.43z"/>
                    <path d="M10.59.5h2.51v2.19h-2.51V.5zm.03 3.27h2.42v7.51h-2.42V3.77z"/>
                    <path d="M14.43 7.51c0-2.58 1.68-3.92 3.89-3.92 2.22 0 3.9 1.34 3.9 3.92s-1.68 3.95-3.9 3.95c-2.21 0-3.89-1.37-3.89-3.95zm5.39 0c0-1.55-.56-2.25-1.5-2.25-.93 0-1.49.71-1.49 2.25 0 1.53.55 2.28 1.49 2.28s1.5-.75 1.5-2.28z"/>
                </svg>

                <div className={ props.loaded ? 'appear-a-8 appear' : 'appear'}>
                    <div id="bio_text" dangerouslySetInnerHTML={{ __html: props.bio }}></div>
                </div>
            </section>

            <section style={{ alignSelf:  'center' }}>
                <svg className="h3" id="myprojects" viewBox="0 0 66.32 11.03">
                    <path d="M0,0.1h2.78l1.57,5.22c0.12,0.41,0.17,0.73,0.2,1.03h0.02c0.04-0.3,0.1-0.64,0.22-1.06L6.3,0.1h2.82v8.52H7.27v-5.8 c0-0.32,0.01-0.64,0.05-0.96H7.28C7.26,2.09,7.17,2.45,7.1,2.67L5.38,8.61h-1.7L1.9,2.67C1.81,2.45,1.74,2.09,1.71,1.86H1.68 C1.7,2.15,1.73,2.47,1.73,2.81v5.8H0V0.1z"/>
                    <path d="M10.44,10.96V9.55c0.36,0.05,0.5,0.06,0.67,0.06c0.64,0,0.98-0.23,1.15-0.78l0.08-0.25l-2.29-5.96h2.09l1.06,3.65 c0.07,0.25,0.11,0.44,0.13,0.7h0.04c0.01-0.2,0.06-0.4,0.14-0.7l0.97-3.65h1.93l-2.15,6.26c-0.53,1.56-1.44,2.16-3.03,2.16 C11.05,11.03,10.75,11,10.44,10.96z"/>
                    <path d="M26.73,2.77c0,1.69-1.19,2.75-3.11,2.75h-1.7v3.09H19.9V0.1h3.78C25.52,0.1,26.73,1.15,26.73,2.77z M24.61,2.83 c0-0.8-0.52-1.27-1.43-1.27h-1.26V4.1h1.26C24.08,4.1,24.61,3.63,24.61,2.83z"/>
                    <path d="M31.51,2.47h0.12v1.83c-0.12-0.01-0.22-0.01-0.36-0.01c-0.52,0-0.9,0.13-1.16,0.36c-0.38,0.36-0.48,0.9-0.48,1.51v2.45H27.7 v-6h1.81v1.55C29.82,3.08,30.48,2.47,31.51,2.47z"/>
                    <path d="M32.09,5.6c0-2.06,1.34-3.13,3.11-3.13c1.78,0,3.12,1.07,3.12,3.13c0,2.06-1.34,3.15-3.12,3.15 C33.43,8.76,32.09,7.66,32.09,5.6z M36.39,5.6c0-1.24-0.44-1.8-1.2-1.8c-0.74,0-1.19,0.56-1.19,1.8c0,1.22,0.44,1.82,1.19,1.82 C35.95,7.42,36.39,6.82,36.39,5.6z"/>
                    <path d="M38.26,10.96V9.58c0.2,0.02,0.4,0.02,0.52,0.02c0.56,0,0.77-0.22,0.77-1.01V2.61h1.92v6.12c0,1.44-0.54,2.3-2.3,2.3 C38.87,11.03,38.44,11,38.26,10.96z M39.5,0h2v1.75h-2V0z"/>
                    <path d="M48.6,6.04h-4.16c0.01,0.82,0.58,1.33,1.38,1.33c0.59,0,1.03-0.29,1.31-0.84l1.42,0.65c-0.48,0.98-1.5,1.57-2.75,1.57 c-1.98,0-3.18-1.14-3.18-3.08c0-1.97,1.18-3.2,3.05-3.2c1.88,0,2.94,1.09,2.94,3V6.04z M46.74,4.92c0-0.85-0.4-1.31-1.12-1.31 c-0.74,0-1.16,0.5-1.19,1.36h2.3V4.92z"/>
                    <path d="M49.43,5.61c0-1.96,1.21-3.14,3.18-3.14c1.57,0,2.61,0.77,2.84,2.12l-1.81,0.37c-0.11-0.71-0.49-1.08-1.08-1.08 c-0.73,0-1.18,0.62-1.18,1.67c0,1.13,0.43,1.77,1.19,1.77c0.6,0,0.97-0.4,1.08-1.12l1.8,0.4c-0.22,1.32-1.33,2.15-2.87,2.15 C50.69,8.76,49.43,7.52,49.43,5.61z"/>
                    <path d="M55.73,2.61h1.04V1.18l1.92-0.74v2.18h1.43V3.9h-1.43v2.34c0,0.6,0.3,0.91,0.88,0.91c0.23,0,0.37-0.02,0.55-0.06v1.52 c-0.44,0.08-0.74,0.12-1.09,0.12c-1.6,0-2.25-0.73-2.25-2.04V3.9h-1.04V2.61z"/>
                    <path d="M60.64,7.32l1.12-0.84c0.42,0.65,1.07,0.97,1.9,0.97c0.62,0,0.93-0.19,0.93-0.53c0-0.36-0.19-0.49-0.85-0.59l-0.86-0.12 c-1.29-0.19-1.91-0.83-1.91-1.85c0-1.16,0.98-1.9,2.64-1.9c1.21,0,2.23,0.44,2.72,1.19l-1,0.9c-0.44-0.5-1.04-0.8-1.79-0.8 c-0.58,0-0.84,0.16-0.84,0.49c0,0.29,0.18,0.44,0.71,0.52l1.07,0.17c1.28,0.18,1.79,0.82,1.79,1.85c0,1.22-0.97,1.98-2.65,1.98 C62.29,8.76,61.21,8.26,60.64,7.32z"/>
                </svg>

                <div className={ props.loaded ? 'appear-a-9 appear' : 'appear'}>
                    <PaginateProjects projects={props.projects} />
                </div>
            </section>
        </section>
    )
}



export default Section