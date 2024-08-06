import supabase from "./supabase.js";

export async function uploadImage(fileName, file) {
  const imgName = `user-${Math.random()}-${fileName}`;
  try {
    const { data, error } = await supabase.storage
      .from("profile-img")
      .upload(imgName, file);

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

export async function updateUser({ username, email, fileName, file }) {
  /* http://localhost:3000/api/v1/users/updateMe */
  let imgUrl;
  try {
    if (fileName && file) {
      imgUrl = await uploadImage(fileName, file);
    }

    // Create the body object dynamically
    const body = { name: username, email };

    if (imgUrl) {
      body.photo = imgUrl;
    }

    const res = await fetch(
      `https://natours-bay.vercel.app/api/v1/users/updateMe`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      throw new Error("User could not be updated, Try Again !");
    }
    const result = await res.json();
    return { result, imgUrl };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updatePassword({
  password,
  newPassword,
  newPasswordConfirm,
}) {
  /* http://localhost:3000/api/v1/users/updatePassword */
  try {
    console.log({
      password,
      newPassword,
      newPasswordConfirm,
    });

    const res = await fetch(
      `https://natours-bay.vercel.app/api/v1/users/updatePassword`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, newPassword, newPasswordConfirm }),
      }
    );

    if (!res.ok) {
      throw new Error("password could not be updated");
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
