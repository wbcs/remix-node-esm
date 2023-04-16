export async function asyncFunction() {
  return "hello remix";
}

export const topLevelAwait = await asyncFunction();
