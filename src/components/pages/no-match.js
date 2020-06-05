import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
    return (
        <div>
            <h2>
                Sorry, we couldn't find that page. 
                <Link to="/"> Try starting from here.</Link>
            </h2>
            
        </div>
    )
}