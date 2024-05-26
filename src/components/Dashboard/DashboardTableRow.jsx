import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const DashboardTableRow = ({ shoe, handleDeleteProduct }) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, brand, price, image_url } = shoe;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`http://localhost:3000/shoes/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        handleDeleteProduct(id)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Product has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });
    }
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image_url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">Brand: {brand}</div>
                    </div>
                </div>
            </td>
            <td>{price}</td>
            <th className="flex flex-wrap gap-2">
                <Link to={`/products/${id}`} className="btn btn-primary text-white btn-xs">Details</Link>
                <Link to={`/dashboard/edit_product/${id}`} className="btn btn-warning text-white btn-xs">Edit</Link>
                <button onClick={handleDelete} className="btn btn-error text-white btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default DashboardTableRow;