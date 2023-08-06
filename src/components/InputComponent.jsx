import React from "react";
import { Container, Input, Label } from "reactstrap";
import '../index.css'
const InputComponent = ({ element_id, element_type, label, place, userhook, setUserHook, error }) => {
    React.useEffect(() => { }, [])
    return (
        <Container fluid className="my-3">
            <Label htmlFor={element_id} className={userhook.length === 0 ? "input-edit-error" : "input-edit"} id="input-edit"> {label} </Label>
            <Input type={element_type} className={userhook.length === 0 ? "input-validation" : "label--input-edit"} id={element_id} placeholder={place} value={userhook} onChange={(e) => setUserHook(e.target.value)} />
        </Container>
    )
}
export default InputComponent;