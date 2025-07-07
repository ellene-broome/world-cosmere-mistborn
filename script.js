console.log("Welcome to the World of Cosmere - Mistborn");

const url = "https://openlibrary.org/search.json?q=mistborn";

fetch(url)
    .then(res => res.json()
    .then(data => {
        console.log(data.docs[0]); //test
    }))
    .catch(err => console.error("Error fetching data:", err));