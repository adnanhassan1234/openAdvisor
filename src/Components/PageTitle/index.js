import React from "react";
import classes from "./index.module.scss";
import {Container, Breadcrumb} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import starRatingImg from "../../Images/starRatingImg.svg";


const PageTitle = (props) => {
    const location = useLocation();
    return(
        <>
            <div className={`${classes.pageTitle} ${props.bgWhite ? `${classes.bgWhite}` : ''} ${props.onlyTitle ? `${classes.onlyTitle}` : ''} `}>
                <Container>
                    {props.onlyTitle ? '' :
                        <div className={classes.backBtn}>
                            <Link to={"/"}><i className={"far fa-long-arrow-left fa-fw"}></i> </Link>
                        </div>
                    }
                    <h1>
                        {props.title}
                        {props.totalReviews ? <>({props.totalReviews})</> : ''}
                        {props.StarRating ? <img width={"100"} src={starRatingImg}   alt={"#"}  /> : ''}
                        {props.rating ? <span className={'font-20'}> {props.rating} </span> : ''}
                    </h1>
                    {props.onlyTitle ? '' :
                        <>
                            {props.date ? <time className={"text-muted mb-3 d-block"}>{props.date}</time> : null}
                            <Breadcrumb className={classes.breadCrumbs}>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </>
                    }

                </Container>
            </div>
        </>
    )
}

export default PageTitle;