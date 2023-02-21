import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Packages from "../../Components/Packages";


const SubscriptionPayment = (props) => {

    const data = [
        {
            price:"30",
            duration:"Per Month",
            text: "Legal Documents Only Plan ",
            childData: [
                {
                    option:"Access to all legal documents",
                },
                {
                    option:"Download in .DOC format",
                }
            ]
        },
        {
            price:"200",
            duration:"Per Month",
            text: "Legal Services & Legal Documents️",
            childData: [
                {
                    option:"All legal documents",
                },
                {
                    option:"Lawyer services",
                },
                {
                    option:"Help with drafting bespoke legal documents",
                },
                {
                    option:"2 legal counsel with a certified lawyer",
                }
            ]
        }
    ]

    return(
        <>
            <section>
                <Container>
                    <Row>
                        {data.map((data) => (
                            <Col md={6}>
                                <Packages data={data} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SubscriptionPayment;