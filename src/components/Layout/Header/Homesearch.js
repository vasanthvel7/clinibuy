import React from "react";
import {
  DropdownButton,
  FormControl,
  InputGroup,
  Row,
  Dropdown,
  Col,
  Button,
} from "react-bootstrap";
import logoImg from "../../../assets/images/main_logo.png";
import * as classes from "./Header.module.scss";

const Homesearch = () => {
  return (
    <div className="mainsec">
      <div className={classes.categorySec}>
        <Row>
          <Col sm={3}>
            <div className={classes.imgSec}>
              <img src={logoImg} alt="main logo" />
            </div>
          </Col>
          <Col sm={5}>
            <InputGroup className={classes.searchSec}>
              <DropdownButton
                variant="outline-secondary"
                title="All Categories"
                id="input-group-dropdown-3"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <FormControl placeholder="What do you Need ?" />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                className={classes.searchBtn}
              >
                <span class="material-symbols-outlined">search</span>
              </Button>
            </InputGroup>
          </Col>
          <Col sm={4}>
            <div className={classes.userSec}>
              <div className={classes.callSec}>
                <i className={classes.call_icon}></i>
                <p>
                  Call
                  <span>+91 7010034955</span>
                </p>
              </div>

              <div className={classes.accountSec}>
                <i className={classes.profile_icon}></i>
                <i className={classes.favorite_icon}></i>
                <i className={classes.notification_icon}></i>
                <i className={classes.cart_icon}></i>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Homesearch;
