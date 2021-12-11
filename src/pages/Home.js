import React from 'react';
import Card from 'react-bootstrap/Card';
import CrudURL from '../components/CrudURL';

// My final's Homepage
export default function Home() {
    return (
        <div className="container">
            <br />
            <br />
            <Card>
                <br />
                <h1>Home of Final Forums!</h1>
                <Card.Header>CRUD App</Card.Header>
                <Card.Body className='wide-body'>
                    {/* CRUD APP HERE, load CRUD URL first! */}
                        <CrudURL />
                </Card.Body>
                <br />
            </Card>
        </div>
    );
}
