import Link from "next/link"
import headerStyle from "./header.module.css"

const header = () => {
    console.log(headerStyle,"headerStyle")
  return (
    <div>
   <nav className={headerStyle.navbar}>
       <Link className={headerStyle.list} href="/">Home</Link>
        <Link className={headerStyle.list} href="/about"> About</Link>
        <Link className={headerStyle.list} href="/contact">Contact</Link>
        <Link className={headerStyle.list} href="/Product">Products</Link>
        <Link className={headerStyle.button_login} href="">Add To Cart</Link>
        <Link className={headerStyle.button_signup} href="">Buy Now</Link>
       </nav>
     </div>
   
  )
}

export default header;
