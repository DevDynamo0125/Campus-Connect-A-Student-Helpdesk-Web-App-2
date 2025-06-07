document.getElementById('queryForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const category = document.getElementById('category').value;
  const message = document.getElementById('message').value.trim();

  if (!validateEmail(email) || !name || !message) {
    alert("Please fill valid data.");
    return;
  }

  try {
    await db.collection("queries").add({ name, email, category, message, time: new Date() });
    alert("Query submitted successfully!");
    document.getElementById('queryForm').reset();
  } catch (error) {
    console.error("Error submitting query: ", error);
    alert("Something went wrong.");
  }
});