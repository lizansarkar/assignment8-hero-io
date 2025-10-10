

const getStoredCard = () => {
    const storeCardStr = localStorage.getItem('reedCard')
    if(storeCardStr) {
        const sotoreCardData = JSON.parse(storeCardStr)
        return sotoreCardData;
    }
    else {
        return [];
    }
}

const addToLocalStore = (id) => {
    const sotoreCardData = getStoredCard()
    if(sotoreCardData.includes(id)) {
        alert("ai id age theke ache !!!!!!")
        alert("asldkfhaskjdhfkjasd")
    }
    else {
        sotoreCardData.push(id)
        const data = JSON.stringify(sotoreCardData)
        localStorage.setItem("reedCard", data)
    }
}

export { addToLocalStore, getStoredCard };