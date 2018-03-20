

const filterChildren = (children, f) => {
  if (children) {
    return children.filter((c) => {
        if (c && c.type.name && c.type.name.toLowerCase() === 'wrapper') {
          return f(c.props.children[0]);
        }
        return f(c);
    });
  }
  return children;
}

const mapChildren = (children, transform) => {
  if (children) {
    return children.map((c) => {
        if (c && c.type.name && c.type.name.toLowerCase() === 'wrapper') {
          c.props.children = mapChildren(c.props.children, transform);
          return c;
        }
        return transform(c);
    });
  }
  return children;
}

module.exports = { filterChildren, mapChildren };


