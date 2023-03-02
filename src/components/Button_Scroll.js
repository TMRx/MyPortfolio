import React from 'react';
import { useEffect, useState } from 'react';


function Button_Scroll(){
    const [Button_Scroll, setButton_Scroll] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setButton_Scroll(true)
            } else{
                setButton_Scroll(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <div className= "App">

            {Button_Scroll && (
                <button style={{
                    color: "white",
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "70px",
                    width: "50px",
                    fontSize: "50px",
                    backgroundColor: '#923ab266',
                    borderRadius: '90px'
                }}
                onClick={scrollUp}
                >⇧</button>
            )}
        </div>
    )
}

export default Button_Scroll;