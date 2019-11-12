"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Desserts = function Desserts(type, calories) {
  _classCallCheck(this, Desserts);

  this.type = type;
  this.calories = calories;
};

var IceCream = function (_Desserts) {
  _inherits(IceCream, _Desserts);

  function IceCream(type, calories, flavor, scoops) {
    _classCallCheck(this, IceCream);

    var _this = _possibleConstructorReturn(this, (IceCream.__proto__ || Object.getPrototypeOf(IceCream)).call(this, type, calories));

    _this.flavor = flavor;
    _this.scoops = scoops;
    return _this;
  }

  _createClass(IceCream, [{
    key: "includeSpoon",
    value: function includeSpoon() {
      console.log("Here is your spoon!");
    }
  }]);

  return IceCream;
}(Desserts);

var vanillaIceCream = new IceCream("Ice Cream", "340", "Vanilla", "3");

var template = "\n  <div>\n    <h1>" + vanillaIceCream.type + "</h1>\n    <h2>Type:</h2>\n    <ul>\n      <li>" + vanillaIceCream.calories + " calories</li>\n      <li>" + vanillaIceCream.flavor + "</li>\n      <li>" + vanillaIceCream.scoops + " scoops</li>\n    </ul>\n  </div>\n";

document.body.innerHTML = template;

console.log(vanillaIceCream);

includeSpoon();