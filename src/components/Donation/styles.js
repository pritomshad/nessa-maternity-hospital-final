import styled from "styled-components";

export const DonationContainer = styled("div")`
  margin-top: 5rem;
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`

export const DivWithLeftMargin = styled("div")`
  margin-left: 0rem;
`

export const CustomLink = styled("a")`
    color: rgb(56, 192, 255);
    text-underline-position: under;
    text-decoration: rgb(56, 192, 255) wavy underline;
`

export const DonationCard1 = styled("div")`
  border-style: solid;
  border-color: #4d6478;
  background-image: url('/img/svg/card-back-1.png');
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  width: 320px;
  position: relative;
  grid-template-rows: 1fr auto;
  box-shadow: 0 1rem 2rem -1rem black;
  padding: 1rem;
  margin-left: 6rem;

  @media only screen and (max-width: 945px) {
    margin: 1.5rem;
  }

  @media only screen and (max-width: 414px) {
    margin: 1.5rem;
  }
  
  @media only screen and (max-width: 375px) {
    margin: 0.5rem;
  }

`

export const DonationCard2 = styled("div")`
  border-style: solid;
  border-color: #4d6478;
  background-image: url('/img/svg/card-back-2.png');
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  width: 320px;
  position: relative;
  grid-template-rows: auto 1fr;
  box-shadow: 0 1rem 2rem -1rem black;
  padding: 1rem;
  display: grid;
  margin-left: 6rem;
  
  @media only screen and (max-width: 945px) {
    margin: 1.5rem;
  }
  
  @media only screen and (max-width: 414px) {
    margin: 1.5rem;
  }

  @media only screen and (max-width: 375px) {
    margin: 0.5rem;
  }

`
