
import Snabbdom from '../../../src/index';
export default () => {
  const Component = ({name}) => Snabbdom.createElementWithModules({
    "attrs": "",
    "props": ""
  })("div", null, "Hello ", name);
  return Snabbdom.createElementWithModules({
    "attrs": "",
    "props": ""
  })(Component, {name: "world"});
};
//# sourceURL=<compile-source>
