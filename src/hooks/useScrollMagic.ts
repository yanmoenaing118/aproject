import { useEffect, useState } from "react";

declare const ScrollMagic: any;
export default function useScrollMagic() {
  const [controller, setController] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js";
    const script2 = document.createElement("script");
    script2.src =
      "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js";
    script.addEventListener("load", () => {
      const controller = new ScrollMagic.Controller();
      setController(controller);
    });

    document.body.appendChild(script);
    document.body.appendChild(script2);
  }, []);

  function createScene(options: any) {
    if (!controller) return;
    const scene = new ScrollMagic.Scene(options);
    controller.addScene(scene);
    return scene;
  }
  return { controller, createScene };
}
