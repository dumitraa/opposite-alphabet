let output = document.getElementById('output');
let submit = document.getElementById('submit');
let again = document.getElementById('again');

input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        submit.click();
    }
});

function reverseChar() {    
    var input = document.getElementById('input').value;
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
    var tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
    var decoded_string = "";

    for (var i = 0; i < input.length; i++) {
        var coded_letter = input.charAt(i);
        
	if (/[^a-zA-Z]/.test(input[i])) {
		decoded_string = decoded_string + input[i];	
	}
	else if (input[i] === input[i].toUpperCase()) {
	    	var letterCaps = alphabet.indexOf(coded_letter);
	    	var letAfterCaps = tebahpla.charAt(letterCaps);
	    	decoded_string = decoded_string + letAfterCaps;
        } else {
	    	var letterNoCaps = alphabet1.indexOf(coded_letter);
	    	var letAfterNo = tebahpla1.charAt(letterNoCaps);
	    	decoded_string = decoded_string + letAfterNo;
        }
    } 
    output.innerHTML = decoded_string;
};

function reset() {
    document.getElementById('input').value = ''
    output.innerHTML = ''
}

submit.addEventListener ('click', reverseChar);
again.addEventListener ('click', reset)
