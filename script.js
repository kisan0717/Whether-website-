let mode = '/current.json';

let baseUrl = new URL(`http://api.weatherapi.com/v1${mode}`);

let params = baseUrl.searchParams;
 
params.append('key', API_KEY);

params.append('q', '48.8567,2.3508');

fetch(baseUrl.toString()).then(
  res => res.json()).then(
    data => {
      console.log(data);
    }
  )

