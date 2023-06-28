import React from 'react'

export const TicketItems = (props) => {
    const { Object, Data } = props
    const book = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/ticket/saveticket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('token')
            },
            body: JSON.stringify({

                mode: Data,
                name: Object.name
            }),
        });
        const json = await response.json();
        console.log(json.success)
        if (json.success) {
            if (Data === "Train") {
                return window.open("https://www.irctc.co.in/nget/train-search", '_blank');
            }
            else if (Data === "Hotel") {
                return window.open(`${Object.url}`, '_blank');
            }
        } else {
            return alert("Invalid credentials");
        }
    }
    if (Data === "Hotel") {
        const stars = Array.from({ length: Object.hotel_class }, (_, index) => (
            <span key={index}>⭐</span>
        ));
        return (
            <div>
                <div className="container shadow p-3 mb-5 bg-body rounded card w-75">
                    <div className="card-body">
                        <h5 className="card-title">{Object.name}</h5>
                        <p className="card-text">Address - {Object.address} {Object.city}</p>
                        <p className="card-text">{stars}</p>
                        <p className="card-text">Description - {Object.hotel_description}</p>
                        <button onClick={book} target="_blank" rel="noreferrer" className="btn btn-outline-warning">Book now</button>
                    </div>
                </div>
            </div>
        )
    }
    else if (Data === "Train") {
        return (
            <div>
                <div className="container shadow p-3 mb-5 bg-body rounded card w-50">
                    <div className="card-body">
                        <div className="text-center card-title fs-4"><b>{Object.name}({Object.train_num})</b></div><br></br>
                        <p className="card-text fs-5">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>Departure - {Object.train_from},&nbsp;{Object.data.departTime}</div>
                                <div>Arrival - {Object.train_to},&nbsp;{Object.data.arriveTime}</div>
                            </div>
                        </p>
                        <p className="container card-text">{Object.data.classes.map((item, index) => (
                            <span key={index}>{item}&nbsp;&nbsp;</span>
                        ))}</p>
                        <button onClick={book} className="btn btn-lg btn-outline-warning">Check</button>
                    </div>
                </div>
            </div>
        )
    }
}
