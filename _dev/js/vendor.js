var global = {};

function toggleMsg(){

}
function events(){
    var buttonEnviar = document.getElementById('enviar');
    buttonEnviar.onclick = function() {

        var email = document.getElementById('inputEmail');
        var pass = document.getElementById('inputPassword');
        var block__msg = document.getElementById('block__msg');
        var icon__msg = document.getElementById('icon__msg');
        var msg__text = document.getElementById('msg__text');

        if ((email.value ==='') || (pass.value==='')){
            msg__text.innerHTML= 'Digite seu email e senha';
            if (block__msg.classList.contains('correct')) {
                block__msg.classList.remove('correct');               
                block__msg.classList.add('error');
                icon__msg.classList.remove('sprite_1-correct');
                icon__msg.classList.add('sprite_1-close');
            }else{
                block__msg.classList.add('error');  
                icon__msg.classList.add('sprite_1-close');
            }  

            block__msg.style.opacity = "1";
        }else{
            msg__text.innerHTML= 'Você foi logado com sucesso';
            if (block__msg.classList.contains('error')) {
                block__msg.classList.remove('error');
                block__msg.classList.add('correct');
                icon__msg.classList.remove('sprite_1-close');
                icon__msg.classList.add('sprite_1-correct');
            }else{
                block__msg.classList.add('correct');
                icon__msg.classList.add('sprite_1-correct');
            }     
            block__msg.style.opacity = "1"; 
        }
        
     }
}


function init() {
	events();
} 


window.onload = init;
var global = {};

function toggleMsg(){

}
function events(){
    var buttonEnviar = document.getElementById('enviar');
    buttonEnviar.onclick = function() {

        var email = document.getElementById('inputEmail');
        var pass = document.getElementById('inputPassword');
        var block__msg = document.getElementById('block__msg');
        var icon__msg = document.getElementById('icon__msg');
        var msg__text = document.getElementById('msg__text');

        if ((email.value ==='') || (pass.value==='')){
            msg__text.innerHTML= 'Digite seu email e senha';
            if (block__msg.classList.contains('correct')) {
                block__msg.classList.remove('correct');               
                block__msg.classList.add('error');
                icon__msg.classList.remove('sprite_1-correct');
                icon__msg.classList.add('sprite_1-close');
            }else{
                block__msg.classList.add('error');  
                icon__msg.classList.add('sprite_1-close');
            }  

            block__msg.style.opacity = "1";
        }else{
            msg__text.innerHTML= 'Você foi logado com sucesso';
            if (block__msg.classList.contains('error')) {
                block__msg.classList.remove('error');
                block__msg.classList.add('correct');
                icon__msg.classList.remove('sprite_1-close');
                icon__msg.classList.add('sprite_1-correct');
            }else{
                block__msg.classList.add('correct');
                icon__msg.classList.add('sprite_1-correct');
            }     
            block__msg.style.opacity = "1"; 
        }
        
     }
}


function init() {
	events();
} 


window.onload = init;
var global = {};

function toggleMsg(){

}
function events(){
    var buttonEnviar = document.getElementById('enviar');
    buttonEnviar.onclick = function() {

        var email = document.getElementById('inputEmail');
        var pass = document.getElementById('inputPassword');
        var block__msg = document.getElementById('block__msg');
        var icon__msg = document.getElementById('icon__msg');
        var msg__text = document.getElementById('msg__text');

        if ((email.value ==='') || (pass.value==='')){
            msg__text.innerHTML= 'Digite seu email e senha';
            if (block__msg.classList.contains('correct')) {
                block__msg.classList.remove('correct');               
                block__msg.classList.add('error');
                icon__msg.classList.remove('sprite_1-correct');
                icon__msg.classList.add('sprite_1-close');
            }else{
                block__msg.classList.add('error');  
                icon__msg.classList.add('sprite_1-close');
            }  

            block__msg.style.opacity = "1";
        }else{
            msg__text.innerHTML= 'Você foi logado com sucesso';
            if (block__msg.classList.contains('error')) {
                block__msg.classList.remove('error');
                block__msg.classList.add('correct');
                icon__msg.classList.remove('sprite_1-close');
                icon__msg.classList.add('sprite_1-correct');
            }else{
                block__msg.classList.add('correct');
                icon__msg.classList.add('sprite_1-correct');
            }     
            block__msg.style.opacity = "1"; 
        }
        
     }
}


function init() {
	events();
} 


window.onload = init;
/*! front_end_framework 2018-04-26 */
function toggleMsg(){}function events(){var e=document.getElementById("enviar");e.onclick=function(){var e=document.getElementById("inputEmail"),s=document.getElementById("inputPassword"),t=document.getElementById("block__msg"),c=document.getElementById("icon__msg"),o=document.getElementById("msg__text");""===e.value||""===s.value?(o.innerHTML="Digite seu email e senha",t.classList.contains("correct")?(t.classList.remove("correct"),t.classList.add("error"),c.classList.remove("sprite_1-correct"),c.classList.add("sprite_1-close")):(t.classList.add("error"),c.classList.add("sprite_1-close")),t.style.opacity="1"):(o.innerHTML="Você foi logado com sucesso",t.classList.contains("error")?(t.classList.remove("error"),t.classList.add("correct"),c.classList.remove("sprite_1-close"),c.classList.add("sprite_1-correct")):(t.classList.add("correct"),c.classList.add("sprite_1-correct")),t.style.opacity="1")}}function init(){events()}function toggleMsg(){}function events(){var e=document.getElementById("enviar");e.onclick=function(){var e=document.getElementById("inputEmail"),s=document.getElementById("inputPassword"),t=document.getElementById("block__msg"),c=document.getElementById("icon__msg"),o=document.getElementById("msg__text");""===e.value||""===s.value?(o.innerHTML="Digite seu email e senha",t.classList.contains("correct")?(t.classList.remove("correct"),t.classList.add("error"),c.classList.remove("sprite_1-correct"),c.classList.add("sprite_1-close")):(t.classList.add("error"),c.classList.add("sprite_1-close")),t.style.opacity="1"):(o.innerHTML="Você foi logado com sucesso",t.classList.contains("error")?(t.classList.remove("error"),t.classList.add("correct"),c.classList.remove("sprite_1-close"),c.classList.add("sprite_1-correct")):(t.classList.add("correct"),c.classList.add("sprite_1-correct")),t.style.opacity="1")}}function init(){events()}var global={};window.onload=init;var global={};window.onload=init;