async function LoginUser({ email, password }) {
  /* http://localhost:3000/api/v1/users/login */
  try {
    const res = await fetch(
      `https://natours-bay.vercel.app/api/v1/users/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (res.status === 401) {
      throw new Error("Invalid email or password !");
    }
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
}

async function fetchUser() {
  /* http://localhost:3000/api/v1/users/me */
  try {
    const res = await fetch(`https://natours-bay.vercel.app/api/v1/users/me`, {
      credentials: "include",
    });
    if (res.status === 401) {
      throw new Error("Unauthorized Access !");
    }
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
}

async function logoutUser() {
  /* http://localhost:3000/api/v1/users/logout */
  try {
    const res = await fetch(
      `https://natours-bay.vercel.app/api/v1/users/logout`,
      {
        credentials: "include",
      }
    );

    return res.json();
  } catch (err) {
    throw new Error(err);
  }
}

async function SignupUser({ name, email, password, passwordConfirm }) {
  /* http://localhost:3000/api/v1/users/sign-up */
  try {
    const res = await fetch(
      `https://natours-bay.vercel.app/api/v1/users/sign-up`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
      }
    );

    if (!res.ok) {
      throw new Error("unable to create account !");
    }
  } catch (err) {
    throw new Error(err);
  }
}

export { LoginUser, fetchUser, logoutUser, SignupUser };
