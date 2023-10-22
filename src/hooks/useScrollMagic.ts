declare const ScrollMagic: any;
export const controller = new ScrollMagic.Controller();

export default function useScrollMagic() {
  function createScene(options: any) {
    const scene = new ScrollMagic.Scene(options);
  }
  return { createScene };
}
