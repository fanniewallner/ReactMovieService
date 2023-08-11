import axios from "axios";
import { IMovie, IOmbdResponse } from "../models/IMovie";

const BASE_URL = `http://omdbapi.com?s=&apikey=f2f7950c&page=`;

const get = async <T>(url: string) => {
  const response = await axios.get<T>(url);
  return response.data;
};

export const getMovies = async (input: string): Promise<IMovie[]> => {
  const url = `${BASE_URL}&s=${encodeURIComponent(input)}`;
  const response = await get<IOmbdResponse>(url);
  return response.Search;
};

export const getChoosenMovie = async (id: string): Promise<IMovie> => {
  const url = `http://omdbapi.com?i=${encodeURIComponent(
    id
  )}&apikey=f2f7950c&page=`;
  const response = await axios.get(url);
  return response.data;
};
