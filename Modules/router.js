class Router extends System {
    constructor() {
        super();
        this.Routes  = null;
        this.Welcome = null;
        this.DefaultRoute = "Home";
        var lastRoute = localStorage.getItem("lastRoute");
        if(lastRoute != "" && lastRoute != null && lastRoute != undefined)
            this.DefaultRoute = lastRoute;
        this.StartPoint = "[start]";
        this.getRoutes();
    }

    route = async (ROUTE, DEST = null, CURRENT = true, REPLACE = true) => {
        if (!await this.checkAuth({ route: ROUTE, act: "" }))
            await this.route("Auth", "[open='INROOT']");
        else {

            if (ROUTE == "INROOT") return;

            if (DEST == null) DEST = this.StartPoint;

            var PATH = "./App/" + ROUTE + "/" + ROUTE;
            var HTML = await this.getFromFile(PATH + ".html");

            if (REPLACE) document.querySelector(DEST).innerHTML = HTML;
            else document.querySelector(DEST).appendChild(document.createElement(HTML));

            await this.doLoops();
            await this.removeCurrentRoutes();
            await this.getStyle(PATH, CURRENT); 
            await this.getScript(PATH + "Class", CURRENT);
    
            if (document.querySelector(DEST).contains(document.querySelector("[open]"))) 
                await this.openRoute(document.querySelector(DEST));
        }
 

        var thisPage = this.routes.filter( (obj) => { return ROUTE === obj.page; });

        if(thisPage.length == 0) {
            console.log("CAN'T FIND " + ROUTE + " IN JSON");
            return;
        }
  
        var langID = localStorage.getItem("lang");
        var pageID = (thisPage[0].pageID == '') ? 0 : thisPage[0].pageID;
        localStorage.setItem("page", pageID);

        Translate.init({
            route: "Languager",
            act: "getTranslation",
            page_id: pageID,
            lang_id: langID,
        });
    }

    openRoute = async (parent) => {
        parent.querySelectorAll("[open]").forEach( async (open) => {
            var route = open.getAttribute("open");
            var replace = open.hasAttribute("non-replace") ? false : true;
            var dest = "[open='" + route + "']";
            await this.route(route, dest, false , replace);
            await this.closeRoute();
        });
    }

    closeRoute = async () => {
        var closedNodes = document.querySelectorAll("[route-me]");
        
        closedNodes.forEach( async el => {
            el.onclick = async(each) => {
                var routery = each.target.getAttribute("route-me");
                localStorage.setItem("lastRoute", routery);
                if (routery != "")
                    await this.route(routery, "[open='INROOT']");
            };
        });
        
        document.querySelector("[open='INROOT']").innerHTML = "";
        $("[route-me='" + this.DefaultRoute + "']").trigger("click");
    }

    doLoops = async () => {
        document.querySelectorAll("[Vfor]").forEach( async(loop) => {
            var route = loop.getAttribute("Vfor").split('@')[0];
            var act = loop.getAttribute("Vfor").split('@')[1];
            var result = await this.getResponse({ route: route, act: act });
            this.ForeachIT(loop, result);
        });
    }

    getRoutes = async ()=> {
        this.routes = await this.getJsonFile("App/router.json");
    }
}