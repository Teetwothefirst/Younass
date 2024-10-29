import YouHeader from "../components/youHeader";
import YouFooter from '../components/youFooter'
import KimonoHero from '../assets/kimonoHero.png'
import younassWhite from '../assets/younassWhite.png'
import cartImg from '../assets/cartImg1.jpg'
import cartImg1 from '../assets/cartImg.jpg'


function Kimonos(){
    return (<>
        <div>
            <YouHeader></YouHeader>
            <div>
                <div className="relative">
                    <img src={KimonoHero} alt="" />
                    <div className="absolute w-full h-full top-0 md:flex justify-between items-center">
                        <div>
                            <h4 className="text-white sm:text-lg w-full md:text-4xl w-3/4">DISCOVER ELEGANCY IN A UNIQUE WAY</h4>
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
                <div>
                    <div className="flex w-full overflow-x-scroll">
                        <div className="">
                            <img src={cartImg} alt="" className="border rounded-full" width={50} height={50}/>
                        </div>
                    </div>
                </div>
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
                        <div className='flex justify-between gap-5 w-extra sm:overflow-x-scroll md:overflow-x-hidden'>
                                <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                                <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                                <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                                <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <YouFooter></YouFooter>
        </div>
    </>)
}

export default Kimonos;