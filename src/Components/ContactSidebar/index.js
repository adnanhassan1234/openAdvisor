import React, {useState} from "react";
import classes from "./index.module.scss";
import UserList from "../UserList";
import img1 from "../../Images/img14.jpg";
import ChatPop from "./ChatPop";
import {Button} from "react-bootstrap";

const ContactSidebar = (props) => {
    const [className, setClassName] = useState("");
    const handleClick = () => {
        //setClassName("openChatPopup");
        setClassName(!className);
    };

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };


    const data = [
        {
            name: 'Zain Lubin',
            desigination: 'Founder',
            imgUrl: img1,
            timeSlot: '9:00 AM - 10:00 AM',
        },
        {
            name: 'Alena Torff',
            desigination: 'Lawyer',
            imgUrl: img1,
            timeSlot: '9:00 AM - 10:00 AM',
        },
        {
            name: 'Jordyn Geidt',
            desigination: 'Accountant',
            imgUrl: img1,
            timeSlot: '9:00 AM - 10:00 AM',
        },
        {
            name: 'Randy Carder',
            desigination: 'Accountant',
            imgUrl: img1,
            timeSlot: '9:00 AM - 10:00 AM',
        },

    ]
  return(
      <>
          <aside id={classes.chatSidebar}
                 className={`
                    
                     ${props.className ? `${props.className}` :  ''} 
                     ${className ? 'openChatPopup' : ''}
                     ${isActive ? `${classes.sidebarActive}` : ''}
                     ${classes.contactSidebar}
                     contactSidebar
                 `}>
              <UserList
                  chat
                  data={data}
                  handleClick={handleClick}
              />
              <Button variant={'userSidebarOpener'} onClick={toggleClass}><i className={'fal fa-comment-dots fa-fw'}></i> </Button>
              <ChatPop handleClick={handleClick} />
          </aside>
      </>
  )
}

export default ContactSidebar;