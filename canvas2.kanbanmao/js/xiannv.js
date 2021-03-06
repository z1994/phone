(function () {
    L2Dwidget.init({
        "model": {
            jsonPath: "https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json",
            "scale": 1
        },
        "display": {
            "position": "right",
            "width": 100,
            "height": 200,
            "hOffset": -50,
            "vOffset": -120
        },
        "mobile": {
            "show": false,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 1,
            "opacityOnHover": 0.2
        }
    })
})();