
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary config
cloudinary.config({
  secure: true
})

// Busca por nombre de archivo
async function searchImageByName(filename:any) {
  try {
    const response = await cloudinary.search
      .expression(`filename:${filename}`)
      .execute();

    //console.log("Respuesta de Strapi",response.resources);
    return response.resources //as Resource[];
  } catch (error) {
    console.error('Error buscando la imagen:', error);
  }
}

// Valida si el link original es correcto/si existe
async function isValidCloudinaryURL(url:string) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok; // Devuelve true si el código de estado es 200-299
  } catch (error) {
    console.error('Error validando la URL:', error);
    return false;
  }
}

export const getMedia = async (imgUrl:string, imgName:string) => {
    const url = process.env.CLOUDINARY_CLOUD_URL;
    const newImgUrl = imgUrl?.replace("/uploads/", "/upload/")
    let queryUrl = `${url}${newImgUrl}`

    try{
      const isValid = await isValidCloudinaryURL(queryUrl);
      // Si el link no es válido, se busca el link correcto:
      if(!isValid){
        const resources = await searchImageByName(imgName)
        if(resources.length > 0) {
          queryUrl = resources[0].secure_url
        }else{
          throw new Error("Cloudinary couldn't find your image :(");
        }
        
      }
      console.log("Link de imagen",queryUrl)
      // Finalmente, se retorna el link a usar
      return queryUrl

    }catch(error){
      console.error('Invaid input: wrong image data', error);
    }

}