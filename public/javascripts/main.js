url =`https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log?api_key=keyGnaBQg5v00GqZ4`;

fetch(url)
     .then(response => response.json())
     .then(data => {
        const {records} = data;
  
        for(var i=0; i < data.records.length ; i++){
        const li = document.createElement("p");
        li.classList.add("utgifter");

  
        const markup = `
          <div id= "notesList">
              <p>${data.records[i].fields.Name} <p>
              <p>${data.records[i].fields.Description}</p>
          </div>
        `;
       
        li.innerHTML = markup;
        document.getElementById("utgifter").appendChild(li);
     }
      })

     
    