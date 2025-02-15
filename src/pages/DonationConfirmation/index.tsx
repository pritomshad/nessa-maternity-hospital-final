import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));

const DonationConfirmation = () => {
    return (
        <Container>
            <h1>Thanks for you Donation.</h1>
            <p>To confirm donation please revisit the website's Donators page after some time.</p>
        </Container>
    )
}

export default DonationConfirmation;