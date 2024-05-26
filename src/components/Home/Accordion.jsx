
const Accordion = () => {
    return (
        <div className="join join-vertical w-full p-4 bg-gray-100 mb-4">
            <div>
                <h1 className="text-center font-bold text-4xl text-blue-700 my-8">FAQ</h1>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300 mb-2 shadow-lg rounded-lg">
                <input type="radio" name="shoe-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium bg-blue-800 text-white p-4 rounded-t-lg">
                    What is your return policy?
                </div>
                <div className="collapse-content bg-white p-4 rounded-b-lg">
                    <p>
                        We offer a 30-day return policy on all our shoes. If you&apos;re not satisfied with your purchase, you can return it within 30 days for a full refund or exchange, provided the shoes are in their original condition.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300 mb-2 shadow-lg rounded-lg">
                <input type="radio" name="shoe-accordion" />
                <div className="collapse-title text-xl font-medium bg-blue-800 text-white p-4 rounded-t-lg">
                    Do you offer free shipping?
                </div>
                <div className="collapse-content bg-white p-4 rounded-b-lg">
                    <p>
                        Yes, we offer free standard shipping on all orders over $50. For orders below $50, a flat shipping fee of $5 will be applied. Expedited shipping options are also available at an additional cost.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300 mb-2 shadow-lg rounded-lg">
                <input type="radio" name="shoe-accordion" />
                <div className="collapse-title text-xl font-medium bg-blue-800 text-white p-4 rounded-t-lg">
                    How do I know my shoe size?
                </div>
                <div className="collapse-content bg-white p-4 rounded-b-lg">
                    <p>
                        We provide a detailed size chart on our website to help you determine the best fit. You can also visit our &quot;Find Your Size&quot; page for instructions on measuring your feet accurately at home.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300 mb-2 shadow-lg rounded-lg">
                <input type="radio" name="shoe-accordion" />
                <div className="collapse-title text-xl font-medium bg-blue-800 text-white p-4 rounded-t-lg">
                    What materials are your shoes made of?
                </div>
                <div className="collapse-content bg-white p-4 rounded-b-lg">
                    <p>
                        Our shoes are crafted from high-quality materials including genuine leather, breathable mesh, and durable rubber soles. Each product page provides specific information about the materials used for that particular shoe.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300 mb-2 shadow-lg rounded-lg">
                <input type="radio" name="shoe-accordion" />
                <div className="collapse-title text-xl font-medium bg-blue-800 text-white p-4 rounded-t-lg">
                    Can I track my order?
                </div>
                <div className="collapse-content bg-white p-4 rounded-b-lg">
                    <p>
                        Yes, once your order is shipped, we will send you a tracking number via email. You can use this tracking number to monitor the status and estimated delivery date of your package.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Accordion;
