import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Nav = () => {
    const history = useHistory()
    const handleOrder = () =>{
        history.push('/order')
    }
    const adminPanel = () => {
            history.push('/addProduct');
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h1>Fresh Valley</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link onClick={adminPanel} to="/addProduct">AddProduct</Link>
                            </li> 
                            <li class="nav-item">
                              <Link to="/login"><button>Login</button></Link>
                            </li> 
                            <li class="nav-item">
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