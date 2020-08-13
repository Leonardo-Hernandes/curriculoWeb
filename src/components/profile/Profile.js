import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    fab,
    fas
);


export default class Profile extends React.Component {

    componentDidMount() {
        console.log('Profile foi executado')
    }

    componentDidUpdate() {
        console.log('atualizou o componennt');
    }

    render() {
        return (
            <div>
                <Container>
                    <div>
                        <Row>
                            <div className="hero">
                                {/* <!-- FOTO DE PREFIL --> */}
                                <img className="heroImg" src="/img/Hero-img.jpeg" alt="Hero Image"/>
                                <div className="heroName">Leonardo Hernandes</div>
                                <div className="heroIconsBox">
                                        <a className="heroIcons" href="https://www.facebook.com/leonardo.hernandes.12" target="_blank">
                                            <FontAwesomeIcon icon={['fab', 'facebook-square']}  />
                                        </a>
                                        <a className="heroIcons fab" href="https://www.instagram.com/leoo6/" target="_blank">
                                            <FontAwesomeIcon icon={['fab', 'instagram-square']}  />
                                        </a>
                                        <a className="heroIcons fab fa-linkedin" href="https://www.linkedin.com/in/leonardo-hernandes-b660591b2/" target="_blank">
                                            <FontAwesomeIcon icon={['fab', 'linkedin']}  />
                                        </a>
                                        <a className="heroIcons" href="https://github.com/leoxhp" target="_blank">
                                            <FontAwesomeIcon icon={['fab', 'github-square']}  />
                                        </a>
                                    </div>
                            </div>

                            <div className="info">
                                <div className="row infoBox">
                                    <Col md={6}>
                                        <h1 className="aboutMe">Sobre mim</h1>

                                        {/* <!-- INFORMAÇOES PESSOAIS        --> */}

                                        <div className="aboutMeText">
                                            <p className="words-font">
                                                Olá, me chamo Leonardo Hernandes, tenho 19 anos e estou a procura de
                                                iniciar minha carreira profissional.
                                                Moro em Samambaia Sul e no ensino Médio fui estágiario no Tribunal de Contas do Distrito
                                                Federal (TCDF),
                                                e agora pretendo me solidificar em uma empresa onde eu possa agregar e mostrar meu
                                                potencial.
                                                O crescimento profissional é de extrema importância para mim, pois aumejo minha
                                                independência financeira
                                                e também fazer a diferença no meio profissional.
                                            </p>
                                        </div>
                                    </Col>
                                    {/* <!-- INFORMAÇOES BASICAS --> */}
                                    <Col md={6}>
                                        <div>
                                            <h1 className="basicInfo">Informações Básicas</h1>
                                            <div className="basicInfoText">
                                                <div className="info-icons">
                                                    <div>
                                                        <span className="words-font">
                                                            <FontAwesomeIcon icon={['fas', 'house-user']}  />
                                                            <label>Endereço:</label>
                                                            Samambaia Sul (Brasília, DF).
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <span className="words-font">
                                                            <FontAwesomeIcon icon={['fas', 'birthday-cake']}  />
                                                            <label style={{ marginLeft: '6px' }}>Idade:</label>
                                                            19 anos.
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <span className="words-font">
                                                        <FontAwesomeIcon icon={['fas', 'book']}  />
                                                            <label style={{ marginLeft: '6px' }}>Linguagem:</label>
                                                            Português, Inglês(básico).
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <span className="words-font">
                                                            <FontAwesomeIcon icon={['fas', 'users']}  />
                                                            <label>Gênero:</label>
                                                            Masculino.
                                                            </span>
                                                    </div>

                                                    <div>
                                                        <span className="words-font">
                                                            <FontAwesomeIcon icon={['fas', 'envelope']}  />
                                                            <label style={{ marginLeft: '5px' }}>Email:</label>
                                                            leoxhpp@gmail.com
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <span className="words-font">
                                                            <FontAwesomeIcon icon={['fas', 'phone-alt']}  />
                                                            <label style={{ marginLeft: '5px' }}>Contato:</label>
                                                            (61)98587-5949
                                                        </span>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }

}