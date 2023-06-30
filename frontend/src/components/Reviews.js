import React from 'react'
import trust from "./images/trust.png"
import choose from "./images/choose.png"
import cheap from "./images/cheap.png"
export const Reviews = () => {
    return (
        <div className="d-flex justify-content-around" style={{ backgroundColor: "#f2f2f2", marginTop: "100px" }}>
            <div className="card " style={{ backgroundColor: "#f2f2f2", maxWidth: "540px", border: "none" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cheap} className="img-fluid rounded-start" alt="cheap" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><b>Budget-Friendly Bliss: Unveiling Affordable Delights</b></h5>
                            <p className="card-text">Discover a treasure trove of affordable experiences.
                                From cost-effective travel destinations to savvy budget trips, explore the world of affordable enjoyment.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{ backgroundColor: "#f2f2f2", maxWidth: "540px", border: "none", marginLeft: "70px", marginRight: "70px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={trust} className="img-fluid rounded-start" alt="trust" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><b>Making Informed Choices for Secure Travel</b></h5>
                            <p className="card-text">Prioritize trust and safety when making travel decisions. TravelGo ensure a secure and worry-free travel experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{ backgroundColor: "#f2f2f2", maxWidth: "540px", border: "none" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={choose} className="img-fluid rounded-start" alt="choose" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><b>The Joy of Variety</b></h5>
                            <p className="card-text">Embrace the freedom to explore diverse options, making decisions that lead to a fulfilling and vibrant journey.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
