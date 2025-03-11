import { Col, Row, Container } from "react-bootstrap"
import PricingPlans from "../../Components/pricingCard/PricingCard"

const PaymentPlansSectionthird = () => {
    return (
        <section className="payment-plans-section py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        {/* <h2 className="mb-4" style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 'bold',
                            fontSize: '50px',
                            lineHeight: '60px',
                            letterSpacing: '-0.036em',
                            textAlign: 'center'
                        }}>
                            A more effective way <br /><span style={{ display: 'inline-block', marginTop: '10px' }}>to track progress</span>
                        </h2> */}


                        <p className="text-muted mb-5">
                        If you decide to cancel before March 29, you won't incur any charges. You have the flexibility to modify or cancel your plan at any time.                        </p>
                    </Col>
                </Row>
                {/* Add your pricing cards here */}
                <Row className="justify-content-center">
                    <PricingPlans />
                </Row>
            </Container>
            <style jsx>{`
        .payment-plans-section {
          overflow: hidden;
        }
      `}</style>
        </section>
    )
}

export default PaymentPlansSectionthird;

