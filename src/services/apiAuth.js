async function LoginUser({ email, password }) {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 401) {
      throw new Error("Invalid email or password !");
    }
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
}

async function fetchUser() {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/users/me`, {
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

export { LoginUser, fetchUser };
