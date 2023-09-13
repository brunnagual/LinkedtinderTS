import Empresa from "./empresa"

export class CadastroEmpresa {
}

document.addEventListener('DOMContentLoaded',() => {

    let nomeEmpresa = document.getElementById('nome-fantasia') as HTMLInputElement;
    let emailEmpresa = document.getElementById('email') as HTMLInputElement;
    let cnpjEmpresa = document.getElementById('cnpj') as HTMLInputElement;
    let cepEmpresa = document.getElementById('cep') as HTMLInputElement;
    let estadoEmpresa = document.getElementById('estado') as HTMLInputElement;
    let descricaoEmpresa = document.getElementById('descricao') as HTMLInputElement;

    let linguagensSelecionadas: string[] = [];

    function armazenarLinguagens() {
        let checkboxes = document.getElementsByName('tecnologias');
        for (let i = 0; i < checkboxes.length; i++) {

            if ((checkboxes[i] as HTMLInputElement).type === 'checkbox' && (checkboxes[i] as HTMLInputElement).checked) {
                linguagensSelecionadas.push((checkboxes[i] as HTMLInputElement).value);
            }
        }
        console.log(linguagensSelecionadas);
        return false;
    }

    let botaoSalvaEmpresa = document.getElementById('button-adicionar') as HTMLElement;
    console.log("let botaoSalvaEmpresa = document.getElementById('button-adicionar') as HTMLElement;");

    // Função
    function saveEmpresa(empresa: Empresa) {
        let empresas: Empresa[] = [];

        const empresasString = localStorage.getItem("empresas");
        if (empresasString) {
            try {
                empresas = JSON.parse(empresasString);
            } catch (error) {
                console.error(`Não foi possível analisar o JSON armazenado em 'empresas': ${error}`);
            }
        }

        empresas.push(empresa);

        localStorage.setItem("empresas", JSON.stringify(empresas));
    }
    // Evento
    console.log('botaoSalvaEmpresa.addEventListener("click", () => {')
     botaoSalvaEmpresa.addEventListener("click", () => {

        armazenarLinguagens();
         console.log("armazenarLinguagens();");
         let newEmpresa = new Empresa();
         console.log("let newEmpresa = new Empresa();");
         const regexNome = /^[a-zA-Z \.]+$/;
         if (regexNome.test(nomeEmpresa.value.trim())) {
             newEmpresa.nome = nomeEmpresa.value;
         } else {
             alert('O campo nome só pode receber letras e pontos.');
             return;
         }
         console.log("const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;");
         const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         if (regexEmail.test(emailEmpresa.value)) {
             newEmpresa.email = emailEmpresa.value;
         } else {
             alert('O campo email deve conter um email válido.');
             return;
         }
         console.log("const regexCNPJ = /^\\d{14}$/;");
         const regexCNPJ = /^\d{14}$/;
         const cnpj = parseInt(cnpjEmpresa.value, 10);
         if (regexCNPJ.test(cnpj.toString())) {
             newEmpresa.cnpjEmpresa = cnpj;
         } else {
             alert('O campo cnpj deve conter 14 números.');
             return;
         }
         console.log("const regexCEP = /^\\d{8}$/;");
         const regexCEP = /^\d{8}$/;
         const cep = parseInt(cepEmpresa.value, 10);
         if (regexCEP.test(cep.toString())) {
             newEmpresa.cep = cep;
         } else {
             alert('O campo cep deve conter 8 números.');
             return;
         }
         console.log("if (estadoEmpresa.value.trim() !== \"\" && descricaoEmpresa.value.trim() !== \"\") {");
         if (estadoEmpresa.value.trim() !== "" && descricaoEmpresa.value.trim() !== "") {
             newEmpresa.estado = estadoEmpresa.value;
             newEmpresa.descricao = descricaoEmpresa.value;
         } else {
             alert('Por favor, preencha todos os campos antes de enviar o formulário!');
             return;
         }
         console.log("newEmpresa.competencias = linguagensSelecionadas;");

         newEmpresa.competencias = linguagensSelecionadas;
         newEmpresa.vagas = [];

         saveEmpresa(newEmpresa);

        alert("Empresa cadastrada com sucesso.");
    });

});