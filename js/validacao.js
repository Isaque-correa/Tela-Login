
var formulario = $('form');
formulario.submit(function(event){

    event.preventDefault();
   var self = $(this);
   var texBox = self.find('input[type="text"],input[type="email"],input[type="password"]');
   $('.mensagem_erro').text('');
    
    
   texBox.each(function(){
        var item = $(this);
        var value = item.val();
        var obrigatorio = item.prop('required');
        var mensagemErro = item.data('msg-obrigatorio');
        var formGrup = item.parent();
        var mensagemErroSpan = formGrup.find('.mensagem_erro');
        item.removeClass('borda-vermelha');
        
        if(value.length == 0 && obrigatorio == true){
            item.addClass('borda-vermelha');
            mensagemErroSpan.text(mensagemErro);
        }
   });
});


