import React from "react";
import * as classes from "./maincomponents.module.scss";
import product1 from "../../assets/images/product1.png";
import { Col } from "react-bootstrap";

const ProductView = (id) => {
  return (
    <Col sm={3} key={id}>
      <div className={classes.productSec}>
        <div className={classes.imgSec}>
          <img src={product1}></img>
          <div className={classes.overlay}>
            <div className={classes.optionSec}>
              <div className={classes.iconsec}>
                <i className={classes.cart}></i>
              </div>
              <div className={classes.iconsec}>
                <i className={classes.favorite_icon}></i>
              </div>
              <div className={classes.iconsec}>
                <i className={classes.cart_icon}></i>
              </div>
            </div>
          </div>
        </div>
        <p className={classes.productnameSec}>Venticare Nebulizer Mask </p>
        <p className={classes.priceSec}>
          <span>₹ 20.44</span>₹ 10.44
        </p>
      </div>
    </Col>
  );
};

export default ProductView;
