function selectPage(pageName) {
    switch(pageName){
        case "retro":
            window.location.href="./retro/retro.html"
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

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function openModal(id){
    console.log(id);
    const modal = document.getElementById('modal');
    modal.setAttribute('background-color','white');
    modal.setAttribute('width', '500px')
    modal.setAttribute('height', '500px')
    modal.setAttribute("display", "block");
    const h1 = document.createElement('h1');
    h1.innerText = 'HELLOOOOOOO';
    modal.appendChild(h1);
    console.log(modal);



    // const elem = document.getElementById(id);
    // console.log(elem)
    // const div = document.createElement('div');
    // const h1 = document.createElement('h1');
    // h1.innerText = 'HELLOOOOOOO';
    // div.appendChild(h1);
    // div.setAttribute('background-color','white');
    // div.setAttribute('width', '500px')
    // div.setAttribute('height', '500px')
    // insertAfter(div, elem);
}