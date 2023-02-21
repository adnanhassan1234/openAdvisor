import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PageTitle from "../../Components/PageTitle";

const Schedules = () => {
  return(
      <>
          <PageTitle
              title={"Schedule"}
              bgWhite
              onlyTitle

          />
          <section className={"section p-0"}>
              <Container>
                  <Row>
                      <Col md={12} className={'p-0'}>
                      </Col>
                  </Row>
              </Container>
          </section>
      </>
  )
}

export default Schedules;