import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="wrapper">
                    <div className="left">
                        <div className="item">
                            <span>USD</span>
                            <KeyboardArrowDownIcon/> 
                        </div>
                        <div className="item">
                            <Link to="/products/1">Women</Link>
                        </div>
                        <div className="item">
                            <Link to="/products/2">Men</Link>
                        </div>
                        <div className="item">
                            <Link to="/products/3">Children</Link>
                        </div>
                    </div>
                    <div className="middle">
                        <Link to="/">Fashionise</Link>
                    </div>
                    <div className="right">
                        <div className="itemright">
                            <Link to="/">About</Link>
                        </div>
                        <div className="itemright">
                            <Link to="/">Contact</Link>
                        </div>
                        <div className="itemright">
                            <Link to="/">Stores</Link>
                        </div>
                        <div className="icons">
                            <SearchOutlinedIcon/>
                            <PersonOutlineOutlinedIcon/>
                            <FavoriteBorderIcon/>
                            <div className="carticon">
                            <ShoppingCartIcon/>
                            <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar();