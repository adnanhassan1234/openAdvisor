import React from "react";
import classes from "./index.module.scss";
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Packages = (props)=>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/subscription-payment/payment");
    }

    return(
        <>

            <Card className={classes.card}>
                <Card.Header className={classes.cardHeader}>
                    <Card.Title className={classes.cardtTitle}>Subscribe</Card.Title>
                    <div className={classes.price}>
                        <div className={classes.priceTitle}>
                            <sub>$</sub>
                            {props.data.price}
                        </div>
                        Per Month
                    </div>
                    <h2>{props.data.text}</h2>
                </Card.Header>
                <Card.Body className={classes.cardBody}>
                    <ul>
                        {props.data.childData.map((item) => (
                            <li>{item.option}</li>
                        ))}
                    </ul>
                    <Button variant={`secondary ${classes.fixBtn}`} onClick={handleClick}>Subscribe</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default Packages;