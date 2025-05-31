window.MobileApi = {
    start: function (root) {
        const viewport = new qx.ui.mobile.container.Composite;
        viewport._setStyle('backgroundColor', 'red');
        viewport._setStyle('height', '100%');
        root.add(viewport);

        console.log('MobileApi START2', root);
        window.ROOT = root;
    }
};