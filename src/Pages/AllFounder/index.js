import React from "react";
import PageTitle from "../../Components/PageTitle";
import {Container, Tabs, Tab} from "react-bootstrap";
import ColBox from "../../Components/ColBox";
import img15 from "../../Images/img15.jpg";
import img16 from "../../Images/img16.jpg";
import img17 from "../../Images/img17.jpg";
import SearchBar from "../../Components/SearchBar";

const AllFounder = (props) =>{
    const data = [
        {
            title: "Samantha  Mishel",
            imgURL: img15,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com",
        },
        {
            title: "Ann Samuel",
            imgURL: img16,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com"
        },
        {
            title: "Harry Bill",
            imgURL: img17,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com"
        },
        {
            title: "Samantha  Mishel",
            imgURL: img15,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com",
        },
        {
            title: "Ann Samuel",
            imgURL: img16,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com"
        },
        {
            title: "Harry Bill",
            imgURL: img17,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com"
        },
        {
            title: "Samantha  Mishel",
            imgURL: img15,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com",
        },
        {
            title: "Ann Samuel",
            imgURL: img16,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com"
        },
        {
            title: "Harry Bill",
            imgURL: img17,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com"
        },
        {
            title: "Samantha  Mishel",
            imgURL: img15,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com",
        },
        {
            title: "Ann Samuel",
            imgURL: img16,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com"
        },
        {
            title: "Harry Bill",
            imgURL: img17,
            description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
            url: "abc.com"
        },
    ]

    return(
        <>
            <PageTitle title={"All Founders"} />
            <section className={"p-0"}>
                <Container>
                    <SearchBar placeholder={"Search Founder"} />
                    <Tabs
                        defaultActiveKey="Category1"
                        justify
                    >
                        <Tab eventKey="Category1" title="Category 1">
                            <div className={`colList`}>
                                {data.map((data) =>(
                                    <ColBox
                                        data={data}
                                    />
                                ))}
                            </div>
                        </Tab>
                        <Tab eventKey="Category2" title="Category 2">
                            <div className={`colList`}>
                                {data.map((data) =>(
                                    <ColBox
                                        data={data}
                                    />
                                ))}
                            </div>
                        </Tab>
                        <Tab eventKey="Category3" title="Category 3">
                            <div className={`colList`}>
                                {data.map((data) =>(
                                    <ColBox
                                        data={data}
                                    />
                                ))}
                            </div>
                        </Tab>
                        <Tab eventKey="Category4" title="Category 4">
                            <div className={`colList`}>
                                {data.map((data) =>(
                                    <ColBox
                                        data={data}
                                    />
                                ))}
                            </div>
                        </Tab>

                    </Tabs>

                </Container>
            </section>
        </>
    )
}

export default AllFounder;