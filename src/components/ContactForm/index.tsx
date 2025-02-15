import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer, StylizedList } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileScreenButton, faPhone } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
  return (
    <div>
      <StylizedList>
        <li style={{ marginBottom: "12px" }}><FontAwesomeIcon icon={faEnvelope} size="2x"/></li>
        <li><a href="mailto: mnmhospital0@gmail.com" style={{ textDecoration: "none", color: "black" }}>
      <p>mnmhospital0@gmail.com</p>
    </a></li>
      </StylizedList>
      <StylizedList>
        <li style={{ marginBottom: "12px" }}><FontAwesomeIcon icon={faMobileScreenButton} size="2x"/></li>
        <a href="tel:+447916678918" style={{ textDecoration: "none", color: "black" }}>
      <p>+44 7916 678918</p>
    </a>
      </StylizedList>
      <StylizedList>
        <li style={{ marginBottom: "12px" }}><FontAwesomeIcon icon={faPhone} size="2x"/></li>
        <a href="tel:07342692934" style={{ textDecoration: "none", color: "black" }}>
          <p>07342692934</p>
        </a>
      </StylizedList>
    </div>
  );
};

const Contact = ({ title, content, id, t }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
            <SocialLinks />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <StylizedList>
              <li style={{ marginBottom: "3px" }}>
                <a href="https://www.facebook.com/profile.php?id=61564927004198" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#1877F2" }} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61564927004198" target="_blank" rel="noopener noreferrer">
                  <p style={{ marginBottom: "3px" }}>/MNM Hospital</p>
                </a>
              </li>
            </StylizedList>
            <StylizedList>
              <li>
                <a href="https://www.instagram.com/mnmhospital/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#E4405F" }} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mnmhospital/" target="_blank" rel="noopener noreferrer">
                  <p style={{ marginBottom: "3px" }}>/mnmhospital</p>
                </a>
              </li>
            </StylizedList>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);

