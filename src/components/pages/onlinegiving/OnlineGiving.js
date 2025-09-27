import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './OnlineGiving.css';

const OnlineGiving = () => {
  return (
    <>
      <div className="navbar-background-placeholder" />

      <div className="giving-wrapper">
        <Card className="giving-card shadow-card">
          <Card.Body>
            <h1 className="giving-title">Online Giving</h1>
            <p className="giving-subtitle">
              Support the work of God through your tithes, offerings, and building fund contributions.
            </p>

            <h3 className="giving-option-title">Choose Your Giving Option</h3>
            <p className="giving-description">
              Select the type of giving you'd like to contribute to below.
              You will be redirected to a secure PayFast page to complete your donation.
            </p>

            <Row className="mt-5 justify-content-center">
              <Col md={5} className="mb-4">
                <Card className="giving-box">
                  <Card.Body>
                    <h4 className="giving-box-title">Tithes & Offerings</h4>
                    <p className="giving-box-text">
                      Your faithful giving supports the day-to-day work of the church.
                    </p>
                    <Button
                      variant="danger"
                      href="https://www.payfast.io/eng/process?cmd=_paynow&receiver=yourMerchantID&item_name=TithesAndOfferings"
                      target="_blank"
                    >
                      Give Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={5} className="mb-4">
                <Card className="giving-box">
                  <Card.Body>
                    <h4 className="giving-box-title">Building Fund</h4>
                    <p className="giving-box-text">
                      Help us build our new sanctuary for future generations.
                    </p>
                    <Button
                      variant="danger"
                      href="https://www.payfast.io/eng/process?cmd=_paynow&receiver=yourMerchantID&item_name=BuildingFund"
                      target="_blank"
                    >
                      Give Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default OnlineGiving;
