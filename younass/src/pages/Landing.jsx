import ProductDetails from "../components/productDetails"
import CheckOut from "../components/checkOut"
import CartImg from '../assets/cartImg1.jpg'
import cartImg from '../assets/cartImg.jpg'
import Product from "../components/product"
import cartImg2 from '../assets/cartImg2.jpg'
import cartImg3 from '../assets/cartImg3.jpg'
import cartImg4 from '../assets/cartImg4.png'
import YouHeader from "../components/youHeader"
import younassBg from'../assets/younassBg.jpg'
import YouFooter from "../components/youFooter"
import { Link } from "react-router-dom"






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
                    <div className='flex justify-between gap-5 w-extra sm:overflow-x-scroll md:overflow-x-hidden'>
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
                <div className="mb-20 md:flex justify-center px-10">
                    <div className="flex justify-between gap-5">
                        <div className="bgImg relative">
                                <img src={cartImg3} alt="" className="w-full h-100" />
                                <div className="absolute top-40 w-full h-full flex justify-center items-center">
                                    <div className="text-black md:text-white">
                                    {/* <p className="text-center text-s md:text-xl">FALL/WINTER 2024</p> */}
                                    <h2 className="text-xl md:text-4xl"><Link to={`/kimonos`}>KIMONOS AND JACKETS</Link></h2>
                                    <div className="sm:text-s md:text-center">WOMEN <i className="bi bi-arrow-right"></i> CHILDREN <i className="bi bi-arrow-right"></i> MEN <i className="bi bi-arrow-right"></i></div>
                                    </div>
                                </div>
                                {/* <div className="sm:absolute top-0 md:hidden">
                                <div className="text-white">
                                    <h2 className="text-xl">KIMONOS AND JACKETS</h2>
                                    <div className="text-s">WOMEN <i className="bi bi-arrow-right"></i> CHILDREN <i className="bi bi-arrow-right"></i> MEN <i className="bi bi-arrow-right"></i></div>
                                    </div>
                                </div> */}
                        </div>
                        <div className="bgImg relative">
                            <img src={cartImg4} alt="" className="w-full h-100" />
                            <div className="absolute top-40 w-full h-full flex justify-center items-center">
                                <div className="text-black md:text-white">
                                {/* <p className="text-center text-s md:text-xl">FALL/WINTER 2024</p> */}
                                <h2 className="text-xl md:text-4xl">KAFTAN AND BUBUS</h2>
                                <div className="text-center">WOMEN <i className="bi bi-arrow-right"></i> CHILDREN <i className="bi bi-arrow-right"></i> MEN <i className="bi bi-arrow-right"></i></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="px-2 py-20 md:flex justify-between">
                <div className="mb-10 md:w-1/2">
                    <h3 className="mb-2 font-semibold text-xl md:text-2xl">ABOUT YOUNASS</h3>
                    <p className="mb-2">YOUNASS COLLECTION IS A NOMADIC FASHION BRAND FOR WOMEN AND MEN WHO WANT MODERN, FUN, TRADITIONAL AND UNIQUE DESIGNS. THE FUSION OF MODERN AND TRADITIONAL INFLUENCES, AS WELL AS GLOBAL INSPIRATIONS HIGHLIGHTS THE ESSENCE OF OUR BRAND...</p>
                    <button className="bg-indigo-950 text-white px-2 py-1">READ MORE <i className="bi bi-arrow-right"></i></button>
                </div>
                <div className="md:w-1/2">
                    <div className="flex justify-end">
                        <img src={younassBg} alt="" />
                    </div>
                    
                </div>
            </div>

            <YouFooter></YouFooter>




        </div>
    </>)
}

export default Landing