import { lazy } from "react";
import Gallery from "../../components/Gallery";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Container = lazy(() => import("../../common/Container"));

const CustomLink = styled("a")`
    color: #18456a;
    font-size: 1rem;

    &:hover,
    &:active,
    &:focus {
        color: rgb(56, 192, 255);
        text-underline-position: under;
        text-decoration: rgb(56, 192, 255) wavy underline;
    }
`

const GalleryPage = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/home')
    }


    return (
        <Container>
            <CustomLink id="intro" onClick={handleClick}> <img src="/img/svg/back.png" alt="left-arrow" width="20rem" /> Go to Home</CustomLink>
            <Gallery id="photoGallery"/>
            <ScrollToTop />
        </Container>
    )
}

export default GalleryPage;