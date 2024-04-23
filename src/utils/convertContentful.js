
export default function convertdistData(data){
    const items=data.items.reverse()
    let updataData= items.map((eachEntry)=>{
        
        const fields=eachEntry.fields
        const blockPic = data.includes.Asset.find((asset) => asset.sys.id === eachEntry.fields.tabImage.sys.id);
        const cardDetailsIds=fields.cardDetails.map((eachId)=>{

            return eachId.sys.id
        })
        const Entries=data.includes.Entry.filter((eachEl)=>cardDetailsIds.includes(eachEl.sys.id))
        
        let eachDistTabDetails = {}
        eachDistTabDetails.id =fields.internalName
        eachDistTabDetails.heading=fields.heading
        eachDistTabDetails.paragraph=fields.paragraph.content[0].content[0].value
        eachDistTabDetails.image=convertImage(blockPic)
        let convertcardDetails=convertCardDetails(Entries,data.includes.Asset)
        const reversecardDetails=convertcardDetails.reverse()
        eachDistTabDetails.cardDetailsmenu=reversecardDetails
        
        return eachDistTabDetails
        


    })
    return updataData

}


const convertCardDetails=(Entries,assertData)=>{
    const updateCard=Entries.map((eachCard)=>{
        let cardItem={}
        const fields=eachCard.fields
        
        const cardItemImage =assertData.find((asset) => asset.sys.id === eachCard.fields.cardItemImage.sys.id);
        const cardItemDetailsImage=assertData.find((asset) => asset.sys.id === eachCard.fields.cardItemDetailImage.sys.id);
        cardItem.id=fields.id
        cardItem.heading=fields.heading
        cardItem.paragraph=fields.paragraph
        cardItem.cardItemDetails=fields.cardItemDetailList
        cardItem.cardItemImage=convertImage(cardItemImage)
        cardItem.cardItemDetailsImage=convertImage(cardItemDetailsImage)
        return cardItem

    })
    return updateCard
}


const convertImage=(Image)=>{
    const imageUrl = `https:${Image.fields.file.url}`;
    return imageUrl
}