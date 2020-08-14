import * as React from 'react'
import pups from '@pups/js'

import anime from 'animejs'
import MottoComponent from '../components/Motto'


const Motto: React.FunctionComponent<{ motto: string, loaded: boolean }> = (props: { motto: string, loaded: boolean }) => {

    React.useEffect(() => {
        props.loaded && anime({
            targets: '#motto',
            scale: 1,
            opacity: 1,
            easing: 'easeOutQuad',
            duration: 800,
            delay: 0,
        })
    }, [props.loaded])

    return (
        <div id="motto" style={{ padding: '2rem 2rem 0', transform: 'scale(.9)', opacity: 0 }}>
            <div style={{position: 'relative'}}>
                <img 
                    src="https://avatars0.githubusercontent.com/u/5117748" alt="Giovanni Cardamone"  
                    style={{ display: 'block', width: '30vw', height: '30vw' }}
                    />
            
                <div style={{ position: 'absolute', top: '60%', right: 0, transform: 'translate(0, -50%)', maxWidth: '60vw', fontSize: '.8rem' }}>
                    <MottoComponent motto={props.motto} nopadding />
                </div>
            </div>
        </div>
    )
}



export default Motto

