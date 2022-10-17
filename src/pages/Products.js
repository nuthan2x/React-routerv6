import { Link } from "react-router-dom";
import Productsdata from '../data';
const Products = () => {
  return (
      <section className='section'>
      {Productsdata.map((product) => {
        return (
          <div className="product" key={product.id}>
              <h4>{product.name}</h4>
              <Link to={`/products/${product.id}`} >
                 moreinfo
              </Link>
          </div>
        )
      })}
      <Link to='/' className='btn'>
        Goback to Home
      </Link>     
      </section>
  );
};

export default Products;
