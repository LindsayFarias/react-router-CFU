import {Image, Container} from "react-bootstrap";

const Home = () => {
    return(
        <Container className="mx-auto my-5 justify-content-center">
            <h3>Welcome to the Shopping Center</h3>
            <h4>Click on the Products link in the Navbar to get started!</h4>
            <Image className="p-3 m-5"src="https://media4.giphy.com/media/9rtpurjbqiqZXbBBet/200w.webp?cid=ecf05e47exi3sdfjgkv5ps5bty8ovq3gjq1marxnq4v0y1ri&rid=200w.webp&ct=g" fluid />
        </Container>
    )
}

export default Home;