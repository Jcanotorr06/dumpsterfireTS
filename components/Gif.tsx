import React from 'react'
import Image from 'next/image'

const Gif = () => {
    return (
        <div className="gifContainer">
            <Image src="/Gif.gif" id="gif" height="200" width="200" alt=""/>
            <div id="ovalParent">
                <div id="oval"/>
            </div>
        </div>
    )
}

export default Gif