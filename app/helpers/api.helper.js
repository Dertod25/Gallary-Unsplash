import {AccessKey, metrics} from '../config/app.config';

const getSizeImage = () => {
  const maxSize = metrics.screenHeight;
  switch (true) {
    case maxSize > 1080:
      return 'full';
    case maxSize > 400:
      return 'regular';
    default:
      return 'small';
  }
};

export const getRandomImages = async () => {
  try {
    const data = await fetch(
      'https://api.unsplash.com/photos/random?count=15',
      {
        headers: {
          Authorization: `Client-ID ${AccessKey}`,
        },
      }
    );
    const response = await data.json();
    return response.map((item) => ({
      id: item.id,
      title: item.description ? item.description : item.alt_description,
      urlImage: item.urls.thumb,
      urlImageFull: item.urls[getSizeImage()],
      author: item.user.name,
      size: getSizeImage(),
    }));
  } catch (error) {
    console.error(error);
  }
};
