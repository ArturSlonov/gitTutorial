
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

getContextValue() { return this.Context_Obj; }
getWebValue(){ return this.Web_Obj; }

    buildContext() {

    }




}

export default ContextSupport;
