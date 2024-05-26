import { useEffect, useState } from "react";
import Card from "./Card";


// eslint-disable-next-line react/prop-types
const Products = () => {

    const [shoes,setShoes] = useState()

    useEffect(()=>{
        const load = async()=>{
            const res = await fetch("http://localhost:3000/shoes")
            const data = await res.json()
            setShoes(data)
        }
        load()
    },[])
    console.log(shoes)

    return (
        <div className="my-10 mx-auto">
            <h1 className="text-center text-2xl font-bold text-blue-800 my-8">New Products</h1>
            <div className="flex justify-center items-center">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2'>
                    {/* eslint-disable-next-line react/prop-types */}
                    {shoes?.length > 0 && shoes?.slice().reverse().slice(0, 3).map((shoe) => (
                        <Card key={shoe.id} shoe={shoe} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;