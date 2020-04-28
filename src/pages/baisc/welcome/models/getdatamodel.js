import moment from "moment"


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

export function revenueTotal(waterbill, revenueCategory) {
    var res = {}
    //方法1： 根据amount正负判断，可以不需要revenueCategory入参
    for(let i = 0; i < waterbill.length; i++){
        let waterbillItem = waterbill[i]
        if(waterbillItem.amount >= 0){
            res[waterbillItem.type] = res[waterbillItem.type] + waterbillItem.amount
        }
    }
    //方法2： 根据传入revenueCategory的类型判断
    // for(i = 0; i < waterbill.length; i++){
    //     waterbillItem = waterbill[i]
    //     if(revenueCategory.indexOf(waterbillItem.type) < 0){//不在范围内
    //         continue
    //     }
    //     res[waterbillItem.type] = res[waterbillItem.type] + waterbillItem.amount
    // }

    return res
}

export function paymentTotal(waterbill, paymentCategory) {
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
}

function isDateCurrentMonth(date) {
    var momentDate = moment(date)
    var current = moment()
    if(momentDate.year() == current.year() && momentDate.month() == current.month()){
        return true
    }
    return false
}

