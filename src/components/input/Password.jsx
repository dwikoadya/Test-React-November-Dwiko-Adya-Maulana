import React, { useState } from 'react'

export default function Password(props) {
    const { id, label, name, error, inputRef } = props

    const [show, setShow] = useState(false)

    return (
        <div className="form-group">
            <label htmlFor={id}> {label} </label>
            <div className="input-group mb-3">
                <input 
                type={(show) ? 'text' : 'password'} 
                 className="form-control"
                 name={name}
                 ref={inputRef}   
                 id={id}
                />
                <div className="input-group-append">
                    <button onClick={() => setShow(!show)} type="button" className="btn btn-primary">
                        {
                            (show) ? <i className="fa fa-eye-slash" /> : <i className="fa fa-eye" />
                        }
                    </button>
                </div>
            </div>
            <small className="form-text text-muted">
                {error || '\u00A0'}
            </small>
        </div>
    )
}