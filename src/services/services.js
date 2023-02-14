import db from '../db/db.json';

export const getLanguageData = (language) => {
  const { idiomas } = db;
  const data = idiomas.find((element) => element.nombre === language);
  return data;
};

export const getTestimonials = (language) => {
  const { testimonios } = db;
  const data = testimonios.filter((element) => element.idioma === language);
  return data;
};
