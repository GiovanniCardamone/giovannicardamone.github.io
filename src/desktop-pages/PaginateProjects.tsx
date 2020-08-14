import * as React from 'react'

import Project from './Project'
import anime from 'animejs'

import { Project as ProjectType } from './../hooks'


interface IState {
    currentPage: number
    lastWheel: number
}

const PaginateProjects: React.FunctionComponent<{ projects: Array<ProjectType> }> = (props: { projects: Array<ProjectType> }) => {

    const [state, setState] = React.useState<IState>({ currentPage: 0, lastWheel: 0 })

    const pages = Math.ceil(props.projects.length / 3)
    const itemWidth = 100 / 3 / pages

    function next() {
        if (state.currentPage < pages - 1) {
            setState({
                currentPage: state.currentPage + 1,
                lastWheel: performance.now()
            })
            return true
        }
        return false
    }

    function prev() {
        if (state.currentPage > 0) {
            setState({
                currentPage: state.currentPage - 1,
                lastWheel: performance.now()
            })
            return true
        }
        return false
    }
    
    React.useEffect(() => {

        anime({
            targets: '#wrapper',
            translateX: -(state.currentPage * 100 / pages)+ '%',
            easing: 'easeOutSine',
            duration: 500
        })

    }, [state.currentPage,  pages])

    React.useEffect(() => {
        let wheel = false

        function handleWheel(e: WheelEvent)
        {
            if (!wheel)
            {
                const now = performance.now()
                if (now - state.lastWheel > 500)
                {
                    let r = e.deltaY > 0 ? next() : prev()
                    wheel = r
                }
            }
        }

        document.addEventListener('wheel', handleWheel, { passive: false })
        
        return () => document.addEventListener('wheel', handleWheel, { passive: false })

    }, [state, next, prev])

    return (
        <div className="projects">
            <div style={{ overflow: 'hidden', width: '100%' }}>
                <div className="projects__wrapper" id="wrapper" style={{ width: (pages * 100) + '%' }}>
                    {props.projects.map((p, index) => (
                        <div key={index} style={{ width: itemWidth + '%' }}>
                            <Project {...p} />
                        </div>
                    ))}
                </div>
            </div>
            { pages > 1 && (
                <div className="projects__arrows">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{opacity: state.currentPage === 0 ? 0.4 : 1}} onClick={() => prev()} viewBox="0 0 19.651 18.436"><g fill="none" stroke="#fff"><path data-name="Line 1" d="M19.652 9.274H1.14"/><path data-name="Path 9" d="M8.235 17.805L1.287 9.258 8.235.627"/></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{opacity: state.currentPage >= pages - 1 ? 0.4 : 1}} onClick={() => next()} viewBox="0 0 19.651 18.436"><g fill="none" stroke="#fff"><path data-name="Line 1" d="M0 9.162h18.512"/><path data-name="Path 9" d="M11.417.631l6.948 8.547-6.948 8.631"/></g></svg>
                </div>
            )}
        </div>
    )
}



export default PaginateProjects