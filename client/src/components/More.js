import { useContext, useState, useEffect } from "react"
import { useNavigate, useParams} from "react-router-dom"
import { InfoContext } from "../providers/InfoProvider"
import TableCard from "./TableCard"
import axios from "axios"
import TableForm from "./TableForm"

const More = () => {
    const data = useContext(InfoContext);
    const params = useParams();
    const tables = data.tables.filter(c => c.waiter_id == params.id)
    const navigate = useNavigate();

    const initialWaiters = async () => {
        try {
            let res = await axios.get(`/api/waiters/${params.id}`);
            setWaiter(res.data)
            setName(res.data.name)
            setAge(res.data.age)
        } catch (err) {
            alert(err)
        }
    };

    const [show, setShow] = useState(true)
    const [waiter, setWaiter] = useState({})
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [tableForm, setTableForm] = useState(false)

    useEffect(() => {
        initialWaiters()
    },[])

    const remove = () => {
        data.deleteWaiter(params.id)
        navigate('/waiters')
        window.location.reload()
    }



     const renderTables = () => {
        return tables.map((c) => {
            return <TableCard key={c.id}
                seats={c.seats}
                tableNum={c.id}
                waiter_id={c.waiter_id} />
        })
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        let newInfo = {id:waiter.id, name:name, age:age}
        data.updateWaiter(newInfo)
        setShow(true)
        setWaiter(newInfo)
     }

    return(
        <div>
            {show ? 
            (<div><h1>{waiter.name}</h1>
            <p>{waiter.name} is {waiter.age} years old and waits on the following tables:</p>
            <button onClick={() => {setShow(false)}}>Update</button>
            <button onClick={() => {setTableForm(true)}}>Add Table</button>
            <button onClick={remove}>Delete</button></div>) :
               <div><form onSubmit={handleSubmit
               }>
                    <p>Name</p>
                    <input value={name} onChange={(e) => {setName(e.target.value)}} />
                    <p>Age</p>
                    <input value={age} onChange={(e) => {setAge(e.target.value)}} />
                    <button>submit</button>
                </form></div> }
        <div>
            {tableForm && <TableForm />}
            {renderTables()}
        </div>
        </div>
    )
}

export default More