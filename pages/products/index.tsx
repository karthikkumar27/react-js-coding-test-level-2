import { useEffect, useState } from "react";
import { Product } from "../models/models";
import { API_URL } from "../api/constant";
import ProductTable from "./product-table";

 const Products: React.FC = () => {
    const [isLoading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);
    const [category,setCategory] = useState('');
    useEffect(() => {
      async function getAllProducts() {
        const response = await fetch(API_URL.PRODUCTS)
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      }
      async function getAllcategories() {
        const response = await fetch(API_URL.PRODUCT_CATEGORIES)
        const data = await response.json();
        setLoading(false);
        setCategories(data);
        setCategory('All');
      }

      getAllProducts();
      getAllcategories();
    }, []);

    const updateCategory = (selectedCategory:string) => {
      setCategory(selectedCategory);
    }

    const productByCategory = () => {
      return products.filter((p: Product) => {
        if (p.category === category ) {
          return products;
        } else if ('All' === category ) {
          return products
        }
      });
    }

    if (isLoading) {
      return <h1 className="text-center text-lg font-semibold">Loading...</h1>
    }


    return (
      <>
        <ul className="category-list my-5">
          <li className={`${category}` === 'All' ? 'activeTab capitalize inline-block bg-amber-500 shadow-lg rounded-lg p-2 cursor-pointer text-white' : 'inline-block mx-2 capitalize bg-amber-100 shadow-lg rounded-lg p-2 cursor-pointer text-amber-600'} onClick={() => updateCategory('All')}>All</li>
          {
            categories.map((c,i) => {
              return (
                <li key={i} className={c === `${category}` ? 'activeTab capitalize inline-block bg-amber-500 shadow-lg rounded-lg p-2 cursor-pointer text-white' : 'inline-block mx-2 capitalize bg-amber-100 shadow-lg rounded-lg p-2 cursor-pointer text-amber-600'} onClick={() => updateCategory(`${c}`)}>{c}</li>
              )
            })
          }
        </ul>

        <ProductTable products={productByCategory()}></ProductTable>
      </>
    )
  }
  
  export default Products;