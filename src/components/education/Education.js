import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

export default class Education extends React.Component {

    componentDidMount() {
        console.log('carregou a parte da educação!')
    }

    render() {

        return (
            <div>
                <div className="education">
                    <Row>
                        <Col md={6} className="educationCol">
                            <h1 className="educationTitle">Formação</h1>
                            <Col className="Card">
                                <Card className="educationCardAdjust">
                                    <Card.Body>
                                        <Card.Title>2017-2019 Ensino Médio</Card.Title>
                                        <Card.Text>
                                            Centro de Ensino Médio 03 de Taguatinga Sul
                                 </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card className="educationCardAdjust">
                                    <Card.Body>
                                        <Card.Title>2020 Curso de APIs</Card.Title>
                                        <Card.Text>
                                            Curso de NodeJs, Express, MongoDB e SQL.
                                 </Card.Text>
                                        <Button variant="info">
                                            <a href="/assets/certificadoUdemy.jpg" download="Certificado.jpg" className="educationButton"> Certificado</a>
                                        </Button>{' '}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col>

                        <Col md={6} className="educationCol">
                            <h1 className="educationTitle">Experiência</h1>
                            <Col className="Card">
                                <Card className="educationCardAdjust">
                                    <Card.Body>
                                        <Card.Title>Dez.2018- Dez.2019 Estágiario Ensino Médio</Card.Title>
                                        <Card.Text>
                                            Tribunal de Contas do Distrito Federal
                                 </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}