import { Container } from "reactstrap";
import EditProfile from "../components/EditProfile";
import CardProfile from "../components/CardProfile";


const Dashboard = ()=>{
    return(
        <Container fluid className="overflow-auto">
                <div className="main-page">
                    <div>
                     <EditProfile />
                    </div>
                    <CardProfile />
                </div>
        </Container>
    )
}

export default Dashboard;