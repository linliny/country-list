# country-list（中文简体，中文繁体）

## Example

``` js
var countries = require('country-list-l');

console.log(countries.getCountryList().length); 
console.log(countries.getCountryByName('China')); 
```

lang: 默认英文，简体-'cn'，繁体-'tc'

## Methods

### getCountry(lang,option)

获取国家或地区列表

#### option --> {continent:'',type:''}  提供条件查询
- continent(大洲): AS(亚洲) | AF(非洲) | EU(欧洲) | NA(北美洲) | SA(南美洲) | OA(大洋洲) | AN(南极洲)
- type(国家类型): UNSC(联合国系统国家) | NUNC(非联合国系统国家) | ODOSAA(海外属地与其他特殊政区)

``` js
country.getCountry('cn', { continent: 'AS', type: 'UNSC' }); 
```

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