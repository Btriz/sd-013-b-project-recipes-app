import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';
import PropTypes from 'prop-types';

function Perfil({ history }) {
  const [localEmail, setLocalEmail] = useState('');

  useEffect(() => setLocalEmail(JSON.parse(localStorage.getItem('user')).email), []);

  const buttons = {
    doneBtn: () => history.push('/receitas-feitas'),
    favoriteBtn: () => history.push('receitas-favoritas'),
    leaveBtn: () => {
      localStorage.clear();
      history.push('/');
    },
  };

  return (
    <div className="page">
      <Header />
      <Footer />
      <h4 data-testid="profile-email">{localEmail}</h4>
      <button type="button" data-testid="profile-done-btn" onClick={ buttons.doneBtn }>
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ buttons.favoriteBtn }
      >
        Receitas Favoritas
      </button>
      <button type="button" data-testid="profile-logout-btn" onClick={ buttons.leaveBtn }>
        Sair
      </button>
    </div>
  );
}

Perfil.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default Perfil;
