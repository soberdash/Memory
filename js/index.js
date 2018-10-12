var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var PlayGround = function (_React$Component) {_inherits(PlayGround, _React$Component);
  function PlayGround(props) {_classCallCheck(this, PlayGround);var _this = _possibleConstructorReturn(this, (PlayGround.__proto__ || Object.getPrototypeOf(PlayGround)).call(this,
    props));
    _this.state = {
      frameworks: ['angular2', 'vue', 'react', 'grunt', 'phantomjs', 'ember', 'babel', 'ionic', 'gulp', 'meteor', 'yeoman', 'yarn', 'nodejs', 'bower', 'browserify'],
      duplicatedFrameworks: [],
      randomizedFrameworks: [],
      finalizedFrameworks: [],
      openedFrameworks: [] };

    _this.start();return _this;
  }_createClass(PlayGround, [{ key: 'handleClick', value: function handleClick(
    name, index) {var _this2 = this;
      if (this.state.openedFrameworks.length == 2) {
        setTimeout(function () {
          _this2.check();
        }, 750);
      } else {
        var framework = {
          name: name,
          index: index };

        var finalizedFrameworks = this.state.finalizedFrameworks;
        var frameworks = this.state.openedFrameworks;
        finalizedFrameworks[index].close = false;
        frameworks.push(framework);
        this.setState({
          openedFrameworks: frameworks,
          finalizedFrameworks: finalizedFrameworks });

        if (this.state.openedFrameworks.length == 2) {
          setTimeout(function () {
            _this2.check();
          }, 750);
        }
      }
    } }, { key: 'check', value: function check()
    {
      var finalizedFrameworks = this.state.finalizedFrameworks;
      if (this.state.openedFrameworks[0].name == this.state.openedFrameworks[1].name && this.state.openedFrameworks[0].index != this.state.openedFrameworks[1].index) {
        finalizedFrameworks[this.state.openedFrameworks[0].index].complete = true;
        finalizedFrameworks[this.state.openedFrameworks[1].index].complete = true;
      } else {
        finalizedFrameworks[this.state.openedFrameworks[0].index].close = true;
        finalizedFrameworks[this.state.openedFrameworks[1].index].close = true;
      }
      this.setState({
        finalizedFrameworks: finalizedFrameworks,
        openedFrameworks: [] });

    } }, { key: 'start', value: function start()
    {
      var finalizedFrameworks = [];
      this.state.duplicatedFrameworks = this.state.frameworks.concat(this.state.frameworks);
      this.state.randomizedFrameworks = this.shuffle(this.state.duplicatedFrameworks);
      this.state.randomizedFrameworks.map(function (name, index) {
        finalizedFrameworks.push({
          name: name,
          close: true,
          complete: false,
          fail: false });

      });
      this.state.finalizedFrameworks = finalizedFrameworks;
    } }, { key: 'shuffle', value: function shuffle(
    array) {
      var currentIndex = array.length,temporaryValue = void 0,randomIndex = void 0;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    } }, { key: 'render', value: function render()
    {var _this3 = this;

      return (
        React.createElement('div', { className: 'playground' },

          this.state.finalizedFrameworks.map(function (framework, index) {
            return React.createElement(Card, { framework: framework.name, click: function click() {_this3.handleClick(framework.name, index);}, close: framework.close, complete: framework.complete });
          })));



    } }]);return PlayGround;}(React.Component);var


Card = function (_React$Component2) {_inherits(Card, _React$Component2);
  function Card(props) {_classCallCheck(this, Card);var _this4 = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this,
    props));
    _this4.state = {};return _this4;


  }_createClass(Card, [{ key: 'clicked', value: function clicked(
    framework) {
      this.props.click(framework);
    } }, { key: 'render', value: function render()
    {var _this5 = this;
      return (
        React.createElement('div', { className: "card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : ''), onClick: function onClick() {return _this5.clicked(_this5.props.framework);} },
          React.createElement('div', { className: 'front' }, '?'),


          React.createElement('div', { className: 'back' },
            React.createElement('img', { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" + this.props.framework + ".png" }))));



    } }]);return Card;}(React.Component);


ReactDOM.render(React.createElement(PlayGround, null), document.getElementById('app'));