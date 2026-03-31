
import NavImg from '../../assets/products/shopping-cart.png';
const NavBar = () => {
    return (
        
            <div className="navbar flex items-center justify-between px-52 py-7">
      <div className="navbar-start">
       
       <h1 className="text-3xl 
    
       font-bold bg-linear-to-r from-blue-600
        to-purple-600 bg-clip-text text-transparent">
  DigiTools
</h1>
       
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-8 px-1 text-lg hidden md:flex">
          <li>
            <a className="font-semibold">Products</a>
          </li>
          <li>
            <a className="font-semibold">Features</a>
          </li>
          <li>
            <a className="font-semibold">Pricing</a>
          </li>
          <li>
            <a className="font-semibold">Testimonials</a>
          </li>
          <li>
            <a className="font-semibold">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center  gap-5">
        <img  src={NavImg} alt="" />
        <p>Login</p>
        <a className="bg-linear-to-r from-purple-600 to-indigo-600 px-6 py-2 rounded-full text-white">Get Started</a>
      </div>
    </div>
       
    );
};

export default NavBar;