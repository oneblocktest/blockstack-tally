import moment from "moment"



/*获取余额合计与图表数组 */
export const getbalance=(debit)=>{ 
    let balancetotal=0
    let chartdata={
        namedata:[],
        valuedata:[]
    }
    for(let x in debit){
        let valuearr={
            name:debit[x].card,
            value:debit[x].balance
        }
        chartdata.namedata.push(debit[x].card)
        chartdata.valuedata.push(valuearr)
        balancetotal=balancetotal+parseFloat(debit[x].balance)
    }
    
    return {balancetotal:balancetotal,chartdata:chartdata}
}

/* 获取本月支出收入合计与图表数组 */
export const getcategorTotal=(waterbill,revenueCategory)=>{
    let total=0
    let chartdata={
        namedata:[],
        valuedata:[]
    }
    const bill=runningmonth(waterbill)
    for(let x in revenueCategory){
        let arr=getcategorytotal(bill,revenueCategory[x].name)
        if(arr.value!=0){
            chartdata.namedata.push(revenueCategory[x].name)
            chartdata.valuedata.push(arr)
            total=total + arr.value
        }
    }
    return {categorTotal:total,chartdata:chartdata}
}
/*获取本月类别合计*/
const getcategorytotal=(bill,category)=>{
    let total=0
    for(let x in bill){
        if(bill[x].type==category){
            total=total+ parseFloat(bill[x].amount)
        }
    }
    return {name:category,value:total}
}

/* 本月判断函数 */
function isDateCurrentMonth(date) {
    var momentDate = moment(date)
    var current = moment()
    if(momentDate.year() == current.year() && momentDate.month() == current.month()){
        return true
    }
    return false
}


/* 获取本月账单 */
const runningmonth=(waterbill)=>{
    let bill=[]
    for(let x in waterbill){
        if(isDateCurrentMonth(waterbill[x].date)){
            bill.push(waterbill[x])
        }
    }
    return bill
}

/* 接 */
/*获取指定范围账单*/

//判断日期是否在内
function isDateCurrentDay(update, mon, date) {
    let momentDate = moment(date)
    let current = moment()
    let test=current.month()
    let yeartest=current.year()
    let startDate= moment(new Date(yeartest,test-1-mon,update))
    let endDate=moment(new Date(yeartest,test-mon,update))
    
    if (momentDate.isBefore(endDate) && momentDate.isAfter(startDate) || (momentDate.isSame(startDate) || momentDate.isSame(endDate))) {
        return true
    } else {
        return false
    }
}


//获得账单日期内账单
export const getcredittotal=(waterbill,credit,mon)=>{
    let total=0
    for(let x in waterbill){
        for(let y in credit){
            if(waterbill[x].card==credit[y].card){
                if(isDateCurrentDay(credit[y].update, mon,waterbill[x].date)){
                        total=total+parseFloat(waterbill[x].amount)
                }
        }
      
    }
}
    return total
}

/* 
function revenueTotal(waterbill, revenueCategory) {
    var res = {}
    //方法1： 根据amount正负判断，可以不需要revenueCategory入参
    /* for(let i = 0; i < waterbill.length; i++){
        let waterbillItem = waterbill[i]
        if(waterbillItem.amount >= 0){
            res[waterbillItem.type] = res[waterbillItem.type] + waterbillItem.amount
        }
    } */
    //方法2： 根据传入revenueCategory的类型判断
    /*
     for(i = 0; i < waterbill.length; i++){
        waterbillItem = waterbill[i]
        if(revenueCategory.indexOf(waterbillItem.type) < 0){//不在范围内
             continue
        }
        res[waterbillItem.type] = res[waterbillItem.type] + waterbillItem.amount
    }

    return res
}
 */
/* export function paymentTotal(waterbill, paymentCategory) {
    var res = {}
    //方法1： 根据amount正负判断，可以不需要paymentCategory入参
    for(let i = 0; i < waterbill.length; i++){
        let waterbillItem = waterbill[i]
        if(waterbillItem.amount < 0){
            res[waterbillItem.type] = res[waterbillItem.type] + waterbillItem.amount
        }
    }
    //方法2： 根据传入paymentCategory的类型判断
    // for(i = 0; i < waterbill.length; i++){
    //     waterbillItem = waterbill[i]
    //     if(paymentCategory.indexOf(waterbillItem.type) < 0){//不在范围内
    //         continue
    //     }
    //     res[waterbillItem.type] = res[waterbillItem.type] + waterbillItem.amount
    // }

    return res
} */


