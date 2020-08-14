import * as React from 'react'



function debounce<T>(func: Function, wait = 0, immediate = false): (args?: T) => any
{
    let timeout: number | null = null
    
    return function(): any 
    {
        //@ts-ignore
        const self = this
        const args = arguments

		const later = function() {
			timeout = null
			!immediate && func.apply(self, args)
        }
        
        const callNow = immediate && !timeout
        
        timeout && clearTimeout(timeout)
        //@ts-ignore
        timeout = setTimeout(later, wait)
        
		callNow && func.apply(self, args)
	}
}



function useWindowSize() 
{ 
    function getSize() 
    {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
  
    const [windowSize, setWindowSize] = React.useState(getSize)  

    React.useEffect(() => {
        
        function handleResize() 
        { 
            setWindowSize(getSize()) 
        }

        const dHandleResize = debounce(handleResize, 100)
  
        window.addEventListener('resize', dHandleResize, { passive: true })

        return () => window.removeEventListener('resize', dHandleResize) 
    }, [])
  
    return windowSize
}

export default useWindowSize