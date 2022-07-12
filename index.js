
async function getData() {
    
    //alert("loading..")
    // Get a refrerence to the UL
    const ul = document.getElementById('ul');
    ul.innerHTML = '';

    const loader = document.getElementById('loader');
    loader.innerHTML = 'loading...';

    const reloadtButton = document. querySelector("#reload");
    let domain = document.getElementById('search').value;
    let url = 'https://62cc8d9e8042b16aa7d11a12.mockapi.io/api/v1/find-subdomains/Subdomains?q=' + domain;
    let response = await fetch(url);

    let data = await response.json(); // read response body and parse as JSON

    loader.innerHTML = '';
    for (i = 0; i < data.length; i++) {
        const li = document.createElement("li"); // create li element.

        li.innerHTML = data[i].name; // assigning text to li using array value.

        ul.appendChild(li); // append li to ul.
    }
   
}
