import younass from '../assets/younass.png'
import Example from './dropdown'
import { Link } from 'react-router-dom';

function youHeader(){
    return (<>
        
        <div className='w-full z-20 bg-white fixed flex justify-between items-center border-b-2 border-black py-5 px-3'>
            <div className="md:w-1/3"><img src={younass} alt="" /></div>
            <div className='md:w-2/3'>
                <div className='hidden md:flex justify-between'>
                    <div className='flex gap-3'>
                        <p className=''>ACCESSORIES</p>
                        <Example></Example>
                        <p className=''>YOUNASS INTERIOR</p>
                        <p className=''>ABOUT YOUNASS</p>
                    </div>
                    <div className='flex gap-3'>
                        <button><i className="bi bi-search pe-2"></i><span>SEARCH</span></button>
                        <button><i className="bi bi-basket3 pe-2"></i><span>CART</span></button>
                        <Link to={`/login`}>LOGIN</Link>
                    </div>
                </div>
                <div className='pe-5 md:hidden'>
                    <button><i className="bi bi-view-stacked"></i></button>
                </div>
            </div>
        </div>
        
    </>)
}

export default youHeader;