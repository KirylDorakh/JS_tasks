const changePass = (str) => {
    const pattern = /password=(.+)/g
    let newstr = str.replace(pattern, 'password=*****')
    return newstr
}

console.log(changePass('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345'))


// or
const hideDBPassword = jdbcAddr => {
    const passRegex = /password=(\S+)/g;
    const passMatch = passRegex.exec(jdbcAddr);
    if (!passMatch) {
        return jdbcAddr;
    }
    const pass = passMatch[1];
    const stars = Array.from({ length: pass.length }).fill('*').join('');
    const censuredAddr = jdbcAddr.replace(pass, stars);
    return censuredAddr;
}

console.log( hideDBPassword('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=1234576') );