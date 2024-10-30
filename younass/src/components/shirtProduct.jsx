
export default function Shirtproduct({image, text, amount}){
    return(<>
        <div className='relative'>
            <img src={image} alt="" className="object-fill"/>
            <button className='favouriteBtn absolute top-2 right-2 text-white'><i className="bi bi-heart"></i></button>
            <div className="mt-2">
                <div className="text-lg text-semibold">{text}</div>
                <div className="text-gray-600">{amount}</div>
            </div>
        </div>

    </>)
}