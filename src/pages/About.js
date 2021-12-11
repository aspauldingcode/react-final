import React from "react";
import Card from 'react-bootstrap/Card';
import NewDimension from "../components/NewDimension";


export default function About() {

    return (
        <div className='container'>
            <br />
            <br />
            <Card>
                <br />
                <h1>About Me</h1>
                <Card.Header>Alex Spaulding</Card.Header>
                <Card.Body>
                    <p>I am currently a Front-End Stack Developer Student at Promineo Tech, until this assignment is complete. This is my Final!</p>
                    <p>This Project uses the React.js Library. I enjoy building computers and repairing phones. I am also a music artist. Check out my Spotify!</p>
                </Card.Body>

                {/* SPOTIFY iframe Component here */}
                <NewDimension />
                <br />
            </Card>
        </div>
    );
}