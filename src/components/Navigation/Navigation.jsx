import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </>
  );
};

export default Navigation;
