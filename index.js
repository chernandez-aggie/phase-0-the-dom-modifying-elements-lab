// Write your code here!
document.querySelector('#main').remove();

let newHeader = document.createElement('H1');
newHeader.id = 'victory';
document.body.append(newHeader);

newHeader.innerHTML = "\"YOUR-NAME is the champion\"";