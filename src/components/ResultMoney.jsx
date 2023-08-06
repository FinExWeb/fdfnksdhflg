// import { Col, Container, Row } from "reactstrap"
import './resultmoney.css'
function ResultMoney({ result_one_week, result_all_week, result_money }) {
    return (
        <div className="result_money">
            <div className="my-3 result_money_col w-100">
                <section>
                    <h5>{result_one_week}</h5>
                    <h6>{result_all_week}</h6>
                </section>
                <h4>{result_money}</h4>
            </div>
        </div>
    )
}

export default ResultMoney