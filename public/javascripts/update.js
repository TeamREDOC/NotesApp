const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
id = urlParams.get('');

url =`https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log/${id}?api_key=keyGnaBQg5v00GqZ4`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const {records} = data;

    document.getElementById('printName').value= data.fields.Name;
    document.getElementById('printDescription').value= data.fields.Description; 
        
      })

document.querySelector("form").addEventListener("submit", e => {
e.preventDefault();

let name = document.getElementById("printName").value;
var description = document.getElementById("printDescription").value;


url =`https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log/${id}`;

const addData = {
"fields":{
    "Name" : name,
    "Description" : description
}
}

fetch (url, {method: 'PUT' , body: JSON.stringify(addData), 
headers: {'Authorization': 'Bearer keyGnaBQg5v00GqZ4', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log (err));

});      



