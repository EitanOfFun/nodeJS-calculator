var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var webpage = xhr.responseText;
//        document.getElementById('webpage').innerHTML = webpage;
        console.log(webpage);
    }
};
xhr.open('GET', 'https://www.google.com/search?q=4*98');
xhr.send();
