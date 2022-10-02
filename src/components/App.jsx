import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from '../Services/app';
import Searchbar from 'components/Searchbar/Searchbar';
import Button from 'components/Button/Button';

import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { APP } from 'components/StyledApp';

import { useState, useEffect } from 'react';

export default function App() {
  const [nameImages, setNameImages] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!nameImages && page === 1) {
      return;
    }
    const fetchPictures = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(nameImages, page);
        setPictures(prevPictures => {
          return [...prevPictures, ...data];
        });
        setLoading(false);
        if (data.length === 0) {
          toast.info('Sorry, request not found, try something else');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPictures();
  }, [page, nameImages]);

  const hendleFormSubmit = nameImages => {
    setNameImages(nameImages);
    setPictures([]);
    setPage(1);
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const isPictures = Boolean(pictures.length);

  return (
    <APP>
      <Searchbar onSudmit={hendleFormSubmit} />
      {loading && <Loader />}
      {error && <p>Спрабуйте пізніше</p>}
      {isPictures && <ImageGallery pictures={pictures} />}
      {pictures.length >= 12 && <Button changePage={loadMore} />}
      <ToastContainer autoClose={3000} />
    </APP>
  );
}
