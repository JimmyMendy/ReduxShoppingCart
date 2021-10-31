import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  addToCart,
  loadCurrentItem,
  openCart,
} from "../redux/Shopping/shopping-actions";

const HomePage = ({ products, addToCart, loadCurrentItem, openCart }) => {
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <>
              <Link
                key={product.id}
                to={product.href}
                className='group relative'
              >
                <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className='w-full h-full object-center object-cover group-hover:opacity-25'
                  />
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => loadCurrentItem(product)}
                  >
                    <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-lg text-white font-semibold'>
                      View item
                    </div>
                  </Link>
                </div>
                <div>
                  <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
                  <p className='mt-1 text-lg font-medium text-gray-900'>
                    £{product.price}
                  </p>
                  <button
                    type='submit'
                    className='mt-0 w-full bg-gray-200 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300'
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    openCart: () => dispatch(openCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
