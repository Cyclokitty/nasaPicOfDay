const url = 'https://api.nasa.gov/planetary/apod?api_key=QKZsNPOo4jP0UVwr7nEjGFuZFt9JEOjyE5Ia7AsU';

// function to request photo of day from NASA and setting it in the webpage
getPic = () => {
  axios.get(url)
    .then(function (response) {
      const pic = response.data.url;
      document.querySelector('body').style.backgroundImage = "url('" + pic + "')";
      const picTitle = response.data.title;
      document.getElementById('nasaTitle').innerHTML = picTitle;
    })
    .catch(function (error) {
      console.log(error);
    });
  }


// function finding the current date and setting it to the webpage
getDate = () => {
  const now = moment().format('dddd, MMMM Do YYYY, k:mm a');
  const currentDate = document.querySelector('.todaysDate');
  currentDate.innerHTML = now;
}

getPic();
getDate();
