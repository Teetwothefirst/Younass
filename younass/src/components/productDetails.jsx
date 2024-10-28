import cartImg from '../assets/cartImg.jpg'
import YouHeader from './youHeader';
import YouFooter from './youFooter';
import Product from './product';
import OtherProduct from './otherProduct';

function productDetails(){
    return(<>
        <YouHeader></YouHeader>
         <div className='md:flex justify-between'>
                <div>
                    <img src={cartImg} alt="" />
                </div>
                <div className=''>
                    <div className='The_intellignet'>
                        <h2>THE INTELLIGENT</h2>
                        <h4>N150,000.00</h4>
                        <p>A timeless addition to any wardrobe, The Intelligent is designed for the modern woman. Crafted from luxurious materials, its elegant silhouette  and refined details offer a perfect blend of sophistication and comfort.</p>
                        <br />
                        <button className=''> --- Details</button>
                    </div>
                        <br />
                    <div className='flex justify-between border-b border-grey-400'>
                        <div>
                            <i class="bi bi-square-fill text-orange-200"></i>
                            <i class="bi bi-square-fill text-white"></i>
                            <i class="bi bi-square-fill text-black text-grey-950"></i>
                        </div>
                        <div>
                            <span className='text-grey-400'>COLOUR</span> <span> WHITE, GOLD, PURPLE</span>
                        </div>
                    </div>
                        <br />
                    <div>

                    </div>
                    <br />
                    <div className=''>
                        <button className='block w-full text-white bg-black'>ADD TO BAG</button>
                        <button className='w-full bg-white text-black'>PICK UP IN BOUTIQUE</button>
                    </div>
                    <br />
                    <div className='FullDetails_Section'>
                        <div className='Details'>
                            <h5 className='border-b border-grey-400 mb-2'>DETAILS AND FIT</h5>
                            <div className='ps-2'>
                                <p>Details</p>
                                <ul className=''>
                                    <li>relaxed fit</li>
                                    <li>regular waist</li> 
                                    <li>elasticated waist</li>
                                    <li>waist tie and hook closure</li>
                                    <li>side seam pockets and back welt pockets</li>
                                    <li>straight leg with pressed crease with pintuck</li>
                                    <li>drawstring hems</li>
                                    <li>sharp wool gabardine</li>
                                    <li> 100% wool</li>
                                    <li>made in Italy</li>
                                </ul>
                            </div>
                            <div className='ps-2'>
                                <p>Fit</p>
                                <ul className=''>
                                    <li>model is 188cm/5'4" and is wearing a size 45 IT</li>
                                    <li>Please note that the physical label of the item will show the Italian size</li>                                     
                                </ul>
                            </div>
                            <div className='ps-2'>
                                <p>Care</p>
                                <ul className=''>
                                    <li>Dry clean only</li>
                                    <li>Iron with care</li>                                     
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='paymentShipping'>
                        <button className='flex justify-between'><span>PAYMENTS AND SHIPPING</span><span><i className="bi bi-plus"></i></span></button>
                    </div>
                    <br />
                    <div>
                        <button className='flex justify-between'><span>CUSTOMER SERVICES</span><span><i className="bi bi-plus"></i></span></button>
                    </div>
                </div>
        </div>
        {/* <div>
            <h2 className='text-2xl font-bold'>MORE LOOKS</h2>
            <div className='md:flex justify-between'>
                    <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                    <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                    <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                    <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>   
            </div>
        </div> */}
        <OtherProduct title="MORE LOOKS"></OtherProduct>
        <YouFooter></YouFooter>
    </>)
}

export default productDetails;