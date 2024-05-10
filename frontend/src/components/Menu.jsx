import PropTypes from 'prop-types'; // Add this line at the top of your file

function Menu({ active, setActive, setCategory, handleMenuClick }) {
  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Business", value: "business" },
    { id: 3, name: "Entertainment", value: "entertainment" },
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sports", value: "sports" },
    { id: 7, name: "Technology", value: "technology" },
  ];

  const handleClick = (id, value) => {
    setActive(id); // Here setActive is used to update the active state
    setCategory(value); // Here setCategory is used to update the category state
    handleMenuClick(id, value);
  };

  return (
    <nav className="menu">
      <ul>
        {links.map(link => (
          <li
            key={link.id}
            className={active === link.id ? "active" : "inactive"}
            onClick={() => handleClick(link.id, link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Menu;
