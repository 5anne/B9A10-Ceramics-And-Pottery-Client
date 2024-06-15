
const Discount = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-center mx-8 md:mx-10 my-12 p-4 md:p-14 lg:p-20" style={{ backgroundImage: 'url(https://i.postimg.cc/05cd0WK1/Michelle-Grimm-9-2048x2048.webp)' }}>
            <div className="md:bg-white py-10 md:px-10 lg:px-28">
                <h2 className="text-red-800 font-semibold text-center">HURRY UP!</h2>
                <h1 className="font-bold font-display text-4xl text-center my-6 lg:px-40">Massive Markdowns! Up to 50% Off - Limited Time Only</h1>
                <p className="text-lg text-gray-800 md:text-gray-700 text-center font-display">Do not miss out on this incredible opportunity to snag amazing deals on your favorite items! We have slashed prices across a wide selection of products, offering discounts of up to 50% off. But hurry, this offer is for a limited time only! Stock up on essentials, discover hidden gems, or treat yourself to something special : all at unbeatable prices.</p>
                <div className="flex justify-center my-8">
                    <button className="bg-emerald-900 px-4 py-3 text-white font-semibold">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;