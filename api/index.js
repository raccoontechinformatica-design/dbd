const { default: axios } = require("axios");
const fs = require('fs');

async function getSlugs(role) {
    const response = await axios.get('https://deadbydaylight.com/page-data/pt-br/jogo/personagens/page-data.json');
    const {data} = response;
    const pageContext = data.result.pageContext;
    const {edges} = pageContext.postsData.characters;
    let slugs = Array.from(edges).map(el => el.node);
    if(role) {
        slugs = slugs.filter(el => el.role == role)
    }
    slugs = slugs.map(el => el.slug).sort()
    return slugs;
}

function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function getData(slug) {
    const endpoint =  `https://deadbydaylight.com/page-data/pt-br/jogo/personagens/${slug}/page-data.json`;
    const response = await axios.get(endpoint);
    return response.data;
}

async function saveItem(title, path, data) {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(`${path}/${title}.json`, jsonData, 'utf8');
}

(async() => {
    const slugs = await getSlugs('killer');
    // const data = await getData(slugs[0]);
    slugs.forEach(async(el) => {
        console.log(el)
        const data = await getData(el);
        await saveItem(el, 'killers', data);
        await wait(3)
    })
})();