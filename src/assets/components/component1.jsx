import React from "react";
function ShowLIDynamically({listitem}) {
    return (
        <>
            <li className='box'>{listitem}
                <div className='buttons'>
                    <button className='btn btn-success'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </li>

        </>
    )
}
export default ShowLIDynamically;