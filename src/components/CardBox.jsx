import React from 'react' 
import { Link } from 'react-router-dom'
import ButtonDelete from './button/ButtonDelete'

export default function CardBox(props) {
    const { list } = props

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title"> {list.name} </h5>
                <Link className="btn btn-primary" to={`/checklist/${list.id}/item`}>Item</Link>
                <ButtonDelete checklistId={list.id} />
            </div>
        </div>
    )
} 