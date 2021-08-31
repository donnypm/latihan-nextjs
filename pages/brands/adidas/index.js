import SubNavbarbrands from "../subNavbarbrands"
import Image from "next/image";

const Adidas = () => {
    return (
        <div id="adidas">
            <h1>Brands Adidas</h1>
            <SubNavbarbrands/>
            <br></br>
            <Image src='/adidas/adidas1.jpeg' width={300} height={300}></Image>
            <Image src='/adidas/adidas2.jpeg' width={300} height={300}></Image>
            <Image src='/adidas/adidas3.jpeg' width={300} height={300}></Image>
        </div>
    )
}

export default Adidas;