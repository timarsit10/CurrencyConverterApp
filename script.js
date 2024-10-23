const apiKey = '24423d6f7aa82e1022fae212'; // تم استبدال مفتاح الـAPI الخاص بك
const apiURL = 'https://v6.exchangerate-api.com/v6/' + apiKey;

const currencies = [
    'USD', 'EUR', 'GBP', 'JPY', 'SAR', 'AED', 'AUD', 'CAD', 'CHF', 'CNY', 'DKK', 'HKD', 'INR', 'KRW', 'MXN', 'NOK', 
    'NZD', 'SEK', 'SGD', 'THB', 'ZAR', 'AFN', 'ALL', 'DZD', 'AOA', 'ARS', 'AMD', 'AWG', 'AZN', 'BSD', 'BHD', 'BDT', 
    'BBD', 'BYN', 'BZD', 'BMD', 'BTN', 'BOB', 'BAM', 'BWP', 'BRL', 'BND', 'BGN', 'BIF', 'KHR', 'CVE', 'KYD', 'XAF', 
    'XPF', 'CLP', 'COP', 'KMF', 'CDF', 'CRC', 'HRK', 'CUP', 'CZK', 'DJF', 'DOP', 'EGP', 'ETB', 'FJD', 'GMD', 'GEL', 
    'GHS', 'GTQ', 'GNF', 'GYD', 'HTG', 'HNL', 'HUF', 'ISK', 'IDR', 'IQD', 'ILS', 'JMD', 'JOD', 'KZT', 'KES', 'KWD', 
    'KGS', 'LAK', 'LBP', 'LSL', 'LRD', 'LYD', 'MOP', 'MKD', 'MGA', 'MWK', 'MYR', 'MVR', 'MRU', 'MUR', 'MDL', 'MNT', 
    'MAD', 'MZN', 'MMK', 'NAD', 'NPR', 'ANG', 'NIO', 'NGN', 'OMR', 'PKR', 'PAB', 'PGK', 'PYG', 'PEN', 'PHP', 'PLN', 
    'QAR', 'RON', 'RUB', 'RWF', 'SHP', 'WST', 'STD', 'SCR', 'SLL', 'SBD', 'SOS', 'SSP', 'LKR', 'SDG', 'SRD', 'SZL', 
    'TJS', 'TZS', 'TOP', 'TTD', 'TND', 'TRY', 'TMT', 'UGX', 'UAH', 'UYU', 'UZS', 'VUV', 'VND', 'XCD', 'YER', 'ZMW', 'ZWL'
];

document.addEventListener('DOMContentLoaded', () => {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    currencies.forEach(currency => {
        let option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        fromCurrency.appendChild(option);
    });

    currencies.forEach(currency => {
        let option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        toCurrency.appendChild(option);
    });

    setLanguage('ar'); // اللغة الافتراضية
});

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    fetch(`${apiURL}/pair/${fromCurrency}/${toCurrency}/${amount}`)
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById('result');
            result.textContent = `${amount} ${fromCurrency} = ${data.conversion_result} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function setLanguage(language) {
    const elements = {
        'ar': {
            'title': 'تطبيق صرف العملات',
            'amount': 'المبلغ',
            'convert': 'تحويل'
        },
        'en': {
            'title': 'Currency Converter',
            'amount': 'Amount',
            'convert': 'Convert'
        },
        'fr': {
            'title': 'Convertisseur de devises',
            'amount': 'Montant',
            'convert': 'Convertir'
        }
    };

    document.title = elements[language]['title'];
    document.getElementById('title').textContent = elements[language]['title'];
    document.getElementById('amount').placeholder = elements[language]['amount'];
    document.querySelector('.converter button').textContent = elements[language]['convert'];
}