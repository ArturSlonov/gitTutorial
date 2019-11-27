

class WebXmlReader{
    constructor(url) {
        this.url = url;
        this.parseWebXml(this.url);
    }

    getValues() {
        throw new Error("getValues not implemented");
    }


    parseWebXml(src) {
    const DOMParser = require('xmldom').DOMParser;
    const xpath = require('xpath');

    const obj = {};
    const doc = new DOMParser().parseFromString(src.toString());
    var select = xpath.useNamespaces({"j2ee": "http://java.sun.com/xml/ns/j2ee"});

    select('//j2ee:env-entry', doc).forEach(function (node, idx) {
        const key = select('j2ee:env-entry-name', node)[0].firstChild.data;
        const valnodelist = select('j2ee:env-entry-value', node);
        const val = valnodelist.length > 0 ? valnodelist[0].firstChild.data : null;
        this.key = val;
    });

}
}

export default WebXmlReader;
