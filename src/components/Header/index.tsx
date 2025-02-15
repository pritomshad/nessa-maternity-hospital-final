import { useState, useEffect, useRef, useCallback } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { useHistory } from "react-router-dom";

const Header = ({ t }: { t: TFunction }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if(scrollTop > lastScrollTop) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };


  const MenuItem = () => {
    const history = useHistory();

    const [scrollTarget, setScrollTarget] = useState<string | null>(null);

    useEffect(() => {
      if (scrollTarget) {
        const element = document.getElementById(scrollTarget) as HTMLDivElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
          setVisibility(false);
        }
        setScrollTarget(null); // Reset after scrolling
      }
    }, [scrollTarget]);

    const handleClick = (route: string, id: string) => {
      history.push(route);
      setScrollTarget(id); // Set the target id, useEffect will handle scrolling
    };

    /* const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    }; 

    const handleClick = (route: string, id: string) => {
      history.push(route);
      history.listen(() => {
        scrollTo(id);
      })
    };*/
    
    // navigate to different page----------------------------
    
    return (
      <>
        <CustomNavLinkSmall onClick={() => handleClick("/home", "mission")}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleClick("/home", "contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleClick("/gallery", "photoGallery")}>
          <Span>{t("Gallery")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => handleClick("/home", "donate")}
        >
          <Span>
            <Button>{t("Donate")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection ref={headerRef} isHidden={isHidden} headerHeight={headerHeight}>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="180px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
