import { Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import Calendar from "../calendar/calendar.jsx"

const SearchAirplanes = () => {
    return (
        <div>
            <h1 className='mb-3 mt-3'>Оставить заявку</h1>
            <Container className="d-flex justify-content-center">
                <Row className="justify-content-md-center">
                    <Col xs={5} className="p-0">
                        <InputGroup>
                            <Form.Control placeholder='Откуда' />
                        </InputGroup>
                    </Col>
                    <Col xs={1} className='text-center p-0'>
                        <HiOutlineArrowsRightLeft style={{ margin: '0', fontSize: '2rem' }} />
                    </Col>
                    <Col xs={5} className="p-0">
                        <InputGroup>
                            <Form.Control placeholder='Куда' />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex justify-content-center"> {/* Изменен контейнер */}
                <Row className="my-2">
                    <Col>
                        <Calendar placeholder='откуда' />
                    </Col>
                    <Col>
                        <Calendar />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default SearchAirplanes;