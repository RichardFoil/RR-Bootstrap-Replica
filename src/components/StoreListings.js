import Image from 'react-bootstrap/Image'
import  Container  from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'

export default function StoreListings(){
    return(
        <div style={{margin: "auto" }}>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{display: "block", height: "58px", width: "58px", border: "1px solid #E8E9EB"}} src="https://www.pngkey.com/png/detail/209-2094988_download-publix-supermarket-charities-logo.png" alt="Download - Publix Supermarket Charities Logo@pngkey.com" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>PUBLIX</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{display: "block", height: "58px", width: "58px", border: "1px solid #E8E9EB"}} src="https://1000logos.net/wp-content/uploads/2017/12/Aldi-logo.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{display: "block", height: "58px", width: "58px", border: "1px solid #E8E9EB"}} src="https://www.kindpng.com/picc/m/361-3614498_sprouts-farmers-market-logo-sprouts-farmers-market-hd.png" alt="Sprouts Farmers Market Logo - Sprouts Farmers Market"  roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>Sproutes Farmers Market</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>

                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{display: "block", height: "58px", width: "58px", border: "1px solid #E8E9EB"}} src="https://www.pngkey.com/png/detail/209-2094988_download-publix-supermarket-charities-logo.png" alt="Download - Publix Supermarket Charities Logo@pngkey.com" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>PUBLIX</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{display: "block", height: "58px", width: "58px", border: "1px solid #E8E9EB"}} src="https://1000logos.net/wp-content/uploads/2017/12/Aldi-logo.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{display: "block", height: "58px", width: "58px", border: "1px solid #E8E9EB"}} src="https://www.kindpng.com/picc/m/361-3614498_sprouts-farmers-market-logo-sprouts-farmers-market-hd.png" alt="Sprouts Farmers Market Logo - Sprouts Farmers Market"  roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>Sproutes Farmers Market</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}