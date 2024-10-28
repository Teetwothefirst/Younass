import younass from '../assets/younass.png'
import Example from './dropdown'

function youHeader(){
    return (<>
        <div className='flex justify-between border-b-2 border-black py-5'>
            <div className="md:w-1/3"><img src={younass} alt="" /></div>
            <div className='md:w-2/3'>
                <div className='hidden md:flex justify-between'>
                    <div className='flex gap-3'>
                        <p className=''>ACCESSORIES</p>
                        <Example></Example>
                        <p className=''>YOUNASS INTERIOR</p>
                        <p className=''>ABOUT YOUNASS</p>
                    </div>
                    <div className='flex gap-2'>
                        <button><i className="bi bi-searrch"></i><span>Search</span></button>
                        <button></button>
                    </div>
                </div>
                <div className='md:hidden'>
                    <button><i className="bi bi-view-stacked"></i></button>
                </div>
            </div>
        </div>
    </>)
}

export default youHeader;