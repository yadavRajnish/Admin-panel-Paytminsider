import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import squirrelImage from '../../Images/royal-oxford-ROE5l5LzPSM-unsplash.jpg';
import mountainImage from '../../Images/salome-guruli-lBf76Nbu24g-unsplash.jpg';
import beachImage from "../../Images/kush-dwivedi-Sw6FQiT23Rc-unsplash.jpg"

function CarouselComp() {
  return (
    <Carousel fade className='rounded' style={{ margin:' 60px auto', width:'50vw'}}>
      <Carousel.Item>
      <img src={squirrelImage} alt="First slide" style={{ width: '60vw', height: '60vh' }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={mountainImage} alt="Second slide" style={{ width: '60vw', height: '60vh' }}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={beachImage} alt="Third slide" style={{width: '60vw', height: '60vh' }}/>
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

export default CarouselComp;