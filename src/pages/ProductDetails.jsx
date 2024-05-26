import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();
    const { title, image_url, price, description, brand } = shoe;

    return (
        <div className="my-20 p-4">
            <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">Title: {title}</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-white shadow-md rounded-lg p-6">
                <div className="flex-shrink-0">
                    <img
                        className="w-full rounded-lg border border-gray-200"
                        src={image_url}
                        alt="product image"
                    />
                </div>
                <div className="flex flex-col justify-between lg:ml-6">
                    <h2 className="text-3xl font-semibold text-gray-700">Brand: {brand}</h2>
                    <h3 className="text-2xl font-semibold text-green-500 my-4">Price: ${price}</h3>
                    <p className="text-lg text-gray-600">{description}</p>
                    <button className="mt-6 px-6 py-2 bg-blue-800 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
