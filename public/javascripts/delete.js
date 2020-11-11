document.querySelector("button").addEventListener("click", e => {
    e.preventDefault();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get('');
    
    url =`https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log/${id}?api_key=keyGnaBQg5v00GqZ4`;

fetch(url, {method: 'DELETE'})
  .then(res => res.json())
  .then(json => {console.log(json)
    window.location.href= "/";})
  .catch(err => console.log(err));

});

