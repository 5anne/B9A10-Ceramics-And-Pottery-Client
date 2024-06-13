

const Banner = () => {
    return (
        <div className="w-[1000px] my-10 mx-auto">
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <div className="hero w-[1000px] h-[500px]" style={{ backgroundImage: 'url(https://i.postimg.cc/g0Rfd5rX/Mexican-Folk-Art-Mata-Ortiz-pottery-2-1.webp)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold font-display">Welcome to Clay Pot</h1>
                                    <p className="mb-5">Where art meets everyday life. We offer beautiful and functional ceramic pieces designed to enhance your home and inspire your senses. From mugs that spark joy to platters that make every meal a celebration, explore our collection and find the perfect piece for you.</p>
                                    <button className="font-display font-semibold text-lg bg-yellow-700 px-8 py-3">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="hero w-[1000px] h-[500px]" style={{ backgroundImage: 'url(https://i.postimg.cc/Dw7ZFhdp/half-dipped-stoneware-vases-slate-fwh.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold font-display">Welcome to Clay Pot</h1>
                                    <p className="mb-5">Where art meets everyday life. We offer beautiful and functional ceramic pieces designed to enhance your home and inspire your senses. From mugs that spark joy to platters that make every meal a celebration, explore our collection and find the perfect piece for you.</p>
                                    <button className="font-display font-semibold text-lg bg-yellow-700 px-8 py-3">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="hero w-[1000px] h-[500px]" style={{ backgroundImage: 'url(https://i.postimg.cc/Hxw1vccS/R.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold font-display">Welcome to Clay Pot</h1>
                                    <p className="mb-5">Where art meets everyday life. We offer beautiful and functional ceramic pieces designed to enhance your home and inspire your senses. From mugs that spark joy to platters that make every meal a celebration, explore our collection and find the perfect piece for you.</p>
                                    <button className="font-display font-semibold text-lg bg-yellow-700 px-8 py-3">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className="hero w-[1000px] h-[500px]" style={{ backgroundImage: 'url(https://i.postimg.cc/9X1sWyXp/5301e659d3a695550f94e7bd47ed92b5.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold font-display">Welcome to Clay Pot</h1>
                                    <p className="mb-5">Where art meets everyday life. We offer beautiful and functional ceramic pieces designed to enhance your home and inspire your senses. From mugs that spark joy to platters that make every meal a celebration, explore our collection and find the perfect piece for you.</p>
                                    <button className="font-display font-semibold text-lg bg-yellow-700 px-8 py-3">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;