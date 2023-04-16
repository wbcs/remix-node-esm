import { glob } from "glob";
import * as esbuild from "esbuild";

const entryPoints = await glob("src/**/*.ts");

await esbuild.build({
  entryPoints,
  bundle: false,
  format: "esm",
  outdir: "dist/",
});
