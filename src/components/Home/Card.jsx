import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({shoe}) => {

    // eslint-disable-next-line react/prop-types
    const {id,title,brand,price,description,image_url} = shoe

    return (
        <div className="card max-w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-[350px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className="text-xl font-semibold">Brand: {brand}</h3>
                <h3 className="text-xl font-semibold">Price: {price} $</h3>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/products/${id}`} className="btn btn-primary text-white">
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;