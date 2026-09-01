
//buscar os links salvos

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSaved = JSON.parse(myLinks) || [];

    return linksSaved;
}

//salvar link no localStorage

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //se já tiver link salvo com mesmo ID, não salvar
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log("Link já existe na lista");
        return;
    }

    //adicionar novo link na lista
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("Link salvo com sucesso");
}

//remover link do localStorage

export function deleteLink(links, id){

    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("Link removido com sucesso");

    return myLinks

}