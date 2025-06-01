function createViewport(root) {
    const viewport = new qx.ui.mobile.container.Composite;
    viewport._setStyle('backgroundColor', 'lightgrey');
    viewport._setStyle('height', '100%');
    viewport.setLayout(new qx.ui.layout.VBox);
    root.add(viewport);
    return viewport;
}
window.MobileApi = {
    start: function (root) {
        const viewport = createViewport(root);
    }
};