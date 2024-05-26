import { useEffect, useState } from "react";
import DashboardTableRow from "../components/Dashboard/DashboardTableRow";

const ManageProduct = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/shoes")
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }, [])

    const handleDeleteProduct = (id) => {
        setProduct(product.filter((singleProduct) => singleProduct.id !== id))
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Index
                            </th>
                            <th>Title & Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            product.map((shoe) => (
                                <DashboardTableRow key={shoe.id} shoe={shoe} handleDeleteProduct={handleDeleteProduct} />
                            ))
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Index</th>
                            <th>Title & Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ManageProduct;