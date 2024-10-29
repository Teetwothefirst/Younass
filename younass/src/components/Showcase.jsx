import cartImg3 from '../assets/cartImg3.jpg'
import { Link } from 'react-router-dom';
import cartImg4 from '../assets/cartImg4.png'

function Showcase(){
    return (<>
        <div>
            <div className="mb-20 md:flex justify-center px-10">
                <div className="flex justify-between gap-5">
                    <div className="bgImg relative">
                        <img src={cartImg3} alt="" className="w-full h-100" />
                        <div className="absolute top-40 w-full h-full flex justify-center items-center">
                            <div className="text-black md:text-white">
                            <h2 className="text-xl md:text-4xl"><Link to={`/kimonos`}>KIMONOS AND JACKETS</Link></h2>
                            <div className="sm:text-s md:text-center">WOMEN <i className="bi bi-arrow-right"></i> CHILDREN <i className="bi bi-arrow-right"></i> MEN <i className="bi bi-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="bgImg relative">
                        <img src={cartImg4} alt="" className="w-full h-100" />
                        <div className="absolute top-40 w-full h-full flex justify-center items-center">
                            <div className="text-black md:text-white">
                            <h2 className="text-xl md:text-4xl">KAFTAN AND BUBUS</h2>
                            <div className="text-center">WOMEN <i className="bi bi-arrow-right"></i> CHILDREN <i className="bi bi-arrow-right"></i> MEN <i className="bi bi-arrow-right"></i></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Showcase;