import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Citydata from "./Citydata";
import { Cityitem } from "./Cityitem";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export const CityCrousel = () => {

    return (
        <div className="container mt-5">
            <h3 style={{ marginLeft: "30px" }}><b>Explore India</b></h3>
            <p style={{ marginLeft: "30px" }}>These popular destinations have a lot to offer</p>
            <Carousel responsive={responsive}>
                {Citydata.map((item, index) => (
                    <div key={index}>
                        <Cityitem item={item} />
                    </div>
                ))}


            </Carousel>
        </div>
    );
};