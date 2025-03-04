export const check = async () => {
  // check if meson is installed
  // check if everything is is installed
};
export const prepare = async () => {
};
export const build = async () => {
  try {
    //setup builddir
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
export const run = async () => {};
export const clean = async () => {
  try {
    await new Deno.Command("meson", {
      args: ["compile", "--clean", "-C", "builddir"],
      cwd: import.meta.dirname,
    }).spawn().status;
  } catch (error) {
    console.error(error);
  }
};
