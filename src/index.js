function selectPage(pageName) {
    switch(pageName){
        case "retro":
            window.location.href="retro.html"
            break;
        case "modern":
            window.location.href="modern.html"
            break;
        case "advanced":
            window.location.href = "advanced.html"
            break;
        default:
            window.location.href = "index.html"
            break;
    }
}

function openModal(name){
    console.log('HIYA', name)
}