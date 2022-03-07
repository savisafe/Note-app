import React, {useState, useContext} from "react";
import {AlertContext} from "../context/alert/alertContex";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        alert.show(value, 'success')
    }

    return(
        <from onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder="Введите название заметки"
                       value={value}
                       onChange={event => setValue(event.target.value)}
                />
            </div>
        </from>
    )
}