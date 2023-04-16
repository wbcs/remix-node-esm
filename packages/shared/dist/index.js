async function asyncFunction() {
  return "hello remix";
}
const topLevelAwait = await asyncFunction();
export {
  asyncFunction,
  topLevelAwait
};
