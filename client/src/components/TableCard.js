import { useState } from "react"
import { useContext } from "react"
import { InfoContext } from "../providers/InfoProvider"

const TableCard = (props) => {
    let [show, setShow] = useState(true)
    let [seats, setSeats] = useState(props.seats)

    const data = useContext(InfoContext);
    
    const remove = (id) => {
        data.deleteTable(id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newInfo ={id:props.tableNum, seats:seats, waiter_id:props.waiter_id}
        data.updateTable(newInfo)
        setShow(true)
    }

    return (
        <div className="card">
            <h4>Table number {props.tableNum} seats {show ? props.seats : 
            <form onSubmit={handleSubmit}>
            <input value={seats} onChange={(e) => {setSeats(e.target.value)}} />
            <button type="submit">Submit</button></form>} people</h4>
            {show ? <button onClick={() => {setShow(false)}}>Update</button> : ''}
            <button onClick={() => {remove(props.id)}}>Delete</button>
        </div>
    )
}

export default TableCard