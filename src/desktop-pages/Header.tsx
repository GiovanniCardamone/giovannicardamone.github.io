import * as React from 'react'
import pups from '@pups/js'

import anime from 'animejs'

const Bio: React.FunctionComponent<{}> = () => {

    const title = React.useRef<HTMLHeadingElement>(null)
    const subtitle = React.useRef<HTMLHeadingElement>(null)

    React.useEffect(() => {
        if (title.current && subtitle.current)
        {
            anime({ 
                targets: title.current, 
                translateY: 0,
                skewY: 0,
                opacity: 1,
                easing: 'spring(1, 80, 11, 0)',
                duration: 1000
            })
            
            anime({ 
                targets: subtitle.current, 
                translateY: -1,
                easing: 'spring(1, 40, 11, 0)',
                opacity: 1,
                delay: 800,
                duration: 1000
            })
        }
    }, [])


    return (
        <header>
            <hgroup style={TitleContainer}>
                <h1 id="title" ref={title} style={Title}>Giovanni Cardamone,</h1>
                <h3 id="subtitle" ref={subtitle} style={SubTitle}>software developer.</h3>
            </hgroup>
        </header>
    )
}


const TitleContainer: React.CSSProperties = {
    whiteSpace: 'nowrap',
    gridColumn: `1 / span 2`,
    height: '6vw',
    overflow: 'hidden'
}

const Title: React.CSSProperties = {
    margin: 0,
    display: 'inline-block',
    fontWeight: 900,
    fontSize: '5vw',
    transformOrigin: 'left bottom',
    transform: 'translateY(75%) skewY(8deg)',
    opacity: 0
}

const SubTitle: React.CSSProperties = {
    margin: `0 0 0 ${pups.ms(0)}`,
    display: 'inline-block',
    fontWeight: 100,
    fontSize: '1.3vw',
    transform: 'translateY(-25%)',
    opacity: 0
}


export default Bio

