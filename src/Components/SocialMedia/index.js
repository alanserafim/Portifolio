import { AiOutlineGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import './style.css'

import React from 'react'

export default function SocialMedia(){
    return(
        <div className="fixed">
            <a href="https://github.com/alanserafim" target="_blank">
                <AiOutlineGithub />
            </a>

            <a href='https://linkedin.com/in/alanserafim' target='_blank'>
                <AiFillLinkedin/>
            </a>

        </div>
    )
}