import React, { useState } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import '../Views/Slider.css'


const Slider = (props) => {
    const { divid, title, childstyle, children } = props;
    const scroll = (direction) => {
        let far = ($(`#${divid} .image-container`).width() / 2) * direction;
        let pos = $(`#${divid} .image-container`).scrollLeft() + far;
        $(`#${divid} .image-container`).animate({ scrollLeft: pos }, 1000);
    };


    return (
        <div className="main">
            <div className="container-flex align-top">
                <div className="row">
                    <div className="col-1">
                        <button
                            className="prev"
                            onClick={(e) => {
                                e.preventDefault();
                                scroll(-1);
                            }}
                        >
                            &#10094;
                        </button>
                    </div>
                    <div className="image-container col-10">
                        {children.map((child, idx) => {
                            return (
                                <div className={`image tile ${childstyle}`}>
                                    {child}
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-1">
                        <button
                            className="next"
                            onClick={(e) => {
                                e.preventDefault();
                                scroll(1);
                            }}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
