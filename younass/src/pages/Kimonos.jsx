import YouHeader from "../components/youHeader";
import YouFooter from '../components/youFooter'
import KimonoHero from '../assets/kimonoHero.png'
import younassWhite from '../assets/younassWhite.png'
import cartImg from '../assets/cartImg1.jpg'
import cartImg1 from '../assets/cartImg.jpg'
import cartImg2 from '../assets/cartImg2.jpg'
import Product from "../components/product";
import cartImg3 from '../assets/cartImg3.jpg'
import Showcase from "../components/Showcase";
import Livingthelife from '../assets/livingthelife.png'


function Kimonos(){
    return (<>
        <div>
            <YouHeader></YouHeader>
            <div>
                <div className="relative">
                    <img src={KimonoHero} alt="" />
                    <div className="absolute w-full h-full top-0 md:flex justify-between items-center">
                        <div>
                            <h4 className="text-white sm:text-lg w-full md:text-4xl w-4/6">DISCOVER ELEGANCY IN A UNIQUE WAY</h4>
                        </div>
                        <div>
                            <img src={younassWhite} alt="" className=""/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-full bg-indigo-950 text-white py-2">
                        <p>Sales 50% Discount Sales 50% Discount Sales 50% Discount Sales 50% Discount Sales 50% Discount Sales 50% Discount Sales 50% Discount</p>
                    </div>
                </div>
                {/* <div>
                    <div className="flex w-full overflow-x-scroll">
                        <div className="">
                            <img src={cartImg} alt="" className="border rounded-full" width={50} height={50}/>
                        </div>
                    </div>
                </div> */}
                <div>
                    <div className="otherProduct">
                    <div className="my-20 py-24">
                        <h2 className='text-xl font-semibold text-center'>EXPLORE YOUNASS COLLECTIONS</h2>
                        <div>
                            <nav className="overflow-x flex justify-center gap-3 pt-3 pb-8">
                                <button className="underline">ALL</button>
                                <button className="">WOMEN</button>
                                <button className="">MEN</button>
                                <button className="">CHILDREN</button>
                            </nav>
                        </div>
                        <div className='flex justify-between gap-5 px-5 w-extra sm:overflow-x-scroll md:overflow-x-hidden'>
                                <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                                <Product image={cartImg1} text={'The Bold'} amount={`N150,000`}></Product>
                                <Product image={cartImg3} text={'The Bold'} amount={`N150,000`}></Product>
                                <Product image={cartImg3} text={'The Bold'} amount={`N150,000`}></Product> 
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="text-center text-semibold text-2xl py-5">BEST SELLING</h3>
                    </div>
                    <Showcase></Showcase>
                </div>

                {/* Living the Life */}
                <div className="relative">
                    <img src={Livingthelife} alt="Living the Fashion life"  />
                    <div className="absolute top-0 w-full h-full md:flex justify-start items-center">
                        <h4 className="text-white md:text-2xl">LIVING THE LIFE-STYLE OF FASHION</h4>
                    </div>
                </div>
            </div>
            <YouFooter></YouFooter>
        </div>
    </>)
}

export default Kimonos;