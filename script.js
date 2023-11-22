var idlogin;

idlogin=0;


//function alterarpag(){
//    {
  //      if(idlogin === 1){
    //        window.open("carrinho.html");
      //  }
        //else{
          //  window.open("login.html");
        //};
    //}

//}

const alterarpag = document.getElementById('alterarpag');
alterarpag.addEventListener('click', function(){
    if(idlogin === 1){
            window.open("carrinho.html");
        }
        else{
            window.open("login.html");
        };
});


logar_cadastrar()
{
    idlogin=1;
    window.open("inicio.html");
}

logout()
{
    idlogin=0
    window.open("login.html");
}