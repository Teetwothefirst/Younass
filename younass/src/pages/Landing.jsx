import ProductDetails from "../components/productDetails"
import CheckOut from "../components/checkOut"
import CartImg from '../assets/cartImg1.jpg'
import cartImg from '../assets/cartImg.jpg'
import Product from "../components/product"
import cartImg2 from '../assets/cartImg2.jpg'
import cartImg3 from '../assets/cartImg3.jpg'
import cartImg4 from '../assets/cartImg4.png'
import YouHeader from "../components/youHeader"






function Landing(){
    return(<>
        {/* <ProductDetails></ProductDetails> */}
        {/* <CheckOut></CheckOut> */}
        <div>
            <YouHeader></YouHeader>
            <div className="md:flex">
                <div className="relative">
                    <img src={CartImg} alt="" className="h-full"/>
                    <div className="absolute bottom-2 left-2 md:absolute bottom-10 left-10">
                        <h2 className="text-2xl text-white">THE INTELLIGENT</h2>
                        <button className="border border-white text-white px-3 py-1">Discover <i className="bi bi-arrow-right ps-2"></i></button>
                    </div>
                </div>
                <div className="relative">
                    <img src={cartImg} alt="" className="h-full" />
                    <div className="absolute bottom-2 left-2 md:absolute bottom-10 left-10">
                        <h2 className="text-2xl text-white">THE BRAVE</h2>
                        <button className="border border-white text-white px-3 py-1">Discover <i className="bi bi-arrow-right ps-2"></i></button>
                    </div>
                </div>
            </div>
            <div className="otherProduct">
                <div className="my-20 py-24">
                    <h2 className='text-xl font-semibold text-center'>EXPLORE YOUNASS COLLECTIONS</h2>
                    <div>
                        <nav className="overflow-x flex justify-center gap-3 pt-3 pb-8">
                            <button className="underline">Women</button>
                            <button>Men</button>
                            <button>Children</button>
                        </nav>
                    </div>
                    <div className='flex justify-between w-extra sm:overflow-x-scroll md:overflow-x-hidden'>
                            <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                            <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                            <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                            <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product> 
                    </div>
                </div>
            </div>
            <div className="overlayImg pb-28">
                <div className="bgImg relative">
                    <img src={cartImg2} alt="" className="w-full h-100" />
                    <div className="absolute top-10 w-full h-full flex justify-center items-center">
                        <div className="text-white">
                        <p className="text-center text-s md:text-xl">FALL/WINTER 2024</p>
                        <h2 className="text-xl md:text-4xl">THE BOLD AND THE BEAUTIFUL</h2>
                        <div className="text-center">WOMEN <i className="bi bi-arrow-right"></i></div>
                        </div>
                        
                    </div>
                </div>
            </div>





            <div>
                <div className="md:flex justify-center px-10">
                    <div className="flex justify-between gap-5">
                        <div className="bgImg relative">
                                <img src={cartImg3} alt="" className="w-full h-100" />
                                <div className="absolute top-28 w-full h-full flex justify-center items-center">
                                    <div className="text-white">
                                    {/* <p className="text-center text-s md:text-xl">FALL/WINTER 2024</p> */}
                                    <h2 className="text-xl md:text-4xl">KIMONOS AND JACKETS</h2>
                                    <div className="text-center">WOMEN <i className="bi bi-arrow-right"></i> CHILDREN <i className="bi bi-arrow-right"></i> MEN <i className="bi bi-arrow-right"></i></div>
                                    </div>
                                    
                                </div>
                        </div>
                        <div className="bgImg relative">
                            <img src={cartImg4} alt="" className="w-full h-100" />
                            <div className="absolute top-28 w-full h-full flex justify-center items-center">
                                <div className="text-white">
                                {/* <p className="text-center text-s md:text-xl">FALL/WINTER 2024</p> */}
                                <h2 className="text-xl md:text-4xl">KAFTAN AND BUBUS</h2>
                                <div className="text-center">WOMEN <i className="bi bi-arrow-right"></i> CHILDREN <i className="bi bi-arrow-right"></i> MEN <i className="bi bi-arrow-right"></i></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="pb-20 mb:flex justify-between">
                <div></div>
                <div></div>
            </div>





        </div>
    </>)
}

export default Landing