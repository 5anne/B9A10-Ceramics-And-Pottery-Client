//w-[400px] h-[250px]

const CategorySection = () => {
    return (
        <div className="my-16 mx-12">
            <p className="text-center text-2xl font-display font-bold text-amber-700">Our Products</p>
            <h1 className="text-center text-5xl font-display my-8">Welcome to the world of handcrafted ceramics!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/cHtW9htR/Pottery-workshop-in-Rome-for-kids-Rome-for-kids.jpg)' }}>
                    <h1 className="text-white font-semibold font-display text-center text-3xl">Clay-made pottery</h1>
                    <p className="text-gray-200 text-center text-sm my-3">Crafted from the earth, each piece of clay pottery is a unique work of art, shaped by skilled hands.</p>
                    <div className="flex justify-center my-4">
                        <button className="text-white font-bold text-lg border-2 px-4 py-2">Visit</button>
                    </div>
                </div>
                <div className="p-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/mrQJtn96/R-3.jpg)' }}>
                    <h1 className="text-white font-semibold font-display text-center text-3xl">Stoneware</h1>
                    <p className="text-gray-200 text-center text-sm my-3">Stoneware transcends function with its artistic appeal. From mugs to vases, it elevates everyday objects.</p>
                    <div className="flex justify-center my-4">
                        <button className="text-white font-bold text-lg border-2 px-4 py-2">Visit</button>
                    </div>
                </div>
                <div className="p-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/hG68R4vk/H0965-L294767533-original.jpg)' }}>
                    <h1 className="text-white font-semibold font-display text-center text-3xl">Porcelain</h1>
                    <p className="text-gray-200 text-center text-sm my-3">Delicate beauty meets remarkable strength. This refined ceramic is prized for its translucency and elegant design.</p>
                    <div className="flex justify-center my-4">
                        <button className="text-white font-bold text-lg border-2 px-4 py-2">Visit</button>
                    </div>
                </div>
                <div className="p-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/J7JP3cc1/18487195953430581653293110.jpg)' }}>
                    <h1 className="text-white font-semibold font-display text-center text-3xl">Terra cotta</h1>
                    <p className="text-gray-200 text-center text-sm my-3">Terra cotta s natural earth tones and textured surface add a touch of rustic charm and warmth to any décor.</p>
                    <div className="flex justify-center my-4">
                        <button className="text-white font-bold text-lg border-2 px-4 py-2">Visit</button>
                    </div>
                </div>
                <div className="p-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/j5YWhDLS/home-decor-4-ceramic-pieces-3d-model-67517d8a93.jpg)' }}>
                    <h1 className="text-white font-semibold font-display text-center text-3xl">Ceramics & Architechtural</h1>
                    <p className="text-gray-200 text-center text-sm my-3">Where form meets function, beauty meets permanence.</p>
                    <div className="flex justify-center my-4">
                        <button className="text-white font-bold text-lg border-2 px-4 py-2">Visit</button>
                    </div>
                </div>
                <div className="p-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/0QhXkVY4/frasier-textured-ceramic-vase-3-xl.png)' }}>
                    <h1 className="text-white font-semibold font-display text-center text-3xl">Home decor pottery</h1>
                    <p className="text-gray-200 text-center text-sm my-3">Pottery that enhances your home for years to come.</p>
                    <div className="flex justify-center my-4">
                        <button className="text-white font-bold text-lg border-2 px-4 py-2">Visit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;