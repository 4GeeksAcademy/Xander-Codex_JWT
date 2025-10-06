import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const token = sessionStorage.getItem("token");

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-light bg-light">

            <div className="container">

                <Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>

                <div className="ml-auto">
                    {!token ? (
                        <>
                            <Link to="/login" className="btn btn-outline-primary" >Log In</Link>
                            <Link to="/signup" className="btn btn-success ">Sign Up</Link>
                        </>
                    ) : (
                        <>
                            <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
                        </>
                    )}
                </div>
            </div>

        </nav>

    );
};