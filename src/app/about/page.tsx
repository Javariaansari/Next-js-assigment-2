import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import aboutCss from "./about.module.css";
import Image from "next/image";
import rose3 from "../../../public/rose3.jpeg"
import per2 from '../../../public/per2.jpeg'


const Aboutpage = () => {
  console.log(aboutCss,"aboutCss")
  return (
    <div>
     <Header></Header>
     <h1 className={aboutCss.heading}>Welcome to our website</h1>
     <div className={aboutCss.aboutdiv}>
      <h1 className={aboutCss.abouth1}>About Us</h1>
      <p className={aboutCss.aboutp}>Welcome to [Brand Name], your ultimate destination for luxurious, long-lasting, and vibrant lipsticks. We believe that beauty should empower, inspire, and make you feel confident every single day. Our lipsticks are more than just makeup—they’re a statement of who you are and how you want to express yourself. [Brand Name] was born from a passion for beauty and a vision to create something exceptional in the world of cosmetics. Our founders, a group of beauty enthusiasts and industry experts, noticed a gap in the market for high-quality, long-lasting lipsticks that catered to diverse skin tones and unique personalities. Inspired by the idea that beauty should be accessible to all, they set out to craft lipsticks that combine vivid color, comfortable wear, and a luxurious feel.Our journey began with extensive research and development, testing countless formulas, textures, and shades to create the perfect balance between quality and innovation. After years of hard work and dedication, [Brand Name] launched its first collection, and it has been a story of success ever since. Today, we continue to push boundaries, offering a wide array of lipstick shades and finishes that inspire confidence and creativity.</p>
      
     
     </div>
     <div><Image src={rose3}alt="rose3" className={aboutCss.rose3}/></div>
    <div><Image src={per2}alt="per2" className={aboutCss.per2}/></div>
    <div className={aboutCss.aboutdiv2}>
      <h1 className={aboutCss.abouth2}>Our Mission</h1>
      <p className={aboutCss.aboutp2}>At [Brand Name], our mission is simple — to make every person feel beautiful and empowered. We understand that makeup is deeply personal, and a swipe of the perfect lipstick can transform your look, your mood, and even your day. We are committed to offering products that cater to all skin tones, personalities, and occasions.Whether you’re preparing for a special event or simply adding a touch of elegance to your daily routine, our lipsticks are designed to help you feel confident and radiant. Our goal is to celebrate individuality and inclusivity, ensuring that everyone can find their perfect shade and feel like their best self.We believe that beauty is about more than just appearance — it’s about feeling confident, inspired, and ready to take on the world. That’s why we carefully craft our lipsticks using premium ingredients that not only deliver stunning color but also care for your lips. With a commitment to quality, innovation, and sustainability, we are dedicated to creating products that you’ll love to wear, day after day.</p>
    </div>

    <Footer></Footer>
   
    
    </div>
  )
}

export default Aboutpage;
