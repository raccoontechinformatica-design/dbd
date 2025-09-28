const slices = document.querySelector('#slices');
const selectKiller = document.querySelector('select#killer');

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    selectKiller.value = params.get('killer') ? params.get('killer') : 'o cacador';
    switchVal(params.get('killer') ? params.get('killer') : 'o cacador'); 
    // selectKiller.dispatchEvent(new Event('change'));

    hasOverflowSidebar();
});

selectKiller.onchange = function() {
    const value = this.value;
    const params = new URLSearchParams(window.location.search);

    params.set('killer', value);
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);

    switchVal(value);
}

function switchVal(value) {
    const slices = document.querySelector('#slices');
    slices.style.display = 'block';
    
    switch(value) {
        case 'a cacadora':
            return cacadora();
        case 'o cacador':
            return cacador();
        case 'o espectro':
            return espectro();
        case 'pyramid head':
            return pyramidHead();
        case 'o caipira':
            return caipira();
        case 'nurse':
            return nurse();
    }
}

// set complementos

function setComp({ img1, img2, desc1, desc2, killerImg, oferendaImg, powerImg, skills, bg, sidebarHtml }) {
    // set img
    const comp1 = document.querySelector(`.comp[data-num="1"]`);
    const comp2 = document.querySelector(`.comp[data-num="2"]`);

    comp1.src = `assets/perks/${img1}`;
    comp2.src = `assets/perks/${img2}`;

    // set description
    const comp1Desc = document.querySelector(`.compDesc[data-num="1"]`);
    const comp2Desc = document.querySelector(`.compDesc[data-num="2"]`);

    comp1Desc.innerHTML = desc1;
    comp2Desc.innerHTML = desc2;

    // oferenda
    // const oferenda = document.querySelector('img#oferenda');
    // oferenda.src = `assets/killers/${oferendaImg}`;

    const sidebarContent = document.querySelector('#sidebar-content');
    if(!sidebarHtml) {
        sidebarContent.innerHTML = '';

    } else {
        sidebarContent.innerHTML = sidebarHtml;
    }
    

    const killer = document.querySelector(`#killerImg`);
    killer.src = `assets/killers/${killerImg}`;

    // poder
    const power = document.querySelector('img#poder');
    power.src = `assets/killers/${powerImg}`;

    //bg
    const backgROUD = document.querySelector('#container .bg');
    backgROUD.style.backgroundImage = `url("assets/${bg}")`;

    // skills

    const skillEls = document.querySelectorAll('.section-skill .divider');

    
    if(skills && skills.length != 0) {
        skills.forEach((skill, index) => {
            const skillEl = skillEls[index];
            skillEl.innerHTML = '';
            
            const thumbnail = document.createElement('img');
            thumbnail.classList.add('thumbnail');
            thumbnail.src = `assets/perks/${skill.img}`;

            const descEl = document.createElement('div');
            descEl.classList.add('text');
            descEl.innerHTML = skill.description;

            skillEl.appendChild(thumbnail);
            skillEl.appendChild(descEl);
        })
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
        bg: 'bg1.jpeg',
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
        bg: 'bg_hunters.jpg',
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
        bg: 'bg_espectro.png',
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
        bg: 'bg_caipira.png',
        killerImg: 'K03_TheHillbilly_Portrait.webp',
        powerImg: 'caipira_k.png',
        img1: 'FulliconAddon_loProChains.png',
        img2: 'FulliconAddon_theThompsonsMix.png',
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
    slices.style.display = 'none';
    const sidebarContent = document.querySelector('#sidebar-content');
    sidebarContent.innerHTML = '';

    setComp({
        bg: 'bg_nurse.png',
        // sidebarHtml: `
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/XI9zffYkgPw?si=1Vpctd8KWYVXIqJf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        // `
    })
}

function hasOverflowSidebar() {
    const sidebarContent = document.querySelector('.main #sidebar #sidebar-content');
    const expandMoreBtn = document.querySelector('#expand-more');
    const expandMoreBtnText = document.querySelector('#expand-more span');
    const hasOverflow = sidebar.scrollHeight > sidebar.clientHeight || sidebar.scrollWidth > sidebar.clientWidth;

    expandMoreBtnText.innerText =  'Expandir';
    
    expandMoreBtn.addEventListener("click", function () {
            sidebarContent.classList.toggle('expanded');

        if (sidebarContent.style.maxHeight) {
            sidebarContent.style.maxHeight = null; // recolhe
            expandMoreBtnText.innerText = "Expandir";
        } else {
            sidebarContent.style.maxHeight = sidebarContent.scrollHeight + "px"; // expande
            expandMoreBtnText.innerText = "Recolher";
        }
    });

}




