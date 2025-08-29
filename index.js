// heart icon toggle------------
let heartCount = 0;
function putNumber(number) {
    const loveIcon = document.getElementById('love-number');
    loveIcon.innerText = number;
}

for (let i = 1; i < 10; i++) {
    document.getElementById(`love-icon-${i}`).addEventListener('click', function (e) {
        e.preventDefault();
        heartCount++;
        putNumber(heartCount);
    })
}

// call button toggle------------
const dataList = [
    {
        name: 'জাতীয় জরুরি সেবা',
        number: '999',
        alert: '📞Calling National Emergency Service 999',
    },
    {
        name: 'পুলিশ',
        number: '999',
        alert: '📞Calling Police Service 999'
    },
    {
        name: 'ফায়ার সার্ভিস',
        number: '999',
        alert: '📞Calling Fire Service 999 '
    },
    {
        name: 'অ্যাম্বুলেন্স',
        number: '1994-999999',
        alert: '📞Calling Ambulance Service 1994-999999'
    },
    {
        name: 'নারী ও শিশু সহায়তা',
        number: '109',
        alert: '📞Calling Women & Child Helpline Service 109'
    },
    {
        name: 'দুদক',
        number: '106',
        alert: '📞Calling Anti-Corruption Service 106'
    },
    {
        name: 'বিদ্যুৎ বিভ্রাট',
        number: '16216',
        alert: '📞Calling Electricity Outage Service 16216'
    },
    {
        name: 'ব্র্যাক',
        number: '16445',
        alert: '📞Calling Brac Service 16445'
    },
    {
        name: 'বাংলাদেশ রেলওয়ে',
        number: '163',
        alert: '📞Calling Bangladesh Railway Service 163'
    }
]


const callHistory = [];

for (let i = 0; i < dataList.length; i++) {
    document.getElementById(`btn-${i + 1}`).addEventListener('click', function () {
        const availableCoin = parseInt(document.getElementById('coin-number').innerText);
        // checking enough coin-----
        if (availableCoin < 20) {
            alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
            return;
        }
        // If there are enough coins, subtract them and make the call--------
        const totoalCoin = availableCoin - 20;
        document.getElementById('coin-number').innerText = totoalCoin;
        alert(dataList[i].alert);

        const data = {
            name: dataList[i].name,
            number: dataList[i].number,
            date: new Date().toLocaleTimeString(),
        }
        callHistory.push(data);

        const lastHistory = callHistory[callHistory.length - 1];
        const div = document.createElement('div');
        const callHistoryParent = document.getElementById('call-history');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${lastHistory.name}</h3>
                <p><span>📞</span>${lastHistory.number}</p>
            </div>
        <p>${lastHistory.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);
    })
}


// Clear button listener-----------
document.getElementById('clear-history').addEventListener('click', function () {
    const callHistoryParent = document.getElementById('call-history');
    callHistory.length = 0;
    callHistoryParent.innerHTML = '';
});


// copy button---------
let counts = 0;
function putNumbers(numbers) {
    const copyButton = document.getElementById('copy-number');
    copyButton.innerText = numbers;
}

document.getElementById('copy-btn-1').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})
document.getElementById('copy-btn-2').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})
document.getElementById('copy-btn-3').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})
document.getElementById('copy-btn-4').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})
document.getElementById('copy-btn-5').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})
document.getElementById('copy-btn-6').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})
document.getElementById('copy-btn-7').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})
document.getElementById('copy-btn-8').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})
document.getElementById('copy-btn-9').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
})

// number copied--------
function copyText(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("নম্বর কপি হয়েছে :" + text);
}