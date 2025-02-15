import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import Donation from "../../components/Donation";
import TotalDonation from "../../components/TotalDonation";

const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="1.jpg"
        id="intro"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="care.svg"
        id="mission"
      />
      <Contact
      title={ContactContent.title}
      content={ContactContent.text}
      id="contact"
      />
      <Donation
        title="Donate Here" 
        content="Your Donation will bring smile to people"
        id="donate"
      />
      <ScrollToTop />
    </Container>
  );
};

export default Home;
