import { fetcher } from "../_helper/ApiBase";

export async function getBannerList(params) {
  try {
    const response = await fetcher(
      "GET",
      "http://localhost:3000/loans",
      params
    );
    return response;
  } catch (err) {
    return null;
  }
}

export async function getLoansList(params) {
  try {
    const response = await fetcher(
      "GET",
      "http://localhost:3000/loans",
      params
    );
    return response;
  } catch (err) {
    return null;
  }
}

export async function getTestimonialsList(params) {
  try {
    const response = await fetcher(
      "GET",
      "http://localhost:3000/testimonials",
      params
    );
    return response;
  } catch (err) {
    return null;
  }
}

export async function getDataContactUs(params) {
  try {
    const response = await fetcher(
      "POST",
      "http://localhost:8000/api/v1/contacts",
      params
    );
    return response;
  } catch (err) {
    return null;
  }
}

export async function getDataCareerApplications(params) {
  try {
    const response = await fetcher(
      "POST",
      "http://localhost:3000/career_applications",
      params
    );
    return response;
  } catch (err) {
    return null;
  }
}

export async function getGalleryData(params) {
  try {
    const response = await fetcher(
      "GET",
      "http://localhost:3000/gallery",
      params
    );
    return response;
  } catch (err) {
    return null;
  }
}
