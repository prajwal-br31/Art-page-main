import React from 'react'
import { Modal } from 'react-bootstrap'

const ImageModal = (props) => {
    return(
        <Modal show={props.show} onHide={props.Close} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <h4 align="center">{props.title}</h4>
                <img src={props.src} alt="modal"/>
                <br></br>
                <p align = "center">{props.text}</p>
            </Modal.Body>
        </Modal>
    )
}

export default ImageModal