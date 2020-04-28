import moment from "moment"



export const getchartdata=(waterbill)=>{
    let payment=[]
    let revenue=[]
    const monthdata=getMonth(waterbill)
    const montharr=monthdata.intdate
    for(let x in montharr){
        let payint=0;
        let revint=0;
        for( let y in waterbill){
            if(isMonth(waterbill[y].date,montharr[x])){
                if(waterbill[y].amount<0){
                    payint=payint + parseFloat(waterbill[y].amount)
                }else{
                    revint=revint + parseFloat(waterbill[y].amount)
                }
            }
        }
        payint=0-payint
        payment.push(payint)
        revenue.push(revint)
    }
    
    return {name:monthdata.text,payment:payment,revenue:revenue}

}

function getMonth(waterbill){
   // console.log(waterbill)
    let montharr=[]
    const  current = moment()
    for(let x in waterbill){
        let date=moment(waterbill[x].date)
        //console.log(date.month())
        if(current.year()==date.year()){
            if(montharr.indexOf(date.month())==-1){
                montharr.push(date.month())
            }
        }
    }
   // console.log(montharr)
    montharr.sort(compare);
    let month_text=montharr.map(x =>{
         x=parseFloat(x)+1
         return x+"月"
    })
   // console.log()
    return { intdate:montharr,text:month_text}
}

function isMonth(date,mon){
    const getdate= moment(date)
    const current = moment()
    if(current.year()==getdate.year() && mon ==getdate.month() ){
        return true
    }
    return false
}



//排序
function compare(val1,val2){
    return val1-val2;
};
