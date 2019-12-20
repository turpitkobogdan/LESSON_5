let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    chooseIncome = document.querySelector('.choose-income'),
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),  // querySelectorAll
    optionalexpensesItemBtn = document.querySelector('.optionalexpenses-btn'),
    checkbox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    // peyearsavingsrcent = document.querySelector('yearsavings'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

    startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    
    while (isNaN(money) || money == '' || null) {            // проверка на нажатие отмены, или пустое значение
        money = +prompt('Ваш бюджет?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();    // parse количество милисекунд прошедших с указанного года
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;       // + 1 иначе месяц начнётся с 0
    dayValue.value = new Date(Date.parse(time)).getDate();     //день
});


expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {   //переберёт все элементы с классом (expenses-item)
        let a = expensesItem[i].value,          //Берёт значение (i = 0)
            b = expensesItem[++i].value;           //Берёт значение (i = 1)
            
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50){
                console.log('Всё верно');
                appData.expenses[a] = b;
                sum += +b;
        } else {
            i=i-1;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesItemBtn.addEventListener('click', function(){
    for(i = 0; i < optionalexpensesItem.length; i++){
        let opt = optionalexpensesItem[i].value;

if (optionalexpensesItem[i] != ' ' && (typeof(optionalexpensesItem[i])) != 'string' ){
     appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
}else continue;
    } 
});

countBudgetBtn.addEventListener('click', function(){
if (appData.budget != undefined){



    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if( appData.moneyPerDay < 100) {
        levelValue.textContent = "минимальный уровень достатка";
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent ="Средний уровень достатка";
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent ="Высокий уровень достатка";
    } else {
        levelValue.textContent ='хуйня давай сначала';
    }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function(){ // (input)безпрерывное введение
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
       
    }else {
        appData.savings = true;
        
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
            console.log(`${sum} ${percent}`)
    }
});

choosePercent.addEventListener('input', function(){
    if (appData.savings == true){
        
        let sum = +chooseSum.value,
        percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    moneyPerDay: 0,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false
};