import styled from "styled-components";

export const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '600px',
      margin: '0 auto',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    button: {
      fontSize: '2rem',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
  };

export const ImageHolder = styled("div")`
  display: 'flex';
  alignItems: 'center';
  justifyContent: 'center';
  height: 500px;
`;

export const StyledImage = styled("img")`
  display: 'flex';
  alignItems: 'center';
  justifyContent: 'center';
  max-width: calc(100% - 80px);
  max-height: 800px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15%;
  padding-right: 15%;

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
export const DivForGallery = styled("div")`
  padding: 3rem 0;
  text-align: center;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`