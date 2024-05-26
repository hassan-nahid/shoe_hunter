
const Discount = () => {
    return (
        <div className="hero min-h-screen bg-gray-100 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <img
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoe-sale-instagram-design-template-b127a8ae3ffeb1e0abba6ac5c41bd567_screen.jpg?ts=1615386905"
                    alt="Shoe Discount"
                    className="w-[80%] rounded-lg shadow-2xl"
                />
                <div className="lg:mr-8 text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-blue-800">Exclusive Shoe Discount!</h1>
                    <p className="py-6 text-gray-700">
                        Get the best deals on the latest footwear. Enjoy up to 50% off on selected shoes. Don&apos;t miss out on this limited-time offer!
                    </p>
                    <button className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;
