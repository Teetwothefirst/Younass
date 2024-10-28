// import cartImg from '../assets/cartImg.jpg'
export default function product({image, text, amount}){
    return(<>
        <div className='relative'>
            <img src={image} alt=""  width={250}/>
            <button className='favouriteBtn absolute top-2 right-2'><i className="bi bi-heart"></i></button>
            <div>
                <div>{text}</div>
                <div>{amount}</div>
            </div>
        </div>

    </>)
}