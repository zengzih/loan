const vRender = {
  props: {
    row: Object,
    col: Object,
    render: Function
  },
  render(h, scope) {
    const { render, row, col} = this;
    if (render instanceof Function) {
      return render(h, { row, col })
    }
  }
};
export default vRender;
