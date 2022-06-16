import {Link, Outlet} from "react-router-dom"

const PageWrapper = () => {
    return (
        <div>
            <div className="navbar">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/waiters">Waiters</Link> 
                <Link className="link" to="/tables">Tables</Link> 
            </div>
            <div className="body">
                <Outlet />
            </div>
        </div>
    );
};

export default PageWrapper