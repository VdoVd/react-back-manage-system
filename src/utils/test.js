const formatDat=(time)=>{
    if(!time)return ''
    const date=new Date(time)
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'
        +date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
}
const date=Date.now()
console.log(formatDat(date))
