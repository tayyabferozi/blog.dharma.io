import React, { Fragment } from "react";

import "./Footer.css";
import Button from "../UI/Button/Button";

const Footer = () => {
  return (
    <Fragment>
      <div className="Next">Next Page »</div>
      <div className="Footer">
        <Button>Twitter</Button>
        <Button>Careers</Button>
        <Button>Blog</Button>
        <Button>Discord</Button>
        <Button>Terms</Button>
      </div>
    </Fragment>
  );
};

export default Footer;