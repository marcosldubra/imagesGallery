import { get } from 'fredux';

export const loadImages = () =>
  get('api/images');
