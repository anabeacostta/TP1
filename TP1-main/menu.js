const $menuu = document.getElementById('menuu');
const $menuarte = document.getElementById('menuarte');
let state = $menuu.dataset.aberto;

console.log(state);

$menuarte.addEventListener('click', () => {
    if (state == "false") {
        state = "true"; 
    } else {
        state = "false";
    }

    $menuu.dataset.aberto = state;
})