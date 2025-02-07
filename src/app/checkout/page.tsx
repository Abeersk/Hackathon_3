'use client';

import { Product } from '@/types/product';
import React, { useEffect, useState } from 'react';
import { getCart } from '../actions/actions';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { CgChevronRight } from 'react-icons/cg';
import { client } from '@/sanity/lib/client';
import Swal from 'sweetalert2';

const Checkout = () => {
  const [cartitems, setCartitems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formvalue, setFormvalue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    zipCode: false,
  });

  useEffect(() => {
    setCartitems(getCart());
    const appliedDiscount = localStorage.getItem('appliedDiscount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartitems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormvalue({
      ...formvalue,
      [e.target.id]: e.target.value,
    });
  };

  const Validateform = () => {
    const errors = {
      firstName: !formvalue.firstName,
      lastName: !formvalue.lastName,
      email: !formvalue.email,
      phone: !formvalue.phone,
      address: !formvalue.address,
      city: !formvalue.city,
      zipCode: !formvalue.zipCode,
    };
    setFormErrors(errors);
    return Object.values(errors).every((value) => value === false);
  };

  const handlePlaceOrder = async () => {
   Swal.fire({
    title: 'Processing your order. ',
    text: 'Wait a moment.',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Proceed!',
})
    .then((result) => {
      if (result.isConfirmed) {
     if(Validateform()){
        localStorage.removeItem('appliedDiscount')
        Swal.fire(
            'Success!',
            'Order placed successfully!',
           'success'
        );
    }else{
        Swal.fire(
            'Error!',
            'Please fill all the required fields!',
            'error'
        )
    }


      }
    });


    const orderData = {
        _type: 'order',
        firstName: formvalue.firstName,
        lastName: formvalue.lastName,
        email: formvalue.email,
        phone: formvalue.phone,
        address: formvalue.address,
        city: formvalue.city,
        zipCode: formvalue.zipCode,
        cartItems: cartitems.map(items => ({
            _type: 'reference',
            _ref: items._id
        })),
        total: subTotal - discount, 
        discount: discount,
        status: 'pending',
        orderDate: new Date().toISOString(),
    };
    try{
        await client.create(orderData)

        localStorage.removeItem("appliedDiscount")
    }catch(error){
        console.error('error found in creating order',error)    
    }
    


  };

  return (
    <div className='bg-gray-50 min-h-screen py-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex items-center gap-2 py-4'>
          <Link className='text-gray-600 hover:text-black text-sm' href='/cart'>
            Cart
          </Link>
          <CgChevronRight className='text-gray-500' />
          <span className='text-gray-800 font-medium'>Checkout</span>
        </nav>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8'>
        {/* Order Summary */}
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
          {cartitems.length > 0 ? (
            cartitems.map((item) => (
              <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
                <div className='w-16 h-16 rounded overflow-hidden'>
                  {item.imageUrl && (
                    <Image
                      src={urlFor(item.imageUrl).url()}
                      alt={item.name}
                      width={50}
                      height={50}
                      className='object-cover w-full h-full'
                    />
                  )}
                </div>
                <div className='flex-1'>
                  <h3 className='text-sm font-medium'>{item.name}</h3>
                  <p className='text-xs text-gray-500'>Quantity: {item.quantity}</p>
                  <p className='text-sm font-semibold'>${item.price * item.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-sm font-medium'>No items in cart</p>
          )}
          <div className='text-right pt-4'>
            <p className='text-sm'>Subtotal: <span className='font-medium'>${subTotal}</span></p>
            <p className='text-sm'>Discount: <span className='font-medium'>${discount}</span></p>
            <p className='text-lg font-semibold'>Total: <span>${(subTotal - discount).toFixed(2)}</span></p>
          </div>
        </div>

        {/* Checkout Form */}
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-lg font-semibold mb-4'>Checkout Information</h2>
          <div className='space-y-4'>
            {Object.keys(formvalue).map((key) => (
              <div key={key}>
                <label className='block text-sm font-medium text-gray-700 capitalize' htmlFor={key}>{key}</label>
                <input
                  type='text'
                  id={key}
                  placeholder={`Enter your ${key}`}
                  value={formvalue[key as keyof typeof formvalue]}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
                {formErrors[key as keyof typeof formErrors] && (
                  <p className='text-xs text-red-500 capitalize'>{key} is required</p>
                )}
              </div>
            ))}
            <button
              onClick={handlePlaceOrder}
              className='w-full bg-indigo-950 text-white py-2 rounded-lg hover:bg-blue-700 transition'
            >
              Place Orderz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
