const noResultsFound = "Oops! No results found.";
const cardBodyContent = (post) => {
  const truncatedContent = truncatePostContent(post.content);

  return `
      <article class="card-wrapper card">
      <div class="card-body d-flex flex-column flex-md-row w-100 gap-3 gap-md-4">

          <!-- Date -->
          <div class="col-12 col-md-3 d-flex flex-column align-items-top mb-md-0 card-datetime">
          <time>${formatDate(post.date)}</time>
          </div>

          <!-- Content -->
          <div class="col-12 col-md-9 d-flex flex-column">
          <a href="${post.url}">
              <h1 class="card-title my-2 mt-md-0">${post.title}</h1>
          </a>

          ${post.tags ? `
              <div class="post-tags">
              ${renderTags(post.tags)}
              </div>
          ` : ""}

          <div class="card-text content mt-0 mb-3">
              <p>${truncatedContent}</p>
          </div>
          </div>

      </div>
      </article>
  `;
}

const formatDate = (dateStr) => {
  const date = new Date(
    dateStr
      .replace(" ", "T")
      .replace(/ (\+\d{2})(\d{2})$/, "$1:$2")
  );

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

const truncatePostContent = (content) => {
  const max_length = 200;
  if (content === "") return content;
  return content.trim().slice(0, max_length) + "...";
}

const renderTags = (tags) => {
  if (!tags) return "";

  return tags.split(",").map(tag => tag.trim()).map(tag => `
    <a href="/tags/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"))}/"
       class="post-tag no-text-decoration">
      ${tag}
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#search-input");
  const cancel = document.querySelector("#search-cancel");
  const body = document.body;

  if (!input) return;

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      body.classList.add("searching");
    } else {
      body.classList.remove("searching");
    }
  });

  if (cancel) {
    cancel.addEventListener("click", () => {
      input.value = "";
      body.classList.remove("searching");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchResultsContainer = document.querySelector(".search-result");

  if (!searchInput || !searchResultsContainer) return;

  let searchData = [];
  fetch("/assets/js/data/search.json")
    .then(r => r.json())
    .then(data => {
      searchData = data;
    });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    searchResultsContainer.innerHTML = "";

    if (query === "") {
      document.getElementById("search-results").classList.add("d-none");
      return;
    }

    document.getElementById("search-results").classList.remove("d-none");

    const filtered = searchData.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      searchResultsContainer.innerHTML = noResultsFound;
      return;
    }

    filtered.forEach(post => {
      searchResultsContainer.insertAdjacentHTML(
        "beforeend",
        cardBodyContent(post)
      );
    });
  });

  // Cancel button behavior
  const cancelBtn = document.getElementById("search-cancel");
  cancelBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchResultsContainer.innerHTML = "";
    document.getElementById("search-results").classList.add("d-none");
  });
});
