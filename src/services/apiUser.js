import supabase from "./supabase.js";

export async function uploadImage(fileName, file) {
  try {
    const { data, error } = await supabase.storage
      .from("profile-img")
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    const imgUrl = `https://ibsdablihpfmyicmpglg.supabase.co/storage/v1/object/public/profile-img/${data.path}`;

    return imgUrl;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    throw error;
  }
}
