import { useState, useEffect } from "react"

const useScrollListener = (element,callback) => {
    const [currentScroll, setcurrentScroll] = useState(0)
    

  useEffect(() => {
    const onElementScroll = () => {
        let scroll = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
        setcurrentScroll(scroll)
    }
    
    if(element.current)
    {        
        console.log('item curr',element.current);
        element.current.removeEventListener("scroll", onElementScroll)
        element.current.addEventListener("scroll", onElementScroll,{passive: true})
        
        callback(currentScroll)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => element.current.removeEventListener("scroll", onElementScroll)
    }
    else{
        if(document){
            let currentElement = null;
            switch(element)
            {
                case "window":                  
                    window.addEventListener("scroll", onElementScroll,{passive: true})
                    callback(currentScroll)
                    currentElement = window
                    //return () => window.removeEventListener("scroll", onElementScroll)                    
                break;
                case "document":                    
                    document.addEventListener("scroll", onElementScroll,{passive: true})
                    callback(currentScroll)
                    currentElement = document
                    //return () => document.removeEventListener("scroll", onElementScroll)                    
                break;                
                default:
                    let item = document.getElementsByTagName(element)[0] || document.getElementsByClassName(element)[0]
                    || document.getElementById(element)                                        
                    item.addEventListener("scroll", onElementScroll,{passive: true})
                    callback(currentScroll)
                    currentElement = item
                    //return () => item.removeEventListener("scroll", onElementScroll)                    
                break;
            }
            if(currentElement!==null) return () => currentElement.removeEventListener("scroll", onElementScroll)
            
        }
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScroll])

  return { currentScroll }
}

export default useScrollListener
