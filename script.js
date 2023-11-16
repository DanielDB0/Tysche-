var idlogin;

idlogin=0;


alterarpag()
{
    if(idlogin === 1){
        window.open("produto.html");
    }
    else{
        window.open("login.html");
    };
}

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