import React, { useState } from "react";
import { Nav, Tab, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

import "./OurMissionPage.css";

const OurMissionPage = () => {
  const [activeKey, setActiveKey] = useState("tab1");

  return (
    <div className="sectionSpace ">
      <div className="d-none d-md-block">
        <Tab.Container
          id="left-tabs-example"
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k)}
        >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="tab1" className="tabsTitle">
                    Our Mission
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2" className="tabsTitle">
                    Our Vision
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3" className="tabsTitle">
                    Our Values
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-none">
                  <Nav.Link eventKey="tab3" className="tabsTitle">
                    Our Values
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="tabBoxParrent">
                <Tab.Pane eventKey="tab1">
                  <p>
                    To offer a comprehensive suite of reliable data-driven
                    services to improve clients’ programming and operational
                    outcomes in a sustainable manner.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="tab2">
                  <p>
                    To be the industry leader in the world providing research
                    and development consultancy services
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="tab3">
                  <p>
                    <div>
                      <span className="mission-box-head">Accuracy </span>
                    </div>
                    <br />
                    <div className="mission-box-para">
                      We ensure that our data is as accurate as possible through
                      our well-capacitated teams and quality control measures,
                    </div>{" "}
                    <br />
                    <div>
                      <span className="mission-box-head">
                        {" "}
                        Information Integrity{" "}
                      </span>
                    </div>
                    <br />

                    <div>
                      <span className="mission-box-para">
                        The reliability and validity of the data we collect on
                        behalf of clients is of utmost importance to our business
                        model and reputation, we ensure that the data that guides
                        client programming is robust, consistent, and trustworthy.
                      </span>{" "}
                    </div>
                    <br />

                    <div>
                      <span className="mission-box-head">
                        {" "}
                        Transparency{" "}
                      </span>
                    </div>
                    <br />
                    <div>
                      <span className="mission-box-para">
                        We are completely transparent in the purpose of our
                        assignments when communicating with our target clients and
                        population.
                      </span>{" "}
                    </div>
                    <br />
                    <div>
                      <span className="mission-box-head">
                        {" "}
                        Respect for Cultural and Religious Beliefs{" "}
                      </span>{" "}
                    </div>
                    <br />
                    <div>
                      <span className="mission-box-para">
                        We conduct data collection in a manner that does not
                        offend the cultural and religious sensitivities of the
                        study populations, and without imposing our personal
                        opinions on their beliefs and practices
                      </span>
                    </div>
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      {/* =============== accordian seciton for mobile phone =============== */}
      {/* accordian section */}
      <div className="col-md-6 ps-md-5 mt-3 mt-md-0 d-md-none d-block">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="acco-header-parent">
              <h5 className="acco-tittle-mission-page">Our Mission</h5>
            </Accordion.Header>
            <Accordion.Body className="p-3">
              <p>
                To offer a comprehensive suite of reliable data-driven services
                to improve clients’ programming and operational outcomes in a
                sustainable manner.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className="acco-header-parent">
              <h5 className="acco-tittle-mission-page">Our Vision</h5>
            </Accordion.Header>
            <Accordion.Body className="p-3">
              <p>
                To be the industry leader in the world providing research and
                development consultancy services
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className="acco-header-parent">
              <h5 className="acco-tittle-mission-page">Our Vision</h5>
            </Accordion.Header>
            <Accordion.Body className="p-3">
              <div>
                <div>
                  <span className="mission-box-head">Accuracy </span>
                </div>
                <div>
                  <span className="mission-box-para">
                    We ensure that our data is as accurate as possible through our
                    well-capacitated teams and quality control measures,
                  </span>{" "}
                </div>

                <div>
                  <span className="mission-box-head mission-space">
                    {" "}
                    Information Integrity{" "}
                  </span>
                </div>

                <div>
                  <span className="mission-box-para">
                    The reliability and validity of the data we collect on behalf
                    of clients is of utmost importance to our business model and
                    reputation, we ensure that the data that guides client
                    programming is robust, consistent, and trustworthy.
                  </span>{" "}
                </div>

                <div>
                  <span className="mission-box-head mission-space">
                    {" "}
                    Transparency{" "}
                  </span>{" "}
                </div>
                <div>
                  <span className="mission-box-para">
                    We are completely transparent in the purpose of our
                    assignments when communicating with our target clients and
                    population.
                  </span>{" "}
                </div>

                <div>
                  <span className="mission-box-head mission-space">
                    {" "}
                    Respect for Cultural and Religious Beliefs{" "}
                  </span>{" "}
                </div>

                <div>
                  <span className="mission-box-para">
                    We conduct data collection in a manner that does not offend
                    the cultural and religious sensitivities of the study
                    populations, and without imposing our personal opinions on
                    their beliefs and practices
                  </span>
                </div>


              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default OurMissionPage;
