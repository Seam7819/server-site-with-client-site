import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData()
    console.log(phone)
    const {brand,img,price,storage} = phone;
    return (
        <div className="card w-96 glass ">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy now!</button>
    </div>
  </div>
</div>
    );
};

export default Phone;