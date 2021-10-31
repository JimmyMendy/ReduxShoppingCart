import { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { closeCart } from "../redux/Shopping/shopping-actions";
import CartItem from "./CartItem";

const Cart = ({ cart, cartPosition, close }) => {
  //const [open, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItem(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItem, setTotalPrice, setTotalItem]);

  return (
    <Transition.Root show={cartPosition} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-hidden z-50'
        onClose={() => close()}
        // onClick={() => close()}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='flex-1 py-6 overflow-y-auto px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <Dialog.Title className='text-lg font-medium text-gray-900'>
                        Shopping cart
                      </Dialog.Title>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          type='button'
                          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                          onClick={() => close()}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>

                    <div className='mt-8'>
                      <div className='flow-root'>
                        <ul
                          role='list'
                          className='-my-6 divide-y divide-gray-200'
                        >
                          {cart.map((item) => (
                            <CartItem
                              key={item.id}
                              item={item}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                    <div className='flex justify-between text-base font-medium text-gray-900'>
                      <p>Subtotal</p>
                      <p>£ {totalPrice}</p>
                    </div>
                    <p className='mt-0.5 text-sm text-gray-500'>
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className='mt-6'>
                      <a
                        href='#'
                        className='flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-gray-600 '
                      >
                        Checkout
                      </a>
                    </div>
                    <div className='mt-6 flex justify-center text-sm text-center text-gray-500'>
                      <p>
                        or{" "}
                        <button
                          type='button'
                          className='text-gray-400 font-medium hover:text-gray-600'
                          onClick={() => close()}
                        >
                          Continue Shopping
                          <span aria-hidden='true'> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const mapStateToProps = (state) => {
  return {
    cartPosition: state.shop.isCartOpen,
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(closeCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
