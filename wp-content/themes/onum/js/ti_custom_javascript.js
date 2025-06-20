document.addEventListener('DOMContentLoaded', function() { 
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Ou falso
        embedded_svc.settings.language = 'pt-BR'; //Por exemplo, insira "pt" ou "pt-BR"
        embedded_svc.settings.defaultMinimizedText = 'Converse com um Especialista'; //(Assume como padrão o Chat com um especialista)
        embedded_svc.settings.loadingText = 'Carregando...'; // Definindo o texto de carregamento em português

        //embedded_svc.settings.defaultMinimizedText = '...'; //(Assume como padrão o Chat com um especialista)
        //embedded_svc.settings.disabledMinimizedText = '...'; //(Assume como padrão Agente off-line)

        //embedded_svc.settings.loadingText = ''; //(Assume como padrão Carregando)
        //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Define o domínio de sua implantação para que seus visitantes possam navegar em subdomínios durante uma sessão de chat)

        // Configurações para Chat
        //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
        // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
        // Returns a valid button ID.
        //};
        //embedded_svc.settings.prepopulatedPrechatFields = {}; //Define o preenchimento automático de campos de formulário de pré-chat
        //embedded_svc.settings.fallbackRouting = []; //Uma matriz de IDs de botão, IDs de usuário ou userId_buttonId
        //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Padronizado para Entre em contato conosco)

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.init(
            'https://cemigsim.my.salesforce.com',
            'https://cemigsim.my.site.com/parceiro',
            gslbBaseURL,
            '00D0b000000udSl',
            'FilaChatSite', {
                baseLiveAgentContentURL: 'https://c.la3-c2-ia5.salesforceliveagent.com/content',
                deploymentId: '5725a000000Pn01',
                buttonId: '5735a0000000UE1',
                baseLiveAgentURL: 'https://d.la3-c2-ia5.salesforceliveagent.com/chat',
                eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I5a000000CcElEAK_18bca28b377',
                isOfflineSupportEnabled: false
            }
        );
    };

    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', 'https://cemigsim.my.salesforce.com/embeddedservice/5.0/esw.min.js');
        s.onload = function() {
            initESW(null);
        };
        document.body.appendChild(s);

    } else {
        initESW('https://service.force.com');

    }


    setTimeout(() => {
        $('.helpButtonEnabled').on('click', function() {
            // Código a ser executado quando '.helpButtonEnabled' é clicado
            // Exemplo de código para a Página de Verificação de Cupom
            gtag('event', 'chatbot_clique', {
                'empresa': 'cemig-sim',
                'categoria': 'energia'
            });
        });
    }, 3000);




});