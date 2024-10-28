import YouHeader from './youHeader'
import YouFooter from './youFooter';
import CheckOutProduct from './checkoutProduct';
import cartImg from '../assets/cartImg.jpg'


function checkOut(){
    return(<>
        <div className=''>
            <YouHeader></YouHeader>
            <div className='mt-20 md:flex justify-center mt-20'>
                <div className=''>
                    <h2 className='text-xl'>Home Delivery</h2>
                    <br />
                    <div>
                        <CheckOutProduct img={cartImg} cost={`N150,000`} size={`46`} name={`THE BRAVE`}></CheckOutProduct>
                    </div>
                </div>  
            </div>

            <YouFooter></YouFooter>
        </div>
    </>)
}

export default checkOut;
