import Header from '../components/header/header';
import Footer from "../components/footer/footer";
import styles from './product.module.css';
import Image from 'next/image';
import bg2 from '../../../public/bg2.jpg'

const ServicesPage = () => {
  return (
    <div>
     <Header></Header>
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.servicesContainer}>
        
        {/* Service Card 1 */}
        <div className={styles.serviceCard}>
          <Image  src ={bg2} alt="bg2" className={styles.serviceImage}  />
            
        
          <h3 className={styles.serviceTitle}>Product Title 1</h3>
          <p className={styles.serviceDescription}>
            Brief description of Product 1. Explain what makes it valuable.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className={styles.serviceCard}>
          <img 
            src="https://ponyenergy.pk/cdn/shop/files/GiftBox.jpg?v=1712652748&width=1445" 
            alt="Service 2" 
            className={styles.serviceImage} 
          />
          <h3 className={styles.serviceTitle}>Product Title 2</h3>
          <p className={styles.serviceDescription}>
            Brief description of Product 2. Explain what makes it valuable.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className={styles.serviceCard}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdDxf5rhGcRiNgDlVvaR52wJUvCkg2m6JMmPPRBPflrDDo1n6nHGLf3WQHqTFpkDDYks&usqp=CAU" 
            alt="Service 3" 
            className={styles.serviceImage} 
          />
          <h3 className={styles.serviceTitle}>Product Title 3</h3>
          <p className={styles.serviceDescription}>
            Brief description of Product 3. Explain what makes it valuable.
          </p>
        </div>

        {/* Add more services as needed */}
        
      </div>
    </section>
    <Footer></Footer>
    </div>
  );
};

export default ServicesPage;


