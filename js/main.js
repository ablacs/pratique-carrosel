$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(12) 12345-1234' });

    $('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
    placeholder: '012345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },

        },
        messages:{
            nome: {
                required: 'Por favor, insira seu nome'
            },
            telefone: {
                required: 'Por favor, insira seu telefone'
            },
            email: {
                required: 'Por favor, insira seu e-mail',
                email: 'Por favor, insira um e-mail válido'
            },
            cpf: {
                required: 'Por favor, insira seu CPF'
            },
            cep: {
                required: 'Por favor, insira seu CEP'
            },
            endereco:{
                required: 'Por favor, insira seu endereço'
            }
            },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
    })

