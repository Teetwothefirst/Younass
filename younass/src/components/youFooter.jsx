import younass from '../assets/younass.png'
import {Link} from 'react-router-dom'
// import younass from '../assets/younass.png'
function youFooter(){
    return(<>
    <div className='px-2 mt-20'>
        <div className="md:flex justify-between">
            <div className="mb-10">
                <img src={younass} alt="" />
                <div>
                    <strong>Phone</strong><span>: +2347033180303</span><br />
                    <strong>Email</strong><span>: younasscollection@gmail.com</span>
                </div>
                <div className='flex gap-3'>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter-x"></i>
                    <i className="bi bi-youtube"></i>
                </div>
            </div>
            <div className="flex gap-5">
                <div>
                    <h3 className='font-semibold text-2xl'>PRODUCTS</h3>
                    <p><Link to={`/kimonos`}>KIMONOS/JACKETS</Link></p>
                    <p><Link to={`/dresses`}>DRESSES</Link></p>
                    <p><Link to={`/kaftan`}>KAFTAN/BUBUS</Link></p>
                    <p><Link to={`/skirts`}>SKIRTS</Link></p>
                    <p><Link to={`/shirts`}>SHIRTS</Link></p>
                    <p><Link to={`/interior`}>YOUNASS INTERIOR</Link></p>
                </div>
                <div>
                    <h3 className='font-semibold text-2xl'>LEGAL TERMS AND CONDITIONS</h3>
                    <p>NEW</p>
                    <p>WOMAN</p>
                    <p>CHILDREN</p>
                    <p>SALE</p>
                    <p>ACCESSORIES</p>
                </div>
            </div>
        </div>
        <div className='mt-10'>
            <p>© 2024 All rights reserved. Powered by <span className='text-blue-700'>BelSoft systems Ltd</span></p>
            <p className='text-xl font-semibold'>Built by Adejumo Adetomiwa</p>
        </div>
    </div>
    </>)
}

export default youFooter;