import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Card from '../Card'
import Text from '../input/Text'
import CardBox from '../CardBox'
import { createList } from '../../service/api'
import { getList } from '../../service/api'


export default function CreateList() {
    const [lists, setLists] = useState([])
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        getList().then(
            (response) => setLists(response.data.data)
        )
    }, [])

    function postCreate(data) {
        createList(data).then(
        )
    }

    return (
        <div className="container vh-100">
            <div className="row vh-100">
                <div className="col align-self-center">
                    <Card title="Create List">
                        <form onSubmit={handleSubmit(postCreate)}>
                            <Text label="Name" name="name" id="name" inputRef={register} />
                            <button type="submit" className="btn btn-primary mb-5"> Create List </button>
                        </form>
                        <Card title="Checklist">
                            {
                                lists.length > 0 && lists.map((list) => {
                                    return (
                                        <CardBox key={list.id} list={list} />
                                    )
                                },
                                )
                            }
                            {
                                lists.length < 0 && (<p>Data Kosong</p>)
                            }
                        </Card>
                    </Card>
                </div>
            </div>
        </div>
    )
}