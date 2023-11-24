import { groq } from "next-sanity";

import { cache } from "react";
import { readClient } from "./lib/client";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

/* export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}; */

export const getBlogs = cache(async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`*[_type=='blog']{
       title,
        _id,
        "image": poster.asset->url,
        "slug":slug.current,
        category,
        summary,
        'createdAt':_createdAt
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
});

export const getFaqs = cache(async () => {
  try {
    const faqs = await readClient.fetch(
      groq`*[_type=='faq']{
        question,
        _id,
        answer
      }`
    );

    return faqs;
  } catch (error) {
    console.log(error);
  }
});

export const getLegalDocument = cache(async (query: string) => {
  try {
    const faqs = await readClient.fetch(
      groq`*[_type=='legal' && title == '${query}']{
        title,
       content
      }[0]`
    );

    return faqs;
  } catch (error) {
    console.log(error);
  }
});

export const getBlogBySlug = cache(async (slug: string) => {
  try {
    const resource = await readClient.fetch(
      groq`*[_type=='blog' && slug.current == '${slug}']{
        title,
        _id,
        content,
        "image": poster.asset->url,
        'slug':slug.current,
        'createdAt':_createdAt,
        'category':category->name,
        "slug":slug.current,
        summary,
        category,
      }[0]`
    );

    return resource;
  } catch (error) {
    console.log(error);
  }
});
