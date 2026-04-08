const API = "https://week3-crud-todo-api-nge7.onrender.com";

export async function loginUser(email, password) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  return res.json();
}

export async function getStudents(token) {
  const res = await fetch(`${API}/students`, {
    headers: { Authorization: "Bearer " + token }
  });

  return res.json();
}

export async function addStudent(data, token) {
  const res = await fetch(`${API}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

export async function deleteStudent(id, token) {
  await fetch(`${API}/students/${id}`, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token }
  });
}