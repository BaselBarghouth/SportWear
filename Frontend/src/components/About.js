import React, { Component } from 'react';


class About extends Component {

    render() {
        return (
            <div className='about-missin-vision' >
            <div className="about">
            <h1>About</h1>
                    <p style={{textAlign:'justify',paddingLeft:'20px'}} >We at the International Sports Institute envision a time when sports will return to its rightful place of honor.

Our Aim is to fight for Sports, Physical Education, & Wellness to assume more integral and respected positions in the educational enterprise.

For it may well be that sports, physical education, and wellness, when infused in society the appropriate way, may provide the best possible path to personal enlightenment, dedication, discipline, and social transformation.</p>
                </div>
    
                    <div className='mission'>
                    <h1>Mission</h1>
                    <p  style={{textAlign:'justify',paddingLeft:'20px'}}>The International Sports Institute is committed to creating a better future through sports, physical education, and wellness. We are committed to enhancing the quality of life for our society, and to making it available to all.</p>
                    </div>
                    <div className='vision'>
                    <h1>Vision</h1>
                    <p style={{textAlign:'justify',paddingLeft:"20px"}}>Guided by International policy directions, and using our professional expertise in the sports industry, the International Sports Institute's vision is to return the sports industry to its rightful place of honor, by examining the full spectrum of sport, physical education, and wellness by providing state of the art programs and support systems with world class results.</p>
                    </div>
               
            </div>
        )
}
}

export default About;