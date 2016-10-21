/**
 * Created by Jojo on 21.10.16.
 */

//setzt eingegebenen Text auf Webseite test.html
function insertText(){

    var test = document.getElementById('input1').value;
    var knoten = document.createElement('text');
    var inhalt = document.createTextNode(test);
    knoten.appendChild(inhalt);

    var divi = document.getElementById('test');
    divi.appendChild(knoten);
}
