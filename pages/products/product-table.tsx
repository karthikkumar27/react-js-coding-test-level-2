import { useEffect, useState } from "react";
import Products from ".";
import { Product } from "../models/models";

interface ProductTable {
    products: Product[];
}

const ProductTable: React.FC<ProductTable> = ({products}) => { 

    const price = new Intl.NumberFormat('en-US', { style:'currency', currency: 'MYR' });

    return (
      <>
        <div className="relative rounded-xl overflow-auto my-5">
            <table className="border-collapse table-auto w-full text-sm">
                <thead>
                    <tr>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Product Name</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Price</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Add to Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p) => {
                            return (
                                <tr key={p.id}>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{p.title}</td>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{price.format(p.price)}</td>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                        <button className="bg-amber-400 hover:bg-amber-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Add to Cart</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </>
    )
}

export default ProductTable;