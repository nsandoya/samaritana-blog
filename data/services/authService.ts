import { getStrapiBaseURL, getStrapiURL } from "@/lib/utils";
//import {cookies} from 'next/headers';

// Cookies config
/* const config = {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    domain: process.env.NEXT_STRAPI_API_BASE_URL,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
} */

interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

interface LoginUserProps {
  identifier: string;
  password: string;
}

const baseUrl = getStrapiBaseURL();
/* 
export const setCookies = async (jwt:string) => {
  (await cookies()).set("jwt", jwt, config);
} */

export async function registerUserService(userData: RegisterUserProps) {
    const url = `${baseUrl}/auth/local/register`;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
    
    console.log("Respuesta desde authService",response.json())
    return response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
  }
}

export async function loginUserService(userData: LoginUserProps) {
  const url = `${baseUrl}/api/auth/local`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    });

    return response.json();
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}