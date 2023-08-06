import { NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'

const Link = (props) => {
    return (
        <Container fluid >
            <NavLink className={'nav-link '} to={props.href}>{props.children}</NavLink>
        </Container>
    )
}

export default Link;