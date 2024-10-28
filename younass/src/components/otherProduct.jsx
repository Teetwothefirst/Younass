import cartImg from '../assets/cartImg.jpg'
import Product from './product';

function OtherProduct({title}){
    return(<>
        <div>
            <h2 className='text-xl font-bold text-center'>{title}</h2>
            <div className='md:flex justify-between'>
                    <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                    <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                    <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>
                    <Product image={cartImg} text={'The Bold'} amount={`N150,000`}></Product>   
            </div>
        </div>
    </>)
}

export default OtherProduct;