url =`https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log?api_key=keyGnaBQg5v00GqZ4`;

fetch(url)
     .then(response => response.json())
     .then(data => {
        const {records} = data;
  
        for(var i=0; i < data.records.length ; i++){
        const li = document.createElement("p");
        li.classList.add("utgifter");

        title= data.records[i].fields.Name;
        if(title.length > 15) title = title.substring(0, 15) + "...";
        
  
        const markup = `
        <a href="/update?=${data.records[i].id}" >
          <div id= "notesList" >
              <p id="notesListTitle">${title} <p>
              <p id="notesListDate">${data.records[i].fields.Date}</p>
          </div></a>
        `;
       
        li.innerHTML = markup;
        document.getElementById("utgifter").appendChild(li);
     }
      })

     
    