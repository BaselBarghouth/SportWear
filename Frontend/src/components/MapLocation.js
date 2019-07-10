import React, { Component } from 'react';

class MapLocation extends Component {

    render() {
        return (
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13246.10797501105!2d35.56791931533066!3d33.90183387899898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3dfbb9bc3a6f%3A0x89e2d93d919d1dca!2sZalqa!5e0!3m2!1sen!2slb!4v1561360078848!5m2!1sen!2slb" width="500" height="280" frameborder="0"  allowfullscreen></iframe>

            </div>
        )
}
}

export default MapLocation;