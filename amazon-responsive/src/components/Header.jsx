function Header() {
    return (
      <div className="header">
        <div className="logo">amazon</div>
  
        <input
          type="text"
          placeholder="Search Amazon"
        />
  
        <div className="nav-links">
          <p>Hello, Sign In</p>
          <p>Returns & Orders</p>
          <p>Cart 🛒</p>
        </div>
      </div>
    );
  }
  
  export default Header;