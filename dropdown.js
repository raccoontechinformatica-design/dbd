const itemList = document.querySelector('#itemlist');

const killers = [
  { value: "trapper", name: "O caçador" },
  { value: "wraight", name: "O espectro" },
  { value: "billy", name: "O caipira" },
  { value: "nurse", name: "A enfermeira" },
  { value: "meyers", name: "O vulto" },
  { value: "huntress", name: "A caçadora" },
  { value: "hag", name: "A bruxa" },
  { value: "doctor", name: "O doutor" },
  { value: "buba", name: "O canibal" },
  { value: "pig", name: "A porca" },
  { value: "freddy", name: "O pesadelo" },
  { value: "spirit", name: "O espírito" },
  { value: "legion", name: "A legião" },
  { value: "clown", name: "O palhaço" },
  { value: "plague", name: "A praga" },
  { value: "ghost face", name: "Ghost face" },
  { value: "demogorgon", name: "O demogorgon" },
  { value: "oni", name: "O oni" },
  { value: "blight", name: "O flagelo" },
  { value: "deathslinger", name: "O mercenário" },
  { value: "pyramid head", name: "O carrasco" },
  { value: "twins", name: "Os gêmeos" },
  { value: "trickster", name: "O trapaça" },
  { value: "nemesis", name: "O nemesis" },
];

document.addEventListener('DOMContentLoaded', function() {
    setSearch();
});

function debounce(fn, delay = 200) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}


function doSearch(value) {
    const found = killers.filter(el => el.name.toLowerCase().trim().includes(value.toLowerCase().trim()) || el.value.toLowerCase().trim().includes(value.toLowerCase().trim()));
    const mainDropdown = document.querySelector('#main-dropdown');
    
    console.log({found})

    if(value.length === 0) {
        fillKillers(killers);
        return;
    }

    fillKillers(found);
}


function createDropdown() {
    const dropdown = document.createElement('details');
    const dropdownSum = document.createElement('summary');
    const sumTitle = document.createElement('span');
    // sumTitle.id = 'search';
    
    const params = new URLSearchParams(window.location.search);
    const killerParam = params.get('killer') ? params.get('killer') : 'trapper';
    sumTitle.innerText = killers.find(killer => killer.value === killerParam).name;

    const search = document.createElement('input');
    console.log({search})
    search.type = 'search';
    search.id = 'search';
    search.placeholder = 'Digite sua busca...';
    search.oninput = (e) => doSearch(e.target.value);
    dropdown.appendChild(search);

    const mainDropdown = document.createElement('div');
    mainDropdown.id = 'main-dropdown';
    dropdown.appendChild(mainDropdown);
    // dropdown.onclick = () => sumTitle.focus();


    // sumTitle.addEventListener("click", () => fillKillers(killers));
    // sumTitle.addEventListener("focus", () => fillKillers(killers));

    dropdown.addEventListener('toggle', function(e) {
        // sumTitle.focus();
        if(dropdown.open) {
            search.focus();
            search.value = '';
        }
        fillKillers(killers);
    });

    // sumTitle.addEventListener('blur', () => {
    //     sumTitle.value = killers.find(killer => killer.value === killerParam).name;
    // });

    dropdownSum.appendChild(sumTitle);
    
    dropdown.appendChild(dropdownSum);
    itemList.appendChild(dropdown);

    sumTitle.addEventListener('input', (e) => {
        fillKillers(killers);
         debounce(doSearch(e.target.value), 100);
    })

    fillKillers(killers);
    
}

function fillKillers(killers) {
    const mainDropdown = document.querySelector('#main-dropdown');
    const dropdown  = document.querySelector('.dropdown details');
    const dropdownSum  = document.querySelector('.dropdown summary'); 

    // Substitui o conteúdo anterior
    mainDropdown.innerHTML = '';

    killers.forEach(killer => {
        const a = document.createElement("a");
        a.href = "javascript:void(0)";
        a.title = killer.value.toUpperCase();
        a.textContent = killer.name;
        a.classList.add("dropdown-item");
        a.dataset.value = killer.value;

        a.onclick = () => {
            selecionarKiller(killer.value, killer.name, dropdownSum, dropdown, a);
        };

        mainDropdown.appendChild(a);
    });
}


function selecionarKiller(value, name, summary, dropdown, clicked) {
  summary.textContent = name;       // muda o texto do <summary>
  dropdown.open = false;            // fecha o dropdown
  console.log("Selecionado:", value);

  const selectKillerEv = new CustomEvent('selectKiller', {
      detail: { value, name }
  });
  document.dispatchEvent(selectKillerEv);

  // remove marcador de todos
  document.querySelectorAll(".dropdown-item").forEach(el => {
    el.classList.remove("selected");
  });

  // adiciona marcador ao clicado
  clicked.classList.add("selected");
}

function setSearch() {
    createDropdown();
}