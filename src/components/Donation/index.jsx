import * as React from 'react';
import { Row, Col } from "antd";
import { CustomLink, DivWithLeftMargin, DonationCard1, DonationCard2, DonationContainer } from './styles';
import { Slide } from 'react-awesome-reveal';
import Block from '../Block';
import { withTranslation } from 'react-i18next';


const Donate = ({title, content, id}) => {
    return (
        <DonationContainer id={id}>
            <Row justify={"space-between"} align={"top"}>
                <Col span={8}> </Col>
                <Col span={8}><h1 style={{textAlign: 'center'}}>Donate Here</h1></Col>
                <Col span={8}></Col>
                {/* <Col lg={12} md={12} sm={24} xs={24}>
                    <Slide direction='left' triggerOnce>
                        <DivWithLeftMargin>
                            <stripe-buy-button
                                buy-button-id="buy_btn_1PwIQYRxzF3XYr6InCstLarI"
                                publishable-key="pk_test_51PrF6aRxzF3XYr6I539lJURyZDp1NYOcQvxicld10KckilXDjFHxunR5ifOGXVPgVz1ajDC4M3PlRIupF8CkyCOk00K8yE9Mgn"
                            >
                            </stripe-buy-button>
                        </DivWithLeftMargin>
                    </Slide>

                </Col>
                <Col lg={12} md={11} sm={24} xs={24}>
                    <Slide direction='right' triggerOnce>
                        <Block title="Donate here*" content="* This is a one time donation. If you want to donate monthly"/>
                        <CustomLink href="stripe.com">click here</CustomLink>
                    </Slide>
                </Col> */}
            </Row>
            <Row justify={"space-between"} align={"middle"} style={{textAlign: 'center'}}>
                <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <DonationCard1>
                        <p style={{textAlign: 'center'}}>One-time Donation</p>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1PwIQYRxzF3XYr6InCstLarI"
                            publishable-key="pk_test_51PrF6aRxzF3XYr6I539lJURyZDp1NYOcQvxicld10KckilXDjFHxunR5ifOGXVPgVz1ajDC4M3PlRIupF8CkyCOk00K8yE9Mgn"
                        >
                        </stripe-buy-button>
                    </DonationCard1>
                </Col>
                <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <DonationCard2>
                        <p style={{textAlign: 'center'}}>Monthly Donation</p>
                        If you want to support our cause monthly, please select any of the options below.
                        <stripe-buy-button
                            buy-button-id="buy_btn_1Q5shkRxzF3XYr6IwrQN4awA"
                            publishable-key="pk_test_51PrF6aRxzF3XYr6I539lJURyZDp1NYOcQvxicld10KckilXDjFHxunR5ifOGXVPgVz1ajDC4M3PlRIupF8CkyCOk00K8yE9Mgn"
                            >
                        </stripe-buy-button>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1Q5szbRxzF3XYr6IcvRMnvXd"
                            publishable-key="pk_test_51PrF6aRxzF3XYr6I539lJURyZDp1NYOcQvxicld10KckilXDjFHxunR5ifOGXVPgVz1ajDC4M3PlRIupF8CkyCOk00K8yE9Mgn"
                            >
                        </stripe-buy-button>

                        <stripe-buy-button
                        buy-button-id="buy_btn_1Q5t1iRxzF3XYr6IZ3tcpnBw"
                        publishable-key="pk_test_51PrF6aRxzF3XYr6I539lJURyZDp1NYOcQvxicld10KckilXDjFHxunR5ifOGXVPgVz1ajDC4M3PlRIupF8CkyCOk00K8yE9Mgn"
                        >
                        </stripe-buy-button>

                        <stripe-buy-button
                        buy-button-id="buy_btn_1Q5t2gRxzF3XYr6ICAANqUBc"
                        publishable-key="pk_test_51PrF6aRxzF3XYr6I539lJURyZDp1NYOcQvxicld10KckilXDjFHxunR5ifOGXVPgVz1ajDC4M3PlRIupF8CkyCOk00K8yE9Mgn"
                        >
                        </stripe-buy-button>
                    </DonationCard2>
                </Col>
            </Row>
        </DonationContainer>
    );
}

export default withTranslation()(Donate);