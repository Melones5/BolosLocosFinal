import React from 'react'
import { Container, Col, Row, Carousel, Card } from 'react-bootstrap';
import './Content.css'
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import verticalImg from '../assets/vertical.jpg'
import pizza1 from '../assets/pizza1.jpg'
import pizza2 from '../assets/pizza2.jpg'

const Content = () => {
  return (
    <div>
      <Container>
        <Carousel fade className='py-4 carousel-slider'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className='h1-home'>Bolos Locos</h1>
              <p className='p-home'>¡Tirá, derribá y ganá! Contamos con 4 pistas de bolos ¡Visitanos hoy!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-slider"
              src={slider2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p className='p1-home'>Vive la experiencia</p>
              <h1 className='h1-home'>Espacios Mágicos</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-slider"
              src={slider3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <p className='p1-home'>La mejor opción en</p>
              <h1 className='h1-home'>Pizzas</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section className='py-5'>
          <div class="container-fluid h-100">
            <div class="row w-100 align-items-center">
              <div class="col text-center">
                <button class="btn btn-home regular-button text-white">  <i class="fa-solid fa-calendar-days"></i> Reservas </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Row className='py-5'>
            <Col className='text-center' xs={12} md={4} lg={4}>
              <p className='bg-home text-white precio'>Conoce nuestros horarios</p>
              <p>Martes a Jueves</p>
              <p>4:00 pm - 2:00 am</p>
              <hr></hr>
              <p>Viernes, Sábado y Domingo</p>
              <p>2:00 pm - 2:00 am</p>
            </Col>
            <Col xs={12} md={4} lg={4} className='pb-2'>
              <div className='sombra'>
                <img
                  className="d-block w-100 rounded"
                  src={verticalImg}
                  alt="vertical imagen"
                />
              </div>
            </Col>
            <Col className='text-center' xs={12} md={4} lg={4}>
              <p className='bg-home text-white precio'>Conoce nuestros precios</p>
              <p>Martes, Jueves, Viernes</p>
              <p>$750 por persona</p>
              <hr></hr>
              <p>Miercoles</p>
              <p>$600 por persona</p>
              <hr></hr>
              <p>Sábado y Domingo</p>
              <p>$900 por persona</p>
              <hr></hr>
              <p className='p-danger'>*Por cancha máximo 6 personas*</p>
            </Col>
          </Row>
        </section>
        <Row>
          <h1 className='text-center'><i class="fa-solid fa-pizza-slice"></i> Nuestras pizzas <i class="fa-solid fa-pizza-slice"></i></h1>
          <hr className='h'></hr>
          <p className='text-center'>Desde Bolos Locos recomendamos probar</p>
          <Col xs={12} md={4} lg={6}>
            <div>
              <h2>Muzzarella __________________________ $900</h2>
              <p>La tradicional pizza muzzarella, con salsa fresca y casera, con mucho queso mozzarella de la mejor calidad y orégano.</p>
            </div>
            <div>
              <h2>Napolitana __________________________ $1100</h2>
              <p>Pizza napolitana, con salsa fresca y casera, queso muzzarella, tomates cherry y perejil, ajo, aceitunas y orégano.</p>
            </div>
            <div>
              <h2>Especial morrón _____________________ $1100</h2>
              <p>Pizza especial, con salsa fresca y casera, queso muzzarella, jamón cocido, morrón, aceitunas y orégano.</p>
            </div>
            <div>
              <h2>Especial con huevo __________________ $1200</h2>
              <p>Pizza especial, con salsa fresca y casera, queso muzzarella, jamón cocido, morrón, huevo, aceitunas y orégano.</p>
            </div>
            <div>
              <h2>Napolitana con jamón _______________ $1100</h2>
              <p>Napolitana, con salsa fresca y casera, queso muzzarella, tomates cherry y perejil, jamón cocido, ajo, aceitunas y orégano.</p>
            </div>
          </Col>
          <Col xs={12} md={4} lg={6}>
            <div className='sombra'>
              <img
                className="d-block w-100 rounded"
                src={pizza2}
                alt="vertical imagen"
              />
            </div>
            <br></br>
            <div className='sombra'>
              <img
                className="d-block w-100 rounded"
                src={pizza1}
                alt="vertical imagen"
              />
            </div>
          </Col>
        </Row>

        <hr className='h'></hr>

        <Row className='py-5'>
          <h1 className='text-center'>¿Que opinan nuestros clientes? <i class="fa-solid fa-comment"></i></h1>
          <Col xs={12} md={4} lg={3} className='py-5'>
            <Card className='sombra'>
              <Card.Header>Julio</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Lugar recomendable para divertirse a lo grande, tanto niños (no muy pequeños) cómo adultos de todas las edades. Muy buena atención y disposición. Todos los juegos y espacios Bien limpios y dispuestos en el inmenso salón.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Comentario extraído desde <cite title="Source Title">Instagram</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className='py-5'>
            <Card className='sombra'>
              <Card.Header>Macarena</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Nos re divertimos, precios dentro del standard, maquinitas, tejo, bowling...super entretenido, espacioso y limpio{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Comentario extraído desde <cite title="Source Title">Facebook</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className='py-5'>
            <Card className='sombra'>
              <Card.Header>Andrés</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Entretenimiento asegurado.
                    Con buena variedad y cantidad de juegos, ambientado con un estilo retro, el lugar invita a pasar un lindo momentos entre amigos y familia.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Comentario extraído desde <cite title="Source Title">Facebook</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className='py-5'>
            <Card className='sombra'>
              <Card.Header>Karen</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Está muy lindo el lugar y ambiente de echo es el único con variables opciones .
                    Ya sería hora de algún cambio para modernizarse y agregar algún espacio más para los bolos .Mucha espera !!!{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Comentario extraído desde <cite title="Source Title">Instagram</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className='py-5'>
            <Card className='sombra'>
              <Card.Header>Ezequiel</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Muy buen Bowling/Pool para todas las edades. Todo bastante mantenido y con precios razonables.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Comentario extraído desde <cite title="Source Title">Facebook</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className='py-5'>
            <Card className='sombra'>
              <Card.Header>Carlos</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Muy lindo ..pero no pudimos jugar a los bolos...lleno de gente{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Comentario extraído desde <cite title="Source Title">Instagram</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Content