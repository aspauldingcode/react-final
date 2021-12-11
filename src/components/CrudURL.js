import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
// eslint-disable-next-line
import CrudAPI from '../components/CrudAPI';
import CrudURLModal from "./CrudURLModal";


//CrudURL reads the url copied by the user from the CrudURLModal Component. 
/*CrudURL is activated by the Home.js page,
which requires CrudURL to make CrudAPI.js Component usable.*/
export default class CrudURL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // text: '',
            showComponent: false,
            // textValid: false,
            // submitDisabled: true
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {

        return (
            <div>
                {this.state.showComponent ?
                    < CrudAPI CrudRESTENDPOINT={this.state.submitCrudURL} /> :
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter your
                                <CrudURLModal />
                                Link:</Form.Label>

                            <div className='size-normal'>
                                <Form.Control style={{ color: "purple" }}
                                    onChange={(e) => this.setState({ submitCrudURL: e.target.value })}
                                    placeholder="https://crudcrud.com/api/" />
                            </div>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="success" onClick={this._onButtonClick}
                        // disabled={!this.state.submitDisabled}
                        >Use API URL</Button>
                    </Form>
                }
            </div>
        );
    }
}