# country-list（中文简体，中文繁体）(可以直接复制country.json自己玩)

## Example

``` js
var countries = require('country-list-l');

console.log(countries.getCountryList().length); 
console.log(countries.getCountryByName('China')); 
```

lang: 默认英文，简体-'cn'，繁体-'tc'

## Methods

### getCountries(lang,option)

获取国家或地区列表

#### option --> {continent:'',type:''}  当前提供查询条件
- continent(大洲): AS(亚洲) | AF(非洲) | EU(欧洲) | NA(北美洲) | SA(南美洲) | OA(大洋洲) | AN(南极洲)
- type(国家类型): UNSC(联合国系统国家) | NUNC(非联合国系统国家) | ODOSAA(海外属地与其他特殊政区)

``` js
countries.getCountries('cn', { continent: 'AS', type: 'UNSC' }); 
```

### getCountryListKV(key,value)

返回一个自定义键值对的对象(参数列表：['name', 'traditionalName', 'chineseName', 'alpha_2', 'alpha_3', 'numericCode'])

``` js
countries.getCountryListKV('alpha_3', 'chineseName'); // {AFG: '阿富汗', ALB: '阿尔巴尼亚', DZA: '阿尔及利亚' ...}  
```

### getCountryList(lang)

返回所有国家和地区列表

### getCountryByName(name)

通过国家名称查询国家信息

## Install

``` cli
npm install country-list-l
```

## License

MIT
