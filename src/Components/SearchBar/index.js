import React from "react";
import classes from "./index.module.scss";
import {Form} from "react-bootstrap";

const SearchBar = (props) => {
    return(
        <>
            <Form className={classes.searchBar}>
                <Form.Control type={"search"} placeholder={props.placeholder} />
            </Form>
        </>
    )
}

export default SearchBar;