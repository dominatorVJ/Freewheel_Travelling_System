import React, { useContext } from 'react'
import TicketContext from './TicketContext'
import error from './images/error.jpg'
import { Thitems } from './Thitems'
export const Travelhistory = () => {
    const context = useContext(TicketContext)
    const { Ticket } = context
    if (Ticket.length === 0) {
        return (
            <div>
                <h1 className='d-flex justify-content-center'>Travel History is empty</h1>
                <div className='d-flex justify-content-center'>
                    <img src={error} alt='error' style={{ height: "1000px", width: "1000px" }} />
                </div>
            </div>
        )
    }
    else {
        return (<div style={{ backgroundColor: "#f8fef8" }}>
            <h1 className='d-flex justify-content-center'>Your travelhistory</h1><br></br>
            <p className='text-center fs-5'>Items which you have visited as shown here</p><br></br>
            {Ticket.slice(0, 20).map((Object) => {
                return <Thitems key={Object._id} Object={Object} />
            })}
        </div>)
    }

}
