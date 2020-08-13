import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SweetAlert from 'sweetalert2-react';

import axios from 'axios';

import Maps from './Maps';


export default class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        message: '',
        success: false,
        successMessage: '',
        error: false,
        loading: false
    }


    componentDidMount() {
        console.log('carregou o formulario de contato')
    }

    handleChange = event => {
        this.state[event.target.name] = event.target.value;
    }

    handleSubmit = event => {
        this.save();
    }

    async save() {
        try {
            this.setState({
                loading: true,
                loadingMessage: 'enviando email'
            })

            let response = await axios.post('http://localhost:8080/send-mail', this.state)

            this.setState({
                loading: false
            })

            this.setState({
                success: true,
                successMessage: response.data.message
            })
        } catch (e) {
            let message = '';

            if (e.response) {
                message = e.response.data.message;
            } else {
                message = e.message;
            }

            this.setState({
                loading: false
            })

            this.setState({
                error: true,
                errorMessage: message
            })
        }
    }


    render() {
        return (
            <div id="CONTACT">
                <SweetAlert
                    show={this.state.success}
                    title="Sucesso"
                    type="success"
                    text={this.state.successMessage}
                    onConfirm={() => this.setState({ success: false })}
                />

                <SweetAlert
                    show={this.state.error}
                    title="Erro"
                    type="error"
                    text={this.state.errorMessage}
                    onConfirm={() => this.setState({ error: false })}
                />

                <SweetAlert
                    show={this.state.loading}
                    title="Aguarde..."
                    text={this.state.loadingMessage}
                />
                <div className="contact">
                    <div>
                        <h1 className="contactTitle">Contato</h1>
                    </div>

                    <Container>
                        <Row className="contactBox">
                            <Col md={6}>
                                <Form>
                                    <Form.Group controlId="form-contact">
                                        <Form.Label className='contactFormTitle'>Nome</Form.Label>
                                        <Form.Control className='contactFormText' name="name" type="text" placeholder="Seu Nome" onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="form-contact">
                                        <Form.Label className='contactFormTitle'>Email</Form.Label>
                                        <Form.Control className='contactFormText' name="email" type="email" placeholder="exemplo@email.com" onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="form-contact">
                                        <Form.Label className='contactFormTitle'>Mensagem</Form.Label>
                                        <Form.Control className='contactFormText' name="message" as="textarea" rows="10" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Button className="contactButton" variant="info" onClick={this.handleSubmit}>
                                        Enviar
                                </Button>

                                <Button className="contactButton" variant="info">
                                    <a className="contactButtonText" href="/assets/Curriculo.pdf" download="Curriculo-Leonardo-Hernandes">Download-Currículo</a>
                                </Button>

                                </Form>
                            </Col>

                            <Col md={6}>
                                <Maps></Maps>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </div>
        )
    }
}