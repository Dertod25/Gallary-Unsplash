export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE';

export function getImages() {
  return {
    type: GET_IMAGES,
  };
}
