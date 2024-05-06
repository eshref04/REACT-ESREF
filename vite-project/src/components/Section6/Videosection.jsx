import React from 'react'
import "../../components/Section6/Videosection.css"

const Videosection = () => {
     let videos = [
        {
            image:<img src="https://zyan.vercel.app/images/portfolio/1.jpg" alt="portfolio" ></img>
        },
        {
            image:<img src="https://zyan.vercel.app/images/portfolio/2.jpg" alt="portfolio" ></img>
        },
        {
            image:<img src="https://zyan.vercel.app/images/portfolio/3.jpg" alt="portfolio" width='636px' height='550px'></img>
        },
        {
            image:<img src="https://zyan.vercel.app/images/portfolio/4.jpg" alt="portfolio" width='636px'></img>
        }
    ]
  return (
    <React.Fragment>
        <section className='videosect'>
            <div className="container">
                <div className='videosheading'>
                    <div className='videosheading-first'>
                        <h5>MY RECENT PORTFOLIO</h5>                       
                    </div>
                    <div className='videosheading-two'>
                    <h2>Elevate your brand to new <br /> heights with our portfolio expertise</h2>
                    </div>
                </div>
                <div className="videocards">
                    <div className='videocards__cont' style={{display:"flex",alignItems:"center",justifyContent:"center", gap:"15px",width:"100%",marginBottom:"10px"}}>
                        <div className='videocard'style={{width:"70%"}} >
                        <a><img src="https://zyan.vercel.app/images/portfolio/1.jpg" alt="portfolio" ></img></a>
                        <div class="text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
                        </div>
                    <div className='videocard' style={{width:"30%"}}>
                                    <a><img src="https://zyan.vercel.app/images/portfolio/2.jpg" alt="portfolio" ></img></a>
                                    <div class="text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
                                </div>
                            </div>
                    <div className='videocards__cont' style={{display:"flex",alignItems:"center",justifyContent:"center", gap:"15px",width:"100%"}}>
                    <div className='videocard' style={{width:"50%",height:"100%"}}>
                                    <a><img src="https://zyan.vercel.app/images/portfolio/3.jpg" alt="portfolio" width='636px' height='550px'></img></a>
                                    <div class="text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
                                </div>
                    <div className='videocard' style={{width:"50%",height:"100%"}}>
                                    <a><img src="https://zyan.vercel.app/images/portfolio/4.jpg" alt="portfolio" width='636px'></img></a>
                                    <div class="text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
                                </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
export default Videosection