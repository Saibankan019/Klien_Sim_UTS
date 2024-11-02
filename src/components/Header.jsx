import PropTypes from 'prop-types';

function Header({ username }) {
  return (
    <div className="flex justify-between items-center bg-slate-800 text-white p-4">
      <h1 className="text-2xl font-bold">Manajemen Inventaris Barang</h1>
      <span>Youkoso, {username}!</span>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
