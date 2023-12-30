import { useEffect, useRef } from "react"

export default function Battle( { date, html, img} ) {
    
    const classes = { 
        width : "400px",
        height: "300px"
    }

    const ref = new useRef();
    useEffect(() => {
    ref.current.contentDocument.body.style.overflow = 'hidden';
    }, [])
        
    return (
    
    <div className='mx-4 p-4 mb-4 rounded-lg border-2 border-slate-800 w-fit text-left bg-slate-900'>
        <p className='text-slate-100 text-xl mb-4' > {date} </p>
        <div className='flex gap-4 text-right'>
            <div>
                <div className='border-4 overflow-hidden rounded-md border-slate-950'>
                    <iframe ref={ref} className="overflow-hidden" height={300} width={400} src={html}></iframe>
                </div>
                <p className='text-slate-400 text-md mx-4'> image recreated with HTML and CSS </p>
            </div>
            <div>
                <div className='border-4 rounded-md border-slate-950'>
                <img style={classes} src={img+""}></img>
                </div>
                <p className='text-slate-400 text-md mx-4'> Image to recreate </p>
            </div>
        </div>
    </div>)
}