import { Col, Row } from "antd";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Number = ({ n }) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { number } = useSpring({
        from: {number: 0},
        number: inView ? n: 0,
        delay: 1000,
        config: {mass: 1, tension: 20, friction: 10},
    });
    return (
        <animated.h1 ref={ref}>
            {number.to((n) => `$${n.toFixed(0)}`)}
        </animated.h1>
    );
}

const TotalDonation = () => {
    return (
        <Row justify={"end"} align={"middle"}>
            <Col lg={12} md={12} sm={24} xs={24} className="align-right">
                <p>Total donation amount till now: </p>
            </Col>
            <Col  lg={12} md={12} sm={24} xs={24}>
                <Number n={120} />
            </Col>
        </Row>
    );
}

export default TotalDonation;