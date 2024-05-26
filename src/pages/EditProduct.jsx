import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const EditProduct = () => {
    const shoe = useLoaderData();

    const [id, setId] = useState(shoe.id);
    const [title, setTitle] = useState(shoe.title);
    const [brand, setBrand] = useState(shoe.brand);
    const [price, setPrice] = useState(shoe.price);
    const [description, setDescription] = useState(shoe.description);
    const [image_url, setImage_url] = useState(shoe.image_url);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { id, title, brand, price, description, image_url };
        console.log(data);

        Swal.fire({
            title: "Are you sure to edit this product?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, edit!"
        })
            .then(async (result) => {
                if (result.isConfirmed) {
                    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            Swal.fire({
                                title: "Edited!",
                                text: "Your Product has been Edited.",
                                icon: "success"
                            });
                        });
                }
            });
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Edit Product</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            className="py-2 px-4 w-full rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                            value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title" required
                        />
                    </div>
                    <div>
                        <input
                            className="py-2 px-4 w-full rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                            value={brand} onChange={(e) => setBrand(e.target.value)} type="text" name="brand" placeholder="Brand" required
                        />
                    </div>
                    <div>
                        <input
                            className="py-2 px-4 w-full rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                            value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="Price" required
                        />
                    </div>
                    <div>
                        <input
                            className="py-2 px-4 w-full rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                            value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" required
                        />
                    </div>
                    <div>
                        <input
                            className="py-2 px-4 w-full rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                            value={image_url} onChange={(e) => setImage_url(e.target.value)} type="text" name="image_url" placeholder="Image URL" required
                        />
                    </div>
                    <div>
                        <input
                            className="py-2 px-4 w-full rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                            value={id} onChange={(e) => setId(e.target.value)} type="number" name="id" placeholder="ID" required
                        />
                    </div>
                    <div className="flex justify-center my-4">
                        <button
                            className="btn btn-primary w-full py-2 rounded text-white focus:outline-none"
                            type="submit"
                        >
                            Edit Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
