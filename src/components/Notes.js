import React from "react";

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map (note =>(
                <li className="list-group-item note" key= {note.id}>

                    <div>
                        <strong>{note.title}</strong> {/*заголовок задачи*/}
                        <small>{new Date().toLocaleDateString()}</small> {/*дата создания задачи*/}
                    </div>

                    <button type="button" className="btn btn-outline-danger btn-sm">
                        &times;
                    </button>


                </li>
            ))}

        </ul>
    )
}