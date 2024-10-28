import YouHeader from '../components/youHeader'
import YouFooter from '../components/youFooter'
import { Link } from 'react-router-dom';

function Login(){
    return (<>
    <div>
        <YouHeader></YouHeader>
        <div className='py-10 flex justify-center items-center'>
            <div className='w-1/2'>
                <h2>LOGIN TO ACCOUNT</h2>
                <br />
                <form action="/" className='w-full'>
                    <input type="email" className='w-full p-2 border rounded-s'/>
                    <br />
                    <br />
                    <input type="password" className='w-full border rounded-s p-2'/>
                    <br />
                    <br />
                    <div className='flex justify-between'>
                        <div>
                            <input type="checkbox" name="" id=""  className='pe-2'/>
                           <span> Remember me?</span>
                        </div>
                        <div>
                            <Link to={`/about`} className='underline'>Forgot Password</Link>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='flex justify-between'>
                        <button className='bg-violet-950 text-white px-10 py-1'>SIGN IN</button>
                        <button className='text-black underline'>SIGN UP</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='px-5 md:px-20'>
            <YouFooter></YouFooter>
        </div>
    </div>
    </>)
}

export default Login;