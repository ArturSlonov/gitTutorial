
import ContextXmlReader from './ContextXmlReader';
import WebXmlReader from './WebXmlReader';



class ContextSupport {
    constructor(webXmlUrl,contextXmlUrl) {
    this.Context_Obj = {};
    this.Web_Obj = {};

    this.Context_Obj = new ContextXmlReader(contextXmlUrl);
    this.Web_Obj = new WebXmlReader(webXmlUrl); 


}

    }

getValue() { return this.obj; }

    buildContext() {

    }




}

export default ContextSupport;
