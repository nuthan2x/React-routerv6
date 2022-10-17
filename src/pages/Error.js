import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className='section'>
      <h2>404 not found</h2>
      <Link to='/' className='btn'>
        Goback to Home
      </Link>
    </section>
  );
};
export default Error;
