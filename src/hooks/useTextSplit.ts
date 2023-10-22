import { useEffect, useRef, useState } from "react";

export default function useTextSplit() {
  const ref = useRef<HTMLElement>(null);
  const [nodes, setNodes] = useState<HTMLElement[]>([])

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;

    const type = ref.current.getAttribute("split-by");

    let nodes = null;

    if (type === "letter") {
      nodes = byLetter(node.innerText);
    } else if (type === "word") {
      nodes = byWord(node.innerText);
    }

    node.innerHTML = "";
    nodes?.forEach((el) => {
      node.appendChild(el);
    });

    console.log(nodes);
    setNodes(nodes as HTMLElement[])
  }, []);

  const span = (text: string, index: number) => {
    const node = document.createElement("span");

    node.textContent = text;
    node.style.setProperty("--index", `${index}s`);

    return node;
  };

  const byLetter = (text: string) => text.split("").map(span);

  const byWord = (text: string) => text.split(" ").map(span);

  return {
    ref,
    nodes
  };
}
