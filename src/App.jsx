import { GoogleApiWrapper, Map } from "google-maps-react";
import { Component } from "react";
import { useState } from "react";

class MapContainer extends Component{
    render(){
        return (
            <div>
                <h1>Bienvenue</h1>
                <Map 
                    google={this.props.google} 
                    style={{width:"100%", height:"100%"}} 
                    zoom={10} 
                    initialCenter={
                        {
                            lat: 9.509130,
                            lng: -13.712550
                        }
                    } />
            </div>
        )
    }
}

export default GoogleApiWrapper(
    {
        apiKey: "AIzaSyC_lsjzDO1Jjw55uis_0F-q1WLRckkThGQ"
    }
)(MapContainer)
