 // ACESSIBILIDADE / ZOOM (Alana)
 function fonte(e){
  var elemento = $(".acessibilidade");
  var fonte = elemento.css('fontSize');

  if(e == 'a') {
    elemento.css("fontSize", parseInt(fonte) + 1);
  
  } else if('d'){
    elemento.css("fontSize", parseInt(fonte) - 1);
  }
}

// Exemplo de partida JavaScript para desativar envios de formulários se houver campos inválidos
(function () {
  'use strict'

 //Buscar todos os formulários que queremos aplicar estilos personalizados de validação bootstrap 
  var forms = document.querySelectorAll('.needs-validation')

  // Loop sobre eles e impedir a submissão
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

jQuery(document).ready(function ($) {
    
  
  //OWL
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

/*CONSULTA CEP*/
  
const apresentaDados = (resultado) =>{
  document.getElementById('cep').value = resultado.cep;
  for(let campo in resultado){
      if(document.querySelector("#"+campo)){
          console.log(campo);
          document.querySelector("#"+campo).value = resultado[campo];
      }
  }
}
function consultaCep(){
  let cepDigitado = document.getElementById("cep");
  
  if(cepDigitado.value == "") {
      cepDigitado.style.border = "1px solid red";
  }else{
      let cepProcurado = cepDigitado.value.replace("-","");
    
      fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
      .then(response => {response.json()
      .then(data => console.log(apresentaDados(data)))
      })
      .catch(x => alert("CEP não encontrado!"))
  }
  }

  /*VERIFICAÇÃO DE CPF*/
  function verificaCPF() {
    if (vercpf(document.insira.cpf.value)) {
         document.insira.submit(); 
    } else {
        errors = "1"; 
    if (errors) alert('CPF INVÁLIDO!');
        document.retorno = (errors == '');
    }
  
  }
  function vercpf(cpf) {
    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
         return true;
  }
  
     
//Código de validação dos demais campos do formulário
$('#formContato').submit(function () {
  var nome = $('#nome')
  var sobrenome = $('#sobrenome')
  var email = $('#email')
  var cpf = $('#cpf')
  var telefone = $('#telefone')
  var cep = $('#cep')
  var estado = $('#uf')
  var cidade = $('#localidade')
  var bairro = $('#bairro')
  var endereco = $('#logradouro')
  var numero = $('#numero')
  var evento = $('#evento')
  var convidados = $('#convidados')
  var erro = $('.alert')
  var campo = $('#campo-erro')

  console.log(telefone.val())

  //para esconder o campo que está mostrando o erro. Removendo o elemento da tela sempre que tentar submeter o formulário.
  erro.addClass('d-none')
  $('.is-invalid').removeClass('.is-invalid')

  //se o usuário não preencher o formulário corretamente, aparecerá um alerta abaixo do button enviar/limpar que informará o erro.
  //valida o campo nome
  if (nome.val() == '') {
    erro.removeClass('d-none')
    campo.html('nome') //nome do campo que não foi preenchido
    nome.focus()
    nome.addClass('is-invalid')
    return false
  }
  //valida sobrenome
  if (sobrenome.val() == '') {
    erro.removeClass('d-none')
    campo.html('sobrenome')
    sobrenome.focus()
    sobrenome.addClass('is-invalid')
    return false
  }
  //valida o campo email
  if (email.val() == '') {
    erro.removeClass('d-none')
    campo.html('email') //nome do campo que não foi preenchido
    email.focus()
    email.addClass('is-invalid')
    console.log('validando o email')
    console.log(email.val())
    return false
  }
//valida o campo cpf
 if (cpf.val() == '') {
  erro.removeClass('d-none')
  campo.html('cpf') //nome do campo que não foi preenchido
  email.focus()
  email.addClass('is-invalid')
  console.log('validando o cpf')
  console.log(cpf.val())
  return false
}
  //valida telefone
  if (telefone.val() == '') {
    erro.removeClass('d-none')
    campo.html('telefone')
    telefone.focus()
    telefone.addClass('is-invalid')

    return false
  }
  //valida cep
  if (cep.val() == '') {
    erro.removeClass('d-none')
    campo.html('cep') //nome do campo que não foi preenchido
    cep.focus()
    cep.addClass('is-invalid')
    return false
  }
  //valida estado
  if (estado.val() == '') {
    erro.removeClass('d-none')
    campo.html('uf') //nome do campo que não foi preenchido
    estado.focus()
    estado.addClass('is-invalid')
    return false
  }
  //valida cidade
  if (cidade.val() == '') {
    erro.removeClass('d-none')
    campo.html('localidade') //nome do campo que não foi preenchido
    cidade.focus()
    cidade.addClass('is-invalid')
    return false
  }
  //valida bairro
  if (bairro.val() == '') {
    erro.removeClass('d-none')
    campo.html('bairro') //nome do campo que não foi preenchido
    bairro.focus()
    bairro.addClass('is-invalid')
    return false
  }
  //valida endereço
  if (endereco.val() == '') {
    erro.removeClass('d-none')
    campo.html('logradouro') //nome do campo que não foi preenchido
    endereco.focus()
    endereco.addClass('is-invalid')
    return false
  }
  //valida numero
  if (numero.val() == '') {
    erro.removeClass('d-none')
    campo.html('numero') //nome do campo que não foi preenchido
    numero.focus()
    numero.addClass('is-invalid')
    return false
  }
  //valida seleção de evento
  if (evento.val() == '') {
    erro.removeClass('d-none')
    campo.html('evento') //nome do campo que não foi preenchido
    evento.focus()
    evento.addClass('is-invalid')
    return false
  }
  //valida seleção de quantidade de convidados
  if (convidados.val() == '') {
    erro.removeClass('d-none')
    campo.html('convidados') //nome do campo que não foi preenchido
    convidados.focus()
    convidados.addClass('is-invalid')
    return false
  }

  return true

})

 