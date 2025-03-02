function date() {
    let today = new Date();
    let tDay=today.getDay();
    let day = today.getDate();
    let month = today.toLocaleString('en-US', { month: 'short' }); 
    let year = today.getFullYear();

    let dayText = ` ${tDay},  ${month} ${day} ${year}`;

    document.getElementById("date").innerText = dayText;
}
 
window.onload = function() {
    date(); 
};