import React, { useState, useContext } from "react";
import flight from "../images/flight2.jpg";
import TicketContext from "../TicketContext";
import { useNavigate } from "react-router-dom";
export const FlightBlog = () => {
    const mode = "Flight"
    var today = new Date();
    today = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    const [credentials, setCredentials] = useState({ From: "", To: "", Date: today });
    const navigate = useNavigate();
    const context = useContext(TicketContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        let { From, To, Date } = credentials
        const { getTicket } = context
        if (localStorage.getItem('token')) {
            getTicket(From, To, Date, mode)
            navigate('flight/search')
        }
        else {
            navigate('/login')
        }
    };
    const swap = (e) => {
        const temp = credentials.From
        setCredentials(prevState => ({
            ...prevState,
            From: credentials.To
        }));
        setCredentials(prevState => ({
            ...prevState,
            To: temp
        }));
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div className="card text-bg-dark">
            <img src={flight} style={{ height: "600px", width: "100%", objectFit: "cover" }} alt="background" />
            <div className="card-img-overlay">
                <h1 className="container card-title display-1" style={{ marginTop: "100px" }}>What's there</h1>
                <br></br>
                <div className="container card-text fs-5" style={{ fontWeight: "normal" }}>
                    If you wish to fly to new heights, begin by setting your sights on a
                    destination<br></br> you can reach and then create a flight plan, a map, that
                    will be your guide.
                    <br></br>
                    TravelSathi provides the best experience of flight journey.
                    <br></br>
                    <br></br>
                    <br></br>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group input-group-lg mb-3 w-75" style={{ height: "65px" }}>
                            <input type="text" className="form-control" value={credentials.From} onChange={onChange} id="From" name="From" aria-label="From" placeholder="From (Enter IATA Code)" required />
                            <span type="submit" onClick={swap} className="input-group-text"><i className="fa-solid fa-right-left"></i></span>
                            <input type="text" className="form-control" value={credentials.To} onChange={onChange} id="To" name="To" aria-label="To" placeholder="To (Enter IATA Code)" required />
                            <input type="date" className="form-control" min={new Date().toISOString().split("T")[0]} value={credentials.Date} onChange={onChange} id="Date" name="Date" aria-label="Date" required />
                            <button type="submit" className="btn btn-warning">Search</button>
                        </div>
                    </form>
                    <br></br>
                    powered by <a href="https://aviation-edge.com/" style={{ color: "white" }}>Aviation Edge</a>
                </div>
            </div>
        </div>
    );
};
