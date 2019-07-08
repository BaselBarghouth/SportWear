import React, { Component } from 'react';
import MapLocation from './MapLocation';
import Form from './Form';

class ContactInfo extends Component {

    render() {
        return (
            <div className= 'contactInfo' style={{display:'flex',flexDirection:'row'}} >
                <Form style={{width:'50%'}}  />

                <div className= "ContactInfo-container" style={{width:'50%'}} >
                    <div className= "contactInformation">
                    <h2 style={{color:'white',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "22pt"}} >Contact</h2>
                    <i class="fas fa-phone"></i><a className= "phone" href="tel:+9611123456" style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  fontWeight: "normal",
  fontSize: "13pt",color:"black"}} >      Call: +961(1)123456</a>
                    <br /><i class="fab fa-facebook-f"></i><a className= "facebook" href="//www.facebook.com/sports.wear" target="_blank" style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  fontWeight: "normal",
  fontSize: "13pt",color:"black"}}>     Sports Wear</a>
                    <br /><i class="fas fa-map-marker-alt"></i><a className= "address" href="https://goo.gl/maps/NRVmt45555hxqhEp8" target="_blank" style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  fontWeight: "normal",
  fontSize: "13pt",color:"black"}} >     Zalka Highway, Abou Afif Building, Facing Abou Koko, Zalka, Matn</a>
                        
                        

                    </div>

                    <div className= "map-location" style={{paddingTop:'10px'}}  >
                        
                        <MapLocation    />

                    </div>
                    <div>
                    <i class="far fa-copyright" style={{textAlign:"center", Size:"2pt", color:"white"}}>2019 Sportswear. All Rights Reserved.</i>
                    </div>


                </div>

            </div>
        )
}
}

export default ContactInfo;