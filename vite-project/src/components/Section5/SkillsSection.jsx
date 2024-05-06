import React from 'react'
import  '../Section5/SkillsSection.css';


const SkillsSection = () => {
    let education = [
        {
            p:'2014-2018',
            title:'Wordpress and End Developer',
            subtitle:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem'
        },
        {
            p:'2014-2018',
            title:'Wordpress and End Developer',
            subtitle:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem'
        },
        {
            p:'2014-2018',
            title:'Wordpress and End Developer',
            subtitle:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem'
        },
        {
            p:'2014-2018',
            title:'Wordpress and End Developer',
            subtitle:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem'
        },
        {
            p:'2014-2018',
            title:'Wordpress and End Developer',
            subtitle:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem'
        },
        {
            p:'2014-2018',
            title:'Wordpress and End Developer',
            subtitle:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem'
        },
        
    ]
    let skills = [
        {
            skill:'HTMl',
        },
        {
            skill:'Python',
        },
        {
            skill:'CSS',
        },
        {
            skill:'Photoshop',
        },
        {
            skill:'JavaScript',
        },
        {
            skill:'Figma',
        }
    ]
  return (
    <React.Fragment>
        <section className='skillsect'>
            <div className="container">
                <div className='skillsheading'>
                    <div className='skillsheading-first'>
                        <h5>EDUCATION & SKILL</h5>                       
                    </div>
                    <div className='skillsheading-two'>
                    <h2>Showcasing your talent <br /> amplifying your impact</h2>
                    </div>
                </div>
                <div className='skillscards'>
                    {
                        education.map((item)=>{
                            return(
                                <div className='skillcard col-6'>
                                    <p className='skillcard-year'>{item.p}</p>
                                    <h3>{item.title}</h3>
                                    <p className='skillcard-subtitle'>{item.subtitle}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='languagecards'>
                {
                        skills.map((item)=>{
                            return(
                                <div className='languagecard col-6'>
                                    <p>{item.skill}</p>
                                    <div className='languagecard-lowerline'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default SkillsSection