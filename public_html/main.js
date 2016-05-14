/**
 * Created by Ali on 5/3/2016.
 */

//show all clicked item's content in the text box
function display(value) {
    clear();
    form.inputId.value += value;

}


//executed when = in clicked
function calc() {

    reset = true;

    //reg matches 1+2+3 but switch doesn't
    var reg = /(((^(\d+\.{1}\d+)|^(\d+))([-+*\/]{1})((\d+\.{1}\d+)|(\d+))$)*)/g;

    if (reg.test(form.inputId.value)){
        //return eval(form.inputId.value);
        var x = form.inputId.value;

        // s returns just all numbers, not operators
        var s = x.match(/(\d+\.{1}\d+)|(\d+)/g);

        //console.log(x);
        //console.log(s);
        //operators returns one of the operators
        var operators = x.match(/[-+*\/]{1}/g);

        //join changes ["+"] to "+"
        var operator = operators.join();
    }
    else{
        return 'Invalid Input!';
    }


// k is an array that holds the calculation of the number array and employs ane of the
// operators and stores them. at the end it returns the value of the last house of itself as the final calculation
    var k = [];
    var i=0;
    k[i-1] = Number(s[i]);
    for(i=0; i<operators.length; i++){
        switch (operators[i]){
            case "-":
                k[i] = k[i-1] - Number(s[i+1]);
                break;
            case "+":
                k[i] = k[i-1] + Number(s[i+1]);
                break;
            case '*':
                k[i] = k[i-1] * Number(s[i+1]);
                break;
            case '/':
                k[i] = k[i-1] / Number(s[i+1]);
                break;
            default :
                form.inputId.value = "Error!!";
        }
    }
    form.inputId.value = k[i-1];
    return form.inputId.value;
}


//show or hide the calculator
function showToggle(){
    var form = document.getElementById('mainForm');
    var showHide = form.style.display;
    var showButton = document.getElementById('showBtn');

    if(showHide == 'block'){
        //form.style.='2s';
        form.style.display = 'none';
        showButton.innerHTML = 'Show Calculator';
    }
    else {
        form.style.display = 'block';
        showButton.innerHTML = 'Hide Calculator';
    }
}


//if textbox is not empty make it empty for the next operation
var reset = false;
function clear(){
    if(reset){
        form.inputId.value = "";
    }
    reset = false;
}

//This function clears the last item entered
function clearCE(){
    var x = form.inputId.value;
    var s = x.match(/((\d+\.{1}\d+)|(\d+))|([-+*\/]{1})/g);
    var arr = [];
    if(s.length != null) {
        for (var i = 0; i < s.length; i++) {
            arr[i] = s[i];
        }
    }
        else{
            form.inputId.value = "";
        }

    if(arr != null){
        arr.pop();
    }

    form.inputId.value = arr;
    return form.inputId.value;

}

//this function clears the last character
function clearBack(){
    var x = form.inputId.value;

    //substring extracts the characters in a string between "start" and "end", not including "end" itself.

    x = x.substring(0, x.length - 1);
    form.inputId.value = x;
    return form.inputId.value;
}

//Calculate Factorial
function fact(n){
    var x = 0;
    clear();

    if (n===1 || n===0){
        return 1;
    }
    else{
        x = n*fact(n-1);
    }
     form.inputId.value= x;
    return form.inputId.value;
}


function sRoot(){
    var m = form.inputId.value;
    var n = Math.sqrt(m);
    form.inputId.value = n;
    return form.inputId.value;
}

function exponent(){
    form.inputId.value = Math.E;
    return form.inputId.value;
}

function sin(n){
    form.inputId.value = Math.sin(n);
    return form.inputId.value;
}

function cos(n){
    form.inputId.value = Math.cos(n);
    return form.inputId.value;
}

function tan(n){
    form.inputId.value = Math.tan(n);
    return form.inputId.value;
}

function cot(n){
    form.inputId.value = 1/Math.tan(n);
    return form.inputId.value;
}

function random(n){
    form.inputId.value = Math.random();
    return form.inputId.value;
}
