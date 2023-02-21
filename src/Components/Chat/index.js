import React from "react";
import classes from "./index.module.scss";
import img01 from "../../Images/img14.jpg";
import {Dropdown} from "react-bootstrap";

const Chat = () => {
  return(
      <>
          <div className={classes.chatPopup}>
              <div className={classes.chatHeader}>
                  <div className={classes.imgBox}>
                      <img src={img01} alt={"#"} />
                  </div>
                  <div className={classes.description}>
                      <h5>Harry Bill</h5>
                      <div className={'d-flex align-items-center'}><span className={classes.status}></span>Active now</div>
                      <Dropdown align="end" className={`action-dropdown ${classes.dropdown}`}>
                          <Dropdown.Toggle variant="action">
                              <i className={"fas fa-ellipsis-v fa-fw"}></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Start a meeting</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Delete Message</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                  </div>
              </div>
              <div className={classes.mesgs}>
                  <div className={classes.msgHistory}>
                      <div className={classes.incoming}>
                          <div className={classes.userImg}>
                              <img src={img01} alt="username" />
                          </div>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                      </div>
                      <div className={classes.outgoing}>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions. Test which is a new approach to have all
                                  solutions
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions. Test which is a new approach to
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                      </div>
                      <div className={classes.incoming}>
                          <div className={classes.userImg}>
                              <img src={img01} alt="username" />
                          </div>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions. Test which is a new approach to have all
                                  solutions
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions. Test which is a new approach to
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                      </div>
                      <div className={classes.outgoing}>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions. Test which is a new approach to have all
                                  solutions
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                          <div className={classes.description}>
                              <div className={classes.text}>Test which is a new approach to have all
                                  solutions. Test which is a new approach to
                                  <div className={classes.time}> 11:01 AM</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={classes.typeMsg}>
                      <div className={classes.btnGroup}>
                          <button type="button" className={classes.btn}><i className="far fa-smile"></i></button>
                          <button type="button" className={classes.btn}><i className="far fa-paperclip"></i></button>
                      </div>
                      <div className={classes.userImg}>
                          <img src={img01} alt="username" />
                      </div>
                      <input type="text" className={classes.formControl} placeholder="Type a message" />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Chat;