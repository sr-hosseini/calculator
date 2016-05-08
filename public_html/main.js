/**
 * Created by Ali on 5/3/2016.
 */

function display(value){
    var str = value;
    var patt = new RegExp(/(\d)([-+*\/])(\d)/);
    var a = str.test(patt);
    if (!a){
        form.inputId.value += value;
    }
    else{
        form.inputId.value = 'Error!';
    }
}

//^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$
///^\s*([+-]?(?:\d+\.?\d*|\d*\.\d+))\s*([-+\/*])\s*([+-]?(?:\d+\.?\d*|\d*\.\d+))\s*$/g
function result(){
    eval(form.inputId);
}




