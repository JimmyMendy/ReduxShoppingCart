import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../redux/Shopping/shopping-actions";

const CartItem = ({ item, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  return (
    <li key={item.id} className='py-6 flex'>
      <div className='flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden'>
        <img
          src={item.imageSrc}
          alt={item.name}
          className='w-full h-full object-center object-cover'
        />
      </div>

      <div className='ml-4 flex-1 flex flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <a href={item.href}>{item.name} </a>
            </h3>
            <p className='ml-4'>£ {item.price}</p>
          </div>
          <p className='mt-1 text-sm text-gray-500'>{item.color}</p>
        </div>
        <div className='flex-1 flex items-end justify-between text-sm'>
          <div className='flex items-center'>
            <label htmlFor='qty' className='text-gray-500 mr-2'>
              Qty
            </label>
            <input
              className='text-gray-500 border w-7 mr-40'
              min='1'
              type='number'
              id='qty'
              name='qty'
              value={input}
              onChange={onChangeHandler}
            />
          {/* <p className='text-gray-500'>Qty </p> */}

          <div className='flex'>
            <button
              type='button'
              className='font-medium text-gray-400 hover:text-gray-600 w-1'
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
