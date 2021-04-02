import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Nav = () => {
    const history = useHistory()
    const handleOrder = () =>{
        history.push('/order')
    }
    const adminPanel = () => {
            history.push('/adminPanel');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 style={{color:'#3949ab'}}>Talukder Store</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNavDropdown">
                        <ul className="navbar-nav m-2">
                            <li className="nav-item p-3">
                               <Link to="/home">Home</Link>
                            </li>
                            <li className="nav-item p-3">
                                <Link onClick={adminPanel} to="/adminPanel">AddMinPanel</Link>
                            </li> 
                            <li className="nav-item p-3">
                              <Link to="/login"><button class=" btn-success">Login</button></Link>
                            </li> 
                            <li className="nav-item p-3">
                              <Link onClick={handleOrder} to="/order">Order</Link>
                            </li> 

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;