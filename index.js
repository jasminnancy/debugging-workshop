document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke;
  let username;

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    username = document.getElementById('name-input').value

    if (username === "") {
      alert("Name cannot be blank!")
    } else {
      fetchJoke()
    }
  })

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      joke = data.joke

      //appends new joke to list
      const newJokeLi = document.createElement('li')
      newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${joke}`
      jokeList.appendChild(newJokeLi)
    })
  }
})
