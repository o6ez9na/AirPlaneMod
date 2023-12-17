import { Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

const SearchAirplanes = () => {
    return (
        <div>
            <h1 className='mb-3 mt-3'>Оставить заявку</h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={3} className="p-0">
                        <InputGroup>
                            <Form.Control placeholder='Откуда'/>
                        </InputGroup>
                    </Col>
                    <Col xs={1} className='text-center p-0'>
                        <HiOutlineArrowsRightLeft style={{ margin: '0', fontSize: '1.5rem' }} />
                    </Col>
                    <Col xs={3} className="p-0">
                        <InputGroup>
                            <Form.Control placeholder='Куда'/>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default SearchAirplanes;