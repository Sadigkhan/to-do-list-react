const Navbar = ({ notes }) => {
  return (
      <div className="navbar">
          <h1>To do List</h1>
          <p> Total list count: { notes.length } </p>
      </div>
  );
}

export default Navbar;