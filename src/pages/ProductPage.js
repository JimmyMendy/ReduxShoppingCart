import React from "react";
import { connect } from "react-redux";
import { addToCart, openCart } from "../redux/Shopping/shopping-actions";

const ProductPage = ({ addToCart, currentItem, openCart }) => {
  
  return (
    <div>
      <div className='bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5'>
        <div
          className='
          px-8
          py-12
          max-w-md
          mx-auto
          sm:max-w-xl
          lg:px-12 lg:py-24 lg:max-w-full 
          xl:mr-0
          2xl:col-span-2
        '
        >
          <div className='xl:max-w-xl'>
            {/* <img className='h-10' src="" alt='workcation' /> */}
            <img
              className='
              mt-6
              rounded-lg
              shadow-xl
              sm:mt-8 sm:h-64 sm:w-full sm:object-cover
              object-center
              lg:hidden
            '
              src={currentItem.imageSrc}
              alt='woman workationing on the beach'
            />
            <h1
              className='
              mt-6
              text-2xl
              font-headline
              font-bold
              text-gray-900
              sm:mt-8 sm:text-4xl
              lg:text-3xl
              xl:text-4xl
              '
            >
              {currentItem.name}
              <br className='hidden lg:inline' />
            </h1>
            <span className='text-3xl'>£ {currentItem.price}</span>
            <p className='mt-2 text-gray-600 sm:mt-4 sm:text-xl'>
              {currentItem.description}
            </p>

            <div className='mt-4 sm:mt-6 space-x-3'>
              <button
                onClick={() => addToCart(currentItem.id)}
                type='submit'
                className='mt-10 w-full bg-gray-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className='hidden relative lg:block object-center object-cover 2xl:col-span-3'>
          <img
            className='absolute inset-0 w-full h-full'
            src={currentItem.imageSrc}
            alt='product'
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    openCart: () => dispatch(openCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
