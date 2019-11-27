class ContextXmlReader {
    constructor(url) {
        this.url = url;
        parseContextXml(this.url);
    }

    getValues() {
        throw new Error("getValues not implemented");
    }


    parseContextXml(src) {
     const DOMParser = require('xmldom').DOMParser;
     const xpath = require('xpath');
     const obj = {};
     const doc = new DOMParser().parseFromString(src.toString());
     xpath.select('//Environment', doc).forEach(function (node, idx) {
         const key = node.getAttribute('name');
         let val = node.getAttribute('value');
         this.key = val;
     });

 }


}

export default ContextXmlReader;
