import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export default class Skills extends React.Component {

    componentDidMount() {
        console.log('Skills foi executado')
    }

    render() {

        return (
            <div>
                <div className="skills">
                    <h1 className="skillsTitle">Habilidades</h1>
                    <Container>
                        <Row className='skillsBox'>
                            <img className="skillsIcons" src="/img/icons/rest.png" alt="ApiRest Logo" />
                            <img className="skillsIcons" src="/img/icons/js.png" alt="JavaScript Logo" />
                            <img className="skillsIcons" src="/img/icons/css.png" alt="Css Logo" />
                            <img className="skillsIcons" src="/img/icons/html.png" alt=" Html Logo" />
                            <img className="skillsIcons" src="/img/icons/bootstrap.png" alt=" BootStrap Logo" />
                            <img className="skillsIcons" src="/img/icons/jquery.png" alt=" Jquery Logo" />
                            <img className="skillsIcons" src="/img/icons/react2.png" alt=" ReactJs Logo" />
                            <img className="skillsIcons" src="/img/icons/reactNative.png" alt=" React-Native Logo" />
                            <img className="skillsIcons" src="/img/icons/nodejs.svg" alt="NodeJs Logo" />
                            <img className="skillsIcons" src="/img/icons/express.png" alt="ExpressJs Logo" />
                            <img className="skillsIcons" src="/img/icons/mongo.png" alt="MongoDb Logo" />
                            <img className="skillsIcons" src="/img/icons/mysql.png" alt="Mysql Logo" />
                            <img className="skillsIcons" src="/img/icons/Git.png" alt="Git Logo" />
                        </Row>
                    </Container>
                </div>
            </div>
        )

    }

}