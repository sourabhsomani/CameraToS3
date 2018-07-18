var _d = {
    qs: function (s) {
        return document.querySelector(s);
    },
    qsa: function (s) {
        return document.querySelectorAll(s);
    },
    gei: function (s) {
        return document.getElementById(s);
    },
    gen: function (s) {
        return document.getElementsByName(s);
    }
};
(function () {
    window.sourabh = window.sourabh || {};
    window.sourabh.utils = {
        nameSpace: function (root, ns) {
            if (!ns) {
                ns = root;
                root = window;
            }
            var parts = ns.split('.'),
                parent = root,
                i;
            if (parts[0] === root.toString()) {
                parts = parts.slice(1);
            }
            for (i = 0; i < parts.length; i += 1) {
                if (typeof parent[parts[i]] === "undefined") {
                    parent[parts[i]] = {};
                }
                parent = parent[parts[i]];
            }
            return parent;
        },
        getParameterByName: function (name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) {
                return null;
            }
            if (!results[2]) {
                return '';
            }
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
    };
}());
