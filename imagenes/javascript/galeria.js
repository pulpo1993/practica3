var num = 1;

function adelante() {
    num++;
    if (num>10) 
        num=1;
        var foto=document.getElementById("messi");
        foto.src="../imagenes/img/messi"+num+".jpg";    
    
}
function atras() {
    num--;
    if (num<1) 
        num=10;
        var foto=document.getElementById("messi");
        foto.src="../imagenes/img/messi"+num+".jpg";  
          
}
function rand(n){
     return(Math.floor(Math.random() * n + 1 ));
}
var imagenes=new Array(

    ['../imagenes/img/messi2.jpg'],
    ['../imagenes/img/messi3.jpg'],
    ['../imagenes/img/messi4.jpg'],
    ['../imagenes/img/messi5.jpg'],
    ['../imagenes/img/messi6.jpg'],
    ['../imagenes/img/messi7.jpg'],
    ['../imagenes/img/messi8.jpg'],
    ['../imagenes/img/messi9.jpg'],
    ['../imagenes/img/messi10.jpg'],
);

function rotar()
{
    document.getElementById("messi").src=imagenes[rand(6)-1];
}
function ini()
{
    rotar();
    setInterval(rotar,3000);
}