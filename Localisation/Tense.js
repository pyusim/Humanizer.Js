﻿var Humanizer;
(function (Humanizer) {
    (function (Localisation) {
        "use strict";

        (function (Tense) {
            Tense[Tense["Future"] = 0] = "Future";
            Tense[Tense["Past"] = 1] = "Past";
        })(Localisation.Tense || (Localisation.Tense = {}));
        var Tense = Localisation.Tense;
    })(Humanizer.Localisation || (Humanizer.Localisation = {}));
    var Localisation = Humanizer.Localisation;
})(Humanizer || (Humanizer = {}));
//# sourceMappingURL=Tense.js.map
