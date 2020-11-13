import React from 'react'
import { useHistory } from 'react-router-dom'

import { deleteList } from '../../service/api'

export default function ButtonDelete(props) {
    const { checklistId } = props
    const history = useHistory()

    function handleDelete() {
        deleteList(checklistId).then(
            () => history.push('/checklist')
        )
    }
    return (
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
    )
}