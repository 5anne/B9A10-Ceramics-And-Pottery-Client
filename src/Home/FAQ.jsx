
const FAQ = () => {
    return (
        <div className="flex gap-8 mx-10 my-12 border-2 border-gray-300 p-4 rounded-lg">
            <div className="w-1/2 p-4">
                <h1 className="font-bold font-display text-4xl mb-4">Frequently Asked Questions</h1>
                <p>Unveiling the Magic of Clay: Your Burning Questions about Our Ceramics Answered</p>
                <img className="w-[400px]" src="https://i.postimg.cc/brCkLq7V/03.jpg" alt="" />
            </div>
            <div className="w-1/2">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium font-display text-green-950">
                       1) Are your ceramics dishwasher and microwave safe?
                    </div>
                    <div className="collapse-content">
                        <p>It depends on the specific product. Look for the dishwasher and microwave safe icons on the product page or description. Since some glazes or decorations might not be heat resistant, handwashing is always recommended to ensure the longevity of your ceramics.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium font-display text-green-950">
                       2) Do you offer custom-made ceramics?
                    </div>
                    <div className="collapse-content">
                        <p>We may offer custom-made ceramics for special occasions or larger orders. Please contact us directly to discuss your specific needs and inquire about customization options.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium font-display text-green-950">
                       3) How fragile are your ceramics?
                    </div>
                    <div className="collapse-content">
                        <p>Our ceramics are crafted with durable stoneware or porcelain clays and fired at high temperatures for strength. However, like any ceramic product, they can still break if dropped or mishandled. Treat them with care and enjoy them for years to come.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium font-display text-green-950">
                       4) What type of cleaning is recommended for your ceramics?
                    </div>
                    <div className="collapse-content">
                        <p>For most of our ceramics, gentle handwashing with warm water and mild dish soap is recommended. Avoid using abrasive scrubbers or harsh chemicals. For heavily stained pieces, baking soda can be used as a natural cleaning agent.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium font-display text-green-950">
                       5) Do you offer gift wrapping or gift certificates?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, We offer beautiful gift wrapping for a special touch (mention any additional fees). Gift certificates are also available in various denominations, making the perfect present for the pottery lover in your life!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;