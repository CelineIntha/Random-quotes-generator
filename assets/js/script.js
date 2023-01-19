function generate() {
    var quotes = {
        "- Oscar Wilde" : ' "La beauté est dans le regard de celui qui regarde." ',
        "- Albert Einstein" : ' "Regardez profondément dans la nature, et alors vous comprendrez tout beaucoup mieux." ',
        "- Sénèque" : ' "Il faut toute la vie pour apprendre à vivre." ',
        "- Mère Térésa" : ' "La vie est un défi à relever, un bonheur à mériter, une aventure à tenter." ',
        "- Albert Schweitzer" : ' "Le bonheur est la seule chose qui se multiplie quand on la partage." ',
        "- Nelson Mandela" : ' "Que vos choix soient le reflet de vos espoirs et non de vos peurs." ',
        "- Stephen Hawking" : ' "Rappelez-vous de regarder les étoiles et non pas vos pieds." ',
        "- Martin Luther King" : ' "Une injustice commise quelque part est une menace pour la justice dans le monde entier." ',
        "- Épictète" : ' "Nous ne pouvons choisir les circonstances extérieures, mais nous pouvons toujours choisir la façon dont nous répondons à celles-ci." ',
        "- Bouddha" : ' "Celui qui est le maître de lui-même est plus grand que celui qui est le maître du monde." '
    }
    
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}