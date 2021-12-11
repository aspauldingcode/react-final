import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from 'react-bootstrap/InputGroup';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import ReadCrud from './ReadCrud';
// import CreateCrud from './CreateCrud';
// import UpdateCrud from './UpdateCrud';
// import DeleteCrud from './DeleteCrud';

export default class CrudAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Username: '',
            UsersList: []
        };
    }
    componentDidMount() {
        this.fetchData();
        console.log(this.props.CrudRESTENDPOINT);
    }

    fetchData() {
        let data;
        fetch(this.props.CrudRESTENDPOINT + '/username')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                this.setState({ UsersList: data });
            })
        return data;
    }

    postData() {
        const data = {
            name: this.state.Name,
            username: this.state.Username
        };
        console.log(data);
        console.log(this.props.CrudRESTENDPOINT);
        (async () => {
            const rawResponse = await fetch(this.props.CrudRESTENDPOINT + '/username', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const content = await rawResponse.json();

            console.log(content);
            this.fetchData();
        })()
    }

    deleteData() {
        fetch(this.props.CrudRESTENDPOINT + '/username')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                this.data = data;
                if (data && data.length > 0) {
                    for (let i = 0; i < this.data.length; i++) {
                        console.log(this.data[i]);
                        (async () => {
                            await fetch(this.props.CrudRESTENDPOINT + '/username/'
                                // eslint-disable-next-line
                                +
                                `${this.data[i]._id}`, {
                                method: 'DELETE',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                }
                            });
                        })()
                    }
                }
                this.setState({ UsersList: [] });
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <Form>
                            {/* Toggle 'Add a New User' to 'Change User info' */}
                            <h3>Add a New User</h3>
                            <Form.Group className="mb-3">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name">
                                    <Form.Control
                                        onChange={(e) => this.setState({ Name: e.target.value })}
                                        placeholder="Name" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                                    Username
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <Form.Control id="inlineFormInputGroupUsername" placeholder="7am_Alex" onChange={(e) => this.setState({ Username: e.target.value })} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                {/* Toggle 'Add User' to 'Update User' */}
                                <Button className="mb-3" variant="success" onClick={() => this.postData()}>Add User</Button>
                                <> </>
                                <Button className="mb-3" variant="danger" onClick={() => this.deleteData()}>Delete ALL Users!</Button>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={8}>

                        {/* Add a table for CRUD Input */}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    {/* <th>id</th> */}
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.UsersList.map((l, idx) => (<tr key={l._id}>
                                    <td>{idx + 1}</td>
                                    {/* <td>{l._id}</td> */}
                                    <td>{l.name}</td>
                                    <td>@{l.username}</td>
                                    <td><Button variant='outline-secondary'>
                                        <PencilSquare />
                                    </Button>
                                    <> </>
                                        <Button variant='outline-danger'>
                                            <TrashFill />
                                        </Button></td>
                                </tr>))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container >
        )
    }
}