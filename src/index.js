function selectPage(pageName) {
    const pages = ['retro','modern','advanced'];
    pages.forEach(page => {
        let pageElem = document.getElementById(`experience-${page}`);
        if(page === pageName) pageElem.style.display = 'block';
        else pageElem.style.display = 'none';
        return page;
    })
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function openModal(id){
    console.log(id);
    const modal = document.getElementById('modal');
    modal.style.backgroundColor = 'red';
    modal.style.display = 'block';
    modal.style.zIndex = 22;
    modal.style.top = 0;
    modal.style.left = 0;
    const h1 = document.createElement('h1');
    h1.innerText = 'HELLOOOOOOO';
    modal.appendChild(h1);
    console.log(modal);
}