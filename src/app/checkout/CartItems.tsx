'use client'
import { useCart } from '@/context/CartContext';
import { ArrowRight, Lock,ShoppingBag } from 'lucide-react'
import React from 'react'
import Image from "next/image";
function CartItems({setOrderPlaced,orderPlaced}:{orderPlaced:any,setOrderPlaced:any}) {
     
    const {cart}=useCart();
    const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 50 ? 0 : 5.99;

  const discount = subtotal * 0.1;

  const total = subtotal + delivery - discount;

  return (
    <div>
       <aside>

              <div className="sticky top-24 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-800 border-gray-100 bg-white p-6 shadow-sm">

                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Your order
                </h2>

                {/* Items */}
                <div className="mt-6 space-y-4">

                  {cart.map((item) => (

                    <div
                      key={item.id}
                      className="flex items-center gap-3"
                    >

                      <div
                        className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${item.bg}`}
                      >
                        {item.imgall?.[0]?.img_url ? (
                        
                                              <Image
                                                src={`http://localhost:8000/storage/${item.imgall[0].img_url}`}
                                                alt={item.name}
                                                width={900}
                                                height={900}
                                                className="h-full w-full object-cover"
                                                unoptimized
                                              />
                        
                                            ) : (
                        
                                              <div className="flex h-full w-full items-center justify-center">
                                                <ShoppingBag className="h-10 w-10 text-gray-300 dark:text-gray-700" />
                                              </div>
                        
                                            )}

                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
                          {item.quantity}
                        </span>

                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-600 dark:text-gray-200">
                          ${item.price} each
                        </p>

                      </div>

                      <span className="text-sm font-bold text-gray-900 dark:text-gray-200">
                        $
                        {(
                          item.price * item.quantity
                        ).toFixed(2)}
                      </span>

                    </div>

                  ))}

                </div>

                <div className="my-6 h-px bg-gray-100" />

                {/* Totals */}
                <div className="space-y-4">

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500 dark:text-gray-100">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-900 dark:text-gray-200">
                      ${subtotal.toFixed(2)}
                    </span>

                  </div>

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500 dark:text-gray-100">
                      Delivery
                    </span>

                    <span className="font-semibold text-gray-900 dark:text-gray-200">
                      {delivery === 0
                        ? "Free"
                        : `$${delivery.toFixed(2)}`}
                    </span>

                  </div>

                  <div className="flex justify-between text-sm">

                    <span className="text-green-600">
                      Discount
                    </span>

                    <span className="font-semibold text-green-600">
                      -${discount.toFixed(2)}
                    </span>

                  </div>

                </div>

                <div className="my-6 h-px bg-gray-100" />

                <div className="flex items-center justify-between">

                  <span className="font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-black text-purple-600 dark:text-purple-500">
                    ${total.toFixed(2)}
                  </span>

                </div>

                <button
                  type="button"
                  onClick={() => setOrderPlaced(true)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 dark:shadow-none dark:bg-purple-500 py-4 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
                >
                  Place order
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">

                  <Lock className="h-3.5 w-3.5" />

                  Secure checkout

                </div>

              </div>

            </aside>
    </div>
  )
}

export default CartItems
