import { getAuthToken } from "./getToken";
import { getStrapiURL } from "@/lib/utils";

export async function getUserMeLoader() {
  const baseUrl = getStrapiURL();
  // Endpoint a los datos de nuestro usuario en Strapi
  const url = new URL("/api/users/me", baseUrl);
  // Existe el token?
  const authToken = await getAuthToken();
  if (!authToken) return { ok: false, data: null, error: null };
  
  // Nos permite obtener info de nuestra cuenta solo si nuestra petición cuenta con el token respectivo
  try {
    const response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error: error };
  }
}