import YouHeader from "../components/youHeader";
import cartImg from '../assets/cartImg.jpg'
import Product from "../components/product";
import Shirtproduct from "../components/shirtProduct";
import cartImg4 from '../assets/cartImg4.png'
import cartImg5 from '../assets/cartImg5.png'
import cartImg6 from '../assets/cartImg6.png'


function Shirts(){
    return (<>
        <div>
            <YouHeader></YouHeader>
            <div className="">
                <h3 className="font-semibold font-xl w-full md:font-2xl w-1/3">
                Find Your Perfect Fit - 
                THE Younass Shirt Collection
                </h3>
                <p className="text-md md:text-lg">
                    Explore the Younass Shirt Collection and find the ideal blend of style, comfort, and craftsmanship. Whether you're looking for classic designs or modern cuts, each shirt is tailored to perfection, offering versatile options for any occasion. With a variety of sizes, patterns, and fabrics, Younass ensures that you’ll discover the perfect fit that complements your unique style.
                </p>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {/* <Product image={cartImg} text={`The Brave`} amount={`N150,000`}></Product> */}
                        <Shirtproduct image={cartImg} text={`The Brave`} amount={`N150,000`}></Shirtproduct>
                        <Shirtproduct image={cartImg4} text={`The Brave`} amount={`N150,000`}></Shirtproduct>
                        <Shirtproduct image={cartImg5} text={`The Brave`} amount={`N150,000`}></Shirtproduct>
                        <Shirtproduct image={cartImg6} text={`The Brave`} amount={`N150,000`}></Shirtproduct>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Shirts;