import React from "react";
import PageTitle from "../../Components/PageTitle";
import {Card, Container} from "react-bootstrap";
import classes from "./index.module.scss";
import bd1 from "../../Images/bd1.jpg";
import bd2 from "../../Images/cImg.jpg";
import SectionTitle from "../../Components/SectionHeader";
import ColSlider from "../../Components/ColSlider";
import img08 from "../../Images/img08.jpg";
import img09 from "../../Images/img09.jpg";
import img10 from "../../Images/img10.jpg";
import SocialLinks from "../../Components/SocialLinks";

const BLogDetail = (props) => {
    const data = [
        {
            title: "Making mentorship work out",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
            imgURL: img08,
            linkText: "Show More",
            url: "abc.com"
        },
        {
            title: "Ask questions to your advisors",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
            imgURL: img09,
            linkText: "Show More",
            url: "abc.com"
        },
        {
            title: "Improvement in stats",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
            imgURL: img10,
            linkText: "Show More",
            url: "abc.com"
        },

    ]
  return(
      <>
          <PageTitle title={"Business Startup Costs "} date={"12. 10. 2022"} />
          <section className={"p-0"}>
              <Container>
                  <Card>
                      <div className={classes.imgBox}>
                          <img src={bd1} alt={"#"} />
                      </div>
                      <SocialLinks blogs />
                      <Card.Body className={classes.cardBody}>
                        <h5>Startup Costs Checklist</h5>
                        <p>Many aspiring business owners don’t know where to get started. They have a vision, but thinking about marketing, hiring, product development, and more can become overwhelming. In most cases, the best place to start is crunching the numbers—determining your business startup costs.</p>

                        <p>Without a budget, you can’t make good decisions, and you can’t make a budget without understanding your expenses.</p>

                        <p>So to help you keep your business from being one of the many that go under each year, we wanted to outline some examples of typical startup costs so you can better budget your business and know what to expect. After consulting this cost checklist, you should be able to determine a forward plan of action for your new enterprise.</p>

                        <p>Note that we wanted to focus mostly on online businesses, but other businesses can still greatly benefit and do some quick adjustments and research to make sure they’re on the right track as well. Remember that your labor and energy are important things to consider when establishing how much it cost to start a business. Be aware of service and recurring costs, hidden opportunity costs, and similar items. Keep all of your options available to you, and don’t forget that managing costs effectively doesn’t always mean cutting corners. Above all else, be open to new opportunities and adapting to the market.</p>
                          <div className={classes.imgBox}>
                              <img src={bd2} alt={"#"} />
                          </div>
                          <p>Most businesses are not profitable at first, and it could take quite a while to break through and earn a steady stream of income. While the costs of an online business aren’t exorbitant as they might be for more traditional businesses, they can still be a drain, especially if you’re also working on it full time and have no other sources of income. You do not want to make business decisions based on short-term personal financial needs.</p>

                          <p>When starting out, you need to make sure you either have a reliable stream of income or enough in the bank to keep full operating costs going for at least one year and up to three years, if you think your platform or idea might take a while to take off.</p>
                      </Card.Body>
                  </Card>
              </Container>
          </section>
          <section className={"section"}>
              <Container>
                  <SectionTitle title={"Related Blogs"} description={"Interesting and informative reading about entrepreneurship, advisors and startups."} />
                  <ColSlider
                      BLogSlider
                      slidesScroll={1}
                      arrows={true}
                      dots={false}
                      slidesShow={3}
                      buttonText="View all Blogs"
                      btnUrl="/blogs"
                      data={data}
                  />
              </Container>
          </section>

      </>
  )
}

export default BLogDetail;