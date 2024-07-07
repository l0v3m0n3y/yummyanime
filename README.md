# yummyanime
JavaScript library for yummyani.me
# main
```js
async function main(){
    const {yummyanime} = require('./yummyanime');
    const yummy= new yummyanime();
    let req=await yummy.search("blue")
    console.log(req)
}
main()
```
