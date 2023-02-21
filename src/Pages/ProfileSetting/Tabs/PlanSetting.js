import React from "react";
import classes from "./index.module.scss";
import {Button, Card, Col, Row} from "react-bootstrap";

const PlanSetting = () => {
  return(
      <>
          <Card>
              <Card.Body>
                  <Card.Title className={classes.cardTitle}>Current Subscription</Card.Title>
                  <Card className={'border border-light mb-3 rad'}>
                      <Card.Header className={"border-0"}>
                          <div className={"font-16 fw-semibold"}>Legal Services & Legal Documents</div>
                      </Card.Header>
                      <Card.Body>
                          <Row className={'align-items-center flex-md-row-reverse'}>
                              <Col md={7} className={'d-md-flex justify-content-md-between'}>
                                  <div>
                                      <h3 className={'fontfamily-popins fw-semibold'}>$200/month</h3>
                                      <div className={'text-muted'}>(monthly recurring plan unless cancelled)</div>
                                  </div>
                                  <Button variant={'secondary round-50 my-3'}>Current Plan</Button>
                              </Col>
                              <Col md={5}>
                                  <div className={"fw-semibold mb-3"}>Access to:</div>
                                  <ul className={'arrowList'}>
                                      <li>All legal documents</li>
                                      <li>Lawyer services</li>
                                      <li>Help with drafting bespoke legal documents</li>
                                      <li>2 legal counsel with a certified lawyer</li>
                                  </ul>
                              </Col>
                          </Row>
                      </Card.Body>
                  </Card>
                  <Card className={'border border-light mb-3'}>
                      <Card.Header  className={"border-0"}>
                          <div className={"font-16 fw-semibold"}>Legal Documents Only Plan</div>
                      </Card.Header>
                      <Card.Body>
                          <Row className={'align-items-center flex-md-row-reverse'}>
                              <Col md={7} className={'d-md-flex justify-content-md-between'}>
                                  <div>
                                      <h3 className={'fontfamily-popins fw-semibold'}>$30/month</h3>
                                      <div className={'text-muted'}>(monthly recurring plan unless cancelled)</div>
                                  </div>
                                  <Button variant={'dark rounded my-3'}>Update to this Plan</Button>
                              </Col>
                              <Col md={5}>
                                  <div className={"fw-semibold mb-3"}>Access to:</div>
                                  <ul className={'arrowList'}>
                                      <li>Access to all legal documents</li>
                                      <li>Download in .DOC format</li>
                                  </ul>
                              </Col>
                          </Row>
                      </Card.Body>
                  </Card>
              </Card.Body>
          </Card>
      </>
  )
}

export default PlanSetting;