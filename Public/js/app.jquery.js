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
    div.css('background-color', 'blue');

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

    //exemplo 2

    botaoShow.on({
        click: function () {
            $("div").hide();
            // $("div").toggle(); //Essa função já faz as duas coisas (hide e Show)
        }
    });

    let botaoHide = $("#botao-show");

    //Exemplo 1

    // botaoHide.click(function () {
    //     $("#apply-jquery").show();
    // });

    //Exemplo 2

    botaoHide.on({
        click: function(){
            $('div').css('background-color', 'pink')
            $("#apply-jquery").show();
        }
    });






});

// console.log(div)



