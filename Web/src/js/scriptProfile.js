// Função para formatar CPF
function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o traço
    return cpf;
}

// Função para formatar telefone
function formatPhone(phone) {
    phone = phone.replace(/\D/g, ''); // Remove tudo que não é dígito
    phone = phone.replace(/(\d{2})(\d)/, '($1) $2'); // Coloca os parênteses
    phone = phone.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca o traço
    return phone;
}

// Função para formatar CEP
function formatCEP(cep) {
    cep = cep.replace(/\D/g, ''); // Remove tudo que não é dígito
    cep = cep.replace(/^(\d{5})(\d{3})/, '$1-$2'); // Coloca o traço apenas antes dos últimos 3 dígitos
    return cep;
}

// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // CPF deve ter 11 dígitos e não pode ter todos os dígitos iguais
    }

    // Validação do primeiro dígito verificador
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
        return false; // Primeiro dígito verificador inválido
    }

    // Validação do segundo dígito verificador
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
        return false; // Segundo dígito verificador inválido
    }

    return true; // CPF válido
}

// Adicionando event listeners para formatar os campos
document.getElementById('cpf').addEventListener('input', function() {
    this.value = formatCPF(this.value);
});

document.getElementById('phone').addEventListener('input', function() {
    this.value = formatPhone(this.value);
});

document.getElementById('cep').addEventListener('input', function() {
    this.value = formatCEP(this.value);
});

// Event listener para validação do formulário
document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;

    // CPF Validation
    const cpf = document.getElementById('cpf').value;
    const cpfError = document.getElementById('cpfError');
    if (!validarCPF(cpf)) {
        cpfError.textContent = 'CPF inválido. Verifique o formato e os dígitos verificadores.';
        valid = false;
    } else {
        cpfError.textContent = '';
    }

    // Phone Validation
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(phone)) {
        phoneError.textContent = 'Telefone inválido. Formato correto: (00) 00000-0000';
        valid = false;
    } else {
        phoneError.textContent = '';
    }

    // Birth Date Validation
    const birth = document.getElementById('birth').value;
    const birthError = document.getElementById('birthError');
    if (!birth) {
        birthError.textContent = 'Data de nascimento é obrigatória.';
        valid = false;
    } else {
        const birthDate = new Date(birth);
        const currentDate = new Date();
        if (birthDate >= currentDate) {
            birthError.textContent = 'Data de nascimento não pode ser no futuro.';
            valid = false;
        } else {
            birthError.textContent = '';
        }
    }

    // CEP Validation
    const cep = document.getElementById('cep').value;
    const cepError = document.getElementById('cepError');
    if (!/^\d{5}-\d{3}$/.test(cep)) {
        cepError.textContent = 'CEP inválido. Formato correto: 00000-000';
        valid = false;
    } else {
        cepError.textContent = '';
    }

    // Exibir mensagem de sucesso se o formulário for válido
    if (valid) {
        alert('Informações salvas com sucesso!');
    }

    // Impedir o envio do formulário se houver campos inválidos
    if (!valid) {
        event.preventDefault();
    }
});

//Header
fetch('template/headerView.html')
.then(response => response.text())
.then(html => {
    // Insira o conteúdo do cabeçalho no elemento com id "header"
    document.getElementById('header').innerHTML = html;
})
.catch(error => console.error('Erro ao carregar o cabeçalho:', error));

//Footer
fetch('template/footerView.html')
.then(response => response.text())
.then(html => {
    document.querySelector('footer').innerHTML = html;
})
.catch(error => console.error('Erro ao carregar o rodapé:', error));