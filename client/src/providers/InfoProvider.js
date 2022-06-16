import axios from "axios"
import React, {useEffect, useState} from "react"

export const InfoContext = React.createContext();

const InfoProvider = (props)=>{
    const [waiters, setWaiters] = useState([])
    const [tables, setTables] = useState([])
    

    const initialWaiters = async () => {
        try {
            let res = await axios.get(`/api/waiters`);
            setWaiters(res.data)
        } catch (err) {
            alert(err)
        }
    };

    const initialTables = async () => {
        try {
            let res = await axios.get(`/api/tables`);
            setTables(res.data)
        } catch (err) {
            alert(err)
        }
    };

    useEffect(() => {
        initialTables();
        initialWaiters();
    },[])

    const updateTable = (newInfo) => {
        let table = newInfo
        let newTables = tables.map(c => c.id == newInfo.id ? newInfo : c)
        setTables(newTables)
        axios.put(`/api/waiters/${newInfo.waiter_id}/tables/${newInfo.id}`, {table})
    }

    const updateWaiter = (newInfo) => {
        let waiter = newInfo
        let newWaiters = waiters.map(c => c.id == newInfo.id ? newInfo : c)
        setWaiters(newWaiters)
        axios.put(`/api/waiters/${newInfo.id}`, {waiter})
    }

    const addWaiter = (newWaiter) => {
        setWaiters([...waiters, newWaiter])
        let name = newWaiter.name
        let age = newWaiter.age
        axios.post('/api/waiters', {name, age})
    }

    const addTable = (newTable) => {
        setTables([...tables, newTable])
        let seats = newTable.seats
        let waiter_id = newTable.waiter_id
        axios.post(`/api/waiters/${waiter_id}/tables`, {seats})
    }

    const deleteWaiter = (id) => {
        setWaiters(waiters.filter(c => c.id !== id))
        axios.delete(`/api/waiters/${id}`)
    }

    const deleteTable = (id) => {
        tables.forEach((c) => {
            if(c.id == id){
                axios.delete(`/api/waiters/${c.waiter_id}/tables/${id}`)
            }
        })
        setTables(tables.filter(c => c.id !== id))
    }

    return (
        <InfoContext.Provider value={{waiters, tables, updateTable, 
        updateWaiter, addWaiter, addTable, deleteWaiter, deleteTable}}>
            {props.children}
        </InfoContext.Provider>
    )
};

export default InfoProvider