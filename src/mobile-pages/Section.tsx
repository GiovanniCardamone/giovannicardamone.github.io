import * as React from 'react'

import anime from 'animejs'


import { Project as ProjectType } from './../hooks'

import Project from '../desktop-pages/Project'
import Motto from './Motto'

interface ISection {
    bio: string
    motto: string
    projects: Array<ProjectType>
    loaded: boolean
}

const Section: React.FunctionComponent<ISection> = (props: ISection) => {

    React.useEffect(() => {

        if (props.loaded)
        {
            anime({
                targets: '#bio path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeOutSine',
                duration: 500,
                opacity: 1,
                delay: (e, i) => 300 + i * 100,
            })

            anime({
                targets: '#myprojects path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeOutSine',
                opacity: 1,
                duration: 500,
                delay: (e, i) => 1600 + i * 100,
            })
        }

    }, [props.loaded])

    return (
        <section style={{ visibility: props.loaded ? 'visible' : 'hidden' }}>
            
            <Motto motto={props.motto} loaded={props.loaded} />

            <section>
                <svg id="bio" className="h3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.72 11.96">
                    <path d="M9.12 8.28c0 1.68-1.19 3-3.62 3h-5V.62h4.8c2.43 0 3.54 1.19 3.54 2.75 0 1.11-.68 2.03-1.92 2.36 1.39.21 2.2 1.14 2.2 2.55zM3.04 2.41V5h1.59c1.14 0 1.58-.58 1.58-1.3 0-.75-.48-1.29-1.58-1.29H3.04zm3.44 5.66c0-.83-.56-1.38-1.62-1.38H3.04V9.5H4.8c1.15-.01 1.68-.62 1.68-1.43z"/>
                    <path d="M10.59.5h2.51v2.19h-2.51V.5zm.03 3.27h2.42v7.51h-2.42V3.77z"/>
                    <path d="M14.43 7.51c0-2.58 1.68-3.92 3.89-3.92 2.22 0 3.9 1.34 3.9 3.92s-1.68 3.95-3.9 3.95c-2.21 0-3.89-1.37-3.89-3.95zm5.39 0c0-1.55-.56-2.25-1.5-2.25-.93 0-1.49.71-1.49 2.25 0 1.53.55 2.28 1.49 2.28s1.5-.75 1.5-2.28z"/>
                </svg>

                <div style={{ textAlign: 'center' }} className={ props.loaded ? 'appear-a-8 appear' : 'appear'}>
                    <div id="bio_text" dangerouslySetInnerHTML={{ __html: props.bio }}></div>
                </div>
            </section>

            <section style={{ display: 'grid', gridTemplateRows: 'repeat(2, max-content)', gridGap: '1.618rem', margin: '3rem 0 4rem', alignContent: 'center', justifyItems: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', alignItems: 'center', justifyItems: 'flex-end', fontSize: '.9rem' }}>
                    <div className={ props.loaded ? 'appear-a-3 appear' : 'appear' } style={{ lineHeight: 1, textAlign: 'center' }}>
                        <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.4)', marginBottom: '.2rem' }}>Contact me at</div>
                        <a href="mailto:g.cardamone2@gmail.com">g.cardamone2@gmail.com</a>
                    </div>
                    <div className={ props.loaded ? 'appear-a-3 appear' : 'appear' }>
                        <a href="http://giovannicardamone.github.io/curriculum/" target="_blank" rel="noopener noreferrer" className="a-button" id="download_cv">Curriculum Vitae</a>
                    </div>
                </div>
                <div className="socials">
                    <div className={ props.loaded ? 'appear-a-3 appear' : 'appear' }>
                        <a href="https://github.com/GiovanniCardamone" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.607 24"><path d="M12.3 0a12.3 12.3 0 00-3.886 23.977c.615.113.84-.267.84-.592 0-.293-.011-1.263-.017-2.29-3.421.743-4.144-1.451-4.144-1.451a3.262 3.262 0 00-1.366-1.8c-1.118-.763.085-.748.085-.748A2.582 2.582 0 015.7 18.365a2.619 2.619 0 003.58 1.021 2.63 2.63 0 01.781-1.643c-2.731-.311-5.6-1.367-5.6-6.081a4.763 4.763 0 011.265-3.3A4.432 4.432 0 015.841 5.1s1.032-.33 3.384 1.262a11.647 11.647 0 016.159 0c2.347-1.59 3.38-1.262 3.38-1.262a4.413 4.413 0 01.123 3.256 4.749 4.749 0 011.265 3.3c0 4.726-2.878 5.767-5.619 6.072a2.931 2.931 0 01.835 2.277c0 1.645-.017 2.971-.017 3.376 0 .327.224.71.847.59A12.306 12.306 0 0012.3 0z" fill="#fff"/></svg>
                        </a>
                    </div>
                    <div className={ props.loaded ? 'appear-a-4 appear' : 'appear' }>
                        <a href="https://www.linkedin.com/in/giovanni-cardamone-41306973/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.849 24"><path data-name="Path 3" d="M12.826 10.828v-.043l-.028.043z" fill="#fff"/><path data-name="Path 4" d="M22.086 0H1.762A1.741 1.741 0 000 1.719v20.562A1.741 1.741 0 001.762 24h20.324a1.742 1.742 0 001.763-1.719V1.719A1.742 1.742 0 0022.086 0zM7.229 20.091h-3.6V9.254h3.6zm-1.8-12.318h-.023a1.877 1.877 0 11.046-3.74 1.878 1.878 0 11-.024 3.744zm14.79 12.318h-3.6v-5.8c0-1.456-.521-2.45-1.824-2.45a1.973 1.973 0 00-1.849 1.318 2.466 2.466 0 00-.118.879v6.052h-3.6s.047-9.821 0-10.837h3.6v1.534a3.577 3.577 0 013.247-1.79c2.37 0 4.147 1.549 4.147 4.878v6.215z" fill="#fff"/></svg>
                        </a>
                    </div>
                    <div className={ props.loaded ? 'appear-a-5 appear' : 'appear' }>
                        <a href="https://twitter.com/GiovanniCardam2" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path data-name="Subtraction 1" d="M12 24A12 12 0 013.515 3.515a12 12 0 1116.97 16.97A11.921 11.921 0 0112 24zm-7.68-7.176a8.964 8.964 0 0013.8-7.552c0-.143 0-.281-.009-.41a6.323 6.323 0 001.569-1.629 6.26 6.26 0 01-1.81.5 3.146 3.146 0 001.386-1.743 6.278 6.278 0 01-2 .766 3.162 3.162 0 00-2.3-1h-.081a3.16 3.16 0 00-2.988 3.869 8.976 8.976 0 01-6.5-3.293 3.152 3.152 0 00.976 4.208 3.156 3.156 0 01-1.428-.4v.041a3.159 3.159 0 002.529 3.089 3.155 3.155 0 01-1.424.054 3.151 3.151 0 002.943 2.189 6.287 6.287 0 01-3.912 1.349 6.511 6.511 0 01-.75-.037z" fill="#fff"/></svg>
                        </a>
                    </div>
                    <div className={ props.loaded ? 'appear-a-6 appear' : 'appear' }>
                        <a href="https://instagram.com/giovannicardamone/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path data-name="Path 1" d="M12 6.6a5.345 5.345 0 105.345 5.345A5.355 5.355 0 0012 6.6zm0 8.769a3.424 3.424 0 113.424-3.424A3.44 3.44 0 0112 15.369z" fill="#fff"/><circle data-name="Ellipse 1" cx="1.608" cy="1.608" r="1.608" transform="translate(16.703 4.128)" fill="#fff"/><path data-name="Path 2" d="M22.065 1.984A6.891 6.891 0 0016.984 0H7.016A6.629 6.629 0 000 7.016v9.919a6.962 6.962 0 002.032 5.177A7.061 7.061 0 007.065 24h9.871a7.145 7.145 0 005.081-1.887A6.927 6.927 0 0024 16.984V7.016a6.936 6.936 0 00-1.935-5.032zm-.194 15a4.728 4.728 0 01-1.4 3.532 5 5 0 01-3.532 1.258H7.065a5 5 0 01-3.532-1.258 4.864 4.864 0 01-1.306-3.581V7.016a4.824 4.824 0 011.305-3.532 4.921 4.921 0 013.532-1.258h9.968a4.824 4.824 0 013.532 1.306 4.993 4.993 0 011.306 3.484v9.968z" fill="#fff"/></svg>
                        </a>
                    </div>
                    <div className={ props.loaded ? 'appear-a-7 appear' : 'appear' }>
                        <a href="https://www.facebook.com/G.Cardamone2" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4a4.139 4.139 0 00-4-4H4a4.139 4.139 0 00-4 4v16a4.139 4.139 0 004 4h8v-9.067H9.067v-4H12V9.387c0-2.693 2.027-5.12 4.507-5.12h3.227v4h-3.227a.983.983 0 00-.773 1.067v1.6h4v4h-4V24H20a4.139 4.139 0 004-4z" fill="#fff" data-name="Group 1"/></svg>
                        </a>
                    </div>
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

                <div className={ props.loaded ? 'appear-a-9a appear' : 'appear'}>
                    {props.projects.map(p => (
                        <Project {...p} key={p.name} />
                    ))}
                </div>
            </section>
        </section>
    )
}



export default Section