
let show_numbers = document.getElementById('show_numbers');

function show_number(){
    let num = "";
        for (let i = 1; i <= 100; i++) {
            if (i%2 == 0) {
                num = num + i  + "&nbsp &nbsp is an even number<br>";
            } else {
                num = num + i  + "&nbsp &nbsp is a odd number<br>"; 
            }
            show_numbers.innerHTML = num;
        }
    }
