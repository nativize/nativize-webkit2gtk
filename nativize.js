export const check = () => {};
export const prepare = () => {};
export const build = async () => {
  try {
    //setup buildsir
    await new Deno.Command("meson", {
      args: ["setup", "--reconfigure", "builddir"],
      cwd: import.meta.dirname,
    }).spawn().status;
    //compile
    await new Deno.Command("meson", {
      args: ["compile", "-C", "builddir"],
      cwd: import.meta.dirname,
    }).spawn().status;
  } catch (error) {
    console.error(error);
  }
};
export const run = () => {};
export const clean = () => {
  try {
    await new Deno.Command("meson", {
      args: ["compile", "--clean", "-C", "builddir"],
      cwd: import.meta.dirname,
    }).spawn().status;
  } catch (error) {
    console.error(error);
  }
};
