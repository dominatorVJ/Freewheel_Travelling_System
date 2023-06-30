import React from 'react'
export const Cityitem = (props) => {
    const { item } = props
    return (
        <>
            <div className="card mx-4" style={{ height: "200px", color: "white" }}>
                <img src={item.image_url} className="card-img-top" alt="cityimage" style={{ height: "100%", objectFit: "cover", filter: 'brightness(70%)' }} />
                <div className="card-img-overlay">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
            <a href={item.explore_link} className="btn btn-warning" style={{ width: "85%", margin: "auto", display: "block", borderTopLeftRadius: 0, borderTopRightRadius: 0 }}><b>Explore</b></a>
        </>
    )
}
