import React from 'react'

export const Thitems = (props) => {
    const { Object } = props
    let date = new Date(Object.Ondate);
    date = date.toLocaleString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    return (
        <div>
            <div className="container shadow p-1 mb-3 bg-body rounded card w-75">
                <div className="card-body">
                    <div className="card-text fs-5">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p><b>{date},{Object.mode}-{Object.name}</b></p>
                            <i className="bi bi-trash3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
