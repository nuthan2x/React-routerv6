import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className='section'>
        <h2>home</h2>
        <Link to='/login' className='btn'>Go to login</Link>
      </section>
    </>
  );
};
export default Home;
