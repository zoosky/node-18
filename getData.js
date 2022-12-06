async function fetchData() {
  const response = await fetch(
    "https://random-data-api.com/api/name/random_name"
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
}

fetchData();

