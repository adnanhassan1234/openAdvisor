import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";

const ColSlider = (props) => {
    var settings = {
        dots: props.dots,
        infinite: false,
        speed: 500,
        slidesToShow: props.slidesShow,
        slidesToScroll: props.slidesScroll,
        arrows: props.arrows,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    if (props.BLogSlider) {
        return (
            <>
                <Slider {...settings} className={classes.slickSlider}>
                    {props.data.map((data) => (
                        <div>
                            <div className={classes.col}>
                                <div className={classes.imgBox}>
                                    <img src={data.thumbnail?.path} alt={data.title} />
                                </div>
                                <div className={classes.description}>
                                    {data.title != null ?
                                        <h3 className={`font-18 ${props.BLogSlider ? 'fw-semibold' : null} ${classes.title}`}>{data.title}</h3>
                                        : null}
                                    {data.description != null ?
                                        <p>{data.description} {props.BLogSlider ? <Link to={`${data.url}`} className={"text-green"}>{data.linkText}</Link> : null}</p>
                                        : null}
                                    {props.BLogSlider ? '' : <Link to={`${data.url}/profile`} className={"text-green"}>{data.linkText}</Link>}
                                        : null}
                                    {props.BLogSlider ? '' : <Link to={`${data.url}`} className={"text-green"}>{data.linkText}</Link>}
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
                <Link to={`${props.btnUrl}`} className={`btn ${props.varient ? `btn-${props.varient}` : 'btn-light'} ${classes.sliderBtn}`}>{props.buttonText}</Link>
            </>
        )
    } else {
        return (
            <>
                <Slider {...settings} className={classes.slickSlider}>
                    {props.data.map((data) => (
                        <div>
                            <div className={classes.col}>
                                <div className={classes.imgBox}>
                                    <img src={data.profilePic?.path} alt={data.firstName} />
                                </div>
                                <div className={classes.description}>
                                    {data.firstName != null ?
                                        <h3 className={`font-18 ${props.BLogSlider ? 'fw-semibold' : null} ${classes.title}`}>{data.firstName}</h3>
                                        : null}
                                    {data.about != null ?
                                        <p>{data.about} {props.BLogSlider ? <Link to={`${data.url}`} className={"text-green"}>{data.linkText}</Link> : null}</p>
                                        : null}
                                    {props.BLogSlider ? '' : <Link to={`${data.url}/profile`} className={"text-green"}>{data.linkText}</Link>}
                                        : null}
                                    {props.BLogSlider ? '' : <Link to={`${data.url}`} className={"text-green"}>{data.linkText}</Link>}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <Link to={`${props.btnUrl}`} className={`btn ${props.varient ? `btn-${props.varient}` : 'btn-light'} ${classes.sliderBtn}`}>{props.buttonText}</Link>
            </>
        )
    }

}

export default ColSlider;