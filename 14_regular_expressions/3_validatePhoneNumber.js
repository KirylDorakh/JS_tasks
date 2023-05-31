const validatePhoneNumber = (str) => {
    const mobile = /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/.source;
    const home = /^\+\d \(\d{4}\) (\d{2}-){2}\d{2}$/.source;
    const phoneRegexp = new RegExp(`(${mobile})|(${home})`, 'g');
    return Boolean( str.match(phoneRegexp) );
}

console.log(
    validatePhoneNumber('+7 (987) 654-32-10'),
    validatePhoneNumber('+7 (4212) 53-53-53'),
    validatePhoneNumber('  +7 (4212) 53-53-53'),
    validatePhoneNumber('+7 (4212) 53-53-53  '),
    validatePhoneNumber('+7(4212) 53-53-53'),
    validatePhoneNumber('+7(4212) 523'),
)