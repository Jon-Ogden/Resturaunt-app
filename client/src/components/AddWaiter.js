import { useState } from "react";
import { InfoContext } from "../providers/InfoProvider";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

const AddWaiter = () => {
    const data = useContext(InfoContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newWaiter = {name, age}
        data.addWaiter(newWaiter)
        navigate('/waiters')
        window.location.reload();
    }

    return(
        <div>
            <h1>Add New Waiter</h1>
            <form onSubmit={handleSubmit}>
                <p>Name:</p>
                <input value={name} onChange={(e) => {setName(e.target.value)}} />
                <p>Age:</p>
                <input value={age} onChange={(e) => {setAge(e.target.value)}} />
                <button>Next</button>
            </form>
        </div>
    )
};

export default AddWaiter