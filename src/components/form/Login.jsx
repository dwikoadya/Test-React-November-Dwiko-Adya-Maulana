import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import Card from '../Card'
import Text from '../input/Text'
import Password from '../input/Password'

import { loginUser } from '../../service/api'



const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

export default function Login() {
    const { register, handleSubmit } = useForm({
        resolver: joiResolver(schema)
    })

    const dispatch = useDispatch()

    function getLoginUser(data) {
        loginUser(data).then(
            (isLogin) => {
                if (isLogin) {
                    dispatch({ type: 'loggedIn'})
                }
            }
        )
    }

    return (
        <div className="container vh-100">
            <div className="row vh-100">
                <div className="col align-self-center">
                    <Card title="Login">
                        <form onSubmit={handleSubmit(getLoginUser)}>
                        <Text label="Username" id="username" name="username" inputRef={register} />
                        <Password label="Password" id="password" name="password" inputRef={register} />
                        <button className="btn btn-primary" type="submit"> Login </button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}