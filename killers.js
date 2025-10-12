function switchVal(value) {
    const slices = document.querySelector('#slices');
    slices.style.display = 'block';
    
    switch(value) {
        case 'huntress':
            return cacadora();
        case 'trapper':
            return cacador();
        case 'wraight':
            return espectro();
        case 'pyramid head':
            return pyramidHead();
        case 'billy':
            return caipira();
        case 'nurse':
            return nurse();
        case 'meyers':
            return meyers();
        case 'hag':
            return bruxa();
        case 'doctor':
            return doctor();
        case 'buba':
            return buba();
        case 'spirit':
            return spirit();
        case 'freddy':
            return freddy();
        case 'pig':
            return pig();
        case 'clown':
            return clown();
        case 'legion':
            return legion();
        case 'plague':
            return plague();
        case 'ghost face':
            return ghost();
        case 'demogorgon':
            return demogorgon();
        case 'oni':
            return oni();
        case 'blight':
            return blight();
        case 'deathslinger':
            return deathslinger();
        case 'twins':
            return twins();
        case 'random':
            return randomKiller();
        case 'trickster':
            return trickster();
    }
}

function cacador() {
    setComp({
        img1: 'FulliconAddon_honingStone.webp',
        img2: 'FulliconAddon_fasteningTools.webp',
        desc1: 'Quando usada junto à Armadilha de Urso, a Pedra de Amolar afia suas lâminas. As lâminas afiadíssimas infligem feridas profundas, com o objetivo de sangrar a vítima o mais rápido possível. Inflige o Estado Morrendo sobre a vítima capturada se ela se libertar por conta própria.',
        desc2: 'Aumenta tremendamente a velocidade de armação da Armadilha de Urso. Aumenta consideravelmente o tempo de resgate e fuga da Armadilha de Urso. Diminui moderadamente as chances de escapar de uma Armadilha de Urso.',
        killerImg: 'DBD_Killer_Trapper_only_335b9655b2.png',
        oferendaImg: 'Ach_crippleThemAll.webp',
        powerImg: 'Ach_crippleThemAll.webp',
        bg: 'enhanced_bg1.png',
        skills: [
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_03.png',
                description: `Um feitiço que pega seu poder de esperança. A falsa esperança dos Sobreviventes aumenta sua fome. Quando um Sobrevivente é salvado do Gancho pelo menos a 24 metros de você, Devorar Esperança recebe uma Moeda.`
            },
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_08.png',
                description: `As Auras de Sobreviventes dentro de 2/3/4 metros de qualquer Totem simples são reveladas a você.<br>
Quando o Totem Enfeitiçado  de outra Vantagem é limpo, seu Feitiço é transferido para o Totem Feitiço: Imortal, incluindo quaisquer Moedas acumuladas, desativando Feitiço: Imortal.<br>
Os efeitos do Feitiço persistem enquanto o Totem Enfeitiçado  relacionado estiver de pé`
            },
             {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_11.png',
                description: `Suas orações invocam um poder sombrio que interfere nas chances de sobrevivência.<br>
Os 3 Geradores mais distantes de você são bloqueados pela Entidade por 80 segundos no começo da partida.<br>
`
            },
             {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_05.png',
                description: `Em cada partida, 4 Ganchos aleatórios viram Ganchos do Tormento. Quando um Sobrevivente é enganchado em um Gancho do Tormento, o gerador com mais progresso explode e perde progresso. Os Sobreviventes que estiverem reparando esse gerador vão gritar e revelar a própria localização.`
            },
        ],
        sidebarHtml: `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b1-hboicEZY?si=gglZhdgfdlIr7PbL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
    });
}



function cacadora() {
    setComp({
        img1: 'e131a6ec-8993-4a7d-b8bf-82221da67389_removalai_preview.png',
        img2: 'c3aaf6cc-7873-48b1-bcd5-90b9387e86bb_removalai_preview.png',
        desc1: 'Um cabo polido que permite uma rápida e hábil manipulação da ferramenta fatal.<br>Reduz a duração do tempo de recarga entre arremessos de Machadinhas em -20 %.',
        desc2: 'Um lenço limpo e colorido estampado com flores.<br>Essa lembrança de uma garotinha perdida enche a Caçadora de raiva e concentração.<br>Reduz o tempo de Levantar Machadinhas em -12 %.',
        killerImg: 'DBD_Killer_Huntress_only_7510a188be.png',
        oferendaImg: 'Ach_adeptHuntress.webp',
        powerImg: 'Ach_adeptHuntress.webp',
        bg: 'bg_hunters.png',
        skills: [
            {
                img: 'barbecue-chili.webp',
                description: `Uma profunda conexão com a Entidade  desbloqueia o potencial na capacidade de leitura da Aura.<br>
Depois de enganchar um Sobrevivente, a Aura  de todos os outros Sobreviventes será revelada a você por 4 segundos quando eles estiverem a 52 metros do Gancho.<br>
Cada vez que um Sobrevivente é enganchado pela primeira vez, ganhe um bônus acumulativo de 15 % para todos os Pontos de Sangue ganhos na partida.`
            },
           {
                img: 'bacf577f-a9d2-4cca-aeca-a2cef44acdac_removalai_preview.png',
                description: `Você fica obcecado por um Sobrevivente.<br>
Depois de enganchar a Obsessão, Garantia do Morto ativa por 35 segundos.<br>
Se um Sobrevivente parar de reparar um Gerador antes de terminar os reparos, enquanto a habilidade estiver ativa, a Entidade bloqueia o Gerador até o fim do efeito da Garantia do Morto.`
            },
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_05 (1).png',
                description: `Em cada partida, 4 Ganchos aleatórios viram Ganchos do Tormento. Quando um Sobrevivente é enganchado em um Gancho do Tormento, o gerador com mais progresso explode e perde progresso. Os Sobreviventes que estiverem reparando esse gerador vão gritar e revelar a própria localização.`
            },
            {
                img: '7f9fac6b-915b-4c7c-9125-d3e030785c28_removalai_preview.png',
                description: `Você fica animado na expectativa de enganchar sua presa. Aumenta sua velocidade durante o transporte de corpos em 6/12/18 %. Ao transportar um corpo, seu Raio de Terror é aumentado em 0/3/6 metros.`
            },
        ]
    });
}

function espectro() {
    setComp({
        img1: 'FulliconAddon_swiftHunt-Blood.webp',
        img2: 'Adobe_Express_-_file-removebg-preview.png',
        desc1: 'O símbolo Kuntin-Takkho, representando uma rápida descida em uma presa, está estampado em sangue no corpo do Sino.<br>Tremendamente reduz o tempo de reaparição do Espectro.',
        desc2: 'O símbolo Baikra-Kaeug, representando ferocidade, está estampado com tinta branca no corpo do Sino.<br>Ataques Supresa afligem os Sobreviventes com os Efeitos de Status Dilacerado e Hemorragia até que sejam completamente curados.',
        killerImg: 'DBD_Killer_Wraith_only_23c19dc579.png',
        oferendaImg: 'Ach_jumpScares.webp',
        powerImg: 'Ach_jumpScares.webp',
        bg: 'bg_wraith.png',
        skills: [
            {
                img: 'Screenshot_2025-09-20_041328-removebg-preview.png',
                description: `Feitiço: Enfrentar a Escuridão<br>
Você usa suas vítimas de exemplo, forçando os aliados delas a ficarem pasmos com o seu poder.<br>
Uma vez que você machuca um Sobrevivente  por quaisquer meios, caso tenha um Totem Simples  restante no Mapa, Feitiço: Enfrentar a Escuridão se ativa e acende, amaldiçoando o Sobrevivente:<br>
Todos os outros Sobreviventes irão gritar a cada 35/30/25 segundos caso estejam fora do Raio de Terror  do Assassino, revelando suas Auras  por 2 segundos cada vez.`
            },
           {
                img: 'Screenshot 2025-09-20 041548.png',
                description: `Um Hex que baseia seu poder na esperança.<br>
A falsa esperança dos Sobreviventes enche você de entusiasmo e fortalece seus Totens.<br>
Para cada Totem restante no ambiente, Hex: Emoção da Caçada recebe 1 Token .<br>
Para cada Ficha, todos os Sobreviventes sofrem uma experiência de Velocidade de Ação acumulável de 10 / 12 / 14 % nos Totens de Purificação e Bênção, até um máximo de 50 / 60 / 70 % .<br>
Conceder um bônus de 10% de Pontos de Sangue acumuláveis 
`
            },
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_03.png',
                description: `Um feitiço que pega seu poder de esperança. A falsa esperança dos Sobreviventes aumenta sua fome. Quando um Sobrevivente é salvado do Gancho pelo menos a 24 metros de você, Devorar Esperança recebe uma Moeda.`
            },
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_08.png',
                description: `As Auras de Sobreviventes dentro de 2/3/4 metros de qualquer Totem simples são reveladas a você.<br>
Quando o Totem Enfeitiçado  de outra Vantagem é limpo, seu Feitiço é transferido para o Totem Feitiço: Imortal, incluindo quaisquer Moedas acumuladas, desativando Feitiço: Imortal.<br>
Os efeitos do Feitiço persistem enquanto o Totem Enfeitiçado  relacionado estiver de pé`
            },
        ]
    });
}

function pyramidHead() {
    setComp({
        img1: 'FulliconAddon_waxDoll.webp',
        img2: 'c659ad.png',
        desc1: `Boneca de Cera <br>
Uma boneca esculpida em cera, feita à mão por um prisioneiro que em breve enfrentaria seu julgamento.<br>
Aumenta o alcance dos ataques de Punição dos Condenados em +1 metro .`,
        desc2: `Pinturas de um homem queimado <br>
Um diagrama do Hotel Lakeview. Chamas vermelhas estão pintadas sobre este lugar de culpa.<br>
Aumenta o alcance dos ataques de Punição dos Condenados em +1,5 metros . `,
        killerImg: 'DBD_Killer_Executioner_only_5bb54b863d.png',
        oferendaImg: 'pyramid.png',
        powerImg: 'pyramid_k.png',
        bg: 'bg_pyramid_head.webp',
        skills: [
            {
                img: 'lethal-pursuer.png',
                description: `No início do Julgamento, as Auras<br>
de todos os sobreviventes<br>
são revelados a você por 7 / 8 / 9 segundos .<br>
Prolonga a duração de todas as instâncias de uma Aura de Sobrevivente reveladas a você em +2 segundos .`
            },
           {
                img: 'images-removebg-preview.png',
                description: `Todos os geradores afetados são destacados em amarelo .<br>
A próxima vez que qualquer Sobrevivente<br>
entra no estado de morte<br>
de qualquer forma, todos os Geradores afetados explodem e imediatamente começam a regredir, o que remove a Aura destacada.
Faz o Gerador regredir instantaneamente em -10% de sua Progressão máxima possível.
Faz com que todos os Sobreviventes que consertam os Geradores afetados gritem e revelem sua Aura<br>
para você por 8 / 10 / 12 segundos .
`
            },
          {
                img: '3bd860fe-22d2-4a07-82ef-85758b1075ba_removalai_preview.png',
                description: `Realizar a ação de Danificar Gerador em um Gerador ativa Não Há Onde se Esconder:<br>
As Auras  de todos os Sobreviventes  dentro de 24 metros da sua posição são revelados a você por 3/4/5 segundos.
`
            },
            {
                img: '57eece51-11a7-404b-a812-6d115e583034_removalai_preview.png',
                description: `Desbloqueia o potencial da habilidade de leitura de aura. Qualquer Sobrevivente que realizar uma ação rápida a até 48 metros de distância terá sua aura revelada por 8 segundos <br>
O recurso " I'm All Ears" só pode ser acionado uma vez a cada 60/45/30 segundos .`
            },
        ],
        sidebarHtml: `
        <iframe width="560" style="margin-bottom: 1rem;" height="315" src="https://www.youtube.com/embed/EJYlnwHjeJg?si=7jlCeOxVllDMaQFn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gp8XO_nIkjs?si=x049B8HCeavskQyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
    });
}

function caipira() {
    setComp({
        bg: 'bg_hillbilly.png',
        killerImg: 'K03_TheHillbilly_Portrait.webp',
        powerImg: 'caipira_k.png',
        img1: 'FulliconAddon_loProChains.png',
        img2: 'FulliconAddon_theThompsonsMix.png',
        sidebarHtml: `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-25i5xR0w04?si=WJghBUum505wx8Qo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        desc1: `
Concede a habilidade de continuar uma Corrida de Motosserra através de Paredes Quebráveis e paletes caídas, quebrando-os no processo.<br>
Sobreviventes saudáveis ​​atingidos pela motosserra dentro de 5 segundos após ativar o efeito primário sofrem apenas um dano por um único estado de saúde.<br>
Sobreviventes feridos sofrerão com a ferida profunda
 `,
        desc2: `
        Mistura dos thompsons<br>
Uma substância oleosa especial usada na lubrificação de todas as máquinas, inventada pelos próprios Thompsons.<br>
Reduz o tempo de espera após usar a motosserra em -10% , quando não estiver em Overdrive.
`,
    skills: [
        {
            img: 'barbecue-chili.webp',
            description: `Uma profunda conexão com a Entidade  desbloqueia o potencial na capacidade de leitura da Aura.<br>
Depois de enganchar um Sobrevivente, a Aura  de todos os outros Sobreviventes será revelada a você por 4 segundos quando eles estiverem a 52 metros do Gancho.<br>
Cada vez que um Sobrevivente é enganchado pela primeira vez, ganhe um bônus acumulativo de 15 % para todos os Pontos de Sangue ganhos na partida.`
        },
        {
            img: 'lore-accurate-pyramid-head-build-v0-0xy56tjustba1-removebg-preview (1).png',
            description: `
            Aumenta o valor base do seu Raio de Terror por 6 / 7 / 8 metros <br>
Sempre que você não estiver em uma perseguição com um sobrevivente, o seguinte efeito será aplicado:<br>
Reduz seu Raio de Terror em 12 / 14 / 16 metros .
            `
        },
        {
            img: 'arruinar.png',
            description: `
            Um feitiço que afeta o progresso do reparo do gerador de todos os sobreviventes.
            <br>Sempre que um gerador não estiver sendo reparado por um Sobrevivente, ele regredirá imediata e automaticamente seu progresso de Reparo em 50 / 75 / 100 % da velocidade normal de Regressão.
            `
        },
        {
            img: 'ybevd15gcl2f1 (1).png',
            description: `
            Você é resiliente à dor.
            <br>Reduz a duração dos Pallet Stuns em 40 / 45 / 50 % .
            `
        }
    ]
    });
}

function nurse() {
    reset('bg_nurse.png');
}

function meyers() {
    setComp({
        killerImg: 'K05_TheShape_Portrait.webp',
        bg: 'bg_meyers.png',
        powerImg: 'Screenshot 2025-09-22 025200.png',
        img1: 'Screenshot 2025-09-22 025450.png',
        img2: 'Screenshot 2025-09-22 025724.png',
        desc1: `
            Uma página brilhante retirada do anuário de 1965 da Haddonfield High School , dedicada à memória de Judith Myers.
            Aumenta sua taxa de perseguição em +25% .
        `,
        desc2: `
            Um pedaço de granito do tamanho de um punho retirado de uma lápide quebrada.<br>
            Concede a habilidade de matar Sobreviventes saudáveis ​​e feridos com suas próprias mãos enquanto estiver em Evil Within III .<br>
            Matar um Sobrevivente drena o Medidor de Poder em -200% , mas não passa de Evil Within II .<br>
            Aumenta o limite para atingir Evil Within III pela primeira vez para 250% .
        `,
        skills: [
            {
                img: 'g88hwlqfs9cb1.png',
                description: `Cada vez que você persegue sua obsessão<br>
                    <br>
                    e deixá-los escapar, Brinque com sua comida ganha +1 ficha , até um máximo de 3 fichas .<br>
                    Concede uma aceleração acumulável de 3 / 4 / 5 % 
                    <br>
                    Efeito de status por token, até um máximo de 9 / 12 / 15 % .<br>
                    Executar Ataques Básicos ou Ataques Especiais que podem causar dano aos Sobreviventes consome -1 Ficha .<br>
                    <br>
                    Brinque com sua comida tem um tempo de espera de 10 segundos na acumulação de fichas.
                `
            },
            {
                img: 'perkwevbker.png',
                description: `
                    A vantagem se ativará quando um Sobrevivente realizar um pulo rápido dentro de um raio de 8 metros de você.<br>
                    <br>
                    Da próxima vez que você pular por uma Janela , a velocidade de pulo aumentará em 30/35/40 %.<br>
                    A vantagem deixará de fazer efeito quando você pular por uma janela.<br>
                    Tempo de recarga de 30 segundos.
                `
            },
            {
                img: 'bambooozle.png',
                description: `
                    Depois de saltar uma janela Bamboozle invoca a Entidade para bloquear essa janela pelos próximos 8/12/16 segundos. <br>
                    Janelas bloqueadas não podem ser recuperadas por sobreviventes.<br>
                    Aumenta sua velocidade geral de salto em 5 / 10 / 15 % .

                `
            },
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_11.png',
                description: `
                    Suas orações invocam um poder sombrio que interfere nas chances de sobrevivência.<br>
                    Os 3 Geradores mais distantes de você são bloqueados pela Entidade por 80 segundos no começo da partida.
                `
            }
        ],
        sidebarHtml: `
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6Sn1wqso7Zk?si=xCDlSc8kS-5YBpq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        
            `
    })
}

function bruxa() {
    setComp({
        bg: 'bg_hag.png',
        killerImg: 'K06_TheHag_Portrait.webp',
        img1: 'latestabvdfws1.png',
        desc1: `
            Levemente reduz o tempo para colocar uma Armadilha Fantasma.
        `,
        img2: 'latestsadsada134.png',
        desc2: `
            Uma grande cigarra do pântano coberta por uma fina camada de poeira. Devorada para aumentar a estamina.<br>
            Consideravelmente aumenta a distância onde a Bruxa pode teleportar para suas armadilhas.
        `,
        powerImg: 'hagpower123.png',
        skills: [
            {
                img: 'haglperk.png',
                description: `
                    Você sabe como brutalizar um membro de uma equipe para causar pânico.<br>
                    Sempre que você coloca um Sobrevivente saudável no Estado Ferido, todos os sobreviventes feridos sofrem do Oblivious<br>
                    Efeito de status por 20/25/30 segundos . Histeria tem um tempo de recarga de 30 segundos .

                `
            },
            {
                img: 'g88hwlqfs9cb1.png',
                description: `
                    Cada vez que você persegue sua obsessão e deixá-los escapar, Brinque com sua comida ganha +1 ficha , até um máximo de 3 fichas .<br>
                    Concede uma aceleração acumulável de 3 / 4 / 5 % 
                    <br>
                    Efeito de status por token, até um máximo de 9 / 12 / 15 % .<br>
                    Executar Ataques Básicos ou Ataques Especiais que podem causar dano aos Sobreviventes consome -1 Ficha .<br>
                    <br>
                    Brinque com sua comida tem um tempo de espera de 10 segundos na acumulação de fichas.
                `
            },
            {
                img: 'images-removebg-preview.png',
                description: `
                    A próxima vez que qualquer Sobrevivente<br>
                    entra no estado de morte<br>
                    de qualquer forma, todos os Geradores afetados explodem e imediatamente começam a regredir, o que remove a Aura destacada.
                    Faz o Gerador regredir instantaneamente em -10% de sua Progressão máxima possível.
                    Faz com que todos os Sobreviventes que consertam os Geradores afetados gritem e revelem sua Aura<br>
                    para você por 8 / 10 / 12 segundos .
                `
            },
            {
                img: 'lore-accurate-pyramid-head-build-v0-0xy56tjustba1-removebg-preview%20(1).png',
                description: `
                Aumenta o valor base do seu Raio de Terror por 6 / 7 / 8 metros <br>
                Sempre que você não estiver em uma perseguição com um sobrevivente, o seguinte efeito será aplicado:<br>
                Reduz seu Raio de Terror em 12 / 14 / 16 metros .
                `
            }
        ]
    });
}

function doctor() {
    setComp({
        killerImg: 'doctor.webp',
        img1: 'herman.png',
        bg: 'bg_doctor.png',
        powerImg: 'Screenshot 2025-09-25 212516 (1).png',
        desc1: `
            Reduz o atraso de detonação do Ataque de Terapia de Choque em -0,2 segundos .<br>
            Sobreviventes afetados pela Loucura<br><br>

            sofrem da Aflição da Disciplina :<br>

            Loucura II : Durante uma perseguição, os sobreviventes percebem uma Mancha Vermelha Ilusória e um Raio de Terror , como se você estivesse constantemente atrás deles.<br>
            Este efeito dura 6 segundos após o término da perseguição.<br>
            Loucura III : Em qualquer situação, os Sobreviventes percebem uma Mancha Vermelha Ilusória e um Raio de Terror , como se você estivesse constantemente atrás deles.
        `,
        img2: 'booklikvroo (1).png',
        desc2: `
            Utiliza um comprimento de onda de estímulo insuportável para conectar as mentes do paciente e do Doutor.<br>
            Sabe-se que este procedimento causa casos graves de alucinações no paciente.<br><br>
            As Auras de Sobreviventes que têm sua Loucura aumentados em um nível são revelados a você por 3 segundos .<br>
            Os sobreviventes afetados pela Loucura sofrem da Aflição da Restrição :<br><br>

            Aumenta a duração dos Médicos Ilusórios em +6 segundos .
        `,
        sidebarHtml: `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PTPbfXwvCjo?si=2fPJfXB5xInBo5Xh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        skills: [
            {
                img: 'is-overcharge-eruption-a-good-combo-or-is-it-trash-v0-tj4j72b2340a1 (1).png',
                description: `
                    Essa Habilidade era para ser chamada "Sobrecarga do Gerador".<br>
                    O Teste de Perícia  da Sobrecarga vai ativar para qualquer Sobrevivente tentando reparar o Gerador danificado antes do Teste de Perícia inicial da Sobrecarga ser terminado. Como resultado, se múltiplos Sobreviventes interagirem ao mesmo tempo com o Gerador danificado, múltiplos Teste de Perícia aparecerão. (um para cada Sobrevivente).
                `
            },
            {
                img: 'bacf577f-a9d2-4cca-aeca-a2cef44acdac_removalai_preview.png',
                description: `
                    Você fica obcecado por um Sobrevivente.<br>
                    Depois de enganchar a Obsessão, Garantia do Morto ativa por 35 segundos.<br>
                    Se um Sobrevivente parar de reparar um Gerador antes de terminar os reparos, enquanto a habilidade estiver ativa, a Entidade bloqueia o Gerador até o fim do efeito da Garantia do Morto.
                `
            },
            {
                img: 'slfdsoisduj.png',
                description: `
                    Sua emanação horripilante atinge uma distância sobrenaturalmente longa.<br>
                    Aumenta seu Raio de Terror<br>
                    por 22 / 24 / 26 %<br>
                    Concede 100% de bônus em Pontos de Sangue  para todas as ações na Deviousness<br>
                `
            },
            {
                img: '9e8d40.png',
                description: `
                    Quando um Gerador  chegar a 90% de progresso, os Sobreviventes trabalhando nele enfrentarão Teste de Perícia contínuos. <br>
                    Se errarem ou pararem de reparar, o gerador será bloqueado pela Entidade por 16/18/20 segundos.
                `
            },
            
        ]
    });
}

function buba() {
    setComp({
        killerImg: 'theletterface.webp',
        powerImg: 'letterpower.png',
        bg: 'bg_letterface.jpg',
        img1: '01asf.png',
        desc1: `
            Memórias de repreensões violentas enchem seu portador com o medo do fracasso.<br>
            Aumenta a velocidade de movimento durante um Ataque de Serra Elétrica em +2%.<br>
            Aumenta o tempo de carga de energia em +12%
        `,
        img2: 'corrmoto.png',
        desc2: `
            Iniciar uma Corrida de Motosserra consome automaticamente todos os Tokens de Poder disponíveis, combinando suas durações:<br>
            Aumenta a duração do Ataque da Serra Elétrica em +0,5 segundos por Ficha.<br>
            Reduz a velocidade de movimento durante o Ataque com Serra Elétrica em -2% .
        `,
        sidebarHtml: `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xHSSluaxcD4?si=eL8Qt_t9Lw6vPcg7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        skills: [
            {
                img: 'ganchaleat.png',
                description: `
                    No início do teste, 4 ganchos aleatórios , bem como os 4 ganchos do porão , são transformados em ganchos brancos <br>
                    As Auras de Scourge Hooks são revelados a você em branco .<br>
                    Sempre que um Sobrevivente for fisgado em um Gancho Branco, o seguinte efeito será aplicado quando você estiver a mais de 24 metros do Sobrevivente fisgado:<br>
                    Acelera o Processo de Sacrifício em 10 / 15 / 20 % . 
                `
            },
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_05.png',
                description: `
                    Em cada partida, 4 Ganchos aleatórios viram Ganchos do Tormento. Quando um Sobrevivente é enganchado em um Gancho do Tormento, o gerador com mais progresso explode e perde progresso. Os Sobreviventes que estiverem reparando esse gerador vão gritar e revelar a própria localização.
                `
            },
            {
                img: 'D80F4B5A3121CC50C28719252CCBE09E57497795.png',
                description: `
                    Sempre que você estiver carregando um Sobrevivente, os seguintes efeitos se aplicam:
                    <br>
                    <br>
                    Reduz a força dos efeitos de Wiggle, que causam movimentos involuntários, em 75% .<br>
                    Aumenta a duração máxima do Wiggle em 4 / 8 / 12 % .

                `
            },
            {
                img: 'bambooozle.png',
                description: `
                    Depois de saltar uma janela Bamboozle invoca a Entidade para bloquear essa janela pelos próximos 8/12/16 segundos. <br>
                    Janelas bloqueadas não podem ser recuperadas por sobreviventes.<br>
                    Aumenta sua velocidade geral de salto em 5 / 10 / 15 % .
                `
            }
        ]
    });
}

function spirit() {
    reset('bg_spirit.png');
    document.querySelector('#container .bg').style.backgroundSize = '100% 99%';
}

function freddy() {
    setComp({
        bg: 'bg_fred.png',
        img1: '0as0f (1).png',
        desc1: `
            Usar a Projeção de Sonhos ativa o Instinto Assassino por 4 segundos em todos os Sobreviventes em um raio de 16 metros do Gerador para onde você se teletransportou.
        `,
        img2: 'addodasdasds (1).png',
        desc2: `
            Os sobreviventes que interagem com uma Armadilha dos Sonhos sofrem de Cegueira efeito de status por 90 segundos .
        `,
        killerImg: 'DBD_Killer_Nighmare_only_23c0774f8a.png',
        powerImg: '00asf (1).png',
        sidebarHtml: `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/R9OBDrVbG20?si=NerfNJnKxQWeuD8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        skills: [
            {
                img: 'fdsfdwerts (1).png',
                description: `
                    Depois que um sobrevivente perde um estado de saúde, Gearhead ativa por 30 segundos :<br>
                    Enquanto Gearhead estiver ativo, um Sobrevivente passando por um bom teste de habilidade enquanto o reparo revela sua Aura<br>
                    para você por 6 / 7 / 8 segundos . 

                `
            },
            {
                img: 'porcashufasdfg.png',
                description: `
                    Ferimentos infligidos por Ataques Básicos fazem com que os Sobreviventes sofram de Hemorragia e mutilado<br>
                    Efeitos de status por 70/80/90 segundos .​​<br>
                    Aumenta a frequência de sangramento de sobreviventes feridos em 50 / 75 / 100 % pela mesma duração.<br>
                    Aumenta a taxa de regressão na qual a progressão parcial da cura é perdida devido à hemorragia em +25% .

                `
            },
            {
                img: 'fhdssds (1).png',
                description: `
                    Após fisgar um Sobrevivente, Pop Goes the Weasel é ativado por 35/40/45 segundos . Execute a ação Gerador de Dano enquanto Pop Goes the Weasel estiver ativo para se beneficiar do seguinte efeito :<br>
                    Faz regredir instantaneamente o gerador danificado em -20% de sua Progressão atual.
                `
            },
            {
                img: 'bambooozle.png',
                description: `
                    Depois de saltar uma janela Bamboozle invoca a Entidade para bloquear essa janela pelos próximos 8/12/16 segundos. <br>
                    Janelas bloqueadas não podem ser recuperadas por sobreviventes.<br>
                    Aumenta sua velocidade geral de salto em 5 / 10 / 15 % .
                `
            }
        ]
    });
}

function pig() {
    setComp({
        killerImg: 'K11_ThePig_Portrait.webp',
        bg: 'bg_pig.jpg',
        powerImg: '00asf.png',
        img1: '0sd.png',
        desc1: `
            Aumenta a velocidade de fixação de Armadilhas de Urso Reversas em +50% .<br>
            Reduz a velocidade de pesquisa de caixas de quebra-cabeça em -25%
        `,
        img2: '0asf.png',
        desc2: `
            Uma mola no mecanismo força as engrenagens a girarem mais rápido.<br>
            Reduz o tempo de morte das Armadilhas de Urso Reversas em -20 segundos .
        `,
        sidebarHtml: `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zOrDpOi2oVM?si=oC3Llav53SD3Yxuq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        skills: [
            {
                img: 'Screenshot_2025-09-20_041328-removebg-preview.png',
                description: `
                    Feitiço: Enfrentar a Escuridão<br>
                    Você usa suas vítimas de exemplo, forçando os aliados delas a ficarem pasmos com o seu poder.<br>
                    Uma vez que você machuca um Sobrevivente  por quaisquer meios, caso tenha um Totem Simples  restante no Mapa, Feitiço: Enfrentar a Escuridão se ativa e acende, amaldiçoando o Sobrevivente:<br>
                    Todos os outros Sobreviventes irão gritar a cada 35/30/25 segundos caso estejam fora do Raio de Terror  do Assassino, revelando suas Auras  por 2 segundos cada vez.
                `
            },
            {
                img: 'Screenshot%202025-09-20%20041548.png',
                description: `
                   Um Hex que baseia seu poder na esperança.<br>
                    A falsa esperança dos Sobreviventes enche você de entusiasmo e fortalece seus Totens.<br>
                    Para cada Totem restante no ambiente, Hex: Emoção da Caçada recebe 1 Token .<br>
                    Para cada Ficha, todos os Sobreviventes sofrem uma experiência de Velocidade de Ação acumulável de 10 / 12 / 14 % nos Totens de Purificação e Bênção, até um máximo de 50 / 60 / 70 % .<br>
                    Conceder um bônus de 10% de Pontos de Sangue acumuláveis 
                `
            },
            {
                img: 'porcashufasdfg.png',
                description: `
                    Ferimentos infligidos por Ataques Básicos fazem com que os Sobreviventes sofram de Hemorragia e mutilado<br>
                    Efeitos de status por 70/80/90 segundos .​​<br>
                    Aumenta a frequência de sangramento de sobreviventes feridos em 50 / 75 / 100 % pela mesma duração.<br>
                    Aumenta a taxa de regressão na qual a progressão parcial da cura é perdida devido à hemorragia em +25% .
                `
            },
            {
                img: 'bambooozle.png',
                description: `
                    Depois de saltar uma janela Bamboozle invoca a Entidade para bloquear essa janela pelos próximos 8/12/16 segundos. <br>
                    Janelas bloqueadas não podem ser recuperadas por sobreviventes.<br>
                    Aumenta sua velocidade geral de salto em 5 / 10 / 15 % .
                `
            }
        ]
    });
}

function clown() {
    setComp({
        killerImg: 'DBD_Killer_Clown_only_266fa0018c.png',
        bg: 'bg_clown.png',
        powerImg: '0087saf.png',
        img1: '0asf (1).png',
        desc1: `
            Enche o Palhaço de desejo e concentra suas habilidades de criação química.<br>
            As Auras de todos os outros jogadores dentro de 6 metros de sua localização são revelados aos jogadores revigorados por 6 segundos .<br>
        `,
        img2: '0sa8f (1).png',
        desc2: `
          Um composto orgânico altamente volátil, tóxico nessa concentração.<br>
            Consideravelmente aumenta a duração do efeito Intoxicado.
        `,
        sidebarHtml: `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/f0l2PCjCm90?si=qv30EGpcwftnXOol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        skills: [
            {
                img: 'rapid-brutality.png',
                description: `
                    Você não pode mais ganhar a Sede de Sangue<br>
                    Efeito de status .<br>
                    Atingir com sucesso um Sobrevivente com um Ataque Básico concede a você +5% de Aceleração<br>
                    Efeito de status por 8 / 9 / 10 segundos .

                `
            },
            {
                img: 'Perks_ST_Surge_3689a7dfd3 (1).png',
                description: `
                    Colocar um Sobrevivente em estado de morte com um ataque básico faz com que todos os geradores em um raio de 32 metros explodam instantaneamente e comecem a regredir. Sobreviventes que consertarem o gerador gritarão. Geradores afetados por Surto perdem imediatamente 6 / 7 / 8 % do seu progresso.

                `
            },
            {
                img: 'forced-hesitation.png',
                description: `
                    Quando um Sobrevivente é colocado em estado de morte por qualquer meio, todos os outros Sobreviventes em um raio de 16 metros ao redor dele sofrem o efeito de status Impedido por 10 segundos , reduzindo sua velocidade de movimento em 20 % .<br>
                    Esta vantagem entra em espera por 40/35/30 segundos .
                `
            },
            {
                img: 'save-the-best-for-last.png',
                description: `
                    Sempre que você atingir um Sobrevivente diferente da sua Obsessão
                    com um Ataque Básico , Guarde o Melhor para o Final ganha +1 Ficha , até um máximo de 6 / 7 / 8 Fichas :<br>
                    Concede uma redução de -4% no tempo de recarga em Ataques Básicos bem-sucedidos por Ficha, até um máximo de 24 / 28 / 32 % .<br>
                    Sempre que você atingir sua Obsessão com um Ataque Básico ou Especial , Guarde o Melhor para o Final perde -2 Fichas .
                `
            }
        ]
    });
}

function legion() {
    setComp({
        bg: 'bg_legion.png',
        img1: 'lateasdsadasdsast.png',
        desc1: 'Consideravelmente diminui a diminuição da barra de poder em ataques bem-sucedidos.',
        img2: 'asdasdassdaa.png',
        desc2: `
            Quando Efeito de Status Ferida Profunda foi aplicado durante a Fúria Bestial:<br><br>

            Seu Raio de Terror afeta o Mapa inteiro.<br>
            Qualquer Barricada que você saltar é imediatamente quebrada.
        `,
        killerImg: 'DBD_Killer_Legion_only_0868f7f5e9.png',
        powerImg: '00f7asf.png',
        skills: [
            {
                img: 'ybevd15gcl2f1%20(1).png',
                description: `
                    Você é resiliente à dor.
                    <br>Reduz a duração dos Pallet Stuns em 40 / 45 / 50 % .
                `
            },
            {
                img: 'bambooozle.png',
                description: `
                    Depois de saltar uma janela Bamboozle invoca a Entidade para bloquear essa janela pelos próximos 8/12/16 segundos. <br>
                    Janelas bloqueadas não podem ser recuperadas por sobreviventes.<br>
                    Aumenta sua velocidade geral de salto em 5 / 10 / 15 % .
                `
            },
            {
                img: 'asdasdasa.png',
                description: `
                    Após quebrar manualmente um palete caído<br>
                    por qualquer meio, por um total de 4 / 3 / 2 vezes , Spirit Fury ativa:<br>
                    Causas da Entidade<br>
                    para quebrar instantaneamente o próximo Pallet usado para atordoar você.<br>
                    A penalidade normal de Atordoamento é aplicada depois, a menos que seja mitigada por outros efeitos.

                `
            },
            {
                img: 'fhdssds%20(1).png',
                description: `
                    Após fisgar um Sobrevivente, Pop Goes the Weasel é ativado por 35/40/45 segundos . Execute a ação Gerador de Dano enquanto Pop Goes the Weasel estiver ativo para se beneficiar do seguinte efeito :<br>
                    Faz regredir instantaneamente o gerador danificado em -20% de sua Progressão atual.
                `
            }
        ]
    })
}

function plague() {
    setComp({
        killerImg: 'K15_ThePlague_Portrait.webp',
        bg: 'bg_plague.jpg',
        img1: '08a7f.png',
        desc1: `
            O líquido amarelo e espesso é consumido para induzir o vômito.<br>
            Usado para expurgar o mal do corpo.<br>
            Aumenta o ganho de infecção de Vile Purge em +40% .
        `,
        img2: '0saf.png',
        desc2: `
            A  inalação de seus vapores fétidos aguça a visão da mente.<br>
            As Auras de vômito Sobreviventes infectados são revelados a você por 3 segundos .
        `,
        powerImg: 'plague_vile_purge_4a504df465.png',
        skills: [
            {
                img: 'whats-a-perk-that-you-know-its-not-op-at-all-but-you-get-v0-og0ybtsr2wdf1.png',
                description: `
                    Os sobreviventes sofrem dos Efeitos de Status Amaldiçoado  e Desatento  até o Feitiço: Brinquedinho ser purificado.<br>
                    Pela primeira vez, 90 seconds, apenas o sobrevivente Amaldiçoado pode purificar o totem enfeitiçado.<br>
                    A Aura  do totem enfeitiçado do Feitiço: Brinquedinho é revelada ao sobrevivente Amaldiçoado dentro de .

                `
            },
            {
                img: 'arruinar.png',
                description: `
                Um feitiço que afeta o progresso do reparo do gerador de todos os sobreviventes.
                <br>Sempre que um gerador não estiver sendo reparado por um Sobrevivente, ele regredirá imediata e automaticamente seu progresso de Reparo em 50 / 75 / 100 % da velocidade normal de Regressão.
                `
            }, 
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_05.png',
                description: `
                    Em cada partida, 4 Ganchos aleatórios viram Ganchos do Tormento. Quando um Sobrevivente é enganchado em um Gancho do Tormento, o gerador com mais progresso explode e perde progresso. Os Sobreviventes que estiverem reparando esse gerador vão gritar e revelar a própria localização.
                `
            },
            {
                img: 'so-how-old-where-you-when-you-realized-hex-pentimento-a-v0-5x439tjxgxhd1.png',
                description: `
                    Para cada Totem Reacendido, Hex: Pentimento ganha +1 Ficha, até um máximo de 5 Fichas:<br>
                    1 Ficha: Reduz a velocidade de ação para Cura e Reparo em -20%.<br>
                    2 a 5 Fichas: Aumenta a força da penalidade de Velocidade de Ação em 1 / 2 / 3 % por Ficha, até um máximo de 24 / 28 / 32%.<br>
                    Sobreviventes amaldiçoados por Hex: Pentimento veem as Auras dos Totens Reacendidos a 16 metros.<br>
                    Quando Hex: Pentimento atingir seu limite de 5 Tokens, ele invoca A Entidade para o seguinte efeito:<br>
                    Bloqueia todos os Totens Reacendidos pelo restante do Teste.<br>
                `
            }
        ]
    });
}

function ghost() {
    setComp({
        killerImg: 'K16_TheGhostFace_Portrait.webp',
        powerImg: 'Dessa_BB.png',
        img1: 'IMG_040.png',
        bg: 'ghost_bg.jpg',
        desc1: `
            Concede +10% de Aceleração<br>
            Efeito de status por 5 segundos após marcar um Sobrevivente.
        `,
        img2: 'Dessa_ANJINHO.png',
        desc2: `
            O filme dentro dela capturou sua última noite na cidade.<br>
            Reduz o tempo de marcação de sobreviventes em -20% .
        `,
        skills: [
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_05%20(1).png',
                description: `
                    Em cada partida, 4 Ganchos aleatórios viram Ganchos do Tormento. Quando um Sobrevivente é enganchado em um Gancho do Tormento, o gerador com mais progresso explode e perde progresso. Os Sobreviventes que estiverem reparando esse gerador vão gritar e revelar a própria localização.
                `
            },
            {
                img: 'porcashufasdfg.png',
                description: `
                    Ferimentos infligidos por Ataques Básicos fazem com que os Sobreviventes sofram de Hemorragia e mutilado<br>
                    Efeitos de status por 70/80/90 segundos .​​<br>
                    Aumenta a frequência de sangramento de sobreviventes feridos em 50 / 75 / 100 % pela mesma duração.<br>
                    Aumenta a taxa de regressão na qual a progressão parcial da cura é perdida devido à hemorragia em +25% .
                `
            },
            {
                img: 'sdsadsad.png',
                description: `
                    No início do teste, 4 ganchos aleatórios são transformados em ganchos do Flagelo :<br>
                    As Auras de Scourge Hooks são revelados a você em branco .<br>
                    Cada vez que um Sobrevivente é desenganchado de um Gancho do Flagelo , os seguintes efeitos se aplicam:<br>
                    As auras de todos os outros sobreviventes são reveladas por 5/6/7 segundos .
                `
            },
            {
                img: 'bambooozle.png',
                description: `
                    Depois de saltar uma janela Bamboozle invoca a Entidade para bloquear essa janela pelos próximos 8/12/16 segundos. <br>
                    Janelas bloqueadas não podem ser recuperadas por sobreviventes.<br>
                    Aumenta sua velocidade geral de salto em 5 / 10 / 15 % .
                `
            }
        ]
    });
}

function demogorgon() {
    setComp({
        bg: 'bg_demogorgon.png',
        powerImg: '008as7f.png',
        img1: '008as7f.png',
        desc1: `
        Reduz o tempo de recarga de Ataques de Fragmentação bem-sucedidos usados ​​para quebrar Paredes Quebráveisou paletes em -10% .
        `,
        img2: '0087asf.png',
        desc2: `
            Reduz o tempo de recarga de Ataques de Fragmentação bem-sucedidos usados ​​para atingir Sobreviventes em -10% .
        `,
        killerImg: 'K17_TheDemogorgon_Portrait.webp',
        skills: [
            {
                img: 'barbecue-chili.webp',
                description: `
                    Uma profunda conexão com a Entidade  desbloqueia o potencial na capacidade de leitura da Aura.<br>
                    Depois de enganchar um Sobrevivente, a Aura  de todos os outros Sobreviventes será revelada a você por 4 segundos quando eles estiverem a 52 metros do Gancho.<br>
                    Cada vez que um Sobrevivente é enganchado pela primeira vez, ganhe um bônus acumulativo de 15 % para todos os Pontos de Sangue ganhos na partida.
                `
            },
            {
                img: 'bambooozle.png',
                description: `
                    Depois de saltar uma janela Bamboozle invoca a Entidade para bloquear essa janela pelos próximos 8/12/16 segundos. <br>
                    Janelas bloqueadas não podem ser recuperadas por sobreviventes.<br>
                    Aumenta sua velocidade geral de salto em 5 / 10 / 15 % .
                `
            },
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_11.png',
                description: `
                    Suas orações invocam um poder sombrio que interfere nas chances de sobrevivência.<br>
                    Os 3 Geradores mais distantes de você são bloqueados pela Entidade por 80 segundos no começo da partida.<br>
                `
            },
            {
                img: 'images-removebg-preview.png',
                description: `
                    Todos os geradores afetados são destacados em amarelo .<br>
                    A próxima vez que qualquer Sobrevivente<br>
                    entra no estado de morte<br>
                    de qualquer forma, todos os Geradores afetados explodem e imediatamente começam a regredir, o que remove a Aura destacada.
                    Faz o Gerador regredir instantaneamente em -10% de sua Progressão máxima possível.
                    Faz com que todos os Sobreviventes que consertam os Geradores afetados gritem e revelem sua Aura<br>
                    para você por 8 / 10 / 12 segundos .
                `
            }
        ]
    })
}

function oni() {
    setComp({
        bg: 'bg_oni.jpg',
        killerImg: 'The_Oni.webp',
        powerImg: '008as7fad.png',
        img1: '00as8f.png',
        desc1: 'Aumenta a duração da Fúria Sangrenta em +8 segundos .',
        img2: '0sa5.png',
        desc2: `
            Aumenta a frequência de geração de Orbes de Sangue de Sobreviventes feridos em +33% .<br>
            Aumenta o número de Orbes de Sangue gerados quando Sobreviventes realizam interações específicas em +1 .
        `,
        skills: [
            {
                img: 'barbecue-chili.webp',
                description: `
                    Uma profunda conexão com a Entidade  desbloqueia o potencial na capacidade de leitura da Aura.<br>
                    Depois de enganchar um Sobrevivente, a Aura  de todos os outros Sobreviventes será revelada a você por 4 segundos quando eles estiverem a 52 metros do Gancho.<br>
                    Cada vez que um Sobrevivente é enganchado pela primeira vez, ganhe um bônus acumulativo de 15 % para todos os Pontos de Sangue ganhos na partida.
                `
            },
            {
                img: 'arruinar.png',
                description: `
                    Um feitiço que afeta o progresso do reparo do gerador de todos os sobreviventes.
                    <br>Sempre que um gerador não estiver sendo reparado por um Sobrevivente, ele regredirá imediata e automaticamente seu progresso de Reparo em 50 / 75 / 100 % da velocidade normal de Regressão.
                `
            },
            {
                img: 'whats-a-perk-that-you-know-its-not-op-at-all-but-you-get-v0-og0ybtsr2wdf1.png',
                description: `
                    Os sobreviventes sofrem dos Efeitos de Status Amaldiçoado  e Desatento  até o Feitiço: Brinquedinho ser purificado.<br>
                    Pela primeira vez, 90 seconds, apenas o sobrevivente Amaldiçoado pode purificar o totem enfeitiçado.<br>
                    A Aura  do totem enfeitiçado do Feitiço: Brinquedinho é revelada ao sobrevivente Amaldiçoado dentro de .
                `
            },
            {
                img: 'so-how-old-where-you-when-you-realized-hex-pentimento-a-v0-5x439tjxgxhd1.png',
                description: `
                    Para cada Totem Reacendido, Hex: Pentimento ganha +1 Ficha, até um máximo de 5 Fichas:<br>
                    1 Ficha: Reduz a velocidade de ação para Cura e Reparo em -20%.<br>
                    2 a 5 Fichas: Aumenta a força da penalidade de Velocidade de Ação em 1 / 2 / 3 % por Ficha, até um máximo de 24 / 28 / 32%.<br>
                    Sobreviventes amaldiçoados por Hex: Pentimento veem as Auras dos Totens Reacendidos a 16 metros.<br>
                    Quando Hex: Pentimento atingir seu limite de 5 Tokens, ele invoca A Entidade para o seguinte efeito:<br>
                    Bloqueia todos os Totens Reacendidos pelo restante do Teste.<br>
                `
            },
        ],
        sidebarHtml: `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_RlGsuyqGI4?si=jLwdHm3ElJCRspZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
    })
}

function blight() {
    reset('bg_blight.png');
    document.querySelector('#container .bg').style.backgroundSize = '100% 99%';
}

function deathslinger() {
    setComp({
        killerImg: 'DBD_Killer_Deathslinger_only_ffbf514957.png',
        powerImg: 'mercenariolatest.png',
        img1: 'charutodapaz.png',
        desc1: `
            Diminui em 1s a duração do atordoamento que ocorre quando um Sobrevivente se liberta.
        `,
        img2: 'addon0_n.png',
        desc2: `
            Diminui em 0,35s o tempo de recarregar do Redentor.
        `,
        bg: 'bg_mercenario.jpg',
        skills: [
            {
                img: 'save-the-best-for-last.png',
                description: `
                    Sempre que você atingir um Sobrevivente diferente da sua Obsessão
                    com um Ataque Básico , Guarde o Melhor para o Final ganha +1 Ficha , até um máximo de 6 / 7 / 8 Fichas :<br>
                    Concede uma redução de -4% no tempo de recarga em Ataques Básicos bem-sucedidos por Ficha, até um máximo de 24 / 28 / 32 % .<br>
                    Sempre que você atingir sua Obsessão com um Ataque Básico ou Especial , Guarde o Melhor para o Final perde -2 Fichas .
                `
            },
            {
                img: 'abracosinistroimages.png',
                description: `
                    Após fisgar um Sobrevivente pela primeira vez, você ganha um ponto, e quando você atingir quatro pontos (ou seja, fisgar todos os quatro Sobreviventes uma vez), todos os geradores restantes serão bloqueados pela Entidade por um período significativo, revelando a aura da Obsessão.
                `
            },
            {
                img: 'bacf577f-a9d2-4cca-aeca-a2cef44acdac_removalai_preview.png',
                description: `
                    Você fica obcecado por um Sobrevivente.<br>
                    Depois de enganchar a Obsessão, Garantia do Morto ativa por 35 segundos.<br>
                    Se um Sobrevivente parar de reparar um Gerador antes de terminar os reparos, enquanto a habilidade estiver ativa, a Entidade bloqueia o Gerador até o fim do efeito da Garantia do Morto.
                `
            },
            {
                img: '7f9fac6b-915b-4c7c-9125-d3e030785c28_removalai_preview.png',
                description: `
                    Você fica animado na expectativa de enganchar sua presa. Aumenta sua velocidade durante o transporte de corpos em 6/12/18 %. Ao transportar um corpo, seu Raio de Terror é aumentado em 0/3/6 metros.
                `
            }
        ],
        sidebarHtml: `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YfL3WPU8nyE?si=zuLREKZL4KMlhkjD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
    });
}

function twins() {
    setComp({
        bg: 'bg_twins.jpg',
        powerImg: '0asf.png',
        killerImg: 'DBD_Killer_Twins_only_525459f74d.png',
        img1: '008as7faa.png',
        desc1: `
            Aumenta sua velocidade de movimento ao controlar Victor em +0,6 m/s .
        `,
        img2: '0addsf.png',
        desc2: `
            Reduz o tempo de carga de um ataque em -0,1 segundo .
        `,
        skills: [
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_11.png',
                description: `
                    Suas orações invocam um poder sombrio que interfere nas chances de sobrevivência.<br>
                    Os 3 Geradores mais distantes de você são bloqueados pela Entidade por 80 segundos no começo da partida.<br>
                `
            },
            {
                img: '0saasdasdsadasf.png',
                description: `
                    Sobreviventes que recebem um Golpe de Proteção sofrem com o Quebrado
                    <br>
                    Efeito de status pelos próximos 60 / 70 / 80 segundos .

                `
            },
            {
                img: 'asdasdssdasa.png',
                description: `
                    Quando um Sobrevivente interage com um Interruptor de Portão de Saída, você recebe uma Notificação de Ruído Alto e a Entidade
                    bloqueia ambos os interruptores do portão de saída<br>
                    por 12 segundos e mais 6 / 9 / 12 segundos por Token em sua posse, até um máximo combinado de 36 / 48 / 60 segundos .

                `
            },
            {
                img: 'porcashufasdfg.png',
                description: `
                    Ferimentos infligidos por Ataques Básicos fazem com que os Sobreviventes sofram de Hemorragia e mutilado<br>
                    Efeitos de status por 70/80/90 segundos .​​<br>
                    Aumenta a frequência de sangramento de sobreviventes feridos em 50 / 75 / 100 % pela mesma duração.<br>
                    Aumenta a taxa de regressão na qual a progressão parcial da cura é perdida devido à hemorragia em +25% .
                `
            }
        ]
    });
}

function trickster() {
    setComp({
        bg: 'bg_trickster.png',
        powerImg: '08sa7f.png',
        img1: '0imgds.png',
        desc1: 'Aumenta sua velocidade de movimento no estado de arremesso em +0,1 m/s .',
        img2: '4105a.png',
        desc2: 'Aumenta a duração do Evento Principal em +0,4 segundos para cada Golpe de Lâmina bem-sucedido .',
        killerImg: 'DBD_Killer_Trickster_only_d4def7ebe7.png',
        skills: [
            {
                img: 'sadasdasd.png',
                description: `
                    Quando você vasculha Armários , as Auras de todos os Sobreviventes a 8 metros de todos os armários ficam expostas para você por 3/4/5 segundos.<br>
                    Esta vantagem tem um tempo de recarga de 30 segundos.

                `
            },
            {
                img: 'imagessdsfsdfsdfdsd.png',
                description: `
                    As Auras dos Ganchos brancos são reveladas a você<br>
                    Cada vez que um Sobrevivente é desenganchado de um Gancho do Flagelo , os seguintes efeitos se aplicam:<br>
                    O Sobrevivente sofre os efeitos de Hemorragia e Status Mutilado até ser curado.<br>
                    Ao ser curado, o Sobrevivente sofre uma penalidade de 7 / 8 / 9  % na Velocidade de Ação para Cura e Reparo até ser ferido novamente.
                `
            },
            {
                img: '108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_05%20(1).png',
                description: `
                    Em cada partida, 4 Ganchos aleatórios viram Ganchos do Tormento. Quando um Sobrevivente é enganchado em um Gancho do Tormento, o gerador com mais progresso explode e perde progresso. Os Sobreviventes que estiverem reparando esse gerador vão gritar e revelar a própria localização.
                `
            }
        ]
    })
}