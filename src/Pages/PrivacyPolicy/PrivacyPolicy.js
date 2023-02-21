import React from "react";
import Banner from "../../Components/Banner";
import {Container} from "react-bootstrap";

const PrivacyPolicy = () => {
  return(
      <>
          <Banner
              dots
              title={"Privacy Policy"}
              description={"These are the general privacy policy on which we supply all our services. If you use our services, you agree to abide by these terms."}
          />
          <section className={"section"}>
              <Container>
                  <h4 className={"fontfamily-popins"}>Privacy Policy of our web services</h4>
                    <p>These are the general terms of use on which we supply all our services. If you use our services, you agree to abide by these terms.</p>
                    <p>At Open Founder Foundation we supply a lot of different services. Some of them will have specific terms tailored for them. If that is the case, Open Knowledge Foundation's contract with you for that service will be on these terms, supplemented by any terms specific to the service. In the case of any conflict, service specific terms will take precedence.</p>
                    <p>We process personal data in accordance with our privacy policy. As part of this agreement you consent to our doing so. You should read the policy carefully, especially if you have any concerns about your privacy.</p>
                    <p>Warning: unless we have agreed a particular level of service with you, we make absolutely no promises about the quality or existence of any of our services . Please read the sections below and our general exclusion of liability.</p>
                    <p>All use of our web services are subject to our terms for web users. There are further terms if you have signed up for an account with one of our services and, if you have agreed to pay us for a service, please see the additional terms for paid-for services. At the end are some general terms and definitions.</p>
                    <p>If you believe there may be illegal content hosted on our web services please let us know at ip@okfn.org</p>
                    <p>Terms for use of our web services<br/>
                    Web services include our APIs as well as any of our websites.</p>
                    <p>Disclaimer<br/>
                    While we are proud of the services we provide to the world for free and try to make them reliable and useful, we make no promises about them. All web services are certain to fail some of the time. We adapt and change our services from time to time, so you may find that something that worked for you may cease to work. We may also stop supplying any service, temporarily or permanently or block access to our services to anyone for any reason.</p>
                    <p>If you need some guarantee of a particular service level, then please do not hesitate to contact us to discuss whether we could offer you a commercial version of any of our services (assuming one is not already available).</p>
                    <p>We are not a law firm and nothing we do is intended to be taken as legal advice. In particular:</p>
                    <p>The API supplied with our Public Domain Works project is not guaranteed to provide an answer with 100% certainty. Copyright law is complex and there may be obscure cases that are not handled correctly. It is intended to be a starting point, not the word of God.</p>
                    <p>What you agree<br/>
                    You agree not to use our websites to do any of the following:</p>

                    <p>Anything which is illegal either where you are in the world, or where we are.<br/>
                        Cause nuisance to other users of our services.</p>
                    <p>Interfere with the normal running of our services.</p>
                    <p>Try to access our systems in a way other than those advertised by us and, in particular, to use a web crawler that does not respect the robots exclusion policy.<br/>
                        Other websites ...</p>
              </Container>
          </section>
      </>
  )
}

export default PrivacyPolicy;