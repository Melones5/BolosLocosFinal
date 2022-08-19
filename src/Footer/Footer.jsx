import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import imgLogo from '../assets/logo2-modified.png'
import imgCdelu from '../assets/logomuni.png'

const Footer = () => {
  return (
    <>
      <footer className='footer-body'>
        <Container className="ps-4 pe-4">
          <Row>
            <Col xs={12} md={8} lg={2} className="py-2 center">
              <img src={imgLogo} widht="100" height="100" alt="logo" />
            </Col>
            <Col xs={12} md={8} lg={2}>
              <p className='h5 py-3 footer-p'>Bolos Locos</p>
              <ul className='footer-ul'>
                <li>Trabajá con nosotros</li>
                <li>Blog Bolos Locos</li>
                <li>Políticas de Calidad</li>
              </ul>
            </Col>
            <Col xs={12} md={8} lg={2}>
              <p className='h5 py-3 footer-p'>Servicios</p>
              <ul className='footer-ul'>
                <li>Bowling</li>
                <li>Comida</li>
                <li>Eventos</li>
              </ul>
            </Col>
            <Col xs={12} md={8} lg={2}>
              <p className='h5 py-3 footer-p'>Horarios</p>
              <ul className='footer-ul'>
                <li>Martes a Jueves</li>
                <li>4:00 pm - 2:00 am</li>
                <br></br>
                <li>Viernes, Sábado y Domingo</li>
                <li>2:00 pm - 2:00 am</li>
              </ul>
            </Col>
            <Col xs={12} md={8} lg={2}>
              <p className='h5 py-3 footer-p'>Seguinos</p>
              <ul className='footer-ul'>
                <li> <a href='https://www.facebook.com/' target="_blank" title="Facebook" className='footer-brand'><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                <li> <a href='https://www.instagram.com/' target="_blank" title="Instagram" className='footer-brand'><i class="fa-brands fa-instagram"></i> Instagram</a></li>
              </ul>
            </Col>

            <Col xs={12} md={8} lg={2} className="py-2 center">
              <img src={imgCdelu} widht="100" height="100" alt="logo" />
            </Col>

          </Row>
          <Row>
            <Col className='text-center py-3 text-white'>
              <p className='p-footer'>Copyright &copy; Bolos Locos</p>
              <p className='p-footer'>Todos los derechos reservados</p>
              <p className='p-footer'>Sitio desarrollado por el Melons</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer