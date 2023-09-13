# LinkedtinderTS

O projeto em TypeScript tem como objetivo criar um sistema de cadastro de empresas. 
Ele utiliza HTML, CSS, Typescript e JavaScript para criar uma interface de usuário onde os usuários podem inserir informações sobre suas habilidades e encontrar as vagas. 
Abaixo estão os principais componentes e funcionalidades do projeto:

- Formulário de Cadastro de Empresa: O projeto inclui um formulário que permite aos usuários inserir informações sobre sua empresa. Os campos do formulário incluem nome da empresa, e-mail, CNPJ, CEP, estado e uma descrição.
![image](https://github.com/brunnagual/LinkedtinderTS/assets/109802322/ca90070c-9792-4077-b75d-2a993911bad6)

- Validação de Dados: Antes de enviar os dados para armazenamento, o projeto realiza a validação dos campos do formulário. Isso garante que os dados inseridos atendam a critérios específicos, como formato de e-mail válido, CNPJ com 14 números, CEP com 8 números, etc. Caso um campo não atenda aos critérios, o usuário recebe um alerta de erro e o envio é interrompido.

- Armazenamento Local: As informações das empresas cadastradas são armazenadas localmente no navegador do usuário. Isso é feito usando o localStorage do JavaScript, permitindo que as informações sejam recuperadas posteriormente.

- Linguagens de Programação: Além das informações da empresa, o projeto também permite que os usuários selecionem linguagens de programação com as quais a empresa trabalha. Essas linguagens são armazenadas como parte do perfil da empresa.

- Interface de Usuário: O projeto inclui uma interface de usuário simples com um cabeçalho, um formulário de cadastro, uma barra lateral de navegação e um botão para salvar as informações da empresa.
![image](https://github.com/brunnagual/LinkedtinderTS/assets/109802322/6d905a02-9fb5-49ff-bba2-adc252777870)

- Prevenção de Comportamento Padrão: Para evitar que o formulário seja enviado antes da validação e do armazenamento.

- Feedback ao Usuário: O projeto fornece feedback ao usuário por meio de alertas quando ocorrem erros de validação ou quando a empresa é cadastrada com sucesso.

Resumindo, este projeto TypeScript visa criar um sistema de cadastro de empresas com validação de dados, armazenamento local e uma interface de usuário amigável. Ele demonstra o uso de TypeScript para adicionar tipagem estática aos seus programas JavaScript, tornando o código mais robusto e menos suscetível a erros.

![image](https://github.com/brunnagual/LinkedtinderTS/assets/109802322/602d4ec0-b718-4954-a876-a946b1c950de)
![image](https://github.com/brunnagual/LinkedtinderTS/assets/109802322/f90c509e-a8fc-434b-ae4e-0982a091d6ed)
