import * as React from 'react'

import anime from 'animejs'


import useWindowSize from '../hooks/useWindowSize'


interface DImageProps {
    src: string
    alt: string
    children: JSX.Element
    loaded: boolean
}

const DImage: React.FunctionComponent<DImageProps> = (props: DImageProps) => {
    
    const image = React.createRef<HTMLDivElement>()

    const { width, height } = useWindowSize()

    React.useEffect(() => {
        if (!image.current) return

        const img = image.current as HTMLImageElement

        props.loaded && anime({
            targets: image.current,
            scale: 1,
            opacity: 1,
            easing: 'easeOutQuad',
            delay: 100,
            duration: 500,
        })


        function handleMouseOver(e: MouseEvent)
        {
            if (props.loaded)  {
                const { clientX, clientY } = e
                const x = clientX 
                const y = clientY
                const o = width / 100

                const ay = -(0.5 - (x / width)) * o
                const ax = (0.5 - (y / height)) * o
            

                img.style.transform = `perspective(500px) rotateX(${ax}deg) rotateY(${ay}deg)`
            }
        }

        document.addEventListener('mousemove', handleMouseOver, { passive: true })

        return () => {
            document.removeEventListener('mousemove', handleMouseOver)
        }

    }, [props.loaded, image, width, height])
    
    return (
        <div ref={image} style={{ opacity: 0, transform: 'scale(.8)' }}>
            <img src={props.src} alt={props.alt} style={{ display: 'block', width: '16vw', height: '16vw', willChange: 'transform', pointerEvents: 'none' }}/>
            {props.children}
        </div>
    )
}

export default DImage