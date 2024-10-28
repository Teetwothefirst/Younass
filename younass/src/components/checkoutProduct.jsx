function CheckOutProduct({img, cost, size, name}){
    return (<>
        <div className="md:flex justify-between">
            <img src={img} alt="" width={350} />
            <div className="checkoutDetails">
                <div className="flex justify-between">
                    <p>{name}</p><strong className="font-semibold">{cost}</strong>
                </div>
                <div>
                    <p><span className="text-grey-400">COLOR:</span><strong className="font-semibold ps-2">WHITE, GOLD, PURPLE</strong></p>
                    <p><span className="text-grey-400">Size:</span><strong className="font-semibold ps-2">{size}</strong></p>
                </div>
                <br /><br />
                <div></div>
                <br /><br />
                <div className="flex gap-5">
                    <button className="text-black bg-white underline">EDIT</button>
                    <button className="text-black bg-white underline">REMOVE</button>
                </div>
            </div>
        </div>
    
    </>)
}

export default CheckOutProduct;