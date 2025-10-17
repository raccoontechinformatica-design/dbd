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

async function getCharactersInfo(role) {
 const response = await axios.get('https://deadbydaylight.com/page-data/pt-br/jogo/personagens/page-data.json');
    const {data} = response;
    const pageContext = data.result.pageContext;
    const {edges} = pageContext.postsData.characters;
    let nodeList = Array.from(edges).map(el => el.node);
    if(role) {
        nodeList = nodeList.filter(el => el.role == role)
    }
    let charactersJson = nodeList.map(el => ({
        title: el.title,
        slug: el.slug,
        picture: el.headshot.url
    })).sort();
    return charactersJson;
}

async function saveKillersJSON() {
 const slugs = await getSlugs('killer');
    // const data = await getData(slugs[0]);
    slugs.forEach(async(el) => {
        console.log(el)
        const data = await getData(el);
        await saveItem(el, 'killers', data);
        await wait(3)
    })
}

function extractUrls(obj) {
  const urls = [];

  function traverse(value) {
    if (typeof value === 'string') {
      const matches = value.match(/https?:\/\/[^\s"']+/g);
      if (matches) urls.push(...matches);
    } else if (Array.isArray(value)) {
      value.forEach(traverse);
    } else if (typeof value === 'object' && value !== null) {
      Object.values(value).forEach(traverse);
    }
  }

  traverse(obj);
  return urls;
}

function extractUrlsWithParent(obj) {
  const results = [];

  function traverse(value, parent) {
    if (typeof value === 'string') {
      const matches = value.match(/https?:\/\/[^\s"']+/g);
      if (matches) {
        matches.forEach(url => results.push({ url, parent }));
      }
    } else if (Array.isArray(value)) {
      value.forEach(item => traverse(item, value));
    } else if (typeof value === 'object' && value !== null) {
      Object.values(value).forEach(v => traverse(v, value));
    }
  }

  traverse(obj, null);
  return results;
}

async function getPersonagens(cb) {
  const slugs = await getSlugs('killer');
  const endpoint = (slug) => `https://deadbydaylight.com/page-data/pt-br/jogo/personagens/${slug}/page-data.json`;
  const json = [];

  for (const slug of slugs) {
    const url = endpoint(slug);
    const response = await fetch(url);
    const data = await response.json();
    const extracted = extractUrlsWithParent(data);
    json.push(extracted);
    if(cb) {
        cb(slug, extracted)
    }
    await wait(3); // respeita delay
  }

  return json;
}

(async() => {
    const personagens = await getPersonagens(async(slug, personagem) => {
        await saveItem('personagem_'+slug, 'killers/personagens', personagem)
    });
})();