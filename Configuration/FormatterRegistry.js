﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Humanizer;
(function (Humanizer) {
    (function (Configuration) {
        "use strict";

        var FormatterRegistry = (function (_super) {
            __extends(FormatterRegistry, _super);
            function FormatterRegistry() {
                _super.call(this, new Humanizer.Localisation.Formatter.DefaultFormatter("en-US"));
                this.registerDefaultFormatter("bg");
                this.registerDefaultFormatter("pt-Bthis.r");
                this.registerDefaultFormatter("sv");
                this.registerDefaultFormatter("tr");
                this.registerDefaultFormatter("vi");
                this.registerDefaultFormatter("en");
                this.registerDefaultFormatter("af");
                this.registerDefaultFormatter("da");
                this.registerDefaultFormatter("de");
                this.registerDefaultFormatter("el");
                this.registerDefaultFormatter("es");
                this.registerDefaultFormatter("fa");
                this.registerDefaultFormatter("fi-FI");
                this.registerDefaultFormatter("fr");
                this.registerDefaultFormatter("fr-BE");
                this.registerDefaultFormatter("hu");
                this.registerDefaultFormatter("id");
                this.registerDefaultFormatter("ja");
                this.registerDefaultFormatter("nb");
                this.registerDefaultFormatter("nb-NO");
                this.registerDefaultFormatter("nl");
                this.registerDefaultFormatter("bn-BD");
                this.registerDefaultFormatter("it");
                this.registerDefaultFormatter("uz-Latn-UZ");
                this.registerDefaultFormatter("uz-Cyrl-UZ");
            }
            FormatterRegistry.prototype.registerDefaultFormatter = function (culture) {
                this.register(culture, new Humanizer.Localisation.Formatter.DefaultFormatter(culture));
            };
            return FormatterRegistry;
        })(Configuration.LocaliserRegistry);
        Configuration.FormatterRegistry = FormatterRegistry;
    })(Humanizer.Configuration || (Humanizer.Configuration = {}));
    var Configuration = Humanizer.Configuration;
})(Humanizer || (Humanizer = {}));
//# sourceMappingURL=FormatterRegistry.js.map
