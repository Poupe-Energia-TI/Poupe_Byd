$(document).ready(function() {




    var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        $('.tooltip-right').css('display', 'none');
    }
    if (window.location.href.includes('proposta')) {
        $("#result-low-consumption").addClass("hidden");
        $("#result").addClass("hidden");
        $("#frmSimulation #btnSend").removeAttr("disabled");
        $(".cemig-simulation").addClass("hidden");
        $(".cemig-background-cover").addClass("hidden");
        $("#result").removeClass("hidden");
        $("#img01").removeClass("hidden");
        $("#img02").removeClass("hidden");
        $("#frmContractPlan").append("<option value='12'>Sim12 - Promocional - Residencial</option>");
        $("#contract").removeClass("hidden");
        $("#frmContractConsumptionAsKWH").attr('readonly', false);
        $("#frmContractConsumptionAsMoney").attr('readonly', false);
        $("#frmContractMonthlyConsumption").attr('readonly', false);
        $("#frmContractClass").attr('readonly', false);
        $("#frmSimulationSubClass").attr('readonly', false);
        $('#frmSimulationSubClass').val("Residencial");
        $('#frmContractSocialName').val("Proposta");
        goToByScroll("frmContract");
    }

    $("#svg-ajudamos").hover(
        function() {
            $(".img-ajudamos-div").css("z-index", "200");
        }
    );

    $("#svg-ajudamos").mouseout(
        function() {
            $(".img-ajudamos-div").css("z-index", "-200");
        }
    );

    $("#frmQuotationConsumptionAsKWH").change(function() {
        if ($("#frmQuotationMonthlyConsumption").length > 0 && $("#frmQuotationConsumptionAsKWH").prop("checked") == true) {
            $('#frmQuotationMonthlyConsumption').mask("000000", {
                reverse: true
            });
        } else if ($("#frmQuotationMonthlyConsumption").length > 0 && $("#frmQuotationConsumptionAsMoney").prop("checked") == true) {
            $('#frmQuotationMonthlyConsumption').mask("000000,00", {
                reverse: true
            });
        }
    });

    $("#frmQuotationConsumptionAsMoney").change(function() {
        if ($("#frmQuotationMonthlyConsumption").length > 0 && $("#frmQuotationConsumptionAsKWH").prop("checked") == true) {
            $('#frmQuotationMonthlyConsumption').mask("000000", {
                reverse: true
            });
        } else if ($("#frmQuotationMonthlyConsumption").length > 0 && $("#frmQuotationConsumptionAsMoney").prop("checked") == true) {
            $('#frmQuotationMonthlyConsumption').mask("000000,00", {
                reverse: true
            });
        }
    });

    $("#frmSimulationConsumptionAsKWH").change(function() {
        if ($("#frmSimulationMonthlyConsumption").length > 0 && $("#frmSimulationConsumptionAsKWH").prop("checked") == true) {
            $('#frmSimulationMonthlyConsumption').mask("000000", {
                reverse: true
            });
            $('#frmContractMonthlyConsumption').mask("000000", {
                reverse: true
            });
        } else if ($("#frmSimulationMonthlyConsumption").length > 0 && $("#frmSimulationConsumptionAsMoney").prop("checked") == true) {
            $('#frmSimulationMonthlyConsumption').mask("000000,00", {
                reverse: true
            });
            $('#frmContractMonthlyConsumption').mask("000000,00", {
                reverse: true
            });
        }
    });

    $("#frmSimulationConsumptionAsMoney").change(function() {
        if ($("#frmSimulationMonthlyConsumption").length > 0 && $("#frmSimulationConsumptionAsKWH").prop("checked") == true) {
            $('#frmSimulationMonthlyConsumption').mask("000000", {
                reverse: true
            });
            $('#frmContractMonthlyConsumption').mask("000000", {
                reverse: true
            });
        } else if ($("#frmSimulationMonthlyConsumption").length > 0 && $("#frmSimulationConsumptionAsMoney").prop("checked") == true) {
            $('#frmSimulationMonthlyConsumption').mask("000000,00", {
                reverse: true
            });
            $('#frmContractMonthlyConsumption').mask("000000,00", {
                reverse: true
            });
        }
    });

    var behavior = function(val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    };
    var options = {
        onKeyPress: function(val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };

    if ($("#frmSimulationMonthlyConsumption").length > 0 && $("#frmSimulationConsumptionAsKWH").prop("checked") == true) {
        $('#frmSimulationMonthlyConsumption').mask("000000", {
            reverse: true
        });
    } else if ($("#frmSimulationMonthlyConsumption").length > 0 && $("#frmSimulationConsumptionAsMoney").prop("checked") == true) {
        $('#frmSimulationMonthlyConsumption').mask("000000,00", {
            reverse: true
        });
    }

    if ($("#frmQuotationMonthlyConsumption").length > 0) {
        $('#frmQuotationMonthlyConsumption').mask("000000000,00", {
            reverse: true
        });
    }

    if ($("#frmQuotationTwoMonthlyConsumption").length > 0) {
        $('#frmQuotationTwoMonthlyConsumption').mask("000000000,00", {
            reverse: true
        });
    }

    if ($("#frmQuotationInstallationNumber").length > 0) {
        $('#frmQuotationInstallationNumber').mask("##00", {
            reverse: true
        });
    }

    if ($("#frmQuotationTwoInstallationNumber").length > 0) {
        $('#frmQuotationTwoInstallationNumber').mask("##00", {
            reverse: true
        });
    }

    if ($("#frmQuotationArea").length > 0) {
        $('#frmQuotationArea').mask("0000000000,00", {
            reverse: true
        });
    }

    if ($("#frmQuotationTwoArea").length > 0) {
        $('#frmQuotationTwoArea').mask("0000000000,00", {
            reverse: true
        });
    }

    if ($('.phone_mask').length > 0) {
        $('.phone_mask').mask(behavior, options);
    }

    $('.cnpj_mask').mask('99.999.999/9999-99', {
        reverse: false
    });
    $('.cpf_mask').mask('999.999.999-99', {
        reverse: false
    });

    var documentIsValid = false;
    var documentIsValidTwo = false;
    var documentCPFIsValid = false;
    var documentCPFIsValidTwo = false;

    $('.cnpj_mask').cpfcnpj({
        validate: 'cnpj',
        event: 'blur',
        handler: '#frmContract .cnpj_mask',
        ifValid: function(input) {
            documentIsValid = true;
            input.removeClass("error");
        },
        ifInvalid: function(input) {
            documentIsValid = false;
            input.addClass("error");
        }
    });

    $('.cpf_mask').cpfcnpj({
        validate: 'cpf',
        event: 'blur',
        mask: true,
        handler: '#frmContract .cpf_mask',
        ifValid: function(input) {
            documentIsValid = true;
            input.removeClass("error");
        },
        ifInvalid: function(input) {
            documentIsValid = false;
            input.addClass("error");
        }
    });

    $('#frmQuotation .cnpj_mask').cpfcnpj({
        validate: 'cnpj',
        event: 'blur',
        handler: '#frmQuotation .cnpj_mask',
        ifValid: function(input) {
            documentIsValid = true;
            input.removeClass("error");
            $("#frmQuotation .cnpj_mask").siblings(".message-error").addClass("hide");
        },
        ifInvalid: function(input) {
            documentIsValid = false;
            input.addClass("error");
            $("#frmQuotation .cnpj_mask").siblings(".message-error").removeClass("hide");
        }
    });

    $('#frmContract .cnpj_mask').cpfcnpj({
        validate: 'cnpj',
        event: 'blur',
        handler: '#frmContract .cnpj_mask',
        ifValid: function(input) {
            documentIsValid = true;
            input.removeClass("error");
            $("#frmContract .cnpj_mask").siblings(".message-error").addClass("hide");
        },
        ifInvalid: function(input) {
            documentIsValid = false;
            input.addClass("error");
            $("#frmContract .cnpj_mask").siblings(".message-error").removeClass("hide");
        }
    });



    $('#frmContract .cpf_mask').cpfcnpj({
        validate: 'cpf',
        event: 'blur',
        mask: true,
        handler: '#frmContract .cpf_mask',
        ifValid: function(input) {
            documentIsValid = true;
            input.removeClass("error");
            $("#frmContract .cpf_mask").siblings(".message-error").addClass("hide");
        },
        ifInvalid: function(input) {
            documentIsValid = false;
            input.addClass("error");
            $("#frmContract .cpf_mask").siblings(".message-error").removeClass("hide");
        }
    });

    $('#frmQuotationTwo .cnpj_mask').cpfcnpj({
        validate: 'cnpj',
        event: 'blur',
        handler: '#frmQuotationTwo .cnpj_mask',
        ifValid: function(input) {
            documentIsValidTwo = true;
            input.removeClass("error");
            $("#frmQuotationTwo .cnpj_mask").siblings(".message-error").addClass("hide");
        },
        ifInvalid: function(input) {
            documentIsValidTwo = false;
            input.addClass("error");
            $("#frmQuotationTwo .cnpj_mask").siblings(".message-error").removeClass("hide");
        }
    });

    $('#frmQuotationCPF').cpfcnpj({
        validate: 'cpf',
        mask: true,
        event: 'blur',
        handler: '#frmQuotation #frmQuotationCPF',
        ifValid: function(input) {
            documentCPFIsValid = true;
            input.removeClass("error");
            $("#frmQuotationCPF").siblings(".message-error").addClass("hide");
        },
        ifInvalid: function(input) {
            documentCPFIsValid = false;
            input.addClass("error");
            $("#frmQuotationCPF").siblings(".message-error").removeClass("hide");
        }
    });

    $('#frmQuotationTwoCPF').cpfcnpj({
        validate: 'cpf',
        mask: true,
        event: 'blur',
        handler: '#frmQuotationTwo #frmQuotationTwoCPF',
        ifValid: function(input) {
            documentCPFIsValidTwo = true;
            input.removeClass("error");
            $("#frmQuotationTwoCPF").siblings(".message-error").addClass("hide");
        },
        ifInvalid: function(input) {
            documentCPFIsValidTwo = false;
            input.addClass("error");
            $("#frmQuotationTwoCPF").siblings(".message-error").removeClass("hide");
        }
    });


    //Início - Envios dos formulários
    $("#frmSimulation #btnSend").on("click", function(event) {

        event.preventDefault();

        //Distinguir a origem do click
        let isResidencial = false;
        if (window.location.href.includes('residencia')) {
            isResidencial = true;
        }

        if ($("#frmSimulationPhone").val().length >= 14) {
            $("#frmSimulationPhone").removeClass("error");
            $("#frmSimulationPhone").siblings(".message-error").addClass("hide");
        } else {
            $("#frmSimulationPhone").addClass("error");
            $("#frmSimulationPhone").siblings(".message-error").removeClass("hide");
            return false;
        }



        let formSimulation = $("#frmSimulation");
        $(this).attr("disabled", "disabled");
        $("#loadingSimulating").removeClass("hide");
        let dataSerialized = formSimulation.serialize();
        //console.log(dataSerialized);
        storeInSessinStorage();


        if (validateFieldsSimulationForm() == false) {
            $("#loadingSimulating").addClass("hide");
            $(this).removeAttr("disabled");

            return false;
        }

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            dataType: "json",
            cache: false,
            data: {
                'action': 'simulation_of_plans',
                'data': dataSerialized
            }
        }).done(function(response) {

            //console.log(response);

            $("#result-low-consumption").addClass("hidden");
            $("#result").addClass("hidden");
            $("#frmSimulation #btnSend").removeAttr("disabled");

            let limit = 500;
            if (isResidencial) {
                limit = 300;
            }

            if (response.error != undefined || ($("#frmSimulationConsumptionAsKWH").prop("checked") == true && parseFloat($("#frmSimulationMonthlyConsumption").val()) < limit)) {
                formSimulation.trigger("reset");
                $("#loadingSimulating").addClass("hide");
                $("#result-low-consumption").removeClass("hidden");
                goToByScroll("result-low-consumption");
            } else {
                formSimulation.trigger("reset");

                let startingTrack = response.faixaInicial;
                let finalTrack = response.faixaFinal;

                $(".faixaInicial").html(startingTrack);
                $(".faixaFinal").html(finalTrack);
                buildPlanContent(response.Planos, response.cptlead, isResidencial);

                $(".cemig-simulation").addClass("hidden");
                $(".cemig-background-cover").addClass("resultBG");
                $("#result").removeClass("hidden");
                $("#img01").removeClass("hidden");
                $("#img02").removeClass("hidden");
            }
        });
    });

    $("#frmContract #btnContractSend").on("click", function(event) {
        event.preventDefault();

        if ($("#frmContractPhone").val().length >= 14) {
            $("#frmContractPhone").removeClass("error");
            $("#frmContractPhone").siblings(".message-error").addClass("hide");
        } else {
            $("#frmContractPhone").addClass("error");
            $("#frmContractPhone").siblings(".message-error").removeClass("hide");
            return false;
        }


        var fd = new FormData($("form[name='frmContract']")[0]);

        $.each($("input#frmContractFile[type='file']")[0].files, function(i, file) {
            fd.append('file-' + i, file);
        });

        if ($(".couponInvalid").length > 0) {
            return false;
        }

        fd.action = "request_proposal";
        $(this).attr("disabled", "disabled");



        $("#loadingContract").removeClass("hide");


        let limit = 500;
        if (window.location.href.includes('proposta')) {
            limit = 300;
        }
        if (window.location.href.includes('proposta')) {

            if (($("#frmContractConsumptionAsKWH").prop("checked") == true && parseFloat($("#frmContractMonthlyConsumption").val()) < limit)) {
                $("#loadingSimulating").addClass("hide");
                $(".cemig-simulation").addClass("hide");
                $("#result").addClass("hide");
                $("#result-low-consumption").removeClass("hidden");
                $(".cemig-background-cover").removeClass("hidden");
                goToByScroll("result-low-consumption");
            }
        }

        if (validateFieldsContractForm() == false) {
            $("#loadingContract").addClass("hide");
            $(this).removeAttr("disabled");
            return false;
        }

        //Mostrar os dados que serão enviados:
        for (var pair of fd.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }


        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            let objResponse = JSON.parse(response);

            if (objResponse.type == undefined) {
                $("#frmSimulation").trigger("reset");
                $("#frmContract").trigger("reset")
                $("#loadingContract").addClass("hide");
                $("#loadingSimulating").addClass("hide");
                $("#contract").addClass("hide");
                $(".cemig-simulation").removeClass("hidden");
                $("#frmSimulation").removeClass("hidden");
                $("#result-low-consumption").removeClass("hidden");
                goToByScroll("frmSimulation");
                $("#result").addClass("hidden");

            } else {
                if (objResponse.type == "sucesso") {
                    $("#frmContract").trigger("reset");
                    $("#result").addClass("hidden");
                    window.location.href = ajax_object.site_url + "/proposta-sucesso";
                }
            }
        });
    });

    function isValidCPFDocument(number) {
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

    function isValidCNPJDocument(cnpj) {
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

    }


    function formataCPF(cpf) {
        //retira os caracteres indesejados...
        cpf = cpf.replace(/[^\d]/g, "");

        //realizar a formatação...
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    function formataCNPJ(cnpj) {
        //retira os caracteres indesejados...
        cnpj = cnpj.replace(/[^\d]/g, "");

        //realizar a formatação...
        //return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4.$5");

        //realizar a formatação...
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

    $("#cdlbh_cpf_v2").mask("0000.000.000-00", {
        reverse: true
    });
    $('#cdlbh_cpf_v2').on('input', function() {

        if ($('#cdlbh_cpf_v2').val().length >= 15) {
            $("#cdlbh_cpf_v2").mask("00.000.000/0000-00", {
                reverse: true
            });
        } else {
            $("#cdlbh_cpf_v2").mask("0000.000.000-00", {
                reverse: true
            });
        }
    });




    $('#chk_cdlbh_cpf').prop('checked', true);
    $("#cdlbh_cpf").attr("placeholder", "CPF");
    $("#razaoSocial-nj").attr("type", "hidden");
    $('#chk_cdlbh_cpf').change(function() {
        if ($('#chk_cdlbh_cpf').is(":checked") == true) {
            $("#cdlbh_cpf").mask("000.000.000-00", {
                reverse: true
            });
            $("#cdlbh_cpf").attr("placeholder", "CPF");
            $('#chk_cdlbh_cnpj').prop('checked', false);
            $("#razaoSocial-nj").attr("type", "hidden");
        } else {
            $('#chk_cdlbh_cnpj').prop('checked', true);
        }
    });
    $('#chk_cdlbh_cnpj').change(function() {
        if ($('#chk_cdlbh_cnpj').is(":checked") == true) {
            $("#cdlbh_cpf").mask("00.000.000/0000-00", {
                reverse: true
            });
            $("#cdlbh_cpf").attr("placeholder", "CNPJ");
            $('#chk_cdlbh_cpf').prop('checked', false);
            $("#razaoSocial-nj").attr("type", "text");
        } else {
            $('#chk_cdlbh_cpf').prop('checked', true);
        }
    });

    //Mascara de controle do cnpj, cpf, tel
    $('#cdlbh_cnpj').mask("00.000.000/0000-00", {
        reverse: true
    });
    $('#cdlbh_cpf').mask("000.000.000-00", {
        reverse: true
    });
    $('#cdlbh_tel').mask('(00) 0000-00009');
    $('#cdlbh_tel').blur(function(event) {
        if ($(this).val().length == 15) { // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
            $('#cdlbh_tel').mask('(00) 00000-0009');
        } else {
            $('#cdlbh_tel').mask('(00) 0000-00009');
        }
    });


    //Listener para prevenir o Drag and Drop do campo. Telefone/Celular
    $('#cdlbh_tel').on('drop', function(event) {
        event.preventDefault();
    });

    //Ativar por padrão a opção consumo mensal em R$ 
    $('#cdlbh_rs').prop('checked', true);
    $('#cdlbh_consumo').attr("placeholder", "Valor Mensal *");
    $('#cdlbh_consumo').mask("000000,00", {
        reverse: true
    });
    //$('#label_rooftop').html("Valor Mensal");

    $('#cdlbh_rs').change(function() {
        if ($('#cdlbh_rs').is(":checked") == true) {
            $('#cdlbh_kwh').prop('checked', false);
            $('#cdlbh_consumo').attr("placeholder", "Valor Mensal *");
            $('#cdlbh_consumo').mask("000000,00", {
                reverse: true
            });
            //$('#label_rooftop').html("Valor Mensal");
        } else {
            $('#cdlbh_kwh').prop('checked', true);
            $('#cdlbh_consumo').attr("placeholder", "Consumo Mensal *");
            $('#cdlbh_consumo').mask("000000", {
                reverse: true
            });
            //$('#label_rooftop').html("Consumo Mensal");
        }
    });

    $('#cdlbh_kwh').change(function() {
        if ($('#cdlbh_kwh').is(":checked") == true) {
            $('#cdlbh_rs').prop('checked', false);
            $('#cdlbh_consumo').attr("placeholder", "Consumo Mensal *");
            $('#cdlbh_consumo').mask("000000", {
                reverse: true
            });
            //$('#label_rooftop').html("Consumo Mensal");
        } else {
            $('#cdlbh_rs').prop('checked', true);
            $('#cdlbh_consumo').attr("placeholder", "Valor Mensal *");
            $('#cdlbh_consumo').mask("000000,00", {
                reverse: true
            });
            //$('#label_rooftop').html("Consumo Mensal");
        }
    });

    //Função de ajuste de design quando digitar
    $("input[type!='hidden']").change(function() {
        var element = $(this);
        if (element.attr("id").includes("-nj")) {
            if (element.attr("type") != "range") {
                element.css("border", "1px solid #ccc");
            }
        } else if (element.attr("id").includes("_tel")) {
            element.css("border", "1px solid #ccc");
        } else if (element.attr("id").includes("Coupon")) {
            element.css("border", "1px solid #ccc");
        } else if (element.attr("id").includes("cpf_v2")) {
            element.css("border", "1px solid #ccc");
        } else if (element.val() != "") {
            element.css("border", "0px solid #D0312D");
        }
    });
    $("input[name=cupom]").change(function() {
        var element = $(this);
        if (element.val() != "") {
            $("#promo_mensagem").css("display", "none");
        }
    });
    $("input[name=cnpj]").change(function() {
        var element = $(this);
        if (element.val() != "") {
            $("span[name='cnpj_mensagem']").css("display", "none");
        }
    });
    $("input[name=cpf]").change(function() {
        var element = $(this);
        if (element.val() != "") {
            $("span[name='cpf_mensagem']").css("display", "none");
        }
    });
    $("input[name=email]").change(function() {
        var element = $(this);
        if (element.val() != "") {
            $("span[name='email_mensagem']").css("display", "none");
        }
    });



    //Ir para a etapa final
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    $("#btn-goto-proposta").on("click", function(event) {
        var url = window.location.href;
        url += "&promo=" + $("#frmContractCoupon").val();
        window.location.href = ajax_object.site_url + "/cemig-sim-solicitacao?" + url.split("?")[1];
    });
    $("#btn-goto-proposta2").on("click", async function(event) {
        console.log('#btn-goto-proposta2Click');
        // código para a Página de Verificação de Cupom - GA4 - Analitycs
        gtag('event', 'verificar_cupom', {
            'empresa': 'cemig-sim',
            'categoria': 'energia'
        });
        await $("#frmContractCoupon").blur();
        delay(1000).then(() => {
            var url = window.location.href;
            url = url.split("&promo=")[0];
            url += "&promo=" + $("#frmContractCoupon").val();
            if ($(".couponInvalid").length > 0) {
                return false;
            }


            // [!Importante] - Projeto Livelo, foi comentado o primeiro 'for' abaixo, verificar se será necessário alguma validação na tela de "CUPOM", diante disso a verificação abaixo estará em Standy-by.

            //Inclusao da Parceira Livelo aqui [GET] da URL, ao encontrar o atributo 'referralContactId' na URL, o campo input hidden é preenchido e posteriormente enviado ao salesForce.
            // for (let i = 0; i < url.split("?")[1].split("&").length; i++) {
            //     if (url.split("?")[1].split("&")[i].indexOf('referralContactId') !== -1) {
            //         console.log('Encontrou a string desejada:', url.split("?")[1].split("&")[i]);
            //         var referralContactId = url.split("?")[1].split("&")[i].split("=")[1];

            //         // Caso a string esteja na URL, concatene com o restante da URL.
            //         url += "&referralContactId="+referralContactId;


            //     } else {
            //         console.log('NÃO Encontrou a string desejada:', url.split("?")[1].split("&")[i]);
            //     }
            // }





            if ($("#frmContractCoupon").val() != "") {
                var segments = url.split("?")[1].split("&");
                var nome = segments[0].split("=")[1];

                //var valor = parseInt(segments[1].split("=")[1]) * 12;
                //solução do bug do arredondamento abaixo:
                var valor = Math.floor(parseFloat(segments[1].split("=")[1]) * 12);

                var cptLead = segments[2].split("=")[1];
                var fd = new FormData();
                fd.append("action", "simulation_of_plans");
                fd.append("is_debug", "true");
                var tel = segments[3].split("=")[1];
                var email = segments[4].split("=")[1];
                var consumo = segments[5].split("=")[1];
                var promo = $("#frmContractCoupon").val();
                if (isNaN(valor)) {
                    fd.append("data", "tel=" + tel + "&nome=" + nome + "&email=" + email + "&opcaoConsumo=false&consumo=" + consumo + "&classe=Monof%C3%A1sico&action=consulta_planos&cptlead=&tipoPessoa=F%C3%ADsica&cupom=" + $("#frmContractCoupon").val())
                } else {
                    fd.append("data", "tel=" + tel + "&nome=" + nome + "&email=" + email + "&opcaoConsumo=true&consumo=" + consumo + "&classe=Monof%C3%A1sico&action=consulta_planos&cptlead=&tipoPessoa=F%C3%ADsica&cupom=" + $("#frmContractCoupon").val())
                }
                $.ajax({
                    url: ajax_object.ajax_url,
                    type: "POST",
                    data: fd,
                    processData: false,
                    contentType: false
                }).done(function(response) {
                    let objResponse = JSON.parse(response);
                    console.log(objResponse);

                    //valor = parseInt(objResponse["Planos"][0]["descontoMensal"]) * 12;
                    //solução do bug do arredondamento abaixo:
                    valor = Math.floor(parseFloat(objResponse["Planos"][0]["descontoMensal"]) * 12);



                    $("#id-val-eco-nj").html(valor);
                    //window.location.href = ajax_object.site_url + "/cemig-sim-solicitacao-v2?" + url.split("?")[1];
                });
            }
            window.location.href = ajax_object.site_url + "/form-solicitacao-energia?" + url.split("?")[1];
        });
    });


    //Funcao de chamada da API nova jornada
    $("#btn-nj").on("click", function(event) {
        event.preventDefault();

        //Desativar o botão
        $("#btn-nj").css("pointer-events", "none");
        $("#loader-nj").css("visibility", "visible");

        var fd = new FormData();
        fd.append("action", "simulation_of_plans");
        fd.append("is_debug", "true");

        var erro = false;


        // Verificação se o campo de nome contém caracteres especiais
        if (/[^a-zA-Z0-9\sç~ãéáíóúôâÂÉéÍ]/.test($('#nome-nj').val())) {
            // Se contiver caracteres especiais, adicione o estilo de borda vermelha, por exemplo
            $("#nome-nj").css("border", "2px solid #D0312D");
            $("#error-nome-message-nj").css("display", "block"); // Exibir mensagem de erro
            erro = true;
            $("#btn-nj").css("pointer-events", "auto");
            $("#loader-nj").css("visibility", "hidden");

            // Retorne false para interromper a execução
            return false;
        } else {
            $("#error-nome-message-nj").css("display", "none"); // Esconder mensagem de erro
        }

        // Validação do nome
        if ($("#nome-nj").val().length < 3) {
            $("#nome-nj").css("border", "2px solid #D0312D");
            $("#error-nome-message-nj").css("display", "block"); // Exibir mensagem de erro
            erro = true;
            $("#btn-nj").css("pointer-events", "auto");
            $("#loader-nj").css("visibility", "hidden");
            return false;
        } else {
            $("#error-nome-message-nj").css("display", "none"); // Esconder mensagem de erro
        }

        // Validação do Telefone
        if ($("#cdlbh_tel").val().length < 13) {
            $("#cdlbh_tel").css("border", "2px solid #D0312D");
            $("#error-tel-message-nj").css("display", "block"); // Exibir mensagem de erro
            erro = true;
            $("#btn-nj").css("pointer-events", "auto");
            $("#loader-nj").css("visibility", "hidden");
            return false;
        } else {
            $("#error-tel-message-nj").css("display", "none"); // Esconder mensagem de erro
        }









        let emaill = $("#email-nj").val();
        if (emaill.includes('@') && emaill.includes('.')) {
            $("#error-email-message-nj").css("display", "none"); // Esconder mensagem de erro
            erro = false;
        } else {
            $("#email-nj").css("border", "2px solid #D0312D");
            $("#error-email-message-nj").css("display", "block"); // Exibir mensagem de erro
            //$("#btn_cdlbh_nj_v2").prop("disabled",false);
            $("#btn-nj").css("pointer-events", "auto");
            $("#loader-nj").css("visibility", "hidden");
            console.log('verifyEmailInput');
            erro = true;
            return false;
        }










        // $("#form-nj :input").not(":button,:hidden").each(function(){
        // 	var element = $(this);
        // 	if (element.val() == "") {
        // 		element.css("border", "2px solid #D0312D");
        // 		erro = true;
        //         $("#btn-nj").css("pointer-events", "auto");
        //         $("#loader-nj").css("visibility", "hidden");
        //         console.log('ALLL');
        // 		return false;
        // 	}
        // });







        if (erro == true) {
            return false;
        }

        if ($(".couponInvalid").length > 0) {
            return false;
        }

        // Ajuste Valor de 250 para 150
        if (parseInt($("#range-nj").val()) < 150) {
            this.blur();
            $("#btn-nj").css("pointer-events", "auto");
            $("#loader-nj").css("visibility", "hidden");
            $("#ex1").modal({
                showClose: true
            });
            return false;
        }

        fd.append("data", "tel=" + $("#cdlbh_tel").val() + "&nome=" + $("#nome-nj").val() + "&email=" + $("#email-nj").val() + "&opcaoConsumo=true&consumo=" + $("#range-nj").val() + "&classe=Monof%C3%A1sico&action=consulta_planos&cptlead=&tipoPessoa=F%C3%ADsica")

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            $("#btn-nj").css("pointer-events", "auto");
            $("#loader-nj").css("visibility", "hidden");

            let objResponse = JSON.parse(response);
            console.log(objResponse);
            if (objResponse.type == "sucesso" || objResponse.cptlead != undefined) {
                var consumo = $("#range-nj").val();
                if (consumo > 4000) {
                    consumo = 10000;
                }

                console.log(objResponse["Planos"]);
                console.log(objResponse["Planos"][0]);
                console.log(objResponse["Planos"][1]);

                window.location.href = ajax_object.site_url + "/verificar-cupom-energia?nome=" + $("#nome-nj").val() + "&valor=" + objResponse["Planos"][0]["descontoMensal"] + "&cptlead=" + objResponse["cptlead"] + "&tel=" + $("#cdlbh_tel").val() + "&email=" + $("#email-nj").val() + "&consumo=" + consumo + "&plano=" + objResponse["Planos"][0]["prazo"];
            }
            return true;
        });
    });


    $(document).ready(function() {
        var url = decodeURI(window.location.href);

        // Tela de inserir o cupom.
        if (url.includes("https://cemigsim.com.br/verificar-cupom-energia")) {
            var segments = url.split("?")[1].split("&");
            var nome = segments[0].split("=")[1];






            // Projeto CRM START
            let i = 0;
            while (i < segments.length && segments[i].indexOf('valor') === -1) {
                i++;
            }

            // Se 'valor' foi encontrado, faça algo com base nisso
            if (i < segments.length) {
                console.log('Valor-S');
            } else {
                console.log('Valor-N');
                // Fazer chamada na nova função
                return receiveKwhCrm(segments);
            }
            // Projeto CRM END





            // var valor = parseInt(segments[1].split("=")[1]) * 12;
            //solução do bug do arredondamento abaixo:
            var valor = Math.floor(parseFloat(segments[1].split("=")[1]) * 12);
            var cptLead = segments[2].split("=")[1];
            // console.log('AAAAA');
            if (isNaN(valor)) {
                // console.log('BBBB');
                var fd = new FormData();
                fd.append("action", "simulation_of_plans");
                fd.append("is_debug", "true");
                var tel = segments[3].split("=")[1];
                var email = segments[4].split("=")[1];
                var consumo = segments[5].split("=")[1];
                var promo = segments[7].split("=")[1];
                $("#frmContractCoupon").val(promo);


                //Inclusao da Parceira Livelo aqui [GET] da URL, ao encontrar o atributo 'referralContactId' na URL, o campo input hidden é preenchido e posteriormente enviado ao salesForce.
                for (let i = 0; i < segments.length; i++) {
                    if (segments[i].indexOf('referralContactId') !== -1) {
                        console.log('Encontrou a string desejada:', segments[i]);
                        var referralContactId = segments[i].split("=")[1];

                        fd.append("data", "tel=" + tel + "&nome=" + nome + "&email=" + email + "&opcaoConsumo=false&consumo=" + consumo + "&classe=Monof%C3%A1sico&action=consulta_planos&cptlead=&tipoPessoa=F%C3%ADsica&referralContactId=" + referralContactId);
                    } else {
                        fd.append("data", "tel=" + tel + "&nome=" + nome + "&email=" + email + "&opcaoConsumo=false&consumo=" + consumo + "&classe=Monof%C3%A1sico&action=consulta_planos&cptlead=&tipoPessoa=F%C3%ADsica");
                    }
                }


                //fd.append("data","tel="+ tel +"&nome="+ nome +"&email="+ email +"&opcaoConsumo=false&consumo="+ consumo +"&classe=Monof%C3%A1sico&action=consulta_planos&cptlead=&tipoPessoa=F%C3%ADsica");
                $.ajax({
                    url: ajax_object.ajax_url,
                    type: "POST",
                    data: fd,
                    processData: false,
                    contentType: false
                }).done(function(response) {
                    let objResponse = JSON.parse(response);
                    console.log("V: " + objResponse["Planos"][0]["descontoMensal"]);
                    // valor = parseInt(objResponse["Planos"][0]["descontoMensal"]) * 12;
                    //solução do bug do arredondamento abaixo:
                    valor = Math.floor(parseFloat(objResponse["Planos"][0]["descontoMensal"]) * 12);
                    $("#id-val-eco-nj").html(valor);


                });
            } else {
                // console.log('CCCC');
                $("#id-val-eco-nj").html(valor);



            }
            $("#nome-cliente").html(nome);
            $("#nome2-cliente").html(nome);
        }

        // Ultima tela, formulario.
        else if (url.includes("https://cemigsim.com.br/form-solicitacao-energia")) {
            var segments = url.split("?")[1].split("&");
            var nome = segments[0].split("=")[1];
            var valor = parseInt(segments[1].split("=")[1]) * 12;
            var cptLead = segments[2].split("=")[1];
            var tel = segments[3].split("=")[1];
            var email = segments[4].split("=")[1];
            var consumo = segments[5].split("=")[1];
            var plano = segments[6].split("=")[1];
            var promo = segments[7].split("=")[1];
            $("#nome-nj").val(nome);
            $("#email-nj").val(email);
            $("#cdlbh_tel").val(tel);
            $("#frmContractCoupon").val(promo);
            $("#cptlead-nj").val(cptLead);
            $("#consumo-nj").val(consumo);
            $("#plano-nj").val(plano);



            //Inclusao da Parceira Livelo aqui [GET] da URL, ao encontrar o atributo 'referralContactId' na URL, o campo input hidden é preenchido e posteriormente enviado ao salesForce.
            for (let i = 0; i < segments.length; i++) {
                if (segments[i].indexOf('referralContactId') !== -1) {
                    console.log('Encontrou a string desejada:', segments[i]);
                    $("#referralContactId").val(segments[i].split("=")[1]);
                    break; // Interrompe o loop quando a string é encontrada
                }
            }


        } else if (url.includes("https://cemigsim.com.br/cemig-sim-solicitacao")) {
            var segments = url.split("?")[1].split("&");
            var nome = segments[0].split("=")[1];
            var valor = parseInt(segments[1].split("=")[1]) * 12;
            var cptLead = segments[2].split("=")[1];
            var tel = segments[3].split("=")[1];
            var email = segments[4].split("=")[1];
            var consumo = segments[5].split("=")[1];
            var plano = segments[6].split("=")[1];
            var promo = segments[7].split("=")[1];
            $("#nome-nj").val(nome);
            $("#email-nj").val(email);
            $("#cdlbh_tel").val(tel);
            $("#frmContractCoupon").val(promo);
            $("#cptlead-nj").val(cptLead);
            $("#consumo-nj").val(consumo);
            $("#plano-nj").val(plano);
        }



        function receiveKwhCrm(segments) {
            // console.log('Função KWH');

            // var cptLead = segments[1].split("=")[1];
            // console.log('Esse é o valor do segments 1, espera-se que seja o CPTLEAD: '+ cptLead);

            var fd2 = new FormData();
            fd2.append("action", "simulation_of_plans");
            fd2.append("is_debug", "true");
            var tel = segments[3].split("=")[1];
            var email = segments[4].split("=")[1];
            var consumoMedioKwh = segments[5].split("=")[1];

            // var valorTarifaCheiaString = '096157';
            // var valorTarifaCheia = parseFloat(valorTarifaCheiaString) / 100000;

            // console.log('valorTarifaCheia depois da cobversao'+ valorTarifaCheia );
            // console.log('ConsumoMedioKhw: '+consumoMedioKwh);
            // console.log('ParseFloat valorTarifsCheia: '+valorTarifaCheia);
            // var valorEconomiaCalculado = Math.floor(consumoMedioKwh * valorTarifaCheia);
            // console.log('ValorEconomiaCalculado: '+valorEconomiaCalculado);
            // console.log("Valor Economia Calculado (consumoMedioKwh / valorTarifaCheia): "+ valorEconomiaCalculado);


            fd2.append("data", "tel=" + tel + "&nome=" + nome + "&email=" + email + "&opcaoConsumo=false&consumo=" + consumoMedioKwh + "&classe=Monof%C3%A1sico&action=consulta_planos&cptlead=&tipoPessoa=F%C3%ADsica")

            $.ajax({
                url: ajax_object.ajax_url,
                type: "POST",
                data: fd2,
                processData: false,
                contentType: false
            }).done(function(response) {
                let objResponse = JSON.parse(response);
                console.log("V: " + objResponse["Planos"][0]["descontoMensal"]);

                console.log("V1: " + JSON.stringify(objResponse["Planos"][0]["descontoMensal"]));
                // console.log("V2: "+objResponse["Planos"][0]);



                // valor = parseInt(objResponse["Planos"][0]["descontoMensal"]) * 12;
                //solução do bug do arredondamento abaixo:
                //valor = Math.floor(parseFloat(objResponse["Planos"][0]["descontoMensal"]) * 12);

                valor = Math.floor(parseFloat(objResponse["Planos"][0]["descontoMensal"]) * 12);
                $("#id-val-eco-nj").html(valor);


            });

        }



    });





















    //Funcao de chamada para api CDLBH Empresa
    $("#btn_cdlbh_nj_v2").on("click", async function(event) {
        event.preventDefault();

        //Desativar o botão
        $("#btn_cdlbh_nj_v2").prop("disabled", true);
        $("#loader-nj").css("visibility", "visible");

        await $("#frmContractCoupon").blur();
        await delay(1000).then(() => {
            if ($(".couponInvalid").length > 0) {
                $("#btn_cdlbh_nj_v2").prop("disabled", false);
                $("#loader-nj").css("visibility", "hidden");
                return false;
            }
        });



        // Ler os dados do formulario
        var fd = new FormData($("form[name='frm_quotation_empresa']")[0]);
        fd.append("action", "request_proposal");
        fd.append("is_debug", "false");



        if ($("#cdlbh_cpf_v2").val().length >= 15) {
            fd.set("cpf", "");
            fd.set("cnpj", formataCNPJ($("#cdlbh_cpf_v2").val()));
            fd.set("tipoPessoa", "Jurídica")
        } else {
            fd.set("cpf", formataCPF($("#cdlbh_cpf_v2").val()));
            fd.set("cnpj", "");
            fd.set("tipoPessoa", "Física")
        }

        // Verificar que os campos estão preenchidos
        let erro = false;





























        // Inicio - mudanças - validação campo email '@' e '.';



        function verifyEmailInput() {

            let emaill = $("#email-nj").val();
            if (emaill.includes('@') && emaill.includes('.')) {
                erro = false;
            } else {
                $("#email-nj").css("border", "2px solid #D0312D");
                $("#error-email-message-nj").css("display", "block"); // Exibir mensagem de erro
                $("#btn_cdlbh_nj_v2").prop("disabled", false);
                $("#loader-nj").css("visibility", "hidden");
                console.log('verifyEmailInput');
                erro = true;
                return false;
            }

        }


        //$("input[type!='hidden']").each(function(){
        $("form[name='frm_quotation_empresa'] :input").not(":button,:hidden").each(function() {
            var element = $(this);

            if (element.attr("id") == 'email-nj') {
                return verifyEmailInput();
            }

            if (element.val() == "" && element.attr("id") != "frmContractCoupon") {
                if (element.attr("id") == 'email-nj') {
                    return verifyEmailInput();
                } else {
                    element.css("border", "2px solid #D0312D");
                    $("#btn_cdlbh_nj_v2").prop("disabled", false);
                    $("#loader-nj").css("visibility", "hidden");
                    erro = true;
                    return false;
                }

            }
        });

        if (erro == true) {
            return false;
        }



        // Fim - mudanças - validação campo email '@' e '.';








        // Verificação se o campo de nome contém caracteres especiais
        if (/[^a-zA-Z0-9\sç~ãéáíóúôâÂÉéÍ]/.test($('#nome-nj').val())) {
            // Se contiver caracteres especiais, adicione o estilo de borda vermelha, por exemplo
            $("#nome-nj").css("border", "2px solid #D0312D");
            $("#btn_cdlbh_nj_v2").prop("disabled", false);
            $("#loader-nj").css("visibility", "hidden");

            // Retorne false para interromper a execução
            return false;
        }





        if ($("#lgpd_cb").prop('checked') == false) {
            $("#div_lgpd_cb").css("border", "2px solid #D0312D");
            $("#btn_cdlbh_nj_v2").prop("disabled", false);
            $("#loader-nj").css("visibility", "hidden");
            return false;
        }

        if ($(".couponInvalid").length > 0) {
            return false;
        }

        if ($("#cdlbh_tel").val().length < 13) {
            $("#cdlbh_tel").css("border", "2px solid #D0312D");
            erro = true;
            $("#btn-nj").css("pointer-events", "auto");
            $("#btn_cdlbh_nj_v2").prop("disabled", false);
            $("#loader-nj").css("visibility", "hidden");
            return false;
        }

        //Verificar o formato dos numero cnpj
        if ($("#cdlbh_cpf_v2").val().length < 15) {
            const testCPFFormat = isValidCPFDocument($('#cdlbh_cpf_v2').val());
            if (testCPFFormat == false) {
                $('#cdlbh_cpf_v2').css("border", "2px solid #D0312D");
                $("#btn_cdlbh_nj_v2").prop("disabled", false);
                $("#loader-nj").css("visibility", "hidden");
                $("span[name='cnpj_mensagem']").css("display", "block");
                return false;
            }
        } else {
            const testCNPJFormat = isValidCNPJDocument($('#cdlbh_cpf_v2').val());
            if (testCNPJFormat == false) {
                $('#cdlbh_cpf_v2').css("border", "2px solid #D0312D");
                $("#btn_cdlbh_nj_v2").prop("disabled", false);
                $("#loader-nj").css("visibility", "hidden");
                $("span[name='cnpj_mensagem']").css("display", "block");
                return false;
            }
        }


        //Mostrar os dados que serão enviados:
        for (var pair of fd.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            // Código para o Formulário de Solicitação - Analitycs - GA4
            gtag('event', 'formulario_solicitacao', {
                'empresa': 'cemig-sim',
                'categoria': 'energia'
            });
            console.log(JSON.parse(response));
            $("#btn_cdlbh_nj").prop("disabled", false);
            let objResponse = JSON.parse(response);
            if (objResponse.validacaoReceitaFederal != false && objResponse.type == "sucesso") {
                var urlReceita = objResponse.linkAutenticacaoLead;
                window.location.href = urlReceita;
            } else if (objResponse.validacaoReceitaFederal == false) {
                $("#ex2").modal({
                    showClose: true
                });
                $("#loader-nj").css("visibility", "hidden");
                $("#btn_cdlbh_nj_v2").prop("disabled", false);




                Swal.fire({
                    imageUrl: "https://cemigsim.com.br/wp-content/themes/onum/images/Ops-Receita.png?_t=1661971301",
                    imageWidth: 450,
                    imageHeight: 300,
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: "<span style='color: #fff; font-size: 32px'>Entendi.</span>",
                    allowOutsideClick: false
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        window.location.href = ajax_object.site_url;
                    } else if (result.isDenied) {
                        Swal.fire("Changes are not saved", "", "info");
                    }
                });



                // if (confirm("CNPJ com anomalia")) {

                //     window.location.href = ajax_object.site_url;

                // }


                return false;
            }
            /*
            if (objResponse.type == "sucesso" || objResponse.cptlead != undefined) {
                $("#btn_cdlbh_nj").trigger("reset");
                $("form[name='frm_quotation_empresa']").trigger("reset");
                window.location.href = ajax_object.site_url + "/proposta-sucesso";
            }
            */
        });

    });

    /*
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            console.log('style changed!');
        });    
    });
    var target = document.getElementById('ex2');
    observer.observe(target, { attributes : true, attributeFilter : ['style'] });
    */









































    //Funcao de chamada para api CDLBH Empresa
    $("#btn_cdlbh_nj").on("click", async function(event) {
        event.preventDefault();

        //Desativar o botão
        $("#btn_cdlbh_nj").prop("disabled", true);
        $("#loader-nj").css("visibility", "visible");

        await $("#frmContractCoupon").blur();
        await delay(1000).then(() => {
            if ($(".couponInvalid").length > 0) {
                $("#btn_cdlbh_nj").prop("disabled", false);
                $("#loader-nj").css("visibility", "hidden");
                return false;
            }
        });



        // Ler os dados do formulario
        var fd = new FormData($("form[name='frm_quotation_empresa']")[0]);
        fd.append("action", "request_proposal");
        fd.append("is_debug", "true");

        if ($('#chk_cdlbh_cpf').is(":checked") == true) {
            fd.set("cpf", formataCPF($("#cdlbh_cpf").val()));
            fd.set("cnpj", "");
            fd.set("tipoPessoa", "Física")
        } else {
            fd.set("cpf", "");
            fd.set("cnpj", formataCNPJ($("#cdlbh_cpf").val()));
            fd.set("tipoPessoa", "Jurídica")
        }


        // Completar os dados para cada upload de arquivo
        $.each($("input#frmContractFile[type='file']")[0].files, function(i, file) {
            fd.append('file-' + i, file);
        });

        // Verificar que os campos estão preenchidos
        let erro = false;
        //$("input[type!='hidden']").each(function(){
        $("form[name='frm_quotation_empresa'] :input").not(":button,:hidden").each(function() {
            var element = $(this);
            if (element.val() == "" && element.attr("id") != "frmContractCoupon") {
                element.css("border", "2px solid #D0312D");
                $("#btn_cdlbh_nj").prop("disabled", false);
                $("#loader-nj").css("visibility", "hidden");
                erro = true;
                return false;
            }
        });
        if (erro == true) {
            return false;
        }

        if ($(".couponInvalid").length > 0) {
            return false;
        }

        if ($("#cdlbh_tel").val().length < 13) {
            $("#cdlbh_tel").css("border", "2px solid #D0312D");
            erro = true;
            $("#btn-nj").css("pointer-events", "auto");
            $("#btn_cdlbh_nj").prop("disabled", false);
            $("#loader-nj").css("visibility", "hidden");
            return false;
        }

        //Verificar o formato dos numero cnpj
        if ($('#chk_cdlbh_cpf').is(":checked") == true) {
            const testCPFFormat = isValidCPFDocument($('#cdlbh_cpf').val());
            if (testCPFFormat == false) {
                $('#cdlbh_cpf').css("border", "2px solid #D0312D");
                $("#btn_cdlbh_nj").prop("disabled", false);
                $("#loader-nj").css("visibility", "hidden");
                $("span[name='cnpj_mensagem']").css("display", "block");
                return false;
            }
        } else {
            const testCNPJFormat = isValidCNPJDocument($('#cdlbh_cpf').val());
            if (testCNPJFormat == false) {
                $('#cdlbh_cpf').css("border", "2px solid #D0312D");
                $("#btn_cdlbh_nj").prop("disabled", false);
                $("#loader-nj").css("visibility", "hidden");
                $("span[name='cnpj_mensagem']").css("display", "block");
                return false;
            }
        }




        //Mostrar os dados que serão enviados:
        /*for(var pair of fd.entries()) {
        	console.log(pair[0]+ ', '+ pair[1]);
        }*/

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            $("#btn_cdlbh_nj").prop("disabled", false);
            let objResponse = JSON.parse(response);
            if (objResponse.type == "sucesso" || objResponse.cptlead != undefined) {
                $("#btn_cdlbh_nj").trigger("reset");
                $("form[name='frm_quotation_empresa']").trigger("reset");
                window.location.href = ajax_object.site_url + "/proposta-sucesso";
            }
        });

    });



    //Funcao de chamada para api CDLBH Empresa
    $("#btn_cdlbh_empresa").on("click", function(event) {
        event.preventDefault();

        //Desativar o botão
        $("#btn_cdlbh_empresa").prop("disabled", true);

        // Ler os dados do formulario
        var fd = new FormData($("form[name='frm_quotation_empresa']")[0]);
        fd.append("action", "request_proposal");
        fd.set("cpf", "");
        fd.set("cnpj", formataCNPJ($("input[name=cnpj]").val()));

        // Completar os dados para cada upload de arquivo
        $.each($("input#frmContractFile[type='file']")[0].files, function(i, file) {
            fd.append('file-' + i, file);
        });

        // mostrar a alerta de codigo promocional
        if (!$("input[name=cupom]").val()) {
            $("#promo_mensagem").css("display", "block");
            $("#btn_cdlbh_empresa").prop("disabled", false);
            return false;
        }

        // Verificar que os campos estão preenchidos
        let erro = false;
        //$("input[type!='hidden']").each(function(){
        $("form[name='frm_quotation_empresa'] :input").not(":button,:hidden").each(function() {
            var element = $(this);
            if (element.val() == "") {
                element.css("border", "2px solid #D0312D");
                $("#btn_cdlbh_empresa").prop("disabled", false);
                erro = true;
                return false;
            }
        });
        if (erro == true) {
            return false;
        }

        //Verificar o formato dos numero cnpj
        const testCNPJFormat = isValidCNPJDocument($('#cdlbh_cnpj').val());
        if (testCNPJFormat == false) {
            $('#cdlbh_cnpj').css("border", "2px solid #D0312D");
            $("#btn_cdlbh_empresa").prop("disabled", false);
            $("span[name='cnpj_mensagem']").css("display", "block");
            return false;
        }

        //Mostrar os dados que serão enviados:
        /*for(var pair of fd.entries()) {
        	console.log(pair[0]+ ', '+ pair[1]);
        }*/

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            $("#btn_cdlbh_empresa").prop("disabled", false);
            let objResponse = JSON.parse(response);
            if (objResponse.type == "sucesso" || objResponse.cptlead != undefined) {
                $("#btn_cdlbh_empresa").trigger("reset");
                $("form[name='frm_quotation_empresa']").trigger("reset");
                window.location.href = ajax_object.site_url + "/proposta-sucesso";
            }
        });

    });





    //Funcao de chamada para api CDLBH Residencial 
    $("#btn_cdlbh_residencial").on("click", function(event) {
        event.preventDefault();

        //Desativar o botão
        $("#btn_cdlbh_residencial").prop("disabled", true);

        // Ler os dados do formulario
        var fd = new FormData($("form[name='frm_quotation_residencial']")[0]);
        fd.append("action", "request_proposal");
        fd.set("razaoSocial", $("input[name=nome]").val() + " " + $("input[name=sobrenome]").val());
        fd.set("cnpj", "");
        fd.set("cpf", formataCPF($("input[name=cpf]").val()));

        // Completar os dados para cada upload de arquivo
        $.each($("input#frmContractFile[type='file']")[0].files, function(i, file) {
            fd.append('file-' + i, file);
        });

        // mostrar a alerta de codigo promocional
        if (!$("input[name=cupom]").val()) {
            $("#promo_mensagem").css("display", "block");
            $("#btn_cdlbh_residencial").prop("disabled", false);
            return false;
        }

        // Verificar que os campos estão preenchidos
        let erro = false;
        //$("input[type!='hidden']").each(function(){
        $("form[name='frm_quotation_residencial'] :input").not(":button,:hidden").each(function() {
            var element = $(this);
            if (element.val() == "") {
                element.css("border", "2px solid #D0312D");
                $("#btn_cdlbh_residencial").prop("disabled", false);
                erro = true;
                return false;
            }
        });
        if (erro == true) {
            return false;
        }

        //Verificar o formato dos numero cpf
        const testCPFFormat = isValidCPFDocument($('#cdlbh_cpf').val());
        if (testCPFFormat == false) {
            $('#cdlbh_cpf').css("border", "2px solid #D0312D");
            $("#btn_cdlbh_residencial").prop("disabled", false);
            $("span[name='cpf_mensagem']").css("display", "block");
            return false;
        }

        //Mostrar os dados que serão enviados:
        for (var pair of fd.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            $("#btn_cdlbh_residencial").prop("disabled", false);
            let objResponse = JSON.parse(response);
            if (objResponse.type == "sucesso" || objResponse.cptlead != undefined) {
                $("#btn_cdlbh_residencial").trigger("reset");
                $("form[name='frm_quotation_residencial']").trigger("reset");
                window.location.href = ajax_object.site_url + "/proposta-sucesso";
            }
        });

    });








































    //Função de validação de email
    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }




    //Ativar por padrão a opção cpf
    $('#rooftop_cpf').prop('checked', true);
    $('#rooftop_cpf_cnpj').attr("placeholder", "CPF *");
    $('#rooftop_cpf_cnpj').mask("000.000.000-00", {
        reverse: false
    });

    $('#rooftop_cpf').change(function() {
        if ($('#rooftop_cpf').is(":checked") == true) {
            $('#rooftop_cnpj').prop('checked', false);
            $('#rooftop_cpf_cnpj').attr("placeholder", "CPF *");
            $('#rooftop_cpf_cnpj').mask("000.000.000-000", {
                reverse: false
            });
        } else {
            $('#rooftop_cnpj').prop('checked', true);
            $('#rooftop_cpf_cnpj').attr("placeholder", "CNPJ *");
            $('#rooftop_cpf_cnpj').mask("00.000.000/0000-00", {
                reverse: false
            });
        }
        $("span[name='cnpj_mensagem']").css("display", "none");
        $('#rooftop_cpf_cnpj').css("border", "0px solid #D0312D");
    });

    $('#rooftop_cnpj').change(function() {
        if ($('#rooftop_cnpj').is(":checked") == true) {
            $('#rooftop_cpf').prop('checked', false);
            $('#rooftop_cpf_cnpj').attr("placeholder", "CNPJ *");
            $('#rooftop_cpf_cnpj').mask("00.000.000/0000-00", {
                reverse: false
            });
        } else {
            $('#rooftop_cpf').prop('checked', true);
            $('#rooftop_cpf_cnpj').attr("placeholder", "CPF *");
            $('#rooftop_cpf_cnpj').mask("000.000.000-000", {
                reverse: false
            });
        }
        $("span[name='cnpj_mensagem']").css("display", "none");
        $('#rooftop_cpf_cnpj').css("border", "0px solid #D0312D");
    });








    //Mascara de controle do cnpj, cpf, tel, ...
    /*
    $('#rooftop_cpf_cnpj').mask("000.000.000-000", { reverse: false });
    $('#rooftop_cpf_cnpj').on('input', function() {
    	if($('#rooftop_cpf_cnpj').val().length <= 14){
    		$('#rooftop_cpf_cnpj').mask("000.000.000-000", { reverse: false });
    	}
    	else{
    		$('#rooftop_cpf_cnpj').mask("00.000.000/0000-00", { reverse: false });
    	}
    });*/

    $('#rooftop_tel').mask('(00) 0000-00009');
    $('#rooftop_tel').blur(function(event) {
        if ($(this).val().length == 15) { // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
            $('#rooftop_tel').mask('(00) 00000-0009');
        } else {
            $('#rooftop_tel').mask('(00) 0000-00009');
        }
    });

    $('#rooftop_consumo').mask("000000,00", {
        reverse: true
    });
    $('#rooftop_instalacao').mask("0000000000", {
        reverse: true
    });
    $('#rooftop_area').mask("000000,00", {
        reverse: true
    });

    // Remover borda quando digita outro cpf
    $("input[name=rooftop_cpf_cnpj]").change(function() {
        var element = $(this);
        if (element.val() != "") {
            $("span[name='cnpj_mensagem']").css("display", "none");
        }
    });

    // Remover borda quando digita outro telefone
    $("input[name=tel]").change(function() {
        var element = $(this);
        if (element.val() != "") {
            $("span[name='email_mensagem']").css("display", "none");
        }
    });

    //Funcao de chamada para api Rooftop
    $("#btn_rooftop").on("click", function(event) {
        event.preventDefault();

        //Desativar o botão
        $("#btn_rooftop").prop("disabled", true);

        // Ler os dados do formulario
        var fd = new FormData($("form[name='frm_quotation_rooftop']")[0]);
        fd.append("action", "quotation");

        // Definir se é cpf ou cnpj 
        if ($('#rooftop_cpf').is(":checked") == true) {
            fd.set("cnpj", "");
            fd.set("cpf", formataCPF($("#rooftop_cpf_cnpj").val()));
            fd.set("tipoPessoa", "Física");
        } else {
            fd.set("cpf", "");
            fd.set("cnpj", formataCNPJ($("#rooftop_cpf_cnpj").val()));
            fd.set("tipoPessoa", "Jurídica");
        }

        // Completar os dados para cada upload de arquivo
        $.each($("input#frmContractFile[type='file']")[0].files, function(i, file) {
            fd.append('file-' + i, file);
        });

        // Verificar que os campos estão preenchidos
        let erro = false;
        $("form[name='frm_quotation_rooftop'] :input").not(":button,:hidden").each(function() {
            var element = $(this);
            if (element.val() == "") {
                element.css("border", "2px solid #D0312D");
                $("#btn_rooftop").prop("disabled", false);
                erro = true;
                return false;
            }
        });
        if (erro == true) {
            return false;
        }


        //Verificar o formato dos numero cnpj
        if ($('#rooftop_cpf').is(":checked") == true) {
            const testCPFFormat = isValidCPFDocument($('#rooftop_cpf_cnpj').val());
            if (testCPFFormat == false) {
                $('#rooftop_cpf_cnpj').css("border", "2px solid #D0312D");
                $("#btn_rooftop").prop("disabled", false);
                $("span[name='cnpj_mensagem']").css("display", "block");
                return false;
            }
        } else {
            const testCNPJFormat = isValidCNPJDocument($('#rooftop_cpf_cnpj').val());
            if (testCNPJFormat == false) {
                $('#rooftop_cpf_cnpj').css("border", "2px solid #D0312D");
                $("#btn_rooftop").prop("disabled", false);
                $("span[name='cnpj_mensagem']").css("display", "block");
                return false;
            }
        }

        //Verificar o formato do email 
        if (ValidateEmail($("#rooftop_email").val()) == false) {
            $('#rooftop_email').css("border", "2px solid #D0312D");
            $("#btn_rooftop").prop("disabled", false);
            $("span[name='email_mensagem']").css("display", "block");
            $("#email_mensagem").html("E-mail inválido");
            $("#tel_mensagem").html("");
            return false;
        }

        //Verificar o formato do telefone
        if ($("#rooftop_tel").val().length <= 13) {
            $('#rooftop_tel').css("border", "2px solid #D0312D");
            $("#btn_rooftop").prop("disabled", false);
            $("span[name='email_mensagem']").css("display", "block");
            $("#tel_mensagem").html("Telefone inválido");
            $("#email_mensagem").html("");
            return false;
        }





        for (var pair of fd.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }


        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            $("#btn_rooftop").prop("disabled", false);
            let objResponse = JSON.parse(response);
            if (objResponse.type == "sucesso" || objResponse.cptlead != undefined) {
                $("#btn_rooftop").trigger("reset");
                $("form[name='frm_quotation_rooftop']").trigger("reset");
                window.location.href = ajax_object.site_url + "/proposta-sucesso";
            }
        });

    });


































    $("#frmQuotation #frmQuotationBtnQuotationSend").on("click", function(event) {
        event.preventDefault();


        const testCPFFormat = isValidCPFDocument($('#frmQuotationCPF').val());
        const testCNPJFormat = isValidCNPJDocument($('#frmQuotationCNPJ').val());
        if (testCPFFormat == true || testCNPJFormat == true) {
            documentCPFIsValid = true;
            $("#frmQuotationCPF").removeClass("error");
            $("#frmQuotationCPF").siblings(".message-error").addClass("hide");

            $("#frmQuotationCNPJ").removeClass("error");
            $("#frmQuotationCNPJ").siblings(".message-error").addClass("hide");
        } else {
            documentCPFIsValid = false;
            $("#frmQuotationCPF").addClass("error");
            $("#frmQuotationCPF").siblings(".message-error").removeClass("hide");

            $("#frmQuotationCNPJ").addClass("error");
            $("#frmQuotationCNPJ").siblings(".message-error").removeClass("hide");
            return false;
        }

        if ($("#frmQuotationPhone").val().length >= 14) {
            $("#frmQuotationPhone").removeClass("error");
            $("#frmQuotationPhone").siblings(".message-error").addClass("hide");
        } else {
            $("#frmQuotationPhone").addClass("error");
            $("#frmQuotationPhone").siblings(".message-error").removeClass("hide");
            return false;
        }





        var fd = new FormData($("form[name='frmQuotation']")[0]);
        $.each($("input#frmQuotationFile[type='file']")[0].files, function(i, file) {
            fd.append('file-' + i, file);
        });
        fd.action = "quotation";
        $(this).attr("disabled", "disabled");

        $("#frmQuotation .loadingQuotation").removeClass("hide");

        if (validateFieldsQuotationForm() == false) {
            $("#frmQuotation .loadingQuotation").addClass("hide");
            $(this).removeAttr("disabled");
            return false;
        }

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            let objResponse = JSON.parse(response);
            if (objResponse.type == "sucesso") {
                $("#frmQuotation").trigger("reset");
                window.location.href = ajax_object.site_url + "/proposta-sucesso";
            }
        });
    });

    $("#frmQuotationTwo #frmQuotationTwoBtnQuotationSend").on("click", function(event) {
        event.preventDefault();

        var fd = new FormData($("form[name='frmQuotationTwo']")[0]);
        fd.action = "quotation";
        $(this).attr("disabled", "disabled");

        $("#frmQuotationTwo .loadingQuotation").removeClass("hide");

        if (validateFieldsQuotationTwoForm() == false) {
            $("#frmQuotationTwo .loadingQuotation").addClass("hide");
            $(this).removeAttr("disabled");
            return false;
        }

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        }).done(function(response) {
            let objResponse = JSON.parse(response);
            if (objResponse.type == "sucesso") {
                $("#frmQuotationTwo").trigger("reset");
                window.location.href = ajax_object.site_url + "/proposta-sucesso";
            }
        });
    });
    //Fim - Envios dos formulários

    $("#frmContractFile").on("change", function() {

        var field = "input#frmContractFile[type='file']";
        var maxSize = $(field).data("max-size");

        var hasItemBig = false;
        $.each($(field)[0].files, function(i, file) {
            var ext = file.name.match(/\.([^\.]+)$/)[1];
            switch (ext) {
                case 'jpeg':
                case 'jpg':
                case 'png':
                case 'pdf':
                    break;
                default:
                    $(field).val("");
            }

            if (file.size > maxSize) {
                hasItemBig = true;
            }
        });
        if (hasItemBig == false) {
            $("#countfiles").val($(field)[0].files.length);
        } else {
            $(field).val("");
        }

    });

    $("#frmQuotationFile").on("change", function() {
        var field = "input#frmQuotationFile[type='file']";
        var maxSize = $(field).data("max-size");

        var hasItemBig = false;
        $.each($(field)[0].files, function(i, file) {
            var ext = file.name.match(/\.([^\.]+)$/)[1];
            switch (ext) {
                case 'jpeg':
                case 'jpg':
                case 'png':
                case 'pdf':
                    break;
                default:
                    $(field).val("");
            }

            if (file.size > maxSize) {
                hasItemBig = true;
            }
        });
        if (hasItemBig == false) {

            $("#countfiles").val($(field)[0].files.length);
        } else {
            $(field).val("");
        }
    });

    $("#frmQuotationTwoFile").on("change", function() {
        var field = "input#frmQuotationTwoFile[type='file']";
        var maxSize = $(field).data("max-size");

        var hasItemBig = false;
        $.each($(field)[0].files, function(i, file) {
            var ext = file.name.match(/\.([^\.]+)$/)[1];
            switch (ext) {
                case 'jpeg':
                case 'jpg':
                case 'png':
                case 'pdf':
                    break;
                default:
                    $(field).val("");
            }
            if (file.size > maxSize) {
                hasItemBig = true;
            }
        });
        if (hasItemBig == false) {
            $("#countfiles").val($(field)[0].files.length);
        } else {
            $(field).val("");
        }
    });



    $("#frmSimulationPhone").on("change", function() {
        if ($("#frmSimulationPhone").val().length >= 14) {
            $("#frmSimulationPhone").removeClass("error");
            $("#frmSimulationPhone").siblings(".message-error").addClass("hide");
        } else {
            $("#frmSimulationPhone").addClass("error");
            $("#frmSimulationPhone").siblings(".message-error").removeClass("hide");
            return false;
        }
    });

    $("#frmContractPhone").on("change", function() {
        if ($("#frmContractPhone").val().length >= 14) {
            $("#frmContractPhone").removeClass("error");
            $("#frmContractPhone").siblings(".message-error").addClass("hide");
        } else {
            $("#frmContractPhone").addClass("error");
            $("#frmContractPhone").siblings(".message-error").removeClass("hide");
            return false;
        }
    });

    $("#frmQuotationPhone").on("change", function() {
        if ($("#frmQuotationPhone").val().length >= 14) {
            $("#frmQuotationPhone").removeClass("error");
            $("#frmQuotationPhone").siblings(".message-error").addClass("hide");
        } else {
            $("#frmQuotationPhone").addClass("error");
            $("#frmQuotationPhone").siblings(".message-error").removeClass("hide");
            return false;
        }
    });










    $('#frmQuotationCPF').on("change", function() {
        $('#frmQuotationCPF').cpfcnpj({
            validate: 'cpf',
            mask: true,
            event: 'blur',
            handler: '#frmQuotation #frmQuotationCPF',
            ifValid: function(input) {
                documentCPFIsValid = true;
                input.removeClass("error");
                $("#frmQuotationCPF").siblings(".message-error").addClass("hide");
            },
            ifInvalid: function(input) {
                documentCPFIsValid = false;
                input.addClass("error");
                $("#frmQuotationCPF").siblings(".message-error").removeClass("hide");
            }
        });
    });

    $("#frmQuotationCPF").on("input", function() {
        $("#frmQuotationCPF").attr('maxlength', '14');
    });

    $("#frmContractDocument").on("input", function() {
        if ($("#frmContractDocument").attr('name') == "cpf") {
            $("#frmContractDocument").attr('maxlength', '14');
        }
    });

    $("input[type='radio'][name='tipoPessoa']").on("change", function() {
        if ($(this).val() == "fisica") {
            $(".pessoa-fisica").removeClass("hide");
            $(".pessoa-juridica").addClass("hide");
            $(".pessoa-juridica > input[type='text']").val("");
        } else {
            $(".pessoa-juridica").removeClass("hide");
            $(".pessoa-fisica").addClass("hide");
            $(".pessoa-fisica > input[type='text']").val("");
        }
    });

    $("#frmContractCoupon").on("blur", function() {
        var codigoPromocional = $(this).val();
        if ($(this).val() != "") {
            $.ajax({
                url: ajax_object.ajax_url,
                type: "POST",
                data: {
                    'action': "search_coupon",
                    'coupon': $(this).val().toUpperCase()
                },
                dataType: "json"
            }).done(function(response) {
                let objResponse = response;
                if ($(".couponInvalid").length > 0) {
                    $(".couponInvalid").remove();
                }

                if (objResponse.isValid == false) {
                    $('<span class="couponInvalid" style="font-size:12px; color:red;">Código promocional inválido!</span>').insertAfter($("#frmContractCoupon"));
                    $("#btn_cdlbh_empresa").prop("disabled", true);
                    $("#btn_cdlbh_residencial").prop("disabled", true);
                    $("#btn-goto-proposta2").css("pointer-events", "none");
                    $("#btn_cdlbh_nj").prop("disabled", true);
                }
                /*
				else if(window.location.href.includes("cdl") && codigoPromocional.toUpperCase() != "DIGASIMCDL"){
					$('<span class="couponInvalid" style="font-size:12px; color:red;">Código promocional inválido!</span>').insertAfter($("#frmContractCoupon"));
					$("#btn_cdlbh_empresa").prop("disabled",true);
					$("#btn_cdlbh_residencial").prop("disabled",true);
                    $("#btn-goto-proposta2").css("pointer-events", "none");
                    $("#btn_cdlbh_nj").prop("disabled",true);
				}
                */
                else {
                    // Reativar o botão se o codigo promocional for valido
                    if (window.location.href.includes("cdl") && codigoPromocional.toUpperCase() == "DIGASIMCDL") {
                        $("#btn_cdlbh_empresa").prop("disabled", false);
                        $("#btn_cdlbh_residencial").prop("disabled", false);
                        $("#btn-goto-proposta2").css("pointer-events", "auto");
                        $("#btn_cdlbh_nj").prop("disabled", false);
                    } else if (objResponse.isValid == true) {
                        $("#btn-goto-proposta2").css("pointer-events", "auto");
                        $("#btn_cdlbh_nj").prop("disabled", false);
                    }

                    if ($(".couponInvalid").length > 0) {
                        $(".couponInvalid").remove();
                    }
                }

            });
        } else {
            if ($(".couponInvalid").length > 0) {
                $(".couponInvalid").remove();
            }
            $("#btn-goto-proposta2").css("pointer-events", "auto");
            $("#btn_cdlbh_nj").prop("disabled", false);
        }
    });

    $("input.radio-cemig-simulation[name='opcaoConsumo']").on("change", function() {
        let strConsumption = "Valor mensal";
        if ($(this).val() == "false") {
            strConsumption = "Consumo mensal";
        }

        $("#frmSimulationMonthlyConsumption").attr("placeholder", strConsumption);
    });

    $("input.radio-cemig-contract[name='opcaoConsumo']").on("change", function() {
        let strConsumption = "Valor mensal";
        if ($(this).val() == "false") {
            strConsumption = "Consumo mensal";
        }

        $("#frmContractMonthlyConsumption").attr("placeholder", strConsumption);
    });

    $("#frmQuotation input.radio-cemig-quotation[name='opcaoConsumo']").on("change", function() {
        let strConsumption = "Valor mensal";
        if ($(this).val() == "false") {
            strConsumption = "Consumo mensal";
        }

        $("#frmQuotationMonthlyConsumption").attr("placeholder", strConsumption);
    });

    $("#frmQuotationTwo input.radio-cemig-quotation[name='opcaoConsumo']").on("change", function() {
        let strConsumption = "Valor mensal";
        if ($(this).val() == "false") {
            strConsumption = "Consumo mensal";
        }

        $("#frmQuotationTwoMonthlyConsumption").attr("placeholder", strConsumption);
    });

    function selectPlan(element) {
        let deadline = element.data("deadline");
        let planInfo = element.data("plan");
        let cptlead = element.data("cptlead");

        if (window.sessionStorage.getItem("formSimulationData") != undefined && window.sessionStorage.getItem("formSimulationData") != null && window.sessionStorage.getItem("formSimulationData") != "") {
            let objectSimulationData = JSON.parse(window.sessionStorage.getItem("formSimulationData"));

            $("#frmContractFirstName").val(objectSimulationData.firstName);
            $("#frmContractLastName").val(objectSimulationData.lastName);
            $("#frmContractPhone").val(objectSimulationData.phone);
            $("#frmContractEmail").val(objectSimulationData.email);
            $("#frmContractMonthlyConsumption").val(objectSimulationData.consumptionMonthly);
            //$("#frmContractMonthlyConsumption").mask("000000,00", { reverse: true });
            $("#frmContractClass").val(objectSimulationData.class);
            $("#frmContractSubClass").val(objectSimulationData.subClasse);
            $("#frmContractPlan").val(deadline);

            if (objectSimulationData.consumptionAs == true) {
                $("#frmContract input[type='radio'][name='opcaoConsumo'][value='true']").prop("checked", true);
                $("#frmContract input[type='radio'][name='opcaoConsumo'][value='false']").prop("checked", false);
            } else {
                $("#frmContract input[type='radio'][name='opcaoConsumo'][value='true']").prop("checked", false);
                $("#frmContract input[type='radio'][name='opcaoConsumo'][value='false']").prop("checked", true);
            }
            $("#frmContract input[type='hidden'][name='cptlead']").val(cptlead);
        }
        $("#contract").removeClass("hidden");
        goToByScroll("frmContract");
    }

    function storeInSessinStorage() {
        let consumptionAs = false;
        if ($("#frmSimulationConsumptionAsMoney").prop("checked") == true) {
            consumptionAs = true;
        }
        if ($("#frmContractConsumptionAsKWH").prop("checked") == true) {
            consumptionAs = false;
        }
        let formSumulationData = {
            firstName: $("#frmSimulationFirstName").val(),
            lastName: $("#frmSimulationLastName").val(),
            phone: $("#frmSimulationPhone").val(),
            email: $("#frmSimulationEmail").val(),
            consumptionAs: consumptionAs,
            consumptionMonthly: $("#frmSimulationMonthlyConsumption").val(),
            class: $("#frmSimulationClass").val(),
            subClasse: $("#frmSimulationSubClass").val(),
        }
        window.sessionStorage.setItem("formSimulationData", JSON.stringify(formSumulationData));
    }

    function buildPlanContent(plans, cptlead, isResidencia) {
        //let listPlans = plans;
        let listPlans = plans.sort((a, b) => a.prazo > b.prazo ? 1 : -1);


        listPlans.forEach(element => {
            //console.log(element);
            if (element.prazo == 12 || element.prazo == 36 || element.prazo == 60) {
                let boxPlan = $(".box-plan-template").clone();
                boxPlan.removeClass("box-plan-template");
                $("#frmContractPlan").append("<option value='" + element.prazo + "'>" + element.plano + "</option>");
                boxPlan.find(".title-sim12-cemig").html("S!M " + element.prazo);

                if (isResidencia) {
                    boxPlan.find(".plan-cemig").html("Com o plano de " + element.prazo + " meses você tem até " + element.desconto + "% de desconto e economiza aproximadamente:");
                } else {
                    boxPlan.find(".plan-cemig").html("Com o plano de " + element.prazo + " meses você tem até " + element.desconto + "% de desconto e economiza aproximadamente:");
                }
                boxPlan.find(".price-cemig").html(numberToReal(element.descontoAnual));
                boxPlan.find(".btn-plan-cemig").data("plan", element.plano);
                boxPlan.find(".btn-plan-cemig").data("deadline", element.prazo);
                boxPlan.find(".btn-plan-cemig").data("cptlead", cptlead);
                //boxPlan.find(".btn-plan-cemig").html(("contratar s!m  " + element.prazo).toUpperCase());
                boxPlan.find(".btn-plan-cemig").html(("Solicitar Proposta").toUpperCase());
                boxPlan.find(".btn-plan-cemig").bind("click", function() {
                    selectPlan($(this));
                });
                boxPlan.removeClass("hidden");
                $(".plans").append(boxPlan);
            }
        });
    }

    function numberToReal(numero) {
        numero = numero.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }

    function validateFieldsSimulationForm() {
        if ($("#frmSimulationFirstName").val() == "" ||
            $("#frmSimulationLastName").val() == "" ||
            $("#frmSimulationPhone").val() == "" ||
            $("#frmSimulationEmail").val() == "" ||
            ($("#frmSimulationConsumptionAsMoney").prop("checked") == false && $("#frmSimulationConsumptionAsKWH").prop("checked") == false) ||
            $("#frmSimulationMonthlyConsumption").val() == "" ||
            $("#frmSimulationClass").val() == "" ||
            $("#frmSimulationSubClass").val() == "") {
            return ValidationForm.validate("simulation");
        }

        return ValidationForm.validate("simulation");
    }

    function validateFieldsContractForm() {
        if (documentIsValid == false) {
            $("#frmContract .cnpj_mask").siblings(".message-error").removeClass("hide");
            return false;

        }
        if (documentIsValid == false ||
            $("#frmContractFirstName").val() == "" ||
            $("#frmContractLastName").val() == "" ||
            $("#frmContractPhone").val() == "" ||
            $("#frmContractEmail").val() == "" ||
            $("#frmContractSocialName").val() == "" ||
            ($("#frmContract input[type='radio'][name='opcaoConsumo'][value='true']").prop("checked") == false &&
                $("#frmContract input[type='radio'][name='opcaoConsumo'][value='false']").prop("checked") == false) ||
            $("#frmContractMonthlyConsumption").val() == "" ||
            $("#frmContractClass").val() == "" ||
            $("#frmContractSubClass").val() == "" ||
            $("#frmContractFile").val() == "" ||
            $("#frmContract input[type='hidden'][name='cptlead']").val() == "") {
            return ValidationForm.validate("request_proposal");
        }

        return ValidationForm.validate("request_proposal");
    }

    function validateFieldsQuotationForm() {
        if (($("#frmQuotation input[type='radio'][name='tipoPessoa'][value='fisica']").prop("checked") == true && $("#frmQuotationCPF").val() == "") ||
            ($("#frmQuotation input[type='radio'][name='tipoPessoa'][value='jurídica']").prop("checked") == true && $("#frmQuotationCNPJ").val() == "") ||
            (documentIsValid == false && documentCPFIsValid == false) ||
            $("#frmQuotationFirstName").val() == "" ||
            $("#frmQuotationLastName").val() == "" ||
            $("#frmQuotationPhone").val() == "" ||
            $("#frmQuotationEmail").val() == "" ||
            ($("#frmQuotation input[type='radio'][name='opcaoConsumo'][value='true']").prop("checked") == false &&
                $("#frmQuotation input[type='radio'][name='opcaoConsumo'][value='false']").prop("checked") == false) ||
            $("#frmQuotationMonthlyConsumption").val() == "" ||
            $("#frmQuotationInstallationNumber").val() == "" ||
            $("#frmQuotationArea").val() == "" ||
            $("#frmQuotationFile").val() == "") {
            return ValidationForm.validate("quotation");

        }
        return ValidationForm.validate("quotation");
    }

    function validateFieldsQuotationTwoForm() {
        if (($("#frmQuotationTwo input[type='radio'][name='tipoPessoa'][value='fisica']").prop("checked") == true && $("#frmQuotationTwoCPF").val() == "") ||
            ($("#frmQuotationTwo input[type='radio'][name='tipoPessoa'][value='jurídica']").prop("checked") == true && $("#frmQuotationTwoCNPJ").val() == "") ||
            (documentIsValidTwo == false && documentCPFIsValidTwo == false) ||
            $("#frmQuotationTwoFirstName").val() == "" ||
            $("#frmQuotationTwoLastName").val() == "" ||
            $("#frmQuotationTwoPhone").val() == "" ||
            $("#frmQuotationTwoEmail").val() == "" ||
            ($("#frmQuotationTwo input[type='radio'][name='opcaoConsumo'][value='true']").prop("checked") == false &&
                $("#frmQuotationTwo input[type='radio'][name='opcaoConsumo'][value='false']").prop("checked") == false) ||
            $("#frmQuotationTwoMonthlyConsumption").val() == "" ||
            $("#frmQuotationTwoInstallationNumber").val() == "" ||
            $("#frmQuotationTwoArea").val() == "" ||
            $("#frmQuotationTwoFile").val() == "") {
            return ValidationForm.validate("quotationTwo");

        }
        return ValidationForm.validate("quotationTwo");
    }

    function goToByScroll(id) {
        // Remove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top - 200
        }, 'slow');
    }


    $("#range-nj").on("input propertychange", function() {
        if ($("#range-nj").val() < 4001) {
            $("#conta-nj").html("R$" + $("#range-nj").val() + ",00");
        } else {
            $("#conta-nj").html("acima de R$4000,00");
        }

    })


















    // Ativador do Plugin de Libras da Home.
    $(".btn-libras").click(function() {
        $(".active").trigger("click");
        $(".enabled").css("display", "block");
        setInterval(() => {
            $(".vpw-header-btn-close").click(function() {
                $(".enabled > .active").css("display", "none");
            });
        }, 1500);

    });
    $(".libras-texto-container").click(function() {
        $(".active").trigger("click");
        $(".enabled").css("display", "block");
        setInterval(() => {
            $(".vpw-header-btn-close").click(function() {
                $(".enabled > .active").css("display", "none");
            });
        }, 1500);

    });



    // Ativador do Plugin de ChatBot da Home.
    $(".manu-icone").click(function() {
        $(".helpButtonEnabled").trigger("click");
    });





});