url =`https://api.airtable.com/v0/appw9OO3eoSUmoKdt/Receipt%20Log?api_key=keyt35p1SiFUhVcYH`;

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

     
    