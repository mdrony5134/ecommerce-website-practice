import { useProduct } from "./context/CartProvider";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const { state, dispatch } = useProduct();

  const {totalItem, totalPrice} = state.cart.reduce((acc, curr)=>{
    acc.totalItem += curr.quantity
    acc.totalPrice += curr.quantity * curr.price
    return acc;
  },{
    totalItem:0,
    totalPrice:0
  })

  return (
    <div>

     {state.cart.length > 0 ? ( 
      
     <div className="relative flex gap-8 overflow-x-auto pb-5 sm:rounded-lg">
        <table className="w-[65%] ml-7 mt-7 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map(({ image, title, price, quantity, id }, index) => (
              <tr
                key={index}
                className="bg-white text-lg border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="object-cover object-center w-24 h-24 mb-4 mx-auto"
                    src={image}
                    alt="ecommece"
                  />
                </th>
                <td className="px-6 py-4">{title}</td>
                <td className="px-6 py-4">{quantity}</td>
                <td className="px-6 py-4">${Math.floor(price)}</td>
                <td className="px-6 py-4">${Math.floor(quantity * price)}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() =>
                      dispatch({ type: "Remove_To_Cart", payload: id })
                    }
                    className="bg-[#ff6347] px-3 py-2 text-white text-lg rounded-md"
                  >
                    <AiOutlineClose />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="relative overflow-x-auto  sm:rounded-lg">
          <table className="w-96 ml-7 mt-7 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Total Item
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-xl border-b font-bold dark:bg-gray-900 dark:border-gray-700">
                <td className="pl-12 py-4">{totalItem}</td>
                <td className="pl-10 py-4">${Math.floor( totalPrice)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>) : (
        <div>
          <h1 className="text-3xl text-center mt-10 text-red-700">Your Cart Is Empty!</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
