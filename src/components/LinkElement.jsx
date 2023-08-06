import { Col, Container, Row, } from "reactstrap"
import Logo from "../assets/Logo.svg"

const LinkElement = ({ icon, text }) => {
    return (
        <Container fluid className="my-4 shadowli ">
            <Row>
                <Col md='3'>
                    <Logo logotipe={icon} />
                </Col>
                <Col md='9' className="d-flex align-items-center dashboard--text">
                    {text}
                </Col>
            </Row>
        </Container>
    )
}

export default LinkElement