import { useContext } from "react"
import { InfoContext } from "../providers/InfoProvider"
import TableCard from "./TableCard"

const Tables = () => {
    const data = useContext(InfoContext);

    const renderTables = () => {
        return data.tables.map((c) => {
            return <TableCard key={c.id}
            id={c.id}
            seats={c.seats}
            tableNum={c.id}
            waiter_id={c.waiter_id} />
        })
    }
    return(
        <div>
            <h1>All Tables</h1>
            {renderTables()}
        </div>
    )
}

export default Tables