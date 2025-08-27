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
})




