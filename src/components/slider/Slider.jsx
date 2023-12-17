import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img 
            className='d-block w-100'
            src='https://img1.akspic.ru/crops/1/8/7/4/7/174781/174781-aeroport_kejp_kod-aeroport_kejp_kod_gejt-boston_mezhdunarodnyj_aeroport_logan-mezhdunarodnyj_aeroport_de_mojna-polet-3840x2160.jpg'
            alt='first'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://img3.akspic.ru/crops/8/3/4/3/4/143438/143438-aviaciya-aviakompaniya-samolet-aerokosmicheskayatehnika-nebo-3840x2160.jpg" alt="Second" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://img3.akspic.ru/crops/6/1/4/8/3/138416/138416-aerokosmicheskaya_tehnika-nebo-vozdushnoe_puteshestvie-aviaciya-polet-3840x2160.jpg" alt="Thrid" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;