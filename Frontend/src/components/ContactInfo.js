import React, { Component } from 'react';
import MapLocation from './MapLocation';
import Form from './Form';

class ContactInfo extends Component {

    render() {
        return (
            <div className= 'contactInfo' >
                <Form className="form1" />

                <div className= "ContactInfo-container" >
                    <div className= "contactInformation">
                    <h2 className="ContactInfoh2" >Contact</h2>
                    <i class="fas fa-phone"></i>
                    
                    <a className= "phone" href="tel:+9611123456"> Call: 961 1 123456</a>
                    <br /><i class="fab fa-facebook-f"></i>
                    <a className= "facebook" href="//www.facebook.com/sports.wear" target="_blank">
                    Sports Wear</a>
                    <br /><i class="fas fa-map-marker-alt"></i><a className= "address" href="https://goo.gl/maps/NRVmt45555hxqhEp8" target="_blank">
                    Zalka Highway, Abou Afif Building, Facing Abou Koko, Zalka, Matn</a>   
                       </div>
                    <div className= "map-location">  
                        <MapLocation    />
                    </div>
                    <div>
                    <i class="far fa-copyright" className="Copyright">2019 Sportswear. All Rights Reserved.</i>
                    </div>
                </div>
            </div>
        )
}
}

export default ContactInfo;