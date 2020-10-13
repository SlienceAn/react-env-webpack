import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { user, sign } from '../../redux/store'
export const MemberLogin = () => {
    const account = useRef(null)
    const password = useRef(null)
    const loginSubmit = () => {
        axios.post(user, { account: account.current.value, password: password.current.value })
            .then(res => {
                console.table(res)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <Form>
                <label className="d-flex align-items-center mt-2">
                    <i className="fas fa-user-alt mr-2" style={{ color: 'rgb(44, 62, 80)' }} />
                    <div>帳號</div>
                </label>
                <Form.Control type="text" ref={account} />
                <label className="d-flex align-items-center mt-2">
                    <i className="	fas fa-key mr-2" style={{ color: 'rgb(44, 62, 80)' }} />
                    <div>密碼</div>
                </label>
                <Form.Control type="text" ref={password} />
                <button className="btn btn-dark w-100 mt-3 mb-3" onClick={loginSubmit}>登入</button>
            </Form>
        </div>
    )
}

export const MemberSign = () => {
    const icon = ['fas fa-user-alt', 'fas fa-key', 'fas fa-tags', 'fas fa-phone', 'fas fa-home']
    const [state, setState] = useState({
        account: 'zxczx',
        password: '',
        mail: '',
        phone: '',
        address: '',
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        const datas = Object.assign({}, state)
        datas[name] = value
        setState(datas)
    }
    const signSubmit = () => {
        axios.post(sign, state).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <Form>
                {Object.keys(state).map((el, index) =>
                    <React.Fragment key={el}>
                        <label className="d-flex align-items-center mt-2">
                            <i className={`mr-2 ${icon[index]}`} style={{ color: 'rgb(44, 62, 80)' }} />
                            <div>{el}</div>
                        </label>
                        <Form.Control type="text" name={el} placeholder={`write ${el}`} onChange={handleChange} />
                    </React.Fragment>
                )}
                <button className="btn btn-dark w-100 mt-3 mb-3" onClick={signSubmit}>註冊</button>
            </Form>
        </div>
    )
}
