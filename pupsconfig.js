module.exports = {
    "version": "1.0.0",
    "palette": {
        "colors": [
            { "id": "1", "name": "primary", "value": "#1fcc9a", "tags": ["custom"] }
        ],
        "format": "rgba"
    },
    "modularScale": {
        "rootBase": "16px",
        "base": 1,
        "unit": "rem",
        "ratio": "PHI"
    },
    "mediaQuery": {
        "xs": "(max-width: 480px)",
        "s": "(min-width: 481px) and (max-width: 992px)",
        "mp": "(min-width: 481px) and (max-width: 992px) and (orientation: portrait)",
        "ml": "(min-width: 481px) and (max-width: 992px) and (orientation: landscape)",
        "l": "(min-width: 1241px) and (max-width: 1440px)",
        "xl": "(min-width: 1441px) and (max-width: 0px)",
        "mi": "only screen and (max-width: 992px)",
        "ma": "only screen and (min-width: 993px)",
        "dpx": "(min-width-resolution: 2dppx) and (color: true)",
        "print": "print and (monocrome: true)"
    },
    "typography": {},
    "animation": {
        "timings": {
            "fast": 400,
            "normal": 600,
        },
        "easings": {
            "menu": "cubic-bezier(.35,.08,.07,1)",
            "easeEnter": "cubic-bezier(0.86,0,0.07,1)"
        },
        "defaultUnit": "ms",
        "defaultAddUnit": true
    }
}