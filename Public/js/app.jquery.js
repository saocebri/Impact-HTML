//A diferença de usar javascript e jquery
// document.getElementById('apply-jquery');
// $("#apply-jquery");

//--------------------------------------------------------------------------//

// Duas forma de executar função

//Exemplo 1

// $(function(){

// })

//Exemplo 2

$(document).ready(function () {

    let div = $("#apply-jquery");

    // div.click(function(){
    //     console.log("Olá você clicou na DIV");
    // });

    // div.mouseover(function(){
    //     console.log("Ola vc passou o mouse na div")
    // });

    // div.on('mouseout', function(){
    //     console.log("Ola vc tirou o mouse da div")
    // });
    // div.css('background-color', 'blue');

    div.on({
        click: function () {
            $(this).css('background-color', 'red'); // usando o (this)             
            console.log('Ola vc Clicou na Div');
        },
        mouseover: function () {
            console.log(("Ola vc passou o mouse"))
        },
        mouseout: function () {
            console.log('Ola vc tirou o  mouse da DIV')

        },
        mouseenter: function () {
            div.css('background-color', '#999') // usando a propria DIV
            console.log("Ola vc entrou na div")
        }
    });

    let botaoShow = $("#botao-hide");

    //exemplo 1

    // botaoShow.click(function(){
    //     $("#apply-jquery").hide();
    // });

    ///exemplo 2

    botaoShow.on({
        click: function () {
            // $("div").fadeOut('slow'); // Cria efeito
            $("div").slideUp('slow'); // Cria efeito  
            // $("div").toggle(); //Essa função já faz as duas coisas (hide e Show)
        }
    });

    let botaoHide = $("#botao-show");
    //botaoHide.text("Novo texto") // escreve dentro do elemento botao
    let textodoBotao = botaoHide.text() //Mostra o que está  escrito no botao

    ///Exemplo 1

    // botaoHide.click(function () {
    //     $("#apply-jquery").fadeOut();
    // });

    //Exemplo 2

    botaoHide.on({
        click: function () {
            $('div').css('background-color', 'pink')
                //.fadeIn('slow') //Cria efeito
                //.fadeToggle('slow') //Cria efeito
                .slideDown('slow') //Cria efeito
                .html('<strong>Novo texto</strong>');
        }
    });

    // let botaoCalc = $('#botao-calc')
    // let num1 = 2;
    // let num2 = 3;
    // botaoCalc.on({
    //     click: function () {
    //         let total = num1 + num2;
    //         $("#apply-jquery").text(total);
    //     }
    // });

    // let botao = $("button");

    // botao.each(function(contador){       

    //     if(contador===1){
    //         $(this).css('background-color','blue');

    //     }
    // $(this).click(function(){
    //     $('div').css('background-color', '#999')
    // })

    // });

    //Calcular

    let btn1 = $('.bot-01');
    let btn2 = $('.bot-02');
    let total = $('.resultado');
    let soma = $('.soma');
    let resultado = 0;

    total.click(function () {
        $(soma).text(resultado);
    });

    btn1.click(function () {
        resultado += Number($(this).text());
    });
    btn2.click(function () {
        resultado += Number($(this).text());
    })

    //Ajax 

    // $("#ajax").click(function () {
    //     $("#apply-jquery").load('teste-ajax.html');
    // });
 
    let btnEnviar = $('#enviar');

    btnEnviar.click(function () {
        let login = $('#login').val();
        $.ajax({
            method: "GET",
            url: "teste-ajax.html",
            data: { userLogin: login}
        })
            .done(function (msg) {
                $("#apply-jquery").html(msg);
            });
    
    })

   




});

// console.log(div)



