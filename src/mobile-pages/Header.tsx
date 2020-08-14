import * as React from 'react'
import pups from '@pups/js'

import anime from 'animejs'

const Bio: React.FunctionComponent<{}> = () => {


    React.useEffect(() => {
        anime({ 
            targets: '#title_1', 
            translateY: 0,
            skewY: 0,
            opacity: 1,
            easing: 'spring(1, 80, 11, 0)',
            duration: 1400
        })
        
        anime({ 
            targets: '#title_2', 
            translateY: 0,
            skewY: 0,
            opacity: 1,
            easing: 'spring(1, 80, 11, 0)',
            duration: 1400,
            delay: 100
        })
        anime({ 
            targets: '#subtitle', 
            translateY: 0,
            easing: 'spring(1, 40, 11, 0)',
            opacity: 1,
            delay: 600,
            duration: 800
        })
    }, [])


    return (
        <header>
            <hgroup style={TitleContainer}>
                <h1 id="title_1" style={Title1}>Giovanni</h1>
                <h1 id="title_2" style={Title2}>Cardamone,</h1>
                <h3 id="subtitle" style={SubTitle}>software developer.</h3>
            </hgroup>
        </header>
    )
}


const TitleContainer: React.CSSProperties = {
    position: 'relative',
    top: '-1vh',
    marginBottom: '.6rem'
}

const Title1: React.CSSProperties = {
    position: 'relative',
    left: '1.45vh',
    top: '1vh',
    fontWeight: 900,
    fontSize: '5vh',
    transformOrigin: 'left bottom',
    transform: 'translateY(50%) skewY(4deg)',
    opacity: 0
}
const Title2: React.CSSProperties = {
    fontWeight: 900,
    fontSize: '5vh',
    transformOrigin: 'left bottom',
    transform: 'translateY(50%) skewY(4deg)',
    opacity: 0
}

const SubTitle: React.CSSProperties = {
    position: 'absolute',
    right: 0,
    bottom: '-2.8vh',
    margin: `0 0 0 ${pups.ms(0)}`,
    fontWeight: 100,
    fontSize: '2.2vh',
    transform: 'translateY(-25%)',
    opacity: 0
}


export default Bio

