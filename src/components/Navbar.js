import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const thali = useSelector(state => state.counter.thali)

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed navbar-dark bg-dark">
                <div className="container-fluid">

                    <img src="https://st3.depositphotos.com/1052036/17845/v/950/depositphotos_178455262-stock-illustration-traditional-maharashtrian-cuisine-and-food.jpg" alt="img" style={{ maxWidth: '100px', maxHeight: '100px' }}></img>

                    <p style={{ fontFamily: "sans-serif", fontSize: '45px', fontWeight: "600", marginLeft: "20px" }}
                        className="navbar-brand" >Thali<span style={{
                            fontSize: '50px',
                            fontFamily: 'sans-serif', fontWeight: "800", color: "crimson"
                        }}>Darbar</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        < ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link style={{ fontFamily: 'monospace', fontSize: '40px', fontWeight: "500" }}
                                    className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li style={{ fontFamily: "monospace", fontSize: '40px', fontWeight: "500", marginLeft: "20px" }}
                                className="nav-item">
                                <Link className="nav-link" to="/Menu">Menu</Link>
                            </li>

                            <li className="nav-item"><Link className="nav-link" to="/Cart">
                                <img src="https://i.pinimg.com/originals/4b/cf/e5/4bcfe5b30334fb2ed35a5d422bf9cbfe.png"

                                    className='navbar-nav' style={{ width: "50px", height: "50px", marginLeft: "750px" }} />

                            </Link></li> <h3 style={{ color: 'white' }}>{thali.length}</h3>

                        </ul >
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar