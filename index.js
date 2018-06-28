const country = require('./country.json')

class Country {
    constructor() {
        this.area2lang = {
            cn: 'chineseName',
            tc: 'traditionalName',
            en: 'name'
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Country()
        }
        return this.instance
    }

    getQuickSearch() {
        if (!this.quickSearch) {
            const findByEn = {}
            const findByCn = {}
            const findByTc = {}
            for (let i = 0, n = country.length; i < n; i++) {
                findByEn[country[i].name.replace(/\s*/g, '').toLowerCase()] = i
                findByCn[country[i].chineseName] = i
                findByTc[country[i].traditionalName] = i
            }
            this.quickSearch = {
                chineseName: findByCn,
                name: findByEn,
                traditionalName: findByTc
            }
        }
        return this.quickSearch
    }

    getCountryList(language) {
        if (!this.countryList) this.countryList = {}

        const lang = this.area2lang[language] || 'name'
        if (!this.countryList[lang]) {
            const list = []
            for (let val of country) {
                list.push(val[lang])
            }
            this.countryList[lang] = list
        }

        return this.countryList[lang]
    }

    getUNCountryList(language) {
        if (!this.UNCL) this.UNCL = {}

        const lang = this.area2lang[language] || 'name'
        if (!this.UNCL[lang]) {
            const list = []
            for (let val of country) {
                if (val.type === 'UNSC') list.push(val[lang])
            }
            this.UNCL[lang] = list
        }

        return this.UNCL[lang]
    }

    getCountries(language, option) {
        if (arguments.length === 0) {
            return this.getCountryList()
        }

        if (arguments.length === 1) {
            if (typeof language === 'string') {
                return this.getCountryList(language)
            }
            if (typeof language === 'object') {
                option = language
                language = 'en'
            }
        }

        const list = []
        const lang = this.area2lang[language] || 'name'
        for (let val of country) {
            if (option.continent && option.continent !== val.continent) continue
            if (option.type && option.type !== val.type) continue
            list.push(val[lang])
        }
        return list
    }

    getCountryListKV(key, value) {
        const checkArr = ['name', 'traditionalName', 'chineseName', 'alpha_2', 'alpha_3', 'numericCode']
        if (!checkArr.includes(key) || !checkArr.includes(value)) return 'invalid key or value'

        let obj = {}
        for (let val of country) {
            if (val[key]) {
                obj[val[key]] = val[value] || ''
            }
        }

        return obj
    }

    getCountryByName(name, language) {
        const lang = this.area2lang[language] || 'name'
        const result = country[this.getQuickSearch()[lang][name.replace(/\s*/g, '').toLowerCase()]]
        return result || {}
    }
}

module.exports = Country.getInstance()