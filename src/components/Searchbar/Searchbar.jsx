import { IoSearchSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { SearchbarStyled } from 'components/Searchbar/StyledSearchbar';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar({ onSudmit }) {
  const [nameImages, nameImagesState] = useState('');

  const hendleNameChange = event => {
    nameImagesState(event.currentTarget.value.toLowerCase());
  };
  const hendleSubmit = ev => {
    ev.preventDefault();
    if (nameImages.trim() === '') {
      toast.error('Enter the name of the image');
      return;
    }
    onSudmit(nameImages);
    nameImagesState('');
  };
  return (
    <SearchbarStyled>
      <form onSubmit={hendleSubmit}>
        <button type="submit">
          <IoSearchSharp />
          <span>Search</span>
        </button>
        <input
          type="text"
          autocomplete="off"
          autofocus
          name="nameImages"
          value={nameImages}
          placeholder="Search images and photos"
          onChange={hendleNameChange}
        />
      </form>
    </SearchbarStyled>
  );
}
Searchbar.propTypes = {
  onSudmit: PropTypes.func.isRequired,
};
