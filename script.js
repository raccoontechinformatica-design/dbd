

const slices = document.querySelector('#slices');
const selectKiller = document.querySelector('select#killer');

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);

    
    // selectKiller.value = params.get('killer') ? params.get('killer') : 'o cacador';
  
    switchVal(params.get('killer') ? params.get('killer') : 'trapper'); 
    // selectKiller.dispatchEvent(new Event('change'));
    // watchSidebar();
    await fx();

    hasOverflowSidebar();

    const btnToggleWallpaper = document.querySelector('#toggleWallpaper');
    btnToggleWallpaper.onclick = () => toggleWallpaper();
});

document.addEventListener("selectKiller", async (e) => {
    const params = new URLSearchParams(window.location.search);

    params.set('killer', e.detail.value);
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);

    window.location.href = `?killer=${e.detail.value}`;
    // switchVal(value);

    // watchSidebar();
    await fx(false);

});
    
function toggleExpandBtn() {
    const sidebarContent = document.querySelector('#sidebar-content');
    const expandMoreBtn = document.querySelector('#expand-more');
    const hasntContent = sidebarContent.innerHTML.trim().length == 0;
    expandMoreBtn.style.display = hasntContent ? 'none' : 'block';
    sidebarContent.style.display =  hasntContent ? 'none' : 'block';

}

function watchSidebar() {
    // diminuir sidebar
    const sidebarContent = document.querySelector('#sidebar-content');
    const main = document.querySelector('.main')
    if(sidebarContent.innerHTML.trim().length == 0) {
        console.log(main)
        sidebarContent.style.display = 'none';
        main.style.alignItems = 'flex-start';
    } else {
        sidebarContent.style.display = 'flex';
        main.style.alignItems = 'normal';

    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function firstAnimation(delayProp = 500) {
    const header = document.querySelector('#header');
    const sidebar = document.querySelector('#sidebar');
    const content = document.querySelector('#container > div:not(.bg)');

    const elements = [header, sidebar, content].filter(Boolean);

    // cria um array de Promises que resolvem quando a transição termina
    const promises = elements.map((el, index) => {
        return new Promise(resolve => {
            const delay = delayProp; // 500ms entre cada
            setTimeout(() => {
                const currentOpacity = parseFloat(getComputedStyle(el).opacity);
                el.style.opacity = currentOpacity === 0 ? 1 : 0;

                // escuta o fim da transição
                const handler = (e) => {
                    if (e.propertyName === 'opacity') { // garante que é a transição de opacity
                        el.removeEventListener('transitionend', handler);
                        resolve();
                    }
                };
                el.addEventListener('transitionend', handler);
            }, delay);
        });
    });

    // espera todas terminarem
    return Promise.all(promises);
}

async function opacityFx(notFirst = true) {
    const imgs = document.querySelectorAll(`
        #slices img.icons,
        .section-skill .thumbnail,
        #killerImg,
        #poder
    `);

    const descs = document.querySelectorAll(`
        #container .slice1 .compDesc,
        #container .middle .text
    `);

    const imgsArr = [...imgs];
    const descsArr = [...descs];

    console.log({ imgsArr, descsArr });

    const bg = document.querySelector('#container .bg');
    if (bg) bg.style.opacity = '0';

    // --- ESTADO INICIAL ---
    imgsArr.forEach(img => {
        img.style.opacity = '0';
    });

    descsArr.forEach(text => {
        text.style.opacity = '0';
        text.style.fontSize = '0px';
    });

    // espera um frame para o navegador aplicar o "estado inicial"
    await new Promise(requestAnimationFrame);

    // --- ESTADO FINAL ---
    if (bg) bg.style.opacity = '.8';

    imgsArr.forEach(img => {
        img.style.opacity = '1';
    });

    descsArr.forEach(text => {
        text.style.opacity = '1';
        text.style.fontSize = '12px';
    });
}

async function fx(notFirst = true) {

    await firstAnimation(800);

    await opacityFx(notFirst);
}


// set complementos
function setComp({ img1, img2, desc1, desc2, killerImg, oferendaImg, powerImg, skills, bg, sidebarHtml }) {

   const script = document.querySelector('script[data-name="script"]');

    const url = new URL(script?.src);
    const isExternal = url.searchParams.get("isExternal");

    let endpoint = '';
    
    if(isExternal && JSON.parse(isExternal)) {
        endpoint = 'https://painel.raccoontech.info/services/dbd/';
    }

    // set img
    const comp1 = document.querySelector(`.comp[data-num="1"]`);
    const comp2 = document.querySelector(`.comp[data-num="2"]`);

    comp1.src = endpoint + `assets/perks/${img1}`;
    comp2.src = endpoint +  `assets/perks/${img2}`;

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
    killer.src =  `${endpoint}assets/killers/${killerImg}`;

    // poder
    const power = document.querySelector('img#poder');
    power.src = `${endpoint}assets/killers/${powerImg}`;

    //bg
    const backgROUD = document.querySelector('#container .bg');
    backgROUD.style.backgroundImage = `url("${endpoint}assets/${bg}")`;

    // skills

    const skillEls = document.querySelectorAll('.section-skill .divider');

    
    if(skills && skills.length != 0) {
        skills.forEach((skill, index) => {
            const skillEl = skillEls[index];
            if(!skillEl) return;
            skillEl.innerHTML = '';
            
            const thumbnail = document.createElement('img');
            if(!thumbnail) return;

            thumbnail.classList.add('thumbnail');
            thumbnail.src = `${endpoint}assets/perks/${skill.img}`;

            const descEl = document.createElement('div');
            if(!descEl) return;

            descEl.classList.add('text');
            descEl.innerHTML = skill.description;

            skillEl.appendChild(thumbnail);
            skillEl.appendChild(descEl);
        })
    }

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

function reset(bg) {
    slices.style.display = 'none';
    const sidebarContent = document.querySelector('#sidebar-content');
    sidebarContent.innerHTML = '';
    document.querySelector('.main').style.display = 'block';

    setComp({
        bg,
    });
}

async function toggleWallpaper() {
  const header = document.querySelector('#header');
  const sidebar = document.querySelector('#sidebar');
  const content = document.querySelector('#container div:not(.bg)');

  [header, sidebar, content].forEach((element) => {
    if (!element) return; // evita erro se for null

    // pega o valor atual real (do CSS ou inline)
    const currentOpacity = parseFloat(getComputedStyle(element).opacity);

    // alterna entre 0 e 1
    element.style.opacity = currentOpacity === 0 ? 1 : 0;
  });

}

function showWallpaperFirst() {
    const header = document.querySelector('#header');
    const sidebar = document.querySelector('#sidebar');
    const content = document.querySelector('#container div:not(.bg)');

      [header, sidebar, content].forEach((element) => {
        if (!element) return; // evita erro se for null

        // pega o valor atual real (do CSS ou inline)
        const currentOpacity = parseFloat(getComputedStyle(element).opacity);

        // alterna entre 0 e 1
        element.style.opacity = currentOpacity === 0 ? 1 : 0;
    });
}


function randomKiller() {
    let random = killers[Math.floor(Math.random()*killers.length)];
    window.location.href = '?killer=' + random.value;
    console.log({random})
}