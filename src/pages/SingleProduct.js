import {Link, useParams} from 'react-router-dom';
import Productsdata from '../data';
const SingleProduct = () => {
  const {id} = useParams()
  const product = Productsdata.find((product) => (product.id === id))
  const {name,image} = product;
  console.log('product: ', product);
  return (
    <section className='section product'>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <img src={image} alt="" />
      <div>
        <Link to='/products' className='btn'>
          Goback to Products
        </Link>
      </div>
    </section>
  );
};

export default SingleProduct;
