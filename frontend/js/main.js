// Render project cards from js/projects.js and handle the contact form.
const grid = document.getElementById("project-grid");

function projectCard(p) {
  const card = document.createElement("article");
  card.className = "project";

  const img = document.createElement("img");
  img.src = p.image;
  img.alt = p.alt || p.title;
  img.loading = "lazy";
  img.addEventListener("error", () => img.remove()); // hide if the file is missing

  const body = document.createElement("div");
  body.className = "project-body";

  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = p.link;
  link.textContent = p.title;
  title.appendChild(link);

  const desc = document.createElement("p");
  desc.textContent = p.description;

  const tags = document.createElement("p");
  tags.className = "tags";
  tags.textContent = p.tags.join(", ");

  body.append(title, desc, tags);
  card.append(img, body);
  return card;
}

projects.forEach(p => grid.appendChild(projectCard(p)));

// Contact form: posts to the service set in the form's action attribute
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async e => {
  e.preventDefault();
  status.textContent = "Sending...";
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });
    if (!res.ok) throw new Error();
    form.reset();
    status.textContent = "Message sent. Thank you!";
  } catch {
    status.textContent = "Message could not be sent. Please email me directly instead.";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
