import './style.css'

import pic from '../../assets/main-picture.jpg'

import { React } from 'react'

import useStrings from '../../common/hooks/useStrings'

export default function About() {

    const strings = useStrings() 
    
    return (
        <section className='container' id='about'>            
            <div className='column text' data-aos="fade-up">
                <h1 className='gradient-text'>
                    <span className='light'>Alan Serafim </span> <br />
                    {strings.title}
                </h1>
                <p className='smaller'>{strings.subtitle}</p>
            </div>
            <div className='column wrapper-pic' data-aos="fade-down">
                <div className='pic'>
                    <div className='line-element' />
                    <img src={pic} alt='Imagem de Alan Nunes Serafim' id='main-pic' />
                </div>
            </div>
        </section>
    )
}