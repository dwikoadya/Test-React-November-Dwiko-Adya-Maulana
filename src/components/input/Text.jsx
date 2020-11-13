import React from 'react' 

export default function Text(props) {
    const { id, label, name, error, inputRef } = props 

    return (
        <div className="form-group">
            <label htmlFor={id}> {label} </label>
            <input type="text" className="form-control" name={name} id={id} ref={inputRef} />
            <small className="form-text text-muted"> {error || '\u00A0'} </small>
        </div>
    )
}