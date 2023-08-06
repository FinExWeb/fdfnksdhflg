import { Col, Container, Row, } from "reactstrap";
import UserInfor from '../assets/Frame.svg';

const UserInformation = ({ name, fam, email }) => {
    return (
        <Container fluid className="old-user-info">
            <h5 className="old--user--info">Xozirgi ma’lumotlaringiz</h5>
            <div className="w-50 m-3 old-user-profil-crd">
                <Row className="rw d-flex justify-content-center align-items-center">
                    <Col md='2' className="image-old-user">
                        <img src={UserInfor} alt="user info logo" />
                    </Col>
                    <Col md='9' className="mx-2  old-user--content position-relative">
                        <h6>{name} {fam}</h6>
                        <p>{email}</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default UserInformation;