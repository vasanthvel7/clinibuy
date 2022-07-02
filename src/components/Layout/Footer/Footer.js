import React from "react";
import { Col, Row } from "react-bootstrap";
import * as classes from "./Footer.module.scss";
import logoImg from "../../../assets/images/payment.png";

const Footer = () => {
  return (
    <div className={classes.FooterSec}>
      <div className="mainsec">
        <div className={`${classes.offerSec} mainsec`}>
          <Row>
            <Col sm={3}>
              <div className={classes.offer}>
                <i className={classes.truck_icon}></i>
                <div className={classes.offerContainer}>
                  <p>Free Delivery</p>
                  <span>For all order over 99 $ </span>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className={classes.offer}>
                <i className={classes.rupee_icon}></i>
                <div className={classes.offerContainer}>
                  <p>30 days return</p>
                  <span>If goods have problems</span>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className={classes.offer}>
                <i className={classes.cards_icon}></i>
                <div className={classes.offerContainer}>
                  <p>Secure payment</p>
                  <span>100 % Secure payments </span>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className={classes.offer}>
                <i className={classes.available_icon}></i>
                <div className={classes.offerContainerLast}>
                  <p>24/7 Support</p>
                  <span>Dedicated Support </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={classes.categoryContainer}>
          <Row>
            <Col sm={3}>
              <div className={classes.categorySec}>
                <h1>About us</h1>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
                <p>
                  <i className={classes.location_icon}></i>Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <p>
                  <i className={classes.call_icon}></i>+91 7010034955
                </p>
                <p>
                  <i className={classes.email_icon}></i>info@clinibuy.in
                </p>
                <div className={classes.socialShareSec}>
                  <p>
                    <i className={classes.facebook_icon}></i>
                  </p>
                  <p>
                    <i className={classes.instagram_icon}></i>
                  </p>
                  <p>
                    <i className={classes.twitter_icon}></i>
                  </p>
                  <p>
                    <i className={classes.google_plus_icon}></i>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className={classes.categorySec}>
                <h1>Customer Care</h1>
                <ul>
                  <li style={{ listStyleType: "none" }}>My Account</li>
                  <li style={{ listStyleType: "none" }}>My Orders</li>
                  <li style={{ listStyleType: "none" }}>Track Your Order</li>
                  <li style={{ listStyleType: "none" }}>Sale for later</li>
                  <li style={{ listStyleType: "none" }}>FAQs</li>
                  <li style={{ listStyleType: "none" }}>
                    Refunds/Return Policy
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className={classes.categorySec}>
                <h1>Categories</h1>
                <ul>
                  <li style={{ listStyleType: "none" }}>
                    Consumables & Disposables
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    Lab Diagnostics & Instruments
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    Medical Device & Equipment
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    Medicines and Pharmaceutical
                  </li>
                  <li style={{ listStyleType: "none" }}>Dental</li>
                  <li style={{ listStyleType: "none" }}>Medical Implants</li>
                  <li style={{ listStyleType: "none" }}>
                    Surgical Instruments
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    Hospital Establishment
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    Physiotherapy & Rehabilitation-Medical Aids
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className={classes.categorySec}>
                <h1>Payment Mode </h1>
                <img src={logoImg} alt="main logo" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
