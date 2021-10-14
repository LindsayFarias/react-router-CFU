import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Products = () => {
    return(
        <Container fluid className="mx-auto my-5">
            <Row className="my-3">
                <Col md={{span: 2, offset: 1}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
                    <Card.Body>
                        <Card.Title>Bulbasaur</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" />
                    <Card.Body>
                        <Card.Title>Charmander</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" />
                    <Card.Body>
                        <Card.Title>Squirtle</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
            </Row>
            <Row className="my-3">
                <Col md={{span: 2, offset: 1}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" />
                    <Card.Body>
                        <Card.Title>Pikachu</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" />
                    <Card.Body>
                        <Card.Title>Clefairy</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png" />
                    <Card.Body>
                        <Card.Title>Vulpix</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
            </Row>
            <Row className="my-3">
                <Col md={{span: 2, offset: 1}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png" />
                    <Card.Body>
                        <Card.Title>Abra</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png" />
                    <Card.Body>
                        <Card.Title>Cubone</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" />
                    <Card.Body>
                        <Card.Title>Eevee</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>
    )
}

export default Products;