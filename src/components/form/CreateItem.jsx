import React from 'react' 
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import Card from '../Card'
import Text from '../input/Text'
import { createItem } from '../../service/api'

export default function CreateItem() {
    const { register, handleSubmit } = useForm()
    const history = useHistory()

    function postItem(data) {
        createItem(data).then(
            (response) => history.push(`/checklist/${response.data.id}`)
        )
    }

    return (
        <div className="container vh-100">
            <div className="row vh-100">
                <div className="col align-self-center">
                    <Card title="Create Item">
                        <form onSubmit={handleSubmit(postItem)}>
                            <Text label="checklistId" name="checklistid" id="checklistid" inputRef={register} />
                            <Text label="itemName" name="itemname" id="itemname" inputRef={register} />
                            <button type="submit" className="btn btn-primary">Create Item</button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}