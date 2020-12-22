import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';

import { Container, Content, Profile } from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <nav>
          <NavLink to="/birds" activeClassName="selected">
            PÁSSAROS
          </NavLink>
          <NavLink to="/diets" activeClassName="selected">
            DIETAS
          </NavLink>
          <NavLink to="/registers" activeClassName="selected">
            REGISTROS
          </NavLink>
        </nav>

        <Profile>
          <strong>{user.name}</strong>
          <button type="button" onClick={signOut}>
            sair do sistema
          </button>
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
