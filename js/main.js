fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(json => {
     console.log(json); 
     // birinchi div
     var div1 = document.getElementById('div1');
     var img = document.createElement('img');
     var h11 = document.createElement('h1');
    
     h11.innerText = json[0].title;
     h11.style.fontSize = "12pt"
     h11.style.textAlign = "center"
     img.setAttribute('src', json[0].url);
     img.style.width = "100%";
     
     div1.appendChild(img);
     div1.appendChild(h11);
     // birinchi div

     //ikkinchi div

     var div2 = document.getElementById('div2');
     var img1 = document.createElement('img');
     var h12 = document.createElement('h1');
     img1.setAttribute('src', json[1].url);
     img1.style.width = "100%";
     
     h12.innerText = json[1].title;
     h12.style.fontSize = "12pt";
     h12.style.textAlign = "center";
     div2.appendChild(img1);
     div2.appendChild(h12);

     //ikkinchi div tugashi

     //uchunchi div

     var div3 = document.getElementById('div3');
     var img2 = document.createElement('img');
     var h13 = document.createElement('h1');
     img2.setAttribute('src', json[2].url);
     img2.style.width = "100%";
     
     h13.innerText = json[2].title;
     h13.style.fontSize = "12pt";
     h13.style.textAlign = "center";
     div3.appendChild(img2);
     div3.appendChild(h13);
     //uchunchi div
    //turt div

    var div4 = document.getElementById('div4');
    var img3 = document.createElement('img');
    var h14 = document.createElement('h1');
    img3.setAttribute('src', json[3].url);
    img3.style.width = "100%";

    h14.innerText = json[3].title;
    h14.style.fontSize = "12pt";
    h14.style.textAlign = "center";
    div4.appendChild(img3);
    div4.appendChild(h14);
    //turt div
    
})


fetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(json => {
    var div11 = document.getElementById('div11');
    var img = document.createElement('img');
    var h1 = document.createElement('h1');
    
    h1.innerText = json.data[0].first_name;

    img.style.width = "100%";
    img.setAttribute('src', json.data[0].avatar);

    div11.appendChild(img);
    div11.appendChild(h1);
})