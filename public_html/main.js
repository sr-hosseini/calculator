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

        //operators returns one of the operators
        var operators = x.match(/[-+*\/]{1}/g);

        //join changes ["+"] to "+"
        var operator = operators.join();
    }
    else{
        return 'Invalid Input!';
    }

    switch (operator){
        case "-":
            form.inputId.value = Number(s[0]) - Number(s[1]);
            break;
        case "+":
            form.inputId.value = Number(s[0]) + Number(s[1]);
            break;
        case '*':
            form.inputId.value = Number(s[0]) * Number(s[1]);
            break;
        case '/':
            form.inputId.value = Number(s[0]) / Number(s[1]);
            break;
        default :
            form.inputId.value = "Error!!";
    }

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