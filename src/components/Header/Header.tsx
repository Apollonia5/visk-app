import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header_link">
        <p className="header_title">PhoneBook</p>
      </NavLink>
    </header>
  )
}
