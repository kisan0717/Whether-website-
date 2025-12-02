const GetCurrentWhether = (location, callback) => {
  const mode = '/current.json'; // there are multiple role for getting data 
  const baseUrl = new URL(`http://api.weatherapi.com/v1${mode}`);
  let params = baseUrl.searchParams;
  params.append('key', API_KEY);
  params.append('q', location);

  // used for https request.
  fetch(baseUrl.toString()).then(
    res => res.json()).then(
      data => {
        callback(GetImpData(data));
      }
    )
}

const GetImpData = (rawdata) => {
  let result = {};

  result['temp'] = rawdata['current']['temp_c'];
  result['humidity'] = rawdata['current']['humidity'];
  result['wind'] = rawdata['current']['wind_kph'];
  result['country'] = rawdata['location']['country'];
  result['localtime'] = rawdata['location']['localtime'];
  result['city'] = rawdata['location']['name'];

  return result;
}
