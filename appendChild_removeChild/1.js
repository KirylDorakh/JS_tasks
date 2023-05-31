var div = document.querySelector('#raz10');
input = div.childNodes;
// input[0].onclick = function() {
//     alert('работает');
// }
div.innerHTML += '<input type="button" value="Я вновь созданный">';
input[0].onclick = function() {
    alert('работает');
}
