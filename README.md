# country-list（中文简体，中文繁体）

## Example

``` js
var countries = require('country-list-l');

console.log(countries.getCountryList().length); 
console.log(countries.getCountryByName('China')); 
```

lang: 默认英文，简体-'cn'，繁体-'tc'

## Methods

### getCountryList(lang)

返回所有国家和地区列表

### getUNCountryList(lang)

返回所有国家列表（联合国会员国）

### getCountryByName(name,lang)

通过国家名称查询国家信息

## Install

``` cli
npm install country-list-l
```

## License

MIT