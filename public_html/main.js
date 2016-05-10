/**
 * Created by Ali on 5/3/2016.
 */

//show all clicked item's content in the text box


function display(value) {
    clear();
    form.inputId.value += value;

}

function calc() {

    reset = true;
    var reg = /(^(\d+\.{1}\d+)|^(\d+))([-+*\/]{1})((\d+\.{1}\d+)|(\d+))$/g;

    if (reg.test(form.inputId.value)){
        return eval(form.inputId.value);
    }
    else{
        return 'Invalid Input!';
    }
}

//executed when = in clicked


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