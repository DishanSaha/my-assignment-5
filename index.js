// heart icon toggle------------
let count = 0;
function putNumber(number) {
    const loveIcon = document.getElementById('love-number');
    loveIcon.innerText = number;
}

document.getElementById('love-icon-1').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})
document.getElementById('love-icon-2').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})
document.getElementById('love-icon-3').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})
document.getElementById('love-icon-4').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})
document.getElementById('love-icon-5').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})
document.getElementById('love-icon-6').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})
document.getElementById('love-icon-7').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})
document.getElementById('love-icon-8').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})
document.getElementById('love-icon-9').addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    putNumber(count);
})

// call button toggle------------

callHistory = [];

document.getElementById('btn-1').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling National Emergency Service 999');

    const data = {
        name: 'জাতীয় জরুরি সেবা',
        number: '999',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `
    //             <div class="flex justify-between items-center">
    //             <div class="flex justify-center gap-2">
    //                 <i class="fa-regular fa-clock relative top-2"></i>
    //                 <h2 class="text-black font-semibold text-lg">Call History</h2>
    //             </div>
    //             <button class="w-[114px] lg:h-[52px] h-[40px] bg-[#00A63E] text-white rounded-[50px] hover:bg-gray-300">
    //                 Clear
    //             </button>
    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }


})
document.getElementById('btn-2').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling Police Service 999');

    const data = {
        name: 'পুলিশ',
        number: '999',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `
    //             <div class="flex justify-between items-center">
    //             <div class="flex justify-center gap-2">
    //                 <i class="fa-regular fa-clock relative top-2"></i>
    //                 <h2 class="text-black font-semibold text-lg">Call History</h2>
    //             </div>
    //             <button class="w-[114px] lg:h-[52px] h-[40px] bg-[#00A63E] text-white rounded-[50px] hover:bg-gray-300">
    //                 Clear
    //             </button>
    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }

})

document.getElementById('btn-3').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling Fire Service 999');

    const data = {
        name: 'ফায়ার সার্ভিস',
        number: '999',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `
    //             <div class="flex justify-between items-center">
    //             <div class="flex justify-center gap-2">
    //                 <i class="fa-regular fa-clock relative top-2"></i>
    //                 <h2 class="text-black font-semibold text-lg">Call History</h2>
    //             </div>
    //             <button class="w-[114px] lg:h-[52px] h-[40px] bg-[#00A63E] text-white rounded-[50px] hover:bg-gray-300">
    //                 Clear
    //             </button>
    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }
})

document.getElementById('btn-4').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling Ambulance Service 1994-999999');
    const data = {
        name: 'অ্যাম্বুলেন্স',
        number: '1994-999999',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `
    //             <div class="flex justify-between items-center">
    //             <div class="flex justify-center gap-2">
    //                 <i class="fa-regular fa-clock relative top-2"></i>
    //                 <h2 class="text-black font-semibold text-lg">Call History</h2>
    //             </div>
    //             <button class="w-[114px] lg:h-[52px] h-[40px] bg-[#00A63E] text-white rounded-[50px] hover:bg-gray-300">
    //                 Clear
    //             </button>
    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }
})

document.getElementById('btn-5').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling Women & Child Helpline Service 109');

    const data = {
        name: 'নারী ও শিশু সহায়তা',
        number: '109',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `
    //             <div class="flex justify-between items-center">
    //             <div class="flex justify-center gap-2">
    //                 <i class="fa-regular fa-clock relative top-2"></i>
    //                 <h2 class="text-black font-semibold text-lg">Call History</h2>
    //             </div>
    //             <button class="w-[114px] lg:h-[52px] h-[40px] bg-[#00A63E] text-white rounded-[50px] hover:bg-gray-300">
    //                 Clear
    //             </button>
    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }
})

document.getElementById('btn-6').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling Anti-Corruption Service 106');

    const data = {
        name: 'দুদক',
        number: '106',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `
    //             <div class="flex justify-between items-center">
    //             <div class="flex justify-center gap-2">
    //                 <i class="fa-regular fa-clock relative top-2"></i>
    //                 <h2 class="text-black font-semibold text-lg">Call History</h2>
    //             </div>
    //             <button class="w-[114px] lg:h-[52px] h-[40px] bg-[#00A63E] text-white rounded-[50px] hover:bg-gray-300">
    //                 Clear
    //             </button>
    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }
})

document.getElementById('btn-7').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling Electricity Outage Service 16216');

    const data = {
        name: 'বিদ্যুৎ বিভ্রাট',
        number: '16216',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `
    //             <div class="flex justify-between items-center">
    //             <div class="flex justify-center gap-2">
    //                 <i class="fa-regular fa-clock relative top-2"></i>
    //                 <h2 class="text-black font-semibold text-lg">Call History</h2>
    //             </div>
    //             <button class="w-[114px] lg:h-[52px] h-[40px] bg-[#00A63E] text-white rounded-[50px] hover:bg-gray-300">
    //                 Clear
    //             </button>
    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }
})

document.getElementById('btn-8').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling Brac Service 16445');

    const data = {
        name: 'ব্র্যাক',
        number: '16445',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `
    //             <div class="flex justify-between items-center">
    //             <div class="flex justify-center gap-2">
    //                 <i class="fa-regular fa-clock relative top-2"></i>
    //                 <h2 class="text-black font-semibold text-lg">Call History</h2>
    //             </div>
    //             <button class="w-[114px] lg:h-[52px] h-[40px] bg-[#00A63E] text-white rounded-[50px] hover:bg-gray-300">
    //                 Clear
    //             </button>
    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }
})

document.getElementById('btn-9').addEventListener('click', function () {
    const availableCoin = parseInt(document.getElementById('coin-number').innerText);
    // checking enough coin-----
    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
        return;
    }
    // If there are enough coins, subtract them and make the call--------
    const totoalCoin = availableCoin - 20;
    document.getElementById('coin-number').innerText = totoalCoin;
    alert('📞Calling Bangladesh Railway Service 163');

    const data = {
        name: 'বাংলাদেশ রেলওয়ে',
        number: '163',
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);

    // call history---------
    const callHistoryParent = document.getElementById('call-history');
    // callHistoryParent.innerHTML = '';
    // const headerdiv = document.createElement('div');
    // headerdiv.innerHTML = `

    // `
    // callHistoryParent.appendChild(headerdiv);
    for (const data of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=" flex justify-between items-center mt-4 p-3 bg-white rounded-2xl shadow-md">
            <div>
                <h3>${data.name}</h3>
                <p><span>📞</span>${data.number}</p>
            </div>
           <p>${data.date}</p>
        </div>
    `
        callHistoryParent.appendChild(div);

    }
})

// Clear button listener-----------


document.getElementById('clear-history').addEventListener('click', function () {
    // Clear the array
    const callHistoryParent = document.getElementById('call-history');
    callHistory.length = 0;

    // Clear the DOM
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
    alert('নম্বর কপি হয়েছে : 999');
})

document.getElementById('copy-btn-2').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
    alert('নম্বর কপি হয়েছে : 999');
})

document.getElementById('copy-btn-3').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
    alert('নম্বর কপি হয়েছে : 999');
})

document.getElementById('copy-btn-4').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
    alert('নম্বর কপি হয়েছে : 1994-999999');
})

document.getElementById('copy-btn-5').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
    alert('নম্বর কপি হয়েছে : 109');
})
document.getElementById('copy-btn-6').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
    alert('নম্বর কপি হয়েছে : 106');
})
document.getElementById('copy-btn-7').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
    alert('নম্বর কপি হয়েছে : 16216');
})
document.getElementById('copy-btn-8').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
    alert('নম্বর কপি হয়েছে : 16445');
})
document.getElementById('copy-btn-9').addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    putNumbers(counts);
    alert('নম্বর কপি হয়েছে : 163');
})

