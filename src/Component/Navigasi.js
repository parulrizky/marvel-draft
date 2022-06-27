import { Navbar, Container, Nav} from "react-bootstrap" 

const Navigasi = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand className="merek" href="/">MCU</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">Trending</Nav.Link>
                    <Nav.Link href="#superhero">Superhero</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigasi