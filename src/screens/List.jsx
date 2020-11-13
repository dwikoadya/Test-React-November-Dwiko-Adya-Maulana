import React, { Fragment } from 'react'

import CreateList from '../components/form/CreateList'

export default function List() {
    return (
        <Fragment>
            <div className="container vh-100">
                <div className="row vh-100">
                    <div className="col align-self-center">
                        <CreateList />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}