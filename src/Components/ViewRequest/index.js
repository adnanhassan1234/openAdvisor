import React from "react";
import classes from "./index.module.scss";
import img01 from "../../Images/img14.jpg";
import {Button, Col} from "react-bootstrap";
import pdfDownload from "../../Images/pdfDownload.svg";
import {Link} from "react-router-dom";

const ViewRequest = (props) => {
  return(
      <>
          <div className={classes.viewRequest}>
              <div className={classes.requestHeader}>
                  <div className={classes.imgBoxHolder}>
                      <div className={classes.imgBox}>
                          <img src={img01} alt={"#"} />
                          <span className={classes.status}></span>
                      </div>
                  </div>
                  <div className={classes.description}>
                      <div className={classes.text}>
                          <h2 className={classes.title}>Harry Bill</h2>
                          <p className={"text-muted fw-semibold"}>Founder</p>
                          <p className={'fw-semibold'}>Availability</p>
                          <p className={'text-yellow'}>Monday to Friday | 9:00AM to 1:00PM</p>
                      </div>
                      <div className={classes.btnRow}>
                          <Button variant={"secondary"}>Accept</Button>
                          <Button variant={"light"}>Ignore</Button>
                      </div>
                  </div>
              </div>
              <div className={classes.requestBody}>
                  <Col className={classes.col}>
                      <ul className={'dataList w-100'}>
                          <li>
                              <div className={"text-muted"}>Email</div>
                              <div className={"fw-semibold"}>john@gmail.com</div>
                          </li>
                          <li>
                              <div className={"text-muted"}>Phone</div>
                              <div className={"fw-semibold"}>+1 378 299 2999</div>
                          </li>
                          <li>
                              <div className={"text-muted"}>LinkedIn Profile</div>
                              <div className={"fw-semibold"}>www.LinkedIn.com/john3/</div>
                          </li>
                          <li>
                              <div className={"text-muted"}>Location</div>
                              <div className={"fw-semibold"}>Toronto, Canada </div>
                          </li>
                      </ul>
                  </Col>
                  <Col className={classes.col}>
                      <div className={'mb-3'}>
                          <div className={"text-muted"}>Resources</div>
                      </div>
                      <div className={'mb-3'}>
                          <ul className={'downLoadFileList'}>
                              <li>
                                  <div className={"text-muted"}>Pitch Deck</div>
                                  <Link to={"#"}>
                                      <img src={pdfDownload} alt={"PDF"} />
                                  </Link>
                              </li>
                              <li>
                                  <div className={"text-muted"}>Business Plan</div>
                                  <Link to={"#"}>
                                      <img src={pdfDownload} alt={"PDF"} />
                                  </Link>
                              </li>
                              <li>
                                  <div className={"text-muted"}>Certificates</div>
                                  <Link to={"#"}>
                                      <img src={pdfDownload} alt={"PDF"} />
                                  </Link>
                              </li>
                          </ul>
                      </div>
                      <div className={'mb-3'}>
                          <div className={"text-muted"}>Skills</div>
                          <ul className={'tagList'}>
                              <li>
                                  <Link to={"#"}>Skill 1</Link>
                              </li>
                              <li>
                                  <Link to={"#"}>Skill 2</Link>
                              </li>
                              <li>
                                  <Link to={"#"}>Skill 3</Link>
                              </li>
                              <li>
                                  <Link to={"#"}>Skill 4</Link>
                              </li>
                          </ul>
                      </div>
                  </Col>
              </div>
          </div>
      </>
  )
}

export default ViewRequest;
