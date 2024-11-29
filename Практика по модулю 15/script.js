function handleFormSubmit(e) {
  e.preventDefault()

  const title = document.getElementById("title").value
  const genre = document.getElementById("genre").value
  const releaseYear = document.getElementById("releaseYear").value
  const isWatched = document.getElementById("isWatched").checked

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched
  }

  addFilm(film)
}

async function addFilm(film) {
  // const films = JSON.parse(localStorage.getItem("films")) || []
  // films.push(film)
  // localStorage.setItem("films", JSON.stringify(films))

  // console.log(film)
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "disa2206@inbox.ru"
    },
    body: JSON.stringify(film)
  })
  
  renderTable()
}

async function renderTable() {
  const filterTitle = document.getElementById("filter-title").value
  const filterGenre = document.getElementById("filter-genre").value
  const filterReleaseYear = document.getElementById("filter-year").value
  const filterIsWatched = document.getElementById("filter-is-watched").value

  let queryParams = []
  if (filterTitle) queryParams.push(`title=${filterTitle}`)
  if (filterGenre) queryParams.push(`genre=${filterGenre}`)
  if (filterReleaseYear) queryParams.push(`releaseYear=${filterReleaseYear}`)
  if (filterIsWatched) queryParams.push(`isWatched=${filterIsWatched}`)

  const queryString = queryParams.length ? `?${queryParams.join("&")}` : ""

  const filmsResponse = await fetch(
    `https://sb-film.skillbox.cc/films${queryString}`,
    {
      headers: {
        email: "disa2206@inbox.ru"
      }
    }
  )
  const films = await filmsResponse.json()

  const filmTableBody = document.getElementById("film-tbody")
  filmTableBody.innerHTML = ""

  films.forEach(film => {
    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td><button class="delete-button" onclick="deleteFilm(${film.id})">Удалить</button></td>
    `
    filmTableBody.appendChild(row);
  })
}

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit)

document.getElementById("filter-form").addEventListener("input", renderTable)

async function deleteFilm(id) {
  await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "disa2206@inbox.ru",
    },
  })
  renderTable()
}

renderTable()

document.getElementById("clear-all-button").addEventListener("click", clearAllFilms)

async function clearAllFilms() {
  const response = await fetch("https://sb-film.skillbox.cc/films", {
    method: "DELETE",
    headers: {
      email: "disa2206@inbox.ru"
    }
  })

  const data = await response.json()
}
