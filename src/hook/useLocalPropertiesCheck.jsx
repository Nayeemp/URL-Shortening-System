import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateState } from '../features/url/urlSlice';

function useLocalPropertiesCheck() {
  const [propertiesChecked, setPropertieshChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localurlsList = localStorage.getItem('urlsList');
    if (localurlsList) {
      const urlsList = JSON.parse(localurlsList);
      // console.log('theme', properties)
      dispatch(updateState(urlsList));
    }
    setPropertieshChecked(true);
  }, [])
  return propertiesChecked;
}

export default useLocalPropertiesCheck;
