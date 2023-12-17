import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
            <h2 className="text-4xl">All Phones :{phones.length}</h2>
            <div >
                {
                    phones.map(phone => <li className="border rounded-sm p-4 my-10" key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.brand}</Link></li>)
                }
            </div>
        </div>
    );
};

export default Phones;