import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';


function Galery() {
  return (
    <Container className='py-5'>
      <Row>
        <h1 className='text-center bg-nosotros h1-about'>Galería de fotos <i class="fa-solid fa-camera"></i></h1>
        <Col xs={12} md={8} lg={3}>
          <img src={slider1} style={{width: '100%'}} alt="valores" className='w-100 mb-4 rounded sombra'/>
        </Col>
        <Col xs={12} md={8} lg={3}>
          <img src={slider2} style={{width: '100%'}} alt="valores" className='w-100 mb-4 rounded sombra'/>
        </Col>
        <Col xs={12} md={8} lg={3}>
          <img src={slider3} style={{width: '100%'}} alt="valores" className='w-100 mb-4 rounded sombra'/>
        </Col>
        <Col xs={12} md={8} lg={3}>
          <img src={slider1} style={{width: '100%'}} alt="valores" className='w-100 mb-4 rounded sombra'/>
        </Col>
        <Col xs={12} md={8} lg={3}>
          <img src={slider2} style={{width: '100%'}} alt="valores" className='w-100 mb-4 rounded sombra'/>
        </Col>
        <Col xs={12} md={8} lg={3}>
          <img src={slider3} style={{width: '100%'}} alt="valores" className='w-100 mb-4 rounded sombra'/>
        </Col>
        <Col xs={12} md={8} lg={3}>
          <img src={slider2} style={{width: '100%'}} alt="valores" className='w-100 mb-4 rounded sombra'/>
        </Col>
        <Col xs={12} md={8} lg={3}>
          <img src={slider1} style={{width: '100%'}} alt="valores" className='w-100 mb-4 rounded sombra'/>
        </Col>
      </Row>
    </Container>
  )
}

export default Galery