import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";

const ColBox = (props) => {
    
    return (
        <div className={`col ${classes.col}`}>
            <div className={classes.box}>
                <div className={classes.imgBox}>
                    <img src={props.data.thumbnail?.path} alt={props.data.title} />
                </div>
                <div className={classes.description}>
                    <h3 className={`font-18 ${props.blogs ? 'fw-semibold' : null} ${classes.title}`}>{props.data.title}</h3>
                    <p>{props.data.description}{props.blogs ? <Link to="/" className={"text-green"}>Show More</Link> : null}</p>
                    {props.blogs ? '' : <Link to={`#`} className={"text-green"}>Show More</Link>}
                </div>
            </div>
        </div>
    )
}

export default ColBox;