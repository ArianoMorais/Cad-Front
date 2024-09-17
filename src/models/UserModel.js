import PropTypes from 'prop-types';

export const UserModel = {
  Name: PropTypes.string.isRequired,
  Cpf: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  PhoneNumber: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  Addresses: PropTypes.arrayOf(
    PropTypes.shape({
      Street: PropTypes.string,
      Number: PropTypes.string,
      City: PropTypes.string,
      State: PropTypes.string,
      ZipCode: PropTypes.string
    })
  ).isRequired
};