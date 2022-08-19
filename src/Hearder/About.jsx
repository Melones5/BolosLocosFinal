import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './About.css'

import valores from '../assets/valores.jpg'

const About = () => {
  return (
    <div>
      <Container className='py-5'>
        <Row className='py-5'>
          <h1 className='text-center bg-nosotros h1-about py-2'>Quienes Somos</h1>
          <Col>
            <p className='text-center'>Bolos Locos es una empresa argentina que desde el año 2022 se dedica a la diversión y el entretenimiento de las familias.
            La idea nació de cuatro amigos en busca de algo novedoso y atractivo para su ciudad.
            Esperamos crecer año tras año brindando el mejor servicio a nuestros clientes, ampliando la oferta de productos y manteniendo siempre la calidad del lugar.</p>
          </Col>
        </Row>
        <Row className='py-5'>
          <h1 className='text-center bg-nosotros h1-about py-2'>Nuestra misión</h1>
          <Col>
            <p className='text-center'>Nuestra misión es ofrecer entretenimiento y diversión a personas sin límite de edad. Que salgan de su rutina disfrutando de actividades con sus seres queridos en el único lugar con esta propuesta recreativa en la ciudad.</p>
          </Col>
        </Row>
        <Row className='py-5'>
          <h1 className='text-center bg-nosotros h1-about py-2'>Nuestra visión</h1>
          <Col>
            <p className='text-center'>Nuestra visión es satisfacer a nuestros clientes para que quieran regresar y poder ser una empresa reconocida en el rubro del entretenimiento.</p>
          </Col>
        </Row>
     
        <Row className='py-5 '>
          <h1 className='text-center bg-nosotros h1-about py-2'>Nuestros Valores</h1>
          <Col xs={12} md={8} lg={6} className='py-5'>
            <img src={valores} style={{width: '100%'}} alt="valores" className='rounded'/>
          </Col>
          <Col xs={12} md={8} lg={6} className='py-5'>
            <ul>
              <p>Los valores que nos caracterizan y serán un permanente reflejo de nuestro emprendimiento y sus trabajadores son:</p>
              <li><h5 className='text-right'><i class="fa-solid fa-handshake-simple"></i> Responsabilidad.</h5></li>
              <li><h5 className='text-right'><i class="fa-solid fa-people-group"></i> Cooperación y trabajo en equipo.</h5></li>
              <li><h5 className='text-right'><i class="fa-solid fa-hand-peace"></i> Respeto a las personas.</h5></li>
              <li><h5 className='text-right'><i class="fa-solid fa-arrow-up-short-wide"></i> Perseverancia.</h5></li>
            </ul>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default About