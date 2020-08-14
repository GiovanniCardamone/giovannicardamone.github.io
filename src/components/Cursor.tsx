import * as React from 'react'
import pups from '@pups/js'

import anime from 'animejs'

let cursor: HTMLElement | null = null
let cursor2: HTMLElement | null = null

let setted = false

const margin = `-${pups.div(2, '2' + pups.modularScale.getUnit())}`
const size =  pups.modularScale.remToPx(pups.ms(2))
let rect = { x: 0, y: 0, width: 0, height: 0 }
export const setTo = (e: string | HTMLElement, options: any = {}) => {
    const element = typeof e === 'string' ? document.querySelector(e) : e
    if (!setted && element && cursor2)
    {
        setted = true   

        anime.remove(cursor2)
        rect = element.getBoundingClientRect()
        anime({ 
            targets: cursor2, 
            top: rect.y + 'px', left: rect.x + 'px',
            width: rect.width + 'px',
            height: rect.height + 'px',
            marginTop: 0, 
            marginLeft: 0, 
            borderRadius: options.radius || 0, 
            scale: 1,
            easing: 'easeOutQuad',
            duration: 200
        })
    }
}

export const unset = () => {
    if (setted && cursor2)
    {
        anime.remove(cursor2)

        anime({ 
            targets: cursor2, 
            width: size,
            height: size,
            marginTop: margin, 
            marginLeft: margin, 
            borderRadius: size, 
            scale: 1,
            easing: 'easeOutElastic(.7, .6)',
            duration: 300
        })
        setted = false   
    }
}

let mousable_id = 0
export const Mousable: React.FunctionComponent<{ radius?: string }> = ({ children, ...options }) => {
    
    const id = 'mousable_' +  (++mousable_id)
    return  (
        <div id={id} style={{display: 'inline-block'}} onMouseOver={ (e: React.MouseEvent) => setTo('#' + id, options) }  onMouseOut={ () => unset() }>
            {children}
        </div>
    )
}

const CursorComponent: React.FunctionComponent<{}> = () => {

    React.useEffect(() => {
        let itv = 0, downTime = 0

        function handleMove(e: MouseEvent) {
            if (!cursor || !cursor.isConnected)
            {
                cursor = document.getElementById('cursor')
                cursor2 = document.getElementById('cursor2')
            }
        
            if (cursor)
            {
                cursor.style.top = e.clientY + 'px'
                cursor.style.left = e.clientX + 'px'
                
                if (!setted)
                {
                    anime({ 
                        targets: cursor2, 
                        top: e.clientY, left: e.clientX, 
                        scale: 1,
                        easing: 'easeOutElastic(.7, .6)',
                        duration: 500
                    })   
                } else {
                    // anime.remove(cursor2)
                }
            }
        }

        function scale(time: number)
        {
            if (downTime)
            {
                if (cursor2)
                {
                    cursor2.style.transform = `scale(${1 + (time - downTime) / 100})`
                }
                
                return requestAnimationFrame(scale)
            }
        }

        function handleMouseDown(e: MouseEvent) {
            if (!setted)
            {
                downTime = performance.now()
                itv = requestAnimationFrame(scale)
            } else {
                downTime = 0
            }
        }

        function handleMouseUp(e: MouseEvent) {
            if (downTime)
            {
                anime.remove(cursor2)
                downTime = 0
                cancelAnimationFrame(itv)
                setTimeout(() => {
                    anime({ 
                        targets: cursor2, 
                        top: e.clientY, left: e.clientX, 
                        scale: 1,
                        easing: 'easeOutElastic(1.2, .4)',
                        duration: 500
                    })   
                })
            }
        }

        window.addEventListener('mousemove', handleMove, { passive: true })    
        window.addEventListener('mousedown', handleMouseDown, { passive: true })    
        window.addEventListener('mouseup', handleMouseUp, { passive: true })    

        document.documentElement.style.cursor = 'none'
        
        return () => {
            document.documentElement.style.cursor = 'auto'
            window.removeEventListener('mousemove', handleMove)    
            window.removeEventListener('mousedown', handleMouseDown)    
            window.removeEventListener('mouseup', handleMouseUp) 
        }
    }, [])

    return (
        <div id="cursors" style={{ pointerEvents: 'none' }}>
            <div style={Cursor as React.CSSProperties} id="cursor"></div>
            <div style={Cursor2 as React.CSSProperties} id="cursor2"></div>
        </div>
    )
}

const Cursor = {
    position: 'fixed',
    borderRadius: '50%',
    zIndex: 999999,
    width: pups.ms(-2),
    height: pups.ms(-2),
    marginTop: `-${pups.div(-2, '2' + pups.modularScale.getUnit())}`,
    marginLeft: `-${pups.div(-2, '2' + pups.modularScale.getUnit())}`,
    backgroundColor: '#fff',
    mixBlendMode: 'exclusion',
    top: '-100px',
    left: '-100px',
    willChange: 'top, left, transform',
    pointeEvents: 'none'
}

const Cursor2 = {
    position: 'fixed',
    borderRadius: size,
    zIndex: '999998',
    width: size,
    height: size,
    transform: `scale(1)`,
    top: '-100px',
    left: '-100px',
    marginTop: margin,
    marginLeft: margin,
    pointerEvents: 'none',
    background: '#fff',
    mixBlendMode: 'exclusion',
}

export default CursorComponent

