import React from 'react'
import { Link } from "react-router-dom"
import SingleBlogPage from './SingleBlogPage'



const DetailPage = () => {
    const mystyle = {
        color: "green",
        padding: "10px",
        backgroundColor: "aqua",
        borderRadius: "8px",
        cursor:"pointer"
    }

    return (
        <div className='main'>
        <SingleBlogPage/>
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
        </div>
    )
}

export default DetailPage;