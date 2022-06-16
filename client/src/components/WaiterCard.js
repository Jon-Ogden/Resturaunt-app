import { InfoContext } from "../providers/InfoProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"

const WaiterCard = (props) => {
    const data = useContext(InfoContext);
    let navigate = useNavigate();

    const routeChange = (id) => {
        let path = `/waiters/${id}/more`
        navigate(path)
    }

    return (
        <div className="card">
            <h3>{props.name}</h3>
            <button onClick={() => {routeChange(props.id)}}>More</button>
        </div>
    )
};

export default WaiterCard