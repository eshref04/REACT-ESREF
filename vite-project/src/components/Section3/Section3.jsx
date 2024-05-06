import React from 'react'
import '../../components/Section3/Section3.css'
import AboutImg from "../../assets/about_img.jpg"

const Section3 = () => {
  return (
    <section className='section2'>
        <div className="container">
            <div className="section2Con">
                <div className="section2Left">
                    <h5>ABOUT ME</h5>
                    <h2>Transforming visions into exceptional portfolios</h2>
                    <div className='section2LeftDiv'>
                        <span></span>
                        <div>
                            <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
                            <a className='section2__btn'  href="#">Download Cv <i  class="fa-solid fa-download"></i></a>
                        </div>
                    </div>
                    
                </div>
                <div className='section2Right'>
                    <div className='greenDiv'>
                        <img src={AboutImg} alt="" />
                        <div className='greenDivPie'>
                            <i class="fa-solid fa-chart-pie"></i>
                            <div className='greenDivText'>
                                <h4>Daily Activity</h4>
                                <p>Loream is ispam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3
