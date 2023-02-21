import React from "react";
import classes from  "./index.module.scss";
import PageTitle from "../../Components/PageTitle";
import {Container, Tabs, Tab} from "react-bootstrap";
import ProfileSettingTab from "./Tabs/ProfileSettingTab";
import AccountSetting from "./Tabs/AccountSetting";
import PaymentSetting from "./Tabs/PaymentSetting";
import Documents from "./Tabs/Documents";
import PlanSetting from "./Tabs/PlanSetting";




const ProfileSetting = () => {

    return(
        <>
            <PageTitle
                title={"Profile"}
                bgWhite
                onlyTitle
            />
            <section className={`${classes.profileSetting} section`}>
                <Container>
                    <Tabs
                        className={classes.settingTabs}
                    >
                        <Tab eventKey="profilesetting" title="Profile Setting">
                            <ProfileSettingTab />
                        </Tab>
                        <Tab eventKey="AccountSetting" title="Account Setting">
                            <AccountSetting />
                        </Tab>
                        <Tab eventKey="PaymentSetting" title="Payment Setting">
                            <PaymentSetting />
                        </Tab>
                        <Tab eventKey="Documents" title="Documents">
                            <Documents />
                        </Tab>
                        <Tab eventKey="PlanSetting" title="Plan Setting">
                            <PlanSetting />
                        </Tab>
                    </Tabs>
                </Container>
            </section>
        </>
    )
}

export default ProfileSetting;