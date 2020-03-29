const country = require('./country.json')

const quickSearch = {};
const area2lang = {
    cn: 'chineseName',
    tc: 'traditionalName',
    en: 'name'
}

exports.getCountryByName = (name) => {
    if (Object.keys(quickSearch).length === 0) {
        for (let i = 0, n = country.length; i < n; i++) {
            quickSearch[country[i].name.replace(/\s*/g, '').toLowerCase()] = i
            quickSearch[country[i].chineseName] = i
            quickSearch[country[i].traditionalName] = i
            if (country[i].otherName) {
                for (const oname of country[i].otherName) quickSearch[oname.replace(/\s*/g, '').toLowerCase()] = i
            }
        }
    }
    const result = country[quickSearch[name.replace(/\s*/g, '').toLowerCase()]]
    return result || ''
}

exports.getCountryList = getCountryList = (language) => {
    const lang = area2lang[language] || 'name'
    const list = country.map(val => val[lang])
    return list
}

exports.getCountries = (...arg) => {
    if (arg.length === 0) {
        return getCountryList()
    }

    let language, option;
    if (arg.length === 1) {
        if (typeof arg[0] === 'string') {
            return getCountryList(language)
        }
        if (typeof arg[0] === 'object') {
            option = arg[0]
            language = 'en'
        }
    } else {
        language = arg[0]
        option = arg[1]
    }

    const list = []
    const lang = area2lang[language] || 'name'

    for (const val of country) {
        if (option.continent && option.continent !== val.continent) continue
        if (option.type && option.type !== val.type) continue
        list.push(val[lang])
    }

    return list
}

exports.getCountryListKV = (key, value) => {
    const checkArr = ['name', 'traditionalName', 'chineseName', 'alpha_2', 'alpha_3', 'numericCode']
    if (!checkArr.includes(key) || !checkArr.includes(value)) throw new Error('invalid key or value to search country')

    const obj = {}
    for (const val of country) {
        if (val[key]) {
            obj[val[key]] = val[value] || ''
        }
    }

    return obj
}
