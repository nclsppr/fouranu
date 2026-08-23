function visit(node) {
  if (!node || !Array.isArray(node.children)) return;

  node.children = node.children.map((child) => {
    if (child?.type === "element" && child.tagName === "table") {
      return {
        type: "element",
        tagName: "div",
        properties: {
          className: ["table-scroll"],
          role: "region",
          ariaLabel: "Tableau de données, défilement horizontal possible",
          tabIndex: 0,
        },
        children: [child],
      };
    }

    visit(child);
    return child;
  });
}

export default function rehypeAccessibleTables() {
  return (tree) => visit(tree);
}
