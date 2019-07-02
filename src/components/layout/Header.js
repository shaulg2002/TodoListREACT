import React from 'react';
import { Link } from 'react-router-dom'
import { whileStatement } from '@babel/types';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={itemStyle}>Home</Link> | <Link to="/about" style={itemStyle}>About</Link>
        </header>
    )
}

const headerStyle ={
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'

}

const itemStyle = {
    color: "#fff",
    fontSize: "12px"
}
export default Header;