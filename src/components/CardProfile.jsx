import CardPhoto from '../assets/credit-cart.svg'
import React from 'react';
import ResultMoney from './ResultMoney';

import { Container } from "reactstrap"
const CardProfile = () => {
    const [today, setToday] = React.useState('')

    React.useEffect(() => {
        let todo = Date.now()
        setToday(Date(todo))
    }, [])

    return (
        <div className="card-profile">
            <h4 className="text-danger">Sinov rejimida !</h4>
            <div className="cardelem">
                <img src={CardPhoto} alt="card image" />
                <div className="secondelem">
                    <h6 className='card--name'>Uzcard</h6>
                    <h5 className='fam'>Jumanazarov Oybek</h5>
                    <div className="card_number">
                        <p>8600 0034 4321 1234</p>
                        <section>
                            <span className='bank'>xalq bank</span>
                            <span>12/24</span>
                        </section>
                    </div>
                </div>
            </div>
            <hr />
            <p className=" view-money--text">Kelgan daromad</p>
            <p className='text-muted'>{today.split('G')[0]}</p>
            <Container fluid className='m-0 p-0'>
                <ResultMoney className='week-moneys' result_one_week={'1 Hafta Ichida'} result_all_week={'1 va 7 kun ichida'} result_money={"450.000 so’m"} />
                <ResultMoney result_one_week={'1 OY ICHIDA'} result_all_week={'1 va 31 kun ichida'} result_money={"675.000 so’m"} />
                <ResultMoney result_one_week={'Hisoblangan daromad'} result_all_week={'1 oy ichida'} result_money={"986.000 so’m"} />
            </Container>
        </div>
    )
}
export default CardProfile;