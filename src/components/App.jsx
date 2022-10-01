import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from '../Services/app';
import Searchbar from 'components/Searchbar/Searchbar';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { APP } from 'components/StyledApp';

export default class App extends Component {
  state = {
    nameImages: '',
    pictures: [],
    page: 1,
    bigPicture: null,
    modalOpen: false,
    loading: false,
    error: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const prevName = prevState.nameImages;
    const { nameImages, page } = this.state;

    if (prevPage !== page || prevName !== nameImages) {
      try {
        this.setState({
          loading: true,
        });
        const pictures = await fetchImages(nameImages, page);
        this.setState(state => ({
          pictures: [...state.pictures, ...pictures],
          loading: false,
        }));
        if (pictures.length === 0) {
          toast.info('Sorry, request not found, try something else');
        }
      } catch (error) {
        this.setState({
          error,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }
  openModal = bigPicture => {
    this.setState({
      modalOpen: true,
      bigPicture,
    });
  };
  closeModal = () => {
    this.setState({
      modalOpen: false,
      bigPicture: null,
    });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  hendleFormSubmit = nameImages => {
    this.setState({
      nameImages,
      pictures: [],
      page: 1,
    });
  };
  render() {
    const { pictures, loading, bigPicture, error, modalOpen } = this.state;
    const { loadMore, openModal, closeModal } = this;
    const isPictures = Boolean(pictures.length);
    return (
      <APP>
        <Searchbar onSudmit={this.hendleFormSubmit} />
        {loading && <Loader />}
        {modalOpen && <Modal onClose={closeModal} bigPicture={bigPicture} />}
        {error && <p>Спрабуйте пізніше</p>}
        {isPictures && <ImageGallery onClick={openModal} pictures={pictures} />}
        {pictures.length >= 12 && <Button changePage={loadMore} />}
        <ToastContainer autoClose={3000} />
      </APP>
    );
  }
}
