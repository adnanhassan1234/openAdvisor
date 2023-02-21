import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionHeader";
import ColSlider from "../ColSlider";
import img01 from "../../Images/img01.jpg";
import img02 from "../../Images/img02.jpg";
import img03 from "../../Images/img03.jpg";
import img04 from "../../Images/img04.jpg";
import img06 from "../../Images/img06.jpg";
import img07 from "../../Images/img07.jpg";
import img08 from "../../Images/img08.jpg";
import UserAPIs from 'APIs/user'

const SliderSection = (props) => {
    const [lawyers, setLawyers] = useState([]);
    const [founders, setFounders] = useState([]);

    const getLawyersAndFounders = async () => {
        const lawyer = await UserAPIs.getLawyers()
        if (lawyer) {
            setLawyers(lawyer.data.data);
        }
        const founder = await UserAPIs.getFounders();
        if (founder) {
            console.log(founder.data.data);
            setFounders(founder.data.data);
        }
    }

    useEffect(() => {
        getLawyersAndFounders();
    }, [])
    const data = [
        {
            category: "Founders",
            categoryTitle: "Recommended Founders",
            categoryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id rutrum nulla.",
            childData: founders
        },
        {
            category: "Lawyers",
            categoryTitle: "Recommended Lawyers",
            categoryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id rutrum nulla.",
            childData: lawyers
        }
    ]

    return (
        <>
            {data.map((data) => (
                <section className={"section"}>
                    <Container>
                        <SectionTitle title={data.categoryTitle} description={data.categoryDescription} />
                        <ColSlider
                            lawyer_founder
                            slidesScroll={1}
                            arrows={true}
                            dots={false}
                            slidesShow={3}
                            buttonText="View all Founders"
                            btnUrl="/all-founders"
                            data={data.childData}
                        />
                    </Container>
                </section>
            ))}

        </>
    )
}

export default SliderSection;