import SubNavbarbrands from "../subNavbarbrands"
import Image from "next/image";
import subNavbarbrands from "../subNavbarbrands";

const Nike = () => {
    return (
        <div id="nike">
            <h1>Brands Nike</h1>
            <SubNavbarbrands/>
            <br></br>
            <Image src='/nike/nike1.jpeg' width={200} height={300}></Image>
            <Image src='/nike/nike2.jpeg' width={200} height={300}></Image>
            <Image src='/nike/nike3.jpeg' width={200} height={300}></Image>
        </div>
    )
}

export default Nike;