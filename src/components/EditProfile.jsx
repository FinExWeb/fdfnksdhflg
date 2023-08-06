import { Alert, Button, Col, Container, Row } from "reactstrap";
import InputComponent from "./InputComponent";
import UserInformation from "./UserInformation";
import { useState, useEffect } from 'react'

const EditProfile = () => {
    const [username, setUsername] = useState('')
    const [userfam, setUserfam] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userpass, setUserpass] = useState('')
    const [error, setError] = useState({
        name: false,
        surname: false,
        email: false,
        password: false
    })

    const checkinputs = () => {
        const chek = {
            name: username === '' ? true : false,
            surname: userfam === '' ? true : false,
            email: useremail === '' ? true : false,
            password: userpass === '' ? true : false
        }
        console.log(chek)
        setError(error)
    }

    useEffect(() => { }, [])

    return (
        <>
            <div className="edit-profile">
                <h4 className="text-center navbar--text--card--edit--profil">Ma'lumotlarni yangilash</h4>

                <UserInformation name={username} fam={userfam} email={useremail} />
                <Container fluid>
                    <Row>
                        <Col md='6'>
                            <InputComponent error={error.name} element_id={'name'} setUserHook={setUsername} userhook={username} element_type={'text'} label={'Ismingizni kiriting.'} place={'Yangi ism'} />
                            <InputComponent error={error.email} element_id={'email'} setUserHook={setUseremail} userhook={useremail} element_type={'email'} label={'Emailingizni kiriting.'} place={'Yangi email'} />
                        </Col>
                        <Col md='6'>
                            <InputComponent error={error.surname} element_id={'surname'} setUserHook={setUserfam} userhook={userfam} element_type={'text'} label={'Familiyangizni kiriting.'} place={'Yangi familiya'} />
                            <InputComponent error={error.password} element_id={'password'} setUserHook={setUserpass} userhook={userpass} element_type={'password'} label={'Parolingizni kiriting.'} place={'Yangi parol'} />
                        </Col>
                    </Row>
                    <Container>
                        <Button type="submit" onClick={() => checkinputs()} className="button-active w-100">Yuborish</Button>
                    </Container>
                </Container>

            </div>
            <Alert color="danger text-center my-4">
                Diqqat! <br />
                O’zgartirilgan ma’lumotlarni <br />
                orqaga qaytarib bo’lmaydi!
            </Alert>
        </>
    )
}
export default EditProfile;