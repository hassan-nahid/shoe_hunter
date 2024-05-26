import { useEffect, useState } from "react";
import Card from "../components/Home/Card";

const AllProduct = () => {
    
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
        <div>
            <div className="my-10 mx-auto">
                <h1 className="text-center text-3xl font-bold my-12 text-blue-800">All Products</h1>
                <div className="flex justify-center items-center">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2'>
                        {/* eslint-disable-next-line react/prop-types */}
                        {shoes?.map((shoe) => (
                            <Card key={shoe.id} shoe={shoe} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;