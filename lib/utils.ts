import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiURL(){
  const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  console.log("Strapi url",strapiApiUrl)
  return strapiApiUrl
}

export function getStrapiBaseURL(){
  const strapiApiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL;
  console.log("Strapi Base URL",strapiApiBaseUrl)
  return strapiApiBaseUrl
}