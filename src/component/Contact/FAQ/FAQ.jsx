import React from "react";
import "./FAQ.css";
import { Accordion } from "react-bootstrap";


const FAQ = () => {
  return (
    <div className="sectionGap containe pb-lg-5">
      <div className="text-center col-12 mb-4 col-md-10 col-lg-9 mb- m-auto">
        <h1 className="d-none d-md-block pb-0 pb-md-4">
          Frequently Asked Questions
        </h1>
        <h1 className="d-md-none">FAQ</h1>
        <p className="text-center">
          Smart Vision was established in response to an overwhelming need among
          humanitarian and development organizations.
        </p>
      </div>

      {/* ================= accordion section ================= */}
      
        <div className="mt-md-5 mb-lg-5">
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header className="">
                <h5 className="acco-tittle">Why should we work with you?</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-white">
                <div className="">
                  <p>
                    Smart Vision for Consultancy and Development was
                    incorporated in 2011 in Somalia. We focus majorly on
                    monitoring, evaluation, research and learning (MERL),
                    institutional capacity development services, private sector
                    development, quality infrastructure and trade facilitation,
                    mainly in Somalia and across the greater Horn of Africa
                    region. At Smart Vision, we are committed to
                    professionalism, timely and quality service delivery.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ============ accordiam item 2 =========== */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5 className="acco-tittle">Why should we work with you?</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-white">
                <div className="">
                  <p>
                    Smart Vision for Consultancy and Development was
                    incorporated in 2011 in Somalia. We focus majorly on
                    monitoring, evaluation, research and learning (MERL),
                    institutional capacity development services, private sector
                    development, quality infrastructure and trade facilitation,
                    mainly in Somalia and across the greater Horn of Africa
                    region. At Smart Vision, we are committed to
                    professionalism, timely and quality service delivery.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ============ accordiam item 3 =========== */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h5 className="acco-tittle">Why should we work with you?</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-white">
                <div className="">
                  <p>
                    Smart Vision for Consultancy and Development was
                    incorporated in 2011 in Somalia. We focus majorly on
                    monitoring, evaluation, research and learning (MERL),
                    institutional capacity development services, private sector
                    development, quality infrastructure and trade facilitation,
                    mainly in Somalia and across the greater Horn of Africa
                    region. At Smart Vision, we are committed to
                    professionalism, timely and quality service delivery.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ============ accordiam item 4 =========== */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h5 className="acco-tittle">Why should we work with you?</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-white">
                <div className="">
                  <p>
                    Smart Vision for Consultancy and Development was
                    incorporated in 2011 in Somalia. We focus majorly on
                    monitoring, evaluation, research and learning (MERL),
                    institutional capacity development services, private sector
                    development, quality infrastructure and trade facilitation,
                    mainly in Somalia and across the greater Horn of Africa
                    region. At Smart Vision, we are committed to
                    professionalism, timely and quality service delivery.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ============ accordiam item 5 =========== */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <h5 className="acco-tittle">Why should we work with you?</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-white">
                <div className="">
                  <p>
                    Smart Vision for Consultancy and Development was
                    incorporated in 2011 in Somalia. We focus majorly on
                    monitoring, evaluation, research and learning (MERL),
                    institutional capacity development services, private sector
                    development, quality infrastructure and trade facilitation,
                    mainly in Somalia and across the greater Horn of Africa
                    region. At Smart Vision, we are committed to
                    professionalism, timely and quality service delivery.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ============ accordiam item 6 =========== */}
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <h5 className="acco-tittle">Why should we work with you?</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-white">
                <div className="">
                  <p>
                    Smart Vision for Consultancy and Development was
                    incorporated in 2011 in Somalia. We focus majorly on
                    monitoring, evaluation, research and learning (MERL),
                    institutional capacity development services, private sector
                    development, quality infrastructure and trade facilitation,
                    mainly in Somalia and across the greater Horn of Africa
                    region. At Smart Vision, we are committed to
                    professionalism, timely and quality service delivery.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      
    </div>
  );
};

export default FAQ;
