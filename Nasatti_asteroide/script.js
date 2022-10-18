var aster;
var mort;
var pro;
var esp;
var timer_ast;
var timer_pro;
var t;
var p = true;
var punt;
var ver = false;
function Start(){
    aster = document.getElementById("ast");
    mort=document.getElementById("mor");
    pro=document.getElementById("pro");
	esp = document.getElementById("esp");
    punt=document.getElementById("punteggio").value=0;
	esp.style.top="75px";
	esp.style.left="35px";
    mort.style.top = (screen.height) - 310 +"px";
    aster.style.left = "0px";
    aster.style.top = "0px";
    pro.style.top = (screen.height) - 250 + "px";
	mort.style.left=(screen.width/2)+"px";
    pro.style.left=((screen.width/2)+60)+"px";
    Muovi_Asteroide();
}

function Muovi_Asteroide(){
    aster.style.left = parseInt(aster.style.left) + 5 + "px";
	esp.style.left = parseInt(esp.style.left) + 5 + "px";
    timer_ast = setTimeout(Muovi_Asteroide,20);
    if(parseInt(aster.style.left) >= screen.width - 150){
        aster.style.left="0px";
		esp.style.left="35px";
    }
}
function Mortaio(e){
    t = e.keyCode;
    //alert(t);
    if (t == 65 || t == 37) {
        mort.style.left= parseInt(mort.style.left) + + -15 + "px";
        if(ver==false){
            pro.style.left= parseInt(pro.style.left) + + -15 + "px";
        }
    }
    if(t==68 || t==39){
        mort.style.left= parseInt(mort.style.left) + 15 + "px";
        if(ver==false){
            pro.style.left= parseInt(pro.style.left) + + 15 + "px";
        }
    }
    if(t==32 || t==38 || t==87)
    {
        if(p){
            Palla();
            p=false;
        }
    }
    if(parseInt(mort.style.left) >= screen.width - 190){
        mort.style.left="0px";
        if(ver==false){
        pro.style.left="60px";
        }
    }
    if(parseInt(mort.style.left) < 0){
        mort.style.left=screen.width - 200 + "px";
        if(ver==false){
            pro.style.left=screen.width - 140 + "px";
        }
    }
}
function Palla(){//sbagliato id nel b
    ver = true;
    pro.style.top = parseInt(pro.style.top) + -10 + "px";
    timer_pro=setTimeout(Palla,20);
    //alert(parseInt(aster.style.top));
    Punti();
}
function Punti(){
    if (parseInt(pro.style.top) < parseInt(aster.style.top) + 100 && parseInt(pro.style.left)>parseInt(aster.style.left) && parseInt(pro.style.left)< parseInt(aster.style.left)+100){
        punt+=100;
        //alert(punt);
        document.getElementById("punteggio").value=punt;
        Clear();
        Esplosione();
    }
    else if(parseInt(pro.style.top) < -600){
        Clear();
    }
}
function Esplosione(){
    esp.removeAttribute("hidden");
    setTimeout(Ripristina, 1000);
}
function Ripristina() {
    esp.hidden = true;
}
function Clear(){
    pro.style.top = (screen.height) - 250 + "px";
    pro.style.left=parseInt(mort.style.left) + 60 +"px";
    clearInterval(timer_pro);
    ver=false;
    p=true;
}