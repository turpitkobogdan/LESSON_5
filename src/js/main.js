let start = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    chooseIncomeLabel = document.querySelector('choose-income-label'),
    optionalexpensesItem = document.querySelector('optionalexpenses-item'),
    checkbox = document.querySelector('checkbox'),
    sum = document.querySelector('sum'),
    percent = document.querySelector('percent'),
    peyearsavingsrcent = document.querySelector('yearsavings'),
    month = document.querySelector('month'),
    day = document.querySelector('day');




    let money, time;

function start () {
money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || null) {// проверка на нажатие отмены, или пустое значение
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    moneyPerDay: 0,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется', '');
    
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50){
                    console.log('done');
                    appData.expenses[a] = b;
            } else {
                i=i-1;
            }
        }
    },
    etectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.budget / 30);
        console.log('ежедневный бюджет' +appData.moneyPerDay);
    },
    detectLevel: function() {
        if( appData.moneyPerDay < 100) {
            console.log("минимальныйуровень достатка");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Высокий уровень достатка");
        } else {
            alert ('хуйня давай сначала');
        }
    },
    checkSavigs: function () {
        if (appData.savings == true) {
            let save = +prompt ('какова сума накоплений?'),
                percent = +prompt('Какой процент');
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (i = 0; i < 4; i++){
            let a = prompt('Статья необязательных расходов?');
            let b = prompt('Введите сумму необязательных расходов');
                if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != '' && b != '' && a.length < 50){
                    appData.optionalExpenses[a] = b;
                    console.log('Выполнено');
                } else { 
                    i= i-1;
                }
        }
    },
    chooseIncome: function() {
        

     for (i = 1; i < 2; i++){
        let items = prompt('Что принесет дополнительный доход? [перечислите через запятую]', '');
        if ((typeof(items)) === 'string' && (typeof(items) != null) && items != '' ) {
            appData.income = items.split(',');
            appData.income.push(prompt('может что-то еще?'));
            appData.income.sort();
             } else {
            i= i-1;
             } 
        }
        console.log('Способы дополнительного заработка: ');
        appData.income.forEach(function(item, i){
            i= i+1;
            console.log(+ i + ': ' + item );
        });
        
   }

};
appData.chooseIncome();


        














// 1) Написать проверку, что пользователь может:
// ·        Ввести в дополнительных доходах (chooseIncome) только строку
// ·        Не может оставить строку пустой
// ·        Не может отменить вопрос
// 2) При помощи метода перебора массива(forEach) 
// вывести на экран сообщение "Способы доп. заработка: "
//  и полученные способы (внутри chooseIncome)
// // ·        Товары должны начинаться с 1, а не с 0.
// Выполняем этот пункт в chooseIncome.
// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)













// new function open () {
// let o = 1;
// while (o <= 2) {
//     let a = prompt('сколько вы зарабатываете?', ''),
//         b = prompt('Во сколько обойдется?', '');

//         if (typeof(a) === 'string' && typeof(a) != null && b !='' && a != '' && b !='' && a.length < 50)
//         console.log('fukk');
//         appData.expenses[a] = b;
//         o++;
// } else {
//     function arr()
// }
// }
// open ();

