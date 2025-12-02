const displayWhether = (data) => {
  let loc = document.querySelector('#loc');
  let temp = document.querySelector('#temp');
  let humidity = document.querySelector('#humidity');
  let country = document.querySelector('#country');
  let loctime = document.querySelector('#loctime');
  let wind = document.querySelector('wind');

  loc.innerHTML = `${data['city']}` ;
  temp.innerHTML = ` ${data['temp']}°C`;
  humidity.innerHTML = `${data['humidity']}%`;
  country.innerHTML = `${data['country']}`;
  loctime.innerHTML = `${data['localtime']}`;
  wind.innerHTML = `${data['wind']}`;

  console.table(data);
}

const callPass = () => {
  let location = document.querySelector('#locIn');
  
  GetCurrentWhether(location.value, displayWhether)
}
