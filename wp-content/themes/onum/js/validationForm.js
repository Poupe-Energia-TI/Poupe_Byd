var ValidationForm = {

    errors: Array(),

    validate: function(form) {
        this.errors = Array();

        //Distinguir a origem do click
        let isResidencial = false;
        if (window.location.href.includes('residencia')) {
            isResidencial = true;
        }

        if (form == "simulation") {
            this.isValidName("frmSimulationFirstName");
            this.isValidFamilyName("frmSimulationLastName");
            this.isValidPhone("frmSimulationPhone");
            this.isValidEmail("frmSimulationEmail");
            this.isValidConsumption("frmSimulationMonthlyConsumption");
            this.isValidConsumptionOption("frmSimulationConsumptionAsMoney", "frmSimulationConsumptionAsKWH");
            this.isValidClass("frmSimulationClass");
            this.isValidSubClass("frmSimulationSubClass");
        } else if (form == "request_proposal") {
            this.isValidName("frmContractFirstName");
            this.isValidFamilyName("frmContractLastName");
            this.isValidPhone("frmContractPhone");
            this.isValidEmail("frmContractEmail");
            if (isResidencial) {
                this.isValidCPF("frmContractDocument");
            } else {
                this.isValidCNPJ("frmContractDocument");
                this.isValidSocialName("frmContractSocialName");
            }
            this.isValidConsumption("frmContractMonthlyConsumption");
            this.isValidConsumptionOption("frmContractConsumptionAsMoney", "frmContractConsumptionAsKWH");
            //this.isValidClass("frmContractClass");
            //this.isValidSubClass("frmContractClass");
            this.isValidPlan("frmContractPlan");
            this.isValidFile("frmContractFile");
        } else if (form == "quotation") {
            this.isValidName("frmQuotationFirstName");
            this.isValidFamilyName("frmQuotationLastName");
            this.isValidPhone("frmQuotationPhone");
            this.isValidEmail("frmQuotationEmail");
            if ($("#frmQuotation input[type='radio'][name='tipoPessoa'][value='fisica']").prop("checked") == true) {
                this.isValidCPF("frmQuotationCPF");
            }
            if ($("#frmQuotation input[type='radio'][name='tipoPessoa'][value='jurídica']").prop("checked") == true) {
                this.isValidCNPJ("frmQuotationCNPJ");
            }
            this.isValidConsumption("frmQuotationMonthlyConsumption");
            this.isValidConsumptionOption("frmQuotationConsumptionAsMoney", "frmQuotationConsumptionAsKWH");
            this.isValidLocalConstrucaoOption("frmQuotationLocalRoof", "frmQuotationLocalSoil");
            this.isValidInstallationNumber("frmQuotationInstallationNumber");
            this.isValidArea("frmQuotationArea");
            this.isValidFile("frmQuotationFile");
        } else if (form == "quotationTwo") {
            this.isValidName("frmQuotationTwoFirstName");
            this.isValidFamilyName("frmQuotationTwoLastName");
            this.isValidPhone("frmQuotationTwoPhone");
            this.isValidEmail("frmQuotationTwoEmail");
            if ($("#frmQuotationTwo input[type='radio'][name='tipoPessoa'][value='fisica']").prop("checked") == true) {
                this.isValidCPF("frmQuotationTwoCPF");
            }
            if ($("#frmQuotationTwo input[type='radio'][name='tipoPessoa'][value='jurídica']").prop("checked") == true) {
                this.isValidCNPJ("frmQuotationTwoCNPJ");
                this.isValidSocialName("frmQuotationTwoSocialName");
            }
            this.isValidConsumption("frmQuotationTwoMonthlyConsumption");
            this.isValidConsumptionOption("frmQuotationTwoConsumptionAsMoney", "frmQuotationTwoConsumptionAsKWH");
            this.isValidLocalConstrucaoOption("frmQuotationTwoLocalRoof", "frmQuotationTwoLocalSoil");
            this.isValidInstallationNumber("frmQuotationTwoInstallationNumber");
            this.isValidArea("frmQuotationTwoArea");
            this.isValidFile("frmQuotationTwoFile");
        }

        if (this.errors.length > 0) {
            let errorsToString = "";
            this.errors.forEach(function(element) {
                errorsToString += element + "\n";
            });
            return false;
        }
        return true;

    },

    isValidName: function(field) {
        if (!this.isValidSimpleInput(field))
            this.errors.push("O nome é obrigatório");
    },
    isValidFamilyName: function(field) {
        if (!this.isValidSimpleInput(field))
            this.errors.push("O sobrenome é obrigatório");
    },
    isValidCPF: function(field) {
        if (!this.isValidSimpleInput(field) || !this.isValidCPFDocument($("input#" + field).val()))
            this.errors.push("O CPF é obrigatório");
    },
    isValidCNPJ: function(field) {
        if (!this.isValidSimpleInput(field) || !this.isValidCNPJDocument($("input#" + field).val()))
            this.errors.push("O CNPJ é obrigatório");
    },
    isValidSocialName: function(field) {
        if (!this.isValidSimpleInput(field))
            this.errors.push("A razão social é obrigatória");
    },
    isValidConsumption: function(field) {
        if (!this.isValidSimpleInput(field))
            this.errors.push("A consumo mensal é obrigatório");
    },
    isValidPhone: function(field) {
        if (!this.isValidSimpleInput(field))
            this.errors.push("O telefone é obrigatório");
    },
    isValidArea: function(field) {
        if (!this.isValidSimpleInput(field))
            this.errors.push("O tamanho da área é obrigatório");
    },
    isValidInstallationNumber: function(field) {
        if (!this.isValidSimpleInput(field))
            this.errors.push("O número de instalação do projeto é obrigatório");
    },
    isValidClass: function(field) {
        if (!this.isValidSimpleSelect(field))
            this.errors.push("A classe é obrigatória");
    },
    isValidSubClass: function(field) {
        if (!this.isValidSimpleSelect(field))
            this.errors.push("A sub-classe é obrigatória");
    },
    isValidPlan: function(field) {
        if (!this.isValidSimpleSelect(field))
            this.errors.push("O plano é obrigatório");
    },
    isValidConsumptionOption: function(radioOne, radioTwo) {
        if ($(radioOne).prop("checked") == false && $(radioTwo).prop("checked") == false) {
            this.errors.push("O tipo de consumo é obrigatório");
        }
    },

    isValidLocalConstrucaoOption: function(radioOne, radioTwo) {
        if ($(radioOne).prop("checked") == false && $(radioTwo).prop("checked") == false) {
            this.errors.push("O Local de Construção da Usina é obrigatório");
        }
    },

    isValidBirthdate: function(field) {
        var birthdate = $("input#" + field).val();
        if (!this.isValidSimpleInput(field) || !this.isValidDate(moment(birthdate, "DD/MM/YYYY").toDate()))
            this.errors.push("Data de Nascimento é obrigatória e deve ser uma data válida");
    },

    isValidEmail: function(field) {
        if (!this.isValidSimpleInput(field) || !this.isValidEmailInput(field))
            this.errors.push("O email é obrigatório e deve ser válido");

    },

    isValidFile: function(field) {
        if (!this.hasFile(field))
            this.errors.push("O Arquivo de conta é obrigatório e deve ser válido");

    },

    isValidSimpleInput: function(idElement) {
        let field = $("input#" + idElement);
        if (field.val().length <= 0) {
            $("input#" + idElement).siblings(".message-error").removeClass("hide");
            field.addClass("invalid");
            return false;
        } else {
            $("input#" + idElement).siblings(".message-error").addClass("hide");
            field.removeClass("invalid");
            return true;
        }
    },

    isValidEmailInput: function(idElement) {
        let field = $("input#" + idElement);
        if (field.val().length <= 0 || !this.validateEmail(field.val())) {
            field.addClass("invalid");
            $("input#" + idElement).siblings(".message-error").removeClass("hide");
            return false;
        } else {
            $("input#" + idElement).siblings(".message-error").addClass("hide");
            field.removeClass("invalid");
            return true;
        }
    },

    isValidSimpleSelect: function(idElement) {
        //console.log(idElement);
        let field = $("select#" + idElement);
        //let field = $("#" + idElement);
        if (field.val() == null || field.val().length <= 0) {
            field.addClass("invalid");
            $("select#" + idElement).siblings(".message-error").removeClass("hide");
            return false;
        } else {
            field.removeClass("invalid");
            $("select#" + idElement).siblings(".message-error").addClass("hide");
            return true;
        }
    },

    hasFile: function(idElement) {
        let field = $("input#" + idElement + "[type='file']");
        if (field.val().length <= 0) {
            field.addClass("invalid");
            $("input#" + idElement).siblings(".message-error").removeClass("hide");

            return false;
        } else {
            field.removeClass("invalid");
            $("input#" + idElement).siblings(".message-error").addClass("hide");

            return true;
        }
    },
    validatePhone: function(phone) {
        var regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
        return (regex.test(phone)) ? true : false;
    },

    validadeDate: function(d) {
        return d instanceof Date && !isNaN(d);
    },

    validateEmail: function(email) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return email !== undefined && filter.test(email);
    },

    isNumeric: function(num) {
        return !isNaN(num)
    },

    isValidCNPJDocument: function(cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;

    },

    isValidCPFDocument: function(number) {
        number = number.replace(/[^\d]+/g, '');
        if (number == '') return false;
        var sum;
        var rest;
        sum = 0;
        if (number == "00000000000") return false;

        for (i = 1; i <= 9; i++) sum = sum + parseInt(number.substring(i - 1, i)) * (11 - i);
        rest = (sum * 10) % 11;

        if ((rest == 10) || (rest == 11)) rest = 0;
        if (rest != parseInt(number.substring(9, 10))) return false;

        sum = 0;
        for (i = 1; i <= 10; i++) sum = sum + parseInt(number.substring(i - 1, i)) * (12 - i);
        rest = (sum * 10) % 11;

        if ((rest == 10) || (rest == 11)) rest = 0;
        if (rest != parseInt(number.substring(10, 11))) return false;
        return true;
    }
}