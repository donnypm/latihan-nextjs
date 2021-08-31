import SubNavbarbrands from "../subNavbarbrands"
import Image from "next/image";

const Reebok = () => {
    return (
        <div id="reebok">
            <h1>Brands Reebok</h1>
            <SubNavbarbrands/>
            <br></br>
            <Image src='/reebok/reebok1.jpeg' width={250} height={300}></Image>
            <Image src='/reebok/reebok2.jpeg' width={250} height={300}></Image>
            <Image src='/reebok/reebok3.jpeg' width={250} height={300}></Image>
        </div>
    )
}

export default Reebok;