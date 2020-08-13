import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export default class Projects extends React.Component {

    componentDidMount() {
        console.log('Projetos foi executado');
    }

    render() {

        return (
            <div>
                <div className="projects">
                    <div className="projectsTitle">
                        <h1>Projetos</h1>
                    </div>

                    <Container>
                        <Row className="projectsBox ">
                            <Card className="projectsCard">
                                <img src="/img/RickAndMorty.png" className="projectsCardImg" alt="Rick And Morty" />
                                <Card.Body>
                                    <Card.Title className='projectsCardTitle'>Rick And Morty</Card.Title>
                                    <Card.Text className='projectsCardText'>
                                        Fiz esse site usando a API do Rick and Morty e ReactJs.
                                        Ele te da inforções sobre os personagens do desenho, como gênero, origem,
                                        episódios onde aparece, etc...
                                    </Card.Text>
                                    <Button variant="info">
                                        <a href="https://leoxhp.github.io/RickAndMorty/" className='projectsButton' target="_blank">Veja</a>
                                    </Button>{' '}
                                </Card.Body>
                            </Card>

                            <Card className="projectsCard">
                                <img src="/img/RickAndMorty.png" className="projectsCardImg" alt="Rick And Morty" />
                                <Card.Body>
                                    <Card.Title className='projectsCardTitle'>Rick And Morty App</Card.Title>
                                    <Card.Text className='projectsCardText'>
                                        Fiz esse App para o mobile usando a API do Rick and Morty e React-Native.
                                        Ele te da inforções sobre os personagens do desenho, como gênero, origem,
                                        episódios onde aparece, etc...
                                    </Card.Text>
                                    <Button variant="info">
                                        <a href="https://leoxhp.github.io/RickAndMorty/" className='projectsButton' target="_blank">Veja</a>
                                    </Button>{' '}
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </div>
            </div>


        )
    }

}