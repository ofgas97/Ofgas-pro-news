
document.addEventListener("DOMContentLoaded", async () => {
  const newsSection = document.getElementById("news-section");
  try {
    const res = await fetch("https://zenews-api.onrender.com/news?key=516471581b0b753497c9f7291cf0785f");
    const data = await res.json();
    newsSection.innerHTML = data.articles.map(article => (
      `<article><h3>${article.title}</h3><p>${article.description}</p></article>`
    )).join('');
  } catch (err) {
    newsSection.innerHTML = "<p>Failed to load news. Please try again later.</p>";
  }
});
