import React from "react";
import "./Carousel.css";

function Carousel({ id, imageLinks }) {
    return (
        <div className="Carousel">
            <div
                id={`carouselControls${id}`}
                className="carousel carousel-dark slide"
                data-interval="false"
            >
                <div className="carousel-inner">
                    {imageLinks.map((link, i) => {
                        const active = i === 0 ? "active" : "";
                        return (
                            <div
                                className={`carousel-item ${active}`}
                                key={i + Math.random()}
                            >
                                <img
                                    className="img-fluid img-thumbnail"
                                    src={link}
                                    alt="..."
                                />
                            </div>
                        );
                    })}
                </div>
                <a
                    href={`#carouselControls${id}`}
                    role="button"
                    className="carousel-control-prev"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                </a>
                <a
                    href={`#carouselControls${id}`}
                    className="carousel-control-next"
                    role="button"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                </a>
            </div>
        </div>
    );
}

export default Carousel;
