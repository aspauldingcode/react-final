import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//Created an iframe popup for selecting your link for CrudCrud API, to use with my react application.
//CrudURLModal is activated by CrudURL.js Component.
export default function CrudURLModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="info" onClick={handleShow}>
                CrudCrud API
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                {...props}
                size="lg"
                aria-labelledby="modal-center"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-center">Select your REST endpoint:</Modal.Title>
                </Modal.Header>
                <iframe src="https://www.crudcrud.com/" title="crudcrud.com api rest endpoint"></iframe>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    );
}
