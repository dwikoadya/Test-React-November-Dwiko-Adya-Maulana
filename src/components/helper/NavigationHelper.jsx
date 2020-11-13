import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationHelper() {
    return (
        <div>
            <Link to="/checklist"> Checklist </Link>
            <Link to="/register"> Register </Link>
            <Link to="/login"> Login </Link>
        </div>
    )
}