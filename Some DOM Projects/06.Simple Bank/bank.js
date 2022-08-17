
document.getElementById('DepositBtn').addEventListener('click',function(){
    const depositAmount = amountTaker();
    if (isNaN(depositAmount)) {
        alert('Please provide valid number');
        return ;
    }

    const preMoney = document.getElementById('DepositTK');
    const preMoneyString = preMoney.innerText;
    const previousDepositAmount = parseFloat(preMoneyString);

    const plus = depositAmount + previousDepositAmount;
    preMoney.innerText = plus;//

    const totalAmount = bringTotalAmount();
    const plus2 = depositAmount + totalAmount;
    document.getElementById('totalTK').innerText = plus2;
    
});
document.getElementById('WithdrawBtn').addEventListener('click',function(){
    const WithdrawMoney = amountTaker();
    if (isNaN(WithdrawMoney)) {
        alert('Please provide valid number');
        return ;
    }

    const preDraw = document.getElementById('WithdrawTK');
    const preDrawString= preDraw.innerText;
    const previousWithdrawAmount = parseFloat(preDrawString);

    const totalAmount = bringTotalAmount();

    if (WithdrawMoney <= totalAmount) {
        const plus = WithdrawMoney + previousWithdrawAmount;
        preDraw.innerText = plus;
    
        const plus2 = totalAmount - WithdrawMoney;
        document.getElementById('totalTK').innerText = plus2;
    }
    else{
        alert("You haven't enough money")
    }
    
});

function amountTaker()
{
    const amountString = document.getElementById('amountInput').value;
    const amount = parseFloat(amountString);
    document.getElementById('amountInput').value = '';
    return amount;
}
function bringTotalAmount()
{
    const getValue = document.getElementById('totalTK');
    const getValueString = getValue.innerText;
    const totalValue = parseFloat(getValueString);
    return totalValue;
}