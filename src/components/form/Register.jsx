import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import Card from '../Card'
import Text from '../input/Text'
import Password from '../input/Password'

import { registerUser } from '../../service/api'


const schema = Joi.object({
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
}) 


export default function Register() {
    const { register, handleSubmit } = useForm({
        resolver: joiResolver(schema)
    })

    return (
        <div className="container vh-100">
            <div className="row vh-100">
                <div className="col align-self-center">
                    <Card title="Register">
                        <form onSubmit={handleSubmit(registerUser)}>
                            <Text label="Email" id="email" name="email" inputRef={register} />
                            <Text label="Username" id="username" name="username" inputRef={register} />
                            <Password label="password" id="password" name="password" inputRef={register} />
                            <button className="btn btn-primary" type="submit">Register</button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}