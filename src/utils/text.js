const faqText = `<b>🔰 É possível escolher DDD específicos?</b>

Infelizmente não é possível escolher DDD's específicos.

<b>🔰 O numero fica ativo por quanto tempo?</b>

O número fica ativo por 20 minutos para o recebimento de SMS, depois o mesmo é deletado de nosso sistema e não conseguimos mais fazer a reativação do mesmo.

<b>🔰Posso utilizar o número para receber sms de 2 apps diferentes?</b>

Não.

Se deseja comprar um numero para WhatsApp e outro para Facebook por exemplo, terá que gerar 2 números. Um para facebook e outro para whatsapp.

Nosso sistema não permite cadastrar o mesmo número em apps ou plataformas diferentes.

<b>🔰 Cadastrei o número no app e o código não chegou no painel.</b>

Se não chegar o código no máximo em 3 minutos você pode clicar no botão de cancelar para receber reembolso integral do valor pago e tentar o próximo número.

<b>🔰 Quero comprar um número virtual para fazer atendimento da minha empresa, posso?</b>

Bom, pode sim.

Porém agente não recomenda. Pelo simples fato do número ficar ativo para receber SMS somente 20 minutos.

Se ocorrer qualquer problema, do tipo você perder seu celular ou desinstalar o app sem querer, não conseguimos reativar o número. Porque ele é deletado 20 minutos após gerado.

<b>🔰 Tem teste gratuito?</b>

Não temos teste gratuito.

<b>🔰Posso utilizar o número para qualquer finalidade?</b>

⚠️ É estritamente proibido usar OS NÚMEROS para atividades fraudulentas ou outras atividades ilegais.

<b>🔰 Posso ficar com o número após o uso?</b>

Não, os números são temporários, após o uso eles são substituídos por novos, servindo somente para confirmação ou criação de contas.

<b>🔰Qual a diferença entre a opção 1, 2, 3 e 4?</b>

Em relação aos números nenhuma, o que muda é somente o preço.

<b>🔰 No bot não tem o app/Plataforma que eu quero gerar o número, o que faço?</b>

Utilize a opção "Outros apps" para gerar o número para o app ou plataforma que não está listado em nosso bot

<b>🔰 Gerei um número recebi o código, mais a conta no aplicativo já esta criada, ou seja o número foi usado. O que fazer?</b>

Infelizmente isso pode acontecer.

Se caso isso acontecer chame nosso chat online, envie o numero comprado e os prints comprovando que o número já tinha sido utilizado que analisaremos e se confirmado fazemos o reembolso integral do valor pago na conta do painel.

<b>🔰Comprei um número passa whatsapp quando recebi o código e inseri no app já tinha foto e nome de uma pessoa.</b>

Como explicado acima isso pode acontecer.

 Só precisa enviar os prints e o numero e fazemos o reembolso. Os números já vem assim de nosso fornecedor. Não temos opção de filtrar. Não recomendamos usar a conta, se decidir usar faça por sua conta e risco. 

Não nos responsabilizaremos.

<b>🔰Como colocar saldo na minha conta?</b>

Use o comando /recarga, ou abra o menu e clique em recarregar. Ou clique aqui e assista o vídeo de como recarregar.

<b>🔰 O bot e o sistema de recarga funcionam 24 hrs por dia?</b>

Sim, funciona 24hrs podendo comprar os números a qualquer horário do dia ou da noite

<b>🔰 Eu já pago pelo número assim que gerar o mesmo?</b>

Não, você só será cobrado à partir do momento que chegar o primeiro código de verificação.

<b>🔰 Os demais códigos que chegar depois do primeiro, eu pago por eles também?</b>

Não, são gratuitos Só cobramos quando o primeiro código chega.

Exceto a opção 4. Na opção quatro cada sms que você recebe será cobrado. 

<b>🔰 Não irei mais utilizar o saldo que está na minha conta do painel, bot, app, posso sacar?</b>

Sim pode. 

Só precisa nos enviar seu PIN de cliente e PIX. O PIN de cliente você encontra no menu ou digitando /pin no bot. O prazo para enviarmos o saque solicitado é de 48 horas contando à partir da data que foi solicitado o mesmo.

⚙️ Nosso suporte: @suporte_teste`;

const instrText = `- Siga as instruções abaixo para saber com exatidão o que realizar antes de começar a utilizar o seu número virtual.  

• Atente-se de inserir o número gerado no site ou app que escolheu na lista.

• O código de verificação chega na mesma caixa de mensagem onde é gerado o número.

• Se o código SMS não chegar em 3 min cancele para ser reembolsado e tente o próximo número.

• Pode ser que o número que você gerou foi desativado pela operadora por isso o código não chegou.

• Você pode escolher a operadora do número que vai gerar, recomendamos vivo ou Oi, porém você pode deixar aleatória ou testar as demais. Verifique também se a operadora que você escolheu tem números disponíveis para o serviço selecionado.

• Temos 3 opções de compra. 1 , 2 e 3 a única diferença as vezes é somente o preço.

• Lembre-se de que nossos números são temporários para receber o código SMS, eles ficam ativos 19 minutos. Passados os 19 minutos o número é deletado do sistema e não chegará mais nenhum código SMS.

 Também não conseguiremos reativar o numero que foi deletado.

• Não esqueça de inserir o numero no app ou site que escolheu na lista de serviços. O nosso sistema apenas repassa o código recebido. Quem é responsável por enviar o código ou link etc é o app onde você vai inserir o número.

• Não escolha DDD. Em nosso painel não é possível escolher DDD específicos, eles vem aleatoriamente. Se estiver escolhendo e cancelando vários pedidos afim de chegar seu DDD. Você pode ser bloqueado(a) por 120 minutos ou mais. E talvez o DDD que procure nem esteja disponível em nosso sistema.

 Faça um bom uso de nossa plataforma, se tiver alguma dica ou sugestão para a mesma use nosso @suporte_teste Obrigado!`;

 const paymentText = (code) => {

    return `<b>-> Pedido de RECARGA criado!</b>\n\n -> Código COPIA e COLA Gerado!\n\n<code>${code}</code>\n\n⚠️ O código acima gerado não é chave aleatória. É chave qr code.\n\n<b>Se estiver com duvida de como pagar clique aqui e saiba como pagar.</b>\n\n-> Esse código pix expira em 20 minutos\n-> Para copiar CLIQUE no código.\n-> Sua recarga será creditada em 1 minuto.`;

 }

export { faqText, instrText, paymentText };