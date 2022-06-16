import { useContext, useState } from "react";
import { InfoContext } from "../providers/InfoProvider";
import { useParams } from 'react-router-dom'

const TableForm = () => {
    const [seats, setSeats] = useState('')
    const data = useContext(InfoContext);
    const params = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newInfo = {seats:seats, waiter_id:params.id}
        data.addTable(newInfo)
        window.location.reload()
    }
    return(
        <div>
            <h2>Add a Table to this Waiter</h2>
            <form onSubmit={handleSubmit}>
                <p>A table number will be automatically assigned to this table</p>
                <p>how many does this table seat?</p>
                <input type='number' value={seats} onChange={(e) => {setSeats(e.target.value)}} />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default TableForm