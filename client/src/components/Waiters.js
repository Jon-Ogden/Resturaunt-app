import { useContext, useEffect } from "react"
import { InfoContext} from "../providers/InfoProvider"
import WaiterCard from "./WaiterCard"
import { useNavigate } from "react-router-dom"

export default function Waiters(){
    const data = useContext(InfoContext)
    let navigate = useNavigate();



    const routeChange = () => {
        navigate('/waiters/add')
        
    };

    const renderWaiters = () => {
        return data.waiters.map( (c) => {
             return <WaiterCard 
                    key={c.id} 
                    id={c.id}
                    name={c.name} 
                    age={c.age} 
                    tables={data.tables.filter(x => x.waiter_id == c.id).map(c => c.id)}/>;
            });
        };

    return (
        <div>
            <h1>The waiters at our resturaunt:</h1>
            <div>{renderWaiters()}</div>
            <button onClick={() => {routeChange()}}>Add New Waiter</button>
        </div>
    )
}