
import ContextXmlReader from './ContextXmlReader';
import WebXmlReader from './WebXmlReader';



class ContextSupport {
    constructor(contextXmlUrl,webXmlUrl) {
    this.obj = {};
    if(contextXmlUrl){
    this.obj = new ContextXmlReader(contextXmlUrl);}
    else { this.obj = new WebXmlReader(webXmlUrl); }


}

    }

getValue() { return this.obj; }

    buildContext() {

    }
}
export default ContextSupport;
