import React from 'react'
import { Container, Col, Row, Carousel, Form, Button } from 'react-bootstrap';
import './Contact.css'

function Contact() {
  return (
    <Container className='py-5'>
      <Row>
        <Col xs={12} md={8} lg={6}>
          <h2 className='text-center'><i class="fa-solid fa-message"></i> Escríbenos</h2>
          <p className='py-2 p-contact'>Si te interesa recibir noticias nuestras, promociones, descuentos, o quieres dejarnos tus comentarios, quejas o reclamos, dejános tus datos, nosotros te respondemos!</p>
        </Col>
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Form.Group className="mb-3 form-label" controlId="formBasicEmail">
              <Form.Label>Nombre*</Form.Label>
              <Form.Control type="email" placeholder="Su nombre" />
            </Form.Group>

            <Form.Group className="mb-3 form-label" controlId="exampleForm.ControlInput1">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="juan@example.com" />
            </Form.Group>

            <Form.Group className="mb-3 form-label" controlId="formBasicEmail">
              <Form.Label>Asunto*</Form.Label>
              <Form.Control type="email" placeholder="Ej: descuentos" />
            </Form.Group>


            <Form.Group className="mb-3 form-label" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comentarios / Preguntas*</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="outline-info" className='btn contact-button'>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact