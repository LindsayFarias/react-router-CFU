import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, Route, useRouteMatch, useParams } from 'react-router-dom';
import Cart from "./Cart"

const Products = () => {
    let {url, path} = useRouteMatch();
    return(
        <Container fluid className="mx-auto my-5">
            <Row className="my-3">
                <Col md={{span: 2, offset: 1}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
                    <Card.Body>
                        <Card.Title>Bulbasaur</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="light"><Link to={`${url}/Bulbasaur`}>View</Link></Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" />
                    <Card.Body>
                        <Card.Title>Charmander</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="light"><Link to={`${url}/Charmander`}>View</Link></Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" />
                    <Card.Body>
                        <Card.Title>Squirtle</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="light"><Link to={`${url}/Squirtle`}>View</Link></Button>
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
                        <Button variant="light"><Link to={`${url}/Pikachu`}>View</Link></Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" />
                    <Card.Body>
                        <Card.Title>Clefairy</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="light"><Link to={`${url}/Clefairy`}>View</Link></Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png" />
                    <Card.Body>
                        <Card.Title>Vulpix</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="light"><Link to={`${url}/Vulpix`}>View</Link></Button>
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
                        <Button variant="light"><Link to={`${url}/Abra`}>View</Link></Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png" />
                    <Card.Body>
                        <Card.Title>Cubone</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="light"><Link to={`${url}/Cubone`}>View</Link></Button>
                    </Card.Body>
                </Card></Col>
                <Col md={{span: 2, offset: 2}}><Card style={{ width: '18rem' }} border="info">
                    <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" />
                    <Card.Body>
                        <Card.Title>Eevee</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="light"><Link to={`${url}/Eevee`}>View</Link></Button>
                    </Card.Body>
                </Card></Col>
            </Row>
            <Route exact path={`${path}/:productName`}>
                <ProductPage />
            </Route>
        </Container>
    )
}

const ProductPage = () => {
    let { productName } = useParams()
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{`${productName}`}</Card.Title>
                <Card.Text>Price per Pokemon is $33, buy your most very best friend today!</Card.Text>
                <Button variant="light"><Link to="/Cart">Add To Cart</Link></Button>
            </Card.Body>
            <Route path="/Cart">
                <Cart let pokemonPurchase={`${productName}`}/>
            </Route>
        </Card>
    )

}

export default Products;