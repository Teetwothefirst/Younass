import younass from '../assets/younass.png'
import {Link} from 'react-router-dom'
function youFooter(){
    return(<>
    <div className='mt-20'>
        <div className="md:flex justify-between">
            <div className="">
                <img src="" alt="" />
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
                    <p>KIMONOS/JACKETS</p>
                    <p>DRESSES</p>
                    <p>KAFTAN/BUBUS</p>
                    <p>SKIRTS</p>
                    <p>SHIRTS</p>
                    <p>YOUNASS INTERIOR</p>
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
        <div>
            <p>© 2024 All rights reserved. Powered by BelSoft systems Ltd</p>
            <p>Built by Adejumo Adetomiwa</p>
        </div>
    </div>
    </>)
}

export default youFooter;