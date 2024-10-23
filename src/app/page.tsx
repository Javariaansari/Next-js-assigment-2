
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Image from 'next/image';
import rose1 from '../../public/rose1.jpeg';
import whiteb from '../../public/whiteb.jpeg';
import whitepink from '../../public/whitepink.jpeg';
import whited from '../../public/whited.jpeg';
import whitep from '../../public/whitep.jpeg';
import pink1 from '../../public/pink1.jpg';
import pinkd2 from '../../public/pinkd2.jpg';
import pinkd from '../../public/pinkd.jpg';
import peachpink from '../../public/peachpink.jpeg';

const Homepage = () => {
  return (
    <div>
    <div className="hero">
      <Header></Header>
      
        <div className="hero-content">
          <h1 className="h1">Welcome To Our Website</h1>
          <p className="para">Discover the perfect shade to match your style with our luxurious range of lipsticks. Our high-quality, long-lasting formulas provide rich color and hydration, ensuring your lips stay soft and vibrant throughout the day. From bold reds to subtle nudes, we offer a wide selection that caters to every occasion and skin tone. Whether you're looking for a matte finish or a glossy shine, our lipsticks deliver exceptional coverage and comfort in every swipe. Elevate your look and express your individuality with our premium lipstick collection</p>
        </div>
   
      <Image  src={rose1} alt="rose1"
      className="bg-image" 
      // height={200} width={1520}
       fill={true} />
   
      </div>
      <div className="lipstick">
        <h1 className="head">Lipstick</h1>
        </div>
        <div>
      <Image src={whiteb}alt="whiteb" className="whiteb"/>
      <Image src={whitepink}alt="whitepink" className="whitepink"/>
      <Image src={whited}alt="whited" className="whited"/>
      <Image src={whitep}alt="whited" className="whitep"/>
      <Image src={pink1}alt="whited" className="pink1"/>
      <Image src={pinkd2}alt="pinkd2" className="pinkd2"/>
      <Image src={pinkd}alt="pinkd" className="pinkd"/>
      <Image src={peachpink}alt="peachpink" className="peachpink"/>
      </div>
      <div><Footer></Footer></div>
      </div>
   
   
  )
}

export default Homepage;
