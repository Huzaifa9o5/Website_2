html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: sans-serif
}

body {
    margin: 0
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
    display: block
}

audio,canvas,progress,video {
    vertical-align: baseline;
    display: inline-block
}

audio:not([controls]) {
    height: 0;
    display: none
}

[hidden],template {
    display: none
}

a {
    background-color: transparent
}

a:active,a:hover {
    outline: 0
}

abbr[title] {
    border-bottom: 1px dotted
}

b,strong {
    font-weight: 700
}

dfn {
    font-style: italic
}

h1 {
    margin: .67em 0;
    font-size: 2em
}

mark {
    color: #000;
    background: #ff0
}

small {
    font-size: 80%
}

sub,sup {
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative
}

sup {
    top: -.5em
}

sub {
    bottom: -.25em
}

img {
    border: 0
}

svg:not(:root) {
    overflow: hidden
}

figure {
    margin: 1em 40px
}

hr {
    box-sizing: content-box;
    height: 0
}

pre {
    overflow: auto
}

code,kbd,pre,samp {
    font-family: monospace;
    font-size: 1em
}

button,input,optgroup,select,textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button {
    overflow: visible
}

button,select {
    text-transform: none
}

button,html input[type=button],input[type=reset] {
    -webkit-appearance: button;
    cursor: pointer
}

button[disabled],html input[disabled] {
    cursor: default
}

button::-moz-focus-inner,input::-moz-focus-inner {
    border: 0;
    padding: 0
}

input {
    line-height: normal
}

input[type=checkbox],input[type=radio] {
    box-sizing: border-box;
    padding: 0
}

input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
    height: auto
}

input[type=search] {
    -webkit-appearance: none
}

input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em
}

legend {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto
}

optgroup {
    font-weight: 700
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

td,th {
    padding: 0
}

@font-face {
    font-family: webflow-icons;
    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)format("truetype");
    font-weight: 400;
    font-style: normal
}

[class^=w-icon-],[class*=\ w-icon-] {
    speak: none;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    font-family: webflow-icons!important
}

.w-icon-slider-right:before {
    content: ""
}

.w-icon-slider-left:before {
    content: ""
}

.w-icon-nav-menu:before {
    content: ""
}

.w-icon-arrow-down:before,.w-icon-dropdown-toggle:before {
    content: ""
}

.w-icon-file-upload-remove:before {
    content: ""
}

.w-icon-file-upload-icon:before {
    content: ""
}

* {
    box-sizing: border-box
}

html {
    height: 100%
}

body {
    min-height: 100%;
    color: #333;
    background-color: #fff;
    margin: 0;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px
}

img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block
}

html.w-mod-touch * {
    background-attachment: scroll!important
}

.w-block {
    display: block
}

.w-inline-block {
    max-width: 100%;
    display: inline-block
}

.w-clearfix:before,.w-clearfix:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-clearfix:after {
    clear: both
}

.w-hidden {
    display: none
}

.w-button {
    color: #fff;
    line-height: inherit;
    cursor: pointer;
    background-color: #3898ec;
    border: 0;
    border-radius: 0;
    padding: 9px 15px;
    text-decoration: none;
    display: inline-block
}

input.w-button {
    -webkit-appearance: button
}

html[data-w-dynpage] [data-w-cloak] {
    color: transparent!important
}

.w-code-block {
    margin: unset
}

pre.w-code-block code {
    all: inherit
}

.w-webflow-badge,.w-webflow-badge * {
    z-index: auto;
    visibility: visible;
    box-sizing: border-box;
    width: auto;
    height: auto;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
    float: none;
    clear: none;
    box-shadow: none;
    opacity: 1;
    direction: ltr;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-style: inherit;
    font-variant: inherit;
    text-align: inherit;
    letter-spacing: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
    text-indent: 0;
    text-transform: inherit;
    text-shadow: none;
    font-smoothing: auto;
    vertical-align: baseline;
    cursor: inherit;
    white-space: inherit;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    background: 0 0;
    border: 0 transparent;
    border-radius: 0;
    margin: 0;
    padding: 0;
    list-style-type: disc;
    transition: none;
    display: block;
    position: static;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    overflow: visible;
    transform: none
}

.w-webflow-badge {
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);
    visibility: visible!important;
    z-index: 2147483647!important;
    color: #aaadb0!important;
    opacity: 1!important;
    width: auto!important;
    height: auto!important;
    background-color: #fff!important;
    border-radius: 3px!important;
    margin: 0!important;
    padding: 6px!important;
    font-size: 12px!important;
    line-height: 14px!important;
    text-decoration: none!important;
    display: inline-block!important;
    position: fixed!important;
    top: auto!important;
    bottom: 12px!important;
    left: auto!important;
    right: 12px!important;
    overflow: visible!important;
    transform: none!important
}

.w-webflow-badge>img {
    visibility: visible!important;
    opacity: 1!important;
    vertical-align: middle!important;
    display: inline-block!important
}

h1,h2,h3,h4,h5,h6 {
    margin-bottom: 10px;
    font-weight: 700
}

h1 {
    margin-top: 20px;
    font-size: 38px;
    line-height: 44px
}

h2 {
    margin-top: 20px;
    font-size: 32px;
    line-height: 36px
}

h3 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px
}

h4 {
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px
}

h5 {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px
}

h6 {
    margin-top: 10px;
    font-size: 12px;
    line-height: 18px
}

p {
    margin-top: 0;
    margin-bottom: 10px
}

blockquote {
    border-left: 5px solid #e2e2e2;
    margin: 0 0 10px;
    padding: 10px 20px;
    font-size: 18px;
    line-height: 22px
}

figure {
    margin: 0 0 10px
}

figcaption {
    text-align: center;
    margin-top: 5px
}

ul,ol {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px
}

.w-list-unstyled {
    padding-left: 0;
    list-style: none
}

.w-embed:before,.w-embed:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-embed:after {
    clear: both
}

.w-video {
    width: 100%;
    padding: 0;
    position: relative
}

.w-video iframe,.w-video object,.w-video embed {
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 0
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0
}

button,[type=button],[type=reset] {
    cursor: pointer;
    -webkit-appearance: button;
    border: 0
}

.w-form {
    margin: 0 0 15px
}

.w-form-done {
    text-align: center;
    background-color: #ddd;
    padding: 20px;
    display: none
}

.w-form-fail {
    background-color: #ffdede;
    margin-top: 10px;
    padding: 10px;
    display: none
}

label {
    margin-bottom: 5px;
    font-weight: 700;
    display: block
}

.w-input,.w-select {
    width: 100%;
    height: 38px;
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857;
    display: block
}

.w-input:-moz-placeholder,.w-select:-moz-placeholder {
    color: #999
}

.w-input::-moz-placeholder,.w-select::-moz-placeholder {
    color: #999;
    opacity: 1
}

.w-input::-webkit-input-placeholder,.w-select::-webkit-input-placeholder {
    color: #999
}

.w-input:focus,.w-select:focus {
    border-color: #3898ec;
    outline: 0
}

.w-input[disabled],.w-select[disabled],.w-input[readonly],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select {
    cursor: not-allowed
}

.w-input[disabled]:not(.w-input-disabled),.w-select[disabled]:not(.w-input-disabled),.w-input[readonly],.w-select[readonly],fieldset[disabled]:not(.w-input-disabled) .w-input,fieldset[disabled]:not(.w-input-disabled) .w-select {
    background-color: #eee
}

textarea.w-input,textarea.w-select {
    height: auto
}

.w-select {
    background-color: #f3f3f3
}

.w-select[multiple] {
    height: auto
}

.w-form-label {
    cursor: pointer;
    margin-bottom: 0;
    font-weight: 400;
    display: inline-block
}

.w-radio {
    margin-bottom: 5px;
    padding-left: 20px;
    display: block
}

.w-radio:before,.w-radio:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-radio:after {
    clear: both
}

.w-radio-input {
    float: left;
    margin: 3px 0 0 -20px;
    line-height: normal
}

.w-file-upload {
    margin-bottom: 10px;
    display: block
}

.w-file-upload-input {
    width: .1px;
    height: .1px;
    opacity: 0;
    z-index: -100;
    position: absolute;
    overflow: hidden
}

.w-file-upload-default,.w-file-upload-uploading,.w-file-upload-success {
    color: #333;
    display: inline-block
}

.w-file-upload-error {
    margin-top: 10px;
    display: block
}

.w-file-upload-default.w-hidden,.w-file-upload-uploading.w-hidden,.w-file-upload-error.w-hidden,.w-file-upload-success.w-hidden {
    display: none
}

.w-file-upload-uploading-btn {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 400;
    display: flex
}

.w-file-upload-file {
    background-color: #fafafa;
    border: 1px solid #ccc;
    flex-grow: 1;
    justify-content: space-between;
    margin: 0;
    padding: 8px 9px 8px 11px;
    display: flex
}

.w-file-upload-file-name {
    font-size: 14px;
    font-weight: 400;
    display: block
}

.w-file-remove-link {
    width: auto;
    height: auto;
    cursor: pointer;
    margin-top: 3px;
    margin-left: 10px;
    padding: 3px;
    display: block
}

.w-icon-file-upload-remove {
    margin: auto;
    font-size: 10px
}

.w-file-upload-error-msg {
    color: #ea384c;
    padding: 2px 0;
    display: inline-block
}

.w-file-upload-info {
    padding: 0 12px;
    line-height: 38px;
    display: inline-block
}

.w-file-upload-label {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 400;
    display: inline-block
}

.w-icon-file-upload-icon,.w-icon-file-upload-uploading {
    width: 20px;
    margin-right: 8px;
    display: inline-block
}

.w-icon-file-upload-uploading {
    height: 20px
}

.w-container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto
}

.w-container:before,.w-container:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-container:after {
    clear: both
}

.w-container .w-row {
    margin-left: -10px;
    margin-right: -10px
}

.w-row:before,.w-row:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-row:after {
    clear: both
}

.w-row .w-row {
    margin-left: 0;
    margin-right: 0
}

.w-col {
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative
}

.w-col .w-col {
    padding-left: 0;
    padding-right: 0
}

.w-col-1 {
    width: 8.33333%
}

.w-col-2 {
    width: 16.6667%
}

.w-col-3 {
    width: 25%
}

.w-col-4 {
    width: 33.3333%
}

.w-col-5 {
    width: 41.6667%
}

.w-col-6 {
    width: 50%
}

.w-col-7 {
    width: 58.3333%
}

.w-col-8 {
    width: 66.6667%
}

.w-col-9 {
    width: 75%
}

.w-col-10 {
    width: 83.3333%
}

.w-col-11 {
    width: 91.6667%
}

.w-col-12 {
    width: 100%
}

.w-hidden-main {
    display: none!important
}

@media screen and (max-width: 991px) {
    .w-container {
        max-width:728px
    }

    .w-hidden-main {
        display: inherit!important
    }

    .w-hidden-medium {
        display: none!important
    }

    .w-col-medium-1 {
        width: 8.33333%
    }

    .w-col-medium-2 {
        width: 16.6667%
    }

    .w-col-medium-3 {
        width: 25%
    }

    .w-col-medium-4 {
        width: 33.3333%
    }

    .w-col-medium-5 {
        width: 41.6667%
    }

    .w-col-medium-6 {
        width: 50%
    }

    .w-col-medium-7 {
        width: 58.3333%
    }

    .w-col-medium-8 {
        width: 66.6667%
    }

    .w-col-medium-9 {
        width: 75%
    }

    .w-col-medium-10 {
        width: 83.3333%
    }

    .w-col-medium-11 {
        width: 91.6667%
    }

    .w-col-medium-12 {
        width: 100%
    }

    .w-col-stack {
        width: 100%;
        left: auto;
        right: auto
    }
}

@media screen and (max-width: 767px) {
    .w-hidden-main,.w-hidden-medium {
        display:inherit!important
    }

    .w-hidden-small {
        display: none!important
    }

    .w-row,.w-container .w-row {
        margin-left: 0;
        margin-right: 0
    }

    .w-col {
        width: 100%;
        left: auto;
        right: auto
    }

    .w-col-small-1 {
        width: 8.33333%
    }

    .w-col-small-2 {
        width: 16.6667%
    }

    .w-col-small-3 {
        width: 25%
    }

    .w-col-small-4 {
        width: 33.3333%
    }

    .w-col-small-5 {
        width: 41.6667%
    }

    .w-col-small-6 {
        width: 50%
    }

    .w-col-small-7 {
        width: 58.3333%
    }

    .w-col-small-8 {
        width: 66.6667%
    }

    .w-col-small-9 {
        width: 75%
    }

    .w-col-small-10 {
        width: 83.3333%
    }

    .w-col-small-11 {
        width: 91.6667%
    }

    .w-col-small-12 {
        width: 100%
    }
}

@media screen and (max-width: 479px) {
    .w-container {
        max-width:none
    }

    .w-hidden-main,.w-hidden-medium,.w-hidden-small {
        display: inherit!important
    }

    .w-hidden-tiny {
        display: none!important
    }

    .w-col {
        width: 100%
    }

    .w-col-tiny-1 {
        width: 8.33333%
    }

    .w-col-tiny-2 {
        width: 16.6667%
    }

    .w-col-tiny-3 {
        width: 25%
    }

    .w-col-tiny-4 {
        width: 33.3333%
    }

    .w-col-tiny-5 {
        width: 41.6667%
    }

    .w-col-tiny-6 {
        width: 50%
    }

    .w-col-tiny-7 {
        width: 58.3333%
    }

    .w-col-tiny-8 {
        width: 66.6667%
    }

    .w-col-tiny-9 {
        width: 75%
    }

    .w-col-tiny-10 {
        width: 83.3333%
    }

    .w-col-tiny-11 {
        width: 91.6667%
    }

    .w-col-tiny-12 {
        width: 100%
    }
}

.w-widget {
    position: relative
}

.w-widget-map {
    width: 100%;
    height: 400px
}

.w-widget-map label {
    width: auto;
    display: inline
}

.w-widget-map img {
    max-width: inherit
}

.w-widget-map .gm-style-iw {
    text-align: center
}

.w-widget-map .gm-style-iw>button {
    display: none!important
}

.w-widget-twitter {
    overflow: hidden
}

.w-widget-twitter-count-shim {
    vertical-align: top;
    width: 28px;
    height: 20px;
    text-align: center;
    background: #fff;
    border: 1px solid #758696;
    border-radius: 3px;
    display: inline-block;
    position: relative
}

.w-widget-twitter-count-shim * {
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
    text-align: center;
    color: #999;
    font-family: serif;
    font-size: 15px;
    line-height: 12px;
    position: relative
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
    display: block;
    position: relative
}

.w-widget-twitter-count-shim.w--large {
    width: 36px;
    height: 28px
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 18px
}

.w-widget-twitter-count-shim:not(.w--vertical) {
    margin-left: 5px;
    margin-right: 8px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
    margin-left: 6px
}

.w-widget-twitter-count-shim:not(.w--vertical):before,.w-widget-twitter-count-shim:not(.w--vertical):after {
    content: " ";
    height: 0;
    width: 0;
    pointer-events: none;
    border: solid transparent;
    position: absolute;
    top: 50%;
    left: 0
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
    border-width: 4px;
    border-color: rgba(117,134,150,0) #5d6c7b rgba(117,134,150,0) rgba(117,134,150,0);
    margin-top: -4px;
    margin-left: -9px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -10px
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
    border-width: 4px;
    border-color: rgba(255,255,255,0) #fff rgba(255,255,255,0) rgba(255,255,255,0);
    margin-top: -4px;
    margin-left: -8px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -9px
}

.w-widget-twitter-count-shim.w--vertical {
    width: 61px;
    height: 33px;
    margin-bottom: 8px
}

.w-widget-twitter-count-shim.w--vertical:before,.w-widget-twitter-count-shim.w--vertical:after {
    content: " ";
    height: 0;
    width: 0;
    pointer-events: none;
    border: solid transparent;
    position: absolute;
    top: 100%;
    left: 50%
}

.w-widget-twitter-count-shim.w--vertical:before {
    border-width: 5px;
    border-color: #5d6c7b rgba(117,134,150,0) rgba(117,134,150,0);
    margin-left: -5px
}

.w-widget-twitter-count-shim.w--vertical:after {
    border-width: 4px;
    border-color: #fff rgba(255,255,255,0) rgba(255,255,255,0);
    margin-left: -4px
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 22px
}

.w-widget-twitter-count-shim.w--vertical.w--large {
    width: 76px
}

.w-background-video {
    height: 500px;
    color: #fff;
    position: relative;
    overflow: hidden
}

.w-background-video>video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    margin: auto;
    position: absolute;
    top: -100%;
    bottom: -100%;
    left: -100%;
    right: -100%
}

.w-background-video>video::-webkit-media-controls-start-playback-button {
    -webkit-appearance: none;
    display: none!important
}

.w-background-video--control {
    background-color: transparent;
    padding: 0;
    position: absolute;
    bottom: 1em;
    right: 1em
}

.w-background-video--control>[hidden] {
    display: none!important
}

.w-slider {
    height: 300px;
    text-align: center;
    clear: both;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    background: #ddd;
    position: relative
}

.w-slider-mask {
    z-index: 1;
    height: 100%;
    white-space: nowrap;
    display: block;
    position: relative;
    left: 0;
    right: 0;
    overflow: hidden
}

.w-slide {
    vertical-align: top;
    width: 100%;
    height: 100%;
    white-space: normal;
    text-align: left;
    display: inline-block;
    position: relative
}

.w-slider-nav {
    z-index: 2;
    height: 40px;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    margin: auto;
    padding-top: 10px;
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0
}

.w-slider-nav.w-round>div {
    border-radius: 100%
}

.w-slider-nav.w-num>div {
    width: auto;
    height: auto;
    font-size: inherit;
    line-height: inherit;
    padding: .2em .5em
}

.w-slider-nav.w-shadow>div {
    box-shadow: 0 0 3px rgba(51,51,51,.4)
}

.w-slider-nav-invert {
    color: #fff
}

.w-slider-nav-invert>div {
    background-color: rgba(34,34,34,.4)
}

.w-slider-nav-invert>div.w-active {
    background-color: #222
}

.w-slider-dot {
    width: 1em;
    height: 1em;
    cursor: pointer;
    background-color: rgba(255,255,255,.4);
    margin: 0 3px .5em;
    transition: background-color .1s,color .1s;
    display: inline-block;
    position: relative
}

.w-slider-dot.w-active {
    background-color: #fff
}

.w-slider-dot:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff
}

.w-slider-dot:focus.w-active {
    box-shadow: none
}

.w-slider-arrow-left,.w-slider-arrow-right {
    width: 80px;
    cursor: pointer;
    color: #fff;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: auto;
    font-size: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden
}

.w-slider-arrow-left [class^=w-icon-],.w-slider-arrow-right [class^=w-icon-],.w-slider-arrow-left [class*=\ w-icon-],.w-slider-arrow-right [class*=\ w-icon-] {
    position: absolute
}

.w-slider-arrow-left:focus,.w-slider-arrow-right:focus {
    outline: 0
}

.w-slider-arrow-left {
    z-index: 3;
    right: auto
}

.w-slider-arrow-right {
    z-index: 4;
    left: auto
}

.w-icon-slider-left,.w-icon-slider-right {
    width: 1em;
    height: 1em;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.w-slider-aria-label {
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    border: 0;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden
}

.w-slider-force-show {
    display: block!important
}

.w-dropdown {
    text-align: left;
    z-index: 900;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    position: relative
}

.w-dropdown-btn,.w-dropdown-toggle,.w-dropdown-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    position: relative
}

.w-dropdown-toggle {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    padding-right: 40px;
    display: inline-block
}

.w-dropdown-toggle:focus {
    outline: 0
}

.w-icon-dropdown-toggle {
    width: 1em;
    height: 1em;
    margin: auto 20px auto auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0
}

.w-dropdown-list {
    min-width: 100%;
    background: #ddd;
    display: none;
    position: absolute
}

.w-dropdown-list.w--open {
    display: block
}

.w-dropdown-link {
    color: #222;
    padding: 10px 20px;
    display: block
}

.w-dropdown-link.w--current {
    color: #0082f3
}

.w-dropdown-link:focus {
    outline: 0
}

@media screen and (max-width: 767px) {
    .w-nav-brand {
        padding-left:10px
    }
}

.w-lightbox-backdrop {
    cursor: auto;
    letter-spacing: normal;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    visibility: visible;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    color: #fff;
    text-align: center;
    z-index: 2000;
    opacity: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: rgba(0,0,0,.9);
    outline: 0;
    font-family: Helvetica Neue,Helvetica,Ubuntu,Segoe UI,Verdana,sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.2;
    list-style: disc;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transform: translate(0)
}

.w-lightbox-backdrop,.w-lightbox-container {
    height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow: auto
}

.w-lightbox-content {
    height: 100vh;
    position: relative;
    overflow: hidden
}

.w-lightbox-view {
    width: 100vw;
    height: 100vh;
    opacity: 0;
    position: absolute
}

.w-lightbox-view:before {
    content: "";
    height: 100vh
}

.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before {
    height: 86vh
}

.w-lightbox-frame,.w-lightbox-view:before {
    vertical-align: middle;
    display: inline-block
}

.w-lightbox-figure {
    margin: 0;
    position: relative
}

.w-lightbox-group .w-lightbox-figure {
    cursor: pointer
}

.w-lightbox-img {
    width: auto;
    height: auto;
    max-width: none
}

.w-lightbox-image {
    float: none;
    max-width: 100vw;
    max-height: 100vh;
    display: block
}

.w-lightbox-group .w-lightbox-image {
    max-height: 86vh
}

.w-lightbox-caption {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: rgba(0,0,0,.4);
    padding: .5em 1em;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden
}

.w-lightbox-embed {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.w-lightbox-control {
    width: 4em;
    cursor: pointer;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 24px;
    transition: all .3s;
    position: absolute;
    top: 0
}

.w-lightbox-left {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==);
    display: none;
    bottom: 0;
    left: 0
}

.w-lightbox-right {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+);
    display: none;
    bottom: 0;
    right: 0
}

.w-lightbox-close {
    height: 2.6em;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=);
    background-size: 18px;
    right: 0
}

.w-lightbox-strip {
    white-space: nowrap;
    padding: 0 1vh;
    line-height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: auto;
    overflow-y: hidden
}

.w-lightbox-item {
    width: 10vh;
    box-sizing: content-box;
    cursor: pointer;
    padding: 2vh 1vh;
    display: inline-block;
    -webkit-transform: translate(0,0)
}

.w-lightbox-active {
    opacity: .3
}

.w-lightbox-thumbnail {
    height: 10vh;
    background: #222;
    position: relative;
    overflow: hidden
}

.w-lightbox-thumbnail-image {
    position: absolute;
    top: 0;
    left: 0
}

.w-lightbox-thumbnail .w-lightbox-tall {
    width: 100%;
    top: 50%;
    transform: translateY(-50%)
}

.w-lightbox-thumbnail .w-lightbox-wide {
    height: 100%;
    left: 50%;
    transform: translate(-50%)
}

.w-lightbox-spinner {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 5px solid rgba(0,0,0,.4);
    border-radius: 50%;
    margin-top: -20px;
    margin-left: -20px;
    animation: .8s linear infinite spin;
    position: absolute;
    top: 50%;
    left: 50%
}

.w-lightbox-spinner:after {
    content: "";
    border: 3px solid transparent;
    border-bottom-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px
}

.w-lightbox-hide {
    display: none
}

.w-lightbox-noscroll {
    overflow: hidden
}

@media (min-width: 768px) {
    .w-lightbox-content {
        height:96vh;
        margin-top: 2vh
    }

    .w-lightbox-view,.w-lightbox-view:before {
        height: 96vh
    }

    .w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before {
        height: 84vh
    }

    .w-lightbox-image {
        max-width: 96vw;
        max-height: 96vh
    }

    .w-lightbox-group .w-lightbox-image {
        max-width: 82.3vw;
        max-height: 84vh
    }

    .w-lightbox-left,.w-lightbox-right {
        opacity: .5;
        display: block
    }

    .w-lightbox-close {
        opacity: .8
    }

    .w-lightbox-control:hover {
        opacity: 1
    }
}

.w-lightbox-inactive,.w-lightbox-inactive:hover {
    opacity: 0
}

.w-richtext:before,.w-richtext:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-richtext:after {
    clear: both
}

.w-richtext[contenteditable=true]:before,.w-richtext[contenteditable=true]:after {
    white-space: initial
}

.w-richtext ol,.w-richtext ul {
    overflow: hidden
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,.w-richtext .w-richtext-figure-selected[data-rt-type=video] div:after,.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,.w-richtext .w-richtext-figure-selected[data-rt-type=image] div {
    outline: 2px solid #2895f7
}

.w-richtext figure.w-richtext-figure-type-video>div:after,.w-richtext figure[data-rt-type=video]>div:after {
    content: "";
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.w-richtext figure {
    max-width: 60%;
    position: relative
}

.w-richtext figure>div:before {
    cursor: default!important
}

.w-richtext figure img {
    width: 100%
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
    opacity: .6
}

.w-richtext figure div {
    color: transparent;
    font-size: 0
}

.w-richtext figure.w-richtext-figure-type-image,.w-richtext figure[data-rt-type=image] {
    display: table
}

.w-richtext figure.w-richtext-figure-type-image>div,.w-richtext figure[data-rt-type=image]>div {
    display: inline-block
}

.w-richtext figure.w-richtext-figure-type-image>figcaption,.w-richtext figure[data-rt-type=image]>figcaption {
    caption-side: bottom;
    display: table-caption
}

.w-richtext figure.w-richtext-figure-type-video,.w-richtext figure[data-rt-type=video] {
    width: 60%;
    height: 0
}

.w-richtext figure.w-richtext-figure-type-video iframe,.w-richtext figure[data-rt-type=video] iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0
}

.w-richtext figure.w-richtext-figure-type-video>div,.w-richtext figure[data-rt-type=video]>div {
    width: 100%
}

.w-richtext figure.w-richtext-align-center {
    clear: both;
    margin-left: auto;
    margin-right: auto
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image>div,.w-richtext figure.w-richtext-align-center[data-rt-type=image]>div {
    max-width: 100%
}

.w-richtext figure.w-richtext-align-normal {
    clear: both
}

.w-richtext figure.w-richtext-align-fullwidth {
    width: 100%;
    max-width: 100%;
    text-align: center;
    clear: both;
    margin-left: auto;
    margin-right: auto;
    display: block
}

.w-richtext figure.w-richtext-align-fullwidth>div {
    padding-bottom: inherit;
    display: inline-block
}

.w-richtext figure.w-richtext-align-fullwidth>figcaption {
    display: block
}

.w-richtext figure.w-richtext-align-floatleft {
    float: left;
    clear: none;
    margin-right: 15px
}

.w-richtext figure.w-richtext-align-floatright {
    float: right;
    clear: none;
    margin-left: 15px
}

.w-nav {
    z-index: 1000;
    background: #ddd;
    position: relative
}

.w-nav:before,.w-nav:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-nav:after {
    clear: both
}

.w-nav-brand {
    float: left;
    color: #333;
    text-decoration: none;
    position: relative
}

.w-nav-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    display: inline-block;
    position: relative
}

.w-nav-link.w--current {
    color: #0082f3
}

.w-nav-menu {
    float: right;
    position: relative
}

[data-nav-menu-open] {
    text-align: center;
    min-width: 200px;
    background: #c8c8c8;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: visible;
    display: block!important
}

.w--nav-link-open {
    display: block;
    position: relative
}

.w-nav-overlay {
    width: 100%;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: hidden
}

.w-nav-overlay [data-nav-menu-open] {
    top: 0
}

.w-nav[data-animation=over-left] .w-nav-overlay {
    width: auto
}

.w-nav[data-animation=over-left] .w-nav-overlay,.w-nav[data-animation=over-left] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    right: auto
}

.w-nav[data-animation=over-right] .w-nav-overlay {
    width: auto
}

.w-nav[data-animation=over-right] .w-nav-overlay,.w-nav[data-animation=over-right] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    left: auto
}

.w-nav-button {
    float: right;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 18px;
    font-size: 24px;
    display: none;
    position: relative
}

.w-nav-button:focus {
    outline: 0
}

.w-nav-button.w--open {
    color: #fff;
    background-color: #c8c8c8
}

.w-nav[data-collapse=all] .w-nav-menu {
    display: none
}

.w-nav[data-collapse=all] .w-nav-button,.w--nav-dropdown-open,.w--nav-dropdown-toggle-open {
    display: block
}

.w--nav-dropdown-list-open {
    position: static
}

@media screen and (max-width: 991px) {
    .w-nav[data-collapse=medium] .w-nav-menu {
        display:none
    }

    .w-nav[data-collapse=medium] .w-nav-button {
        display: block
    }
}

@media screen and (max-width: 767px) {
    .w-nav[data-collapse=small] .w-nav-menu {
        display:none
    }

    .w-nav[data-collapse=small] .w-nav-button {
        display: block
    }

    .w-nav-brand {
        padding-left: 10px
    }
}

@media screen and (max-width: 479px) {
    .w-nav[data-collapse=tiny] .w-nav-menu {
        display:none
    }

    .w-nav[data-collapse=tiny] .w-nav-button {
        display: block
    }
}

.w-tabs {
    position: relative
}

.w-tabs:before,.w-tabs:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-tabs:after {
    clear: both
}

.w-tab-menu {
    position: relative
}

.w-tab-link {
    vertical-align: top;
    text-align: left;
    cursor: pointer;
    color: #222;
    background-color: #ddd;
    padding: 9px 30px;
    text-decoration: none;
    display: inline-block;
    position: relative
}

.w-tab-link.w--current {
    background-color: #c8c8c8
}

.w-tab-link:focus {
    outline: 0
}

.w-tab-content {
    display: block;
    position: relative;
    overflow: hidden
}

.w-tab-pane {
    display: none;
    position: relative
}

.w--tab-active {
    display: block
}

@media screen and (max-width: 479px) {
    .w-tab-link {
        display:block
    }
}

.w-ix-emptyfix:after {
    content: ""
}

@keyframes spin {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}

.w-dyn-empty {
    background-color: #ddd;
    padding: 10px
}

.w-dyn-hide,.w-dyn-bind-empty,.w-condition-invisible {
    display: none!important
}

.wf-layout-layout {
    display: grid
}

:root {
    --body-bog: #0e0d0f;
    --h1-primary: 13.75rem;
    --neo-green-primary: #34f034;
    --h2: 5.125rem;
    --h3: 3.125rem;
    --h4: 1.875rem;
    --h5: 1.125rem;
    --h6: .75rem;
    --text-color-light: #e8eee8;
    --grey: #e8eee8;
    --indigo-dark: #af5adb;
    --p-color\<deleted\|variable-a7275391\>: #3fe9d4;
    --h1-secondary: 8.5rem;
    --bg-color: #0b1017;
    --indigo: #b537f5;
    --navbar-height: 10rem;
    --cta: 1.25rem;
    --size: 0px;
    --accessible-components-dark-grey: #9b9b9b;
    --navbar-height-scroll: 7rem
}

.w-backgroundvideo-backgroundvideoplaypausebutton:focus-visible {
    outline-offset: 2px;
    border-radius: 50%;
    outline: 2px solid #3b79c3
}

.w-checkbox {
    margin-bottom: 5px;
    padding-left: 20px;
    display: block
}

.w-checkbox:before {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-checkbox:after {
    content: " ";
    clear: both;
    grid-area: 1/1/2/2;
    display: table
}

.w-checkbox-input {
    float: left;
    margin: 4px 0 0 -20px;
    line-height: normal
}

.w-checkbox-input--inputType-custom {
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    border-radius: 2px
}

.w-checkbox-input--inputType-custom.w--redirected-checked {
    background-color: #3898ec;
    background-image: url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: #3898ec
}

.w-checkbox-input--inputType-custom.w--redirected-focus {
    box-shadow: 0 0 3px 1px #3898ec
}

.w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

body {
    background-color: var(--body-bog);
    font-family: Manrope,sans-serif;
    font-size: 1rem;
    font-style: normal;
    line-height: 1.5
}

h1 {
    font-family: Changaone,sans-serif;
    font-size: var(--h1-primary);
    margin-top: 0;
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    line-height: 107.353%;
    text-decoration: none
}

h2 {
    color: var(--neo-green-primary);
    font-family: Changaone,sans-serif;
    font-size: var(--h2);
    letter-spacing: -.1025rem;
    margin-top: 0;
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    line-height: 5.25rem
}

h3 {
    font-family: Changaone,sans-serif;
    font-size: var(--h3);
    letter-spacing: -.03125rem;
    margin-top: 0;
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    line-height: 121.6%
}

h4 {
    font-family: Changaone,sans-serif;
    font-size: var(--h4);
    margin-top: 0;
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem
}

h5 {
    color: var(--neo-green-primary);
    font-family: Changaone,sans-serif;
    font-size: var(--h5);
    margin-top: 0;
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5
}

h6 {
    font-size: var(--h6);
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 700;
    line-height: 1.5
}

p {
    margin-bottom: 0
}

ul,ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 1.5rem
}

li {
    margin-bottom: .25rem
}

img {
    max-width: 100%;
    display: inline-block
}

label {
    margin-bottom: .25rem;
    font-weight: 500
}

blockquote {
    border-left: .25rem solid #e2e2e2;
    margin-bottom: 0;
    padding: 0 1.25rem;
    font-size: 1.25rem;
    line-height: 1.5
}

figure {
    margin-top: 2rem;
    margin-bottom: 2rem
}

figcaption {
    text-align: center;
    margin-top: .25rem
}

.utility-page_component {
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    display: flex
}

.utility-page_wrapper {
    max-width: 20rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    display: flex
}

.utility-page_form {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    display: flex
}

.utility-page_image {
    margin-left: auto;
    margin-right: auto
}

.global-styles {
    display: block;
    position: fixed;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: auto
}

.margin-custom2 {
    margin: 2.5rem
}

.padding-xlarge {
    padding: 4rem
}

.margin-xlarge {
    margin: 4rem
}

.margin-xsmall {
    margin: .5rem
}

.padding-xhuge {
    padding: 8rem
}

.margin-custom1 {
    margin: 1.5rem
}

.padding-0 {
    padding: 0
}

.padding-xxhuge {
    padding: 12rem
}

.padding-huge {
    padding: 6rem
}

.margin-large {
    margin: 3rem
}

.padding-xxlarge {
    padding: 5rem
}

.margin-xxsmall {
    margin: .25rem
}

.padding-custom3 {
    padding: 3.5rem
}

.padding-large {
    padding: 3rem
}

.margin-tiny {
    margin: .125rem
}

.padding-small {
    padding: 1rem
}

.padding-custom2 {
    padding: 2.5rem
}

.margin-custom3 {
    margin: 3.5rem
}

.padding-custom1 {
    padding: 1.5rem
}

.margin-huge {
    margin: 6rem
}

.padding-medium {
    padding: 2rem
}

.padding-xsmall {
    padding: .5rem
}

.margin-xxlarge {
    margin: 5rem
}

.padding-xxsmall {
    padding: .25rem
}

.margin-xhuge {
    margin: 8rem
}

.padding-tiny {
    padding: .125rem
}

.margin-small {
    margin: 1rem
}

.margin-medium {
    margin: 2rem
}

.margin-xxhuge {
    margin: 12rem
}

.margin-0 {
    margin: 0
}

.margin-horizontal {
    margin-top: 0;
    margin-bottom: 0
}

.padding-top {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0
}

.margin-vertical {
    margin-left: 0;
    margin-right: 0
}

.margin-bottom {
    margin-top: 0;
    margin-left: 0;
    margin-right: 0
}

.padding-left {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0
}

.padding-vertical {
    padding-left: 0;
    padding-right: 0
}

.padding-horizontal {
    padding-top: 0;
    padding-bottom: 0
}

.margin-right {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0
}

.margin-top {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0
}

.margin-left {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0
}

.padding-right {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0
}

.padding-bottom,.padding-bottom.padding-xsmall,.padding-bottom.padding-xlarge {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.form_checkbox {
    flex-direction: row;
    align-items: center;
    margin-bottom: .5rem;
    padding-left: 0;
    display: flex
}

.form_checkbox-icon {
    width: .875rem;
    height: .875rem;
    border-radius: .125rem;
    margin: 0 .5rem 0 0
}

.form_checkbox-icon.w--redirected-checked {
    width: .875rem;
    height: .875rem;
    background-size: 90%;
    border-radius: .125rem;
    margin: 0 .5rem 0 0
}

.form_checkbox-icon.w--redirected-focus {
    width: .875rem;
    height: .875rem;
    border-radius: .125rem;
    margin: 0 .5rem 0 0;
    box-shadow: 0 0 .25rem 0 #3898ec
}

.fs-styleguide_background {
    width: 100%;
    border: 1px solid rgba(0,0,0,.1);
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    display: flex
}

.fs-styleguide_spacing {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    background-image: linear-gradient(rgba(255,255,255,0),rgba(45,64,234,.1));
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-content: start;
    justify-content: start;
    align-items: start;
    justify-items: stretch;
    display: grid;
    position: relative
}

.icon-1x1-small {
    width: 1rem;
    height: 1rem;
    flex: none;
    display: flex
}

.overflow-auto {
    overflow: auto
}

.spacing-clean {
    margin: 0;
    padding: 0
}

.icon-1x1-large {
    width: 2.5rem;
    height: 2.5rem
}

.z-index-2 {
    z-index: 2;
    position: relative
}

.fs-styleguide_background-space {
    width: 1px;
    height: 1px;
    margin: 5rem
}

.text-weight-semibold {
    font-weight: 600
}

.text-style-strikethrough {
    text-decoration: line-through
}

.fs-styleguide_item {
    grid-column-gap: 1.125rem;
    grid-row-gap: 1.125rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-content: start;
    justify-content: start;
    align-items: start;
    justify-items: start;
    padding-bottom: 3rem;
    display: grid;
    position: relative
}

.fs-styleguide_item.is-stretch {
    justify-items: stretch
}

.max-width-full {
    width: 100%;
    max-width: none
}

.fs-styleguide_item-header {
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding-bottom: 2rem
}

.fs-styleguide_heading-large {
    font-size: 6rem
}

.background-color-black {
    color: #f5f5f5;
    background-color: #000
}

.z-index-1 {
    z-index: 1;
    position: relative
}

.text-color-black {
    color: #000
}

.text-color-grey {
    color: gray
}

.fs-styleguide_2-col {
    width: 100%;
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.fs-styleguide_2-col.is-align-start {
    align-items: start
}

.form_message-success {
    padding: 1.25rem
}

.fs-styleguide_row {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    flex-direction: row;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.heading-style-h3 {
    font-weight: 400;
    line-height: 3.8rem
}

.heading-style-h3.text-color-light {
    color: var(--text-color-light)
}

.text-rich-text {
    color: var(--grey);
    font-style: normal
}

.text-rich-text h1 {
    margin-top: 1.5rem;
    margin-bottom: 1rem
}

.text-rich-text h2 {
    font-size: var(--h3);
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    line-height: 107%
}

.text-rich-text h3,.text-rich-text h4 {
    margin-top: 1.5rem;
    margin-bottom: 1rem
}

.text-rich-text h5,.text-rich-text h6 {
    margin-top: 1.25rem;
    margin-bottom: 1rem
}

.text-rich-text p {
    margin-bottom: 1rem;
    font-size: 1.125rem
}

.text-rich-text ul,.text-rich-text ol {
    margin-bottom: 1.5rem
}

.text-rich-text a {
    color: var(--grey)
}

.container-small {
    width: 100%;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto
}

.icon-height-small {
    height: 1rem
}

.icon-1x1-medium {
    width: 2rem;
    height: 2rem
}

.heading-style-h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1
}

.padding-global {
    padding-left: 7.5rem;
    padding-right: 7.5rem
}

.text-weight-normal {
    font-weight: 400
}

.padding-section-small {
    padding-top: 3rem;
    padding-bottom: 3rem
}

.max-width-small {
    width: 100%;
    max-width: 20rem
}

.text-color-white {
    color: #fff
}

.text-style-italic {
    font-style: italic
}

.text-weight-medium {
    font-weight: 500
}

.overflow-hidden {
    overflow: hidden
}

.fs-styleguide_section-header {
    width: 100%;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border-bottom: 1px solid #000;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    padding-bottom: 3rem;
    line-height: 1.4;
    display: grid
}

.text-size-tiny {
    font-size: .75rem
}

.max-width-xxlarge {
    width: 100%;
    max-width: 83rem
}

.fs-styleguide_1-col {
    width: 100%;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.overflow-visible {
    overflow: visible
}

.fs-styleguide_empty-box {
    z-index: -1;
    height: 3rem;
    min-width: 3rem;
    background-color: rgba(45,64,234,.05);
    border: 1px dashed #2d40ea;
    position: relative
}

.text-weight-light {
    font-weight: 300
}

.fs-styleguide_heading-medium {
    font-size: 4rem
}

.max-width-xsmall {
    width: 100%;
    max-width: 16rem
}

.fs-styleguide_4-col {
    width: 100%;
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.text-size-regular {
    font-size: 1rem
}

.text-weight-xbold {
    font-weight: 800
}

.text-align-right {
    text-align: right
}

.text-weight-bold {
    font-weight: 700
}

.max-width-medium {
    width: 100%;
    max-width: 34rem
}

.max-width-medium.align-left {
    margin-left: auto
}

.fs-styleguide_item-wrapper {
    width: 100%;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.max-width-large {
    width: 100%;
    max-width: 54rem
}

.fs-styleguide_header-block {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-items: center;
    justify-items: start;
    display: grid
}

.background-color-white {
    background-color: #fff
}

.text-style-muted {
    opacity: .6
}

.text-size-small {
    font-size: .875rem
}

.heading-style-h4 {
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 120%
}

.max-width-xlarge {
    width: 100%;
    max-width: 62rem
}

.form_radio-icon {
    width: .875rem;
    height: .875rem;
    margin-top: 0;
    margin-left: 0;
    margin-right: .5rem
}

.form_radio-icon.w--redirected-checked {
    width: .875rem;
    height: .875rem;
    border-width: .25rem
}

.form_radio-icon.w--redirected-focus {
    width: .875rem;
    height: .875rem;
    box-shadow: 0 0 .25rem 0 #3898ec
}

.text-style-nowrap {
    white-space: nowrap
}

.text-align-left {
    text-align: left
}

.background-color-grey {
    background-color: #f5f5f5
}

.form_input {
    min-height: 3rem;
    background-color: transparent;
    margin-bottom: .75rem;
    padding: .5rem 1rem
}

.form_input.is-text-area {
    min-height: 8rem;
    padding-top: .75rem
}

.heading-style-h6 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5
}

.padding-section-large {
    padding-top: 8rem;
    padding-bottom: 8rem
}

.fs-styleguide_3-col {
    width: 100%;
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: stretch;
    display: grid
}

.fs-styleguide_3-col.is-align-start {
    align-items: start
}

.text-style-link {
    color: #000;
    text-decoration: underline
}

.text-size-large {
    font-size: 1.5rem
}

.fs-styleguide_header {
    background-color: rgba(0,0,0,.05)
}

.heading-style-h2 {
    font-size: var(--h2);
    letter-spacing: -.1025rem;
    font-weight: 400;
    line-height: 5.25rem
}

.heading-style-h2.is-60 {
    width: 60%
}

.heading-style-h2.is-50 {
    width: 50%;
    text-align: right
}

.fs-styleguide_label {
    color: #fff;
    background-color: #2d40ea;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .25rem .75rem .3rem;
    font-weight: 600;
    display: flex
}

.fs-styleguide_label.is-tag {
    background-color: #be4aa5
}

.fs-styleguide_label.is-hex {
    color: #000;
    background-color: #f5f5f5
}

.fs-styleguide_version {
    z-index: 5;
    color: #000;
    font-weight: 500;
    text-decoration: none
}

.heading-style-h5 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5
}

.container-large {
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto
}

.icon-height-medium {
    height: 2rem
}

.text-style-allcaps {
    text-transform: uppercase
}

.overflow-scroll {
    overflow: scroll
}

.form_message-error {
    margin-top: .75rem;
    padding: .75rem
}

.icon-height-large {
    height: 3rem
}

.text-align-center {
    text-align: center
}

.form_component {
    margin-bottom: 0
}

.max-width-xxsmall {
    width: 100%;
    max-width: 12rem
}

.layer {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.text-style-quote {
    border-left: .25rem solid #e2e2e2;
    margin-bottom: 0;
    padding: 0 1.25rem;
    font-size: 1.25rem;
    line-height: 1.5
}

.align-center {
    margin-left: auto;
    margin-right: auto
}

.button {
    color: #fff;
    text-align: center;
    background-color: #000;
    padding: .75rem 1.5rem;
    font-weight: 600
}

.button.is-text {
    color: #000;
    background-color: transparent;
    border: 2px solid transparent
}

.button.is-small {
    padding: .5rem 1.25rem
}

.button.is-large {
    padding: 1rem 2rem
}

.button.is-secondary {
    color: #000;
    background-color: transparent;
    border: 2px solid #000;
    border-bottom-width: .125rem
}

.button.is-icon {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex
}

.fs-styleguide_classes {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.text-size-medium {
    font-size: 1.25rem;
    font-weight: 500
}

.fs-styleguide_section {
    grid-column-gap: 6rem;
    grid-row-gap: 6rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-items: start;
    justify-items: start;
    display: grid
}

.fs-styleguide_section.is-vertical {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-columns: 1fr
}

.button-group {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.button-group.is-center.show-mobile-landscape,.hide {
    display: none
}

.padding-section-medium {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.container-medium {
    width: 100%;
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto
}

.form_radio {
    flex-direction: row;
    align-items: center;
    margin-bottom: .5rem;
    padding-left: 0;
    display: flex
}

.fs-styleguide_spacing-all {
    display: none
}

.fs-styleguide_color.is-1 {
    background-color: #000
}

.fs-styleguide_color.is-2 {
    background-color: #f5f5f5
}

.fs-styleguide_color.is-3 {
    background-color: #fff
}

.spacer-6 {
    width: 100%;
    padding-top: 6rem
}

.spacer-2 {
    width: 100%;
    padding-top: 2rem
}

.spacer-2.show-mobile-landscape {
    display: none
}

.fs-styleguide_spacer-box {
    width: 100%;
    background-color: rgba(45,64,234,.1);
    border: 1px dashed #2d40ea;
    position: relative
}

.spacer-xsmall {
    width: 100%;
    padding-top: .5rem
}

.spacer-1 {
    width: 100%;
    padding-top: 1rem
}

.spacer-7 {
    width: 100%;
    padding-top: 8rem
}

.spacer-tiny {
    width: 100%;
    padding-top: .125rem
}

.spacer-xxsmall {
    width: 100%;
    padding-top: .25rem
}

.spacer-xxhuge {
    width: 100%;
    padding-top: 12rem
}

.spacer-4 {
    width: 100%;
    padding-top: 4rem
}

.spacer-large {
    padding-top: 3rem
}

.spacer-5 {
    width: 100%;
    padding-top: 5rem
}

.spacer-5.show-mobile-landscape {
    display: none
}

.section_header {
    width: 100%;
    height: 300vh;
    margin-bottom: -2px
}

.section_header.is-header {
    position: relative
}

.header_zoom-sticky {
    width: 100%;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0
}

.header_zoom-sticky-inner {
    z-index: 10;
    width: 100%;
    height: 100%;
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/652e2e5d547361b498a022be_header-text-bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    position: relative;
    overflow: hidden
}

.typo-zoom-text {
    width: 1px;
    height: 1px;
    overflow: hidden
}

.typo-zoom-text-image {
    width: 100%
}

.header_text {
    text-align: center;
    font-family: Manrope,sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7
}

.typo-zoom-text-wrappe {
    width: 80vw;
    position: relative
}

.talk-to-us-text {
    color: var(--grey);
    text-align: center;
    font-family: Manrope,sans-serif;
    font-size: .875rem;
    font-style: normal;
    font-weight: 600
}

.container-full {
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto
}

.container-full.is-relative {
    position: relative
}

.services_heading-main-wrap {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.services_heading-wrap {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.5rem;
    display: flex
}

.services_heading-icon-wrap {
    width: 6rem;
    height: 6rem;
    border: 2px solid var(--indigo-dark);
    background-color: #0b1017;
    border-radius: 4.375rem;
    justify-content: center;
    align-items: center;
    display: flex
}

.services_heading-icon {
    width: 3rem;
    display: flex
}

.services_heading {
    max-width: 15.4rem;
    letter-spacing: .01875rem;
    text-transform: uppercase;
    font-family: Changaone,sans-serif;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.125rem
}

.services_tagline {
    font-family: Manrope,sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 1.7
}

.styleguide {
    background-color: var(--p-color\<deleted\|variable-a7275391\>)
}

.h1-secondary {
    font-size: var(--h1-secondary);
    letter-spacing: -.17rem;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#43f943,#2cef2c);
    -webkit-background-clip: text;
    background-clip: text;
    font-style: normal;
    font-weight: 400;
    line-height: 107.353%
}

.container-1062 {
    width: 100%;
    max-width: 66.375rem;
    margin-left: auto;
    margin-right: auto
}

.services_box {
    margin-bottom: 10rem
}

.services_box.is-last {
    margin-bottom: 0
}

.services_box-inner {
    max-width: 53.875rem;
    margin-left: auto;
    margin-right: auto
}

.services_heading-wrapper {
    z-index: 2;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: -3.625rem;
    display: flex;
    position: relative
}

.services_heading-wrapper.is-right {
    z-index: 2;
    justify-content: flex-end
}

.services_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.services_name {
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
    padding: .75rem 1.5rem;
    display: inline-block
}

.services_name-text {
    color: var(--neo-green-primary);
    letter-spacing: .0875rem;
    text-transform: uppercase;
    font-family: Manrope,sans-serif;
    font-size: .875rem;
    font-style: normal;
    font-weight: 600
}

.services_sub-wrapper {
    grid-column-gap: 2rem;
    grid-row-gap: 1.5rem;
    flex-wrap: wrap;
    display: flex
}

.services_sub {
    max-width: 16.625px;
    min-width: 16.625rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: Manrope,sans-serif;
    font-weight: 400;
    display: flex
}

.services_sub-icon {
    display: flex
}

.text-block {
    color: var(--grey);
    font-size: 1.125rem;
    font-style: normal
}

.layout351_component {
    width: 100%;
    height: 44rem;
    background-color: var(--body-bog);
    display: flex;
    position: relative;
    overflow: hidden
}

.layout351_column {
    width: 10rem;
    height: 44rem;
    min-width: 10rem;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    -webkit-text-fill-color: inherit;
    background-image: linear-gradient(rgba(11,16,23,.66),rgba(11,16,23,.66));
    background-clip: content-box;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    position: relative
}

.layout351_column._01 {
    display: none
}

.layout351_column._02 {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    display: none
}

.layout351_column-vertical-text {
    color: var(--grey);
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: 1.5rem;
    font-family: Manrope,sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    transform: rotate(180deg)
}

.padding-section-large-2 {
    padding-top: 7rem;
    padding-bottom: 7rem
}

.layout351_column-content {
    height: 100%;
    min-width: 200vw;
    overflow: auto
}

.layout351_content-wrapper {
    width: 40rem;
    height: 100%;
    flex-direction: column;
    flex: none;
    padding: 4rem 3rem;
    display: flex
}

.layout351_accordion {
    width: 10rem;
    height: 44rem;
    min-width: 10rem;
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/652f7a66393869a959a4b8f0_Mobile---All-Screens%201.webp);
    background-position: 50%;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 1.5rem;
    text-decoration: none;
    display: flex;
    position: relative;
    overflow: hidden
}

.layout351_accordion.active {
    width: 100%;
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/652f7a66393869a959a4b8f0_Mobile---All-Screens%201.webp);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative
}

.layout351_accordion.wali {
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/654dfe24efb5d6275cddf4b4_01_Case_Studies_Wali.webp);
    background-repeat: no-repeat;
    background-size: cover
}

.layout351_accordion.mrs {
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/654dfe226b3b83d91095c6ea_02_Case_Studies_MRS.webp);
    background-repeat: no-repeat;
    background-size: cover
}

.layout351_accordion.renata {
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/654dfe22a84a4b549ce068bf_03_Case_Studies_Renata.webp);
    background-repeat: no-repeat;
    background-size: cover
}

.layout351_accordion.mettalove {
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/654dfe22a09f40a0dcf9b998_04_Case_Studies_Metta_Love.webp);
    background-repeat: repeat;
    background-size: cover
}

.section_layout351 {
    position: relative
}

.layout351_column-horiztonal-text {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.4;
    display: none
}

.services_link-box {
    z-index: 1;
    position: relative
}

.primary-button {
    width: 4rem;
    height: 4rem;
    border: 2px solid var(--indigo-dark);
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/652fbed21492cf90124880f3_arrow-down-left.png),linear-gradient(90deg,#d88eff,#b020fb);
    background-position: 50%,0 0;
    background-repeat: no-repeat,repeat;
    background-size: auto,auto;
    border-radius: 4.375rem;
    justify-content: center;
    align-items: center;
    transition: all .3s cubic-bezier(1,-.274,0,1.235);
    display: flex
}

.primary-button:hover {
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/652fbed21492cf90124880f3_arrow-down-left.png),linear-gradient(205deg,#d88eff 49.96%,#b020fb 86.76%);
    background-position: 50%,0 0;
    background-repeat: no-repeat,repeat;
    background-size: auto,auto;
    transform: scale(1.1)
}

.primary-button.is-absolute-01 {
    z-index: 100;
    position: absolute;
    top: auto;
    left: auto;
    right: 1rem
}

.services_button-icon {
    display: flex
}

.max-width-contact {
    width: 100%;
    max-width: 58rem
}

.padding-section-contact {
    padding-top: 12rem;
    padding-bottom: 16rem
}

.breadcrumbs {
    grid-column-gap: .25rem;
    grid-row-gap: .25rem;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.breadcrumbs-link {
    opacity: .8;
    color: var(--grey);
    font-size: .875rem;
    font-style: normal;
    text-decoration: none
}

.breadcrumbs-link.is_active {
    opacity: .4
}

.text-wrap {
    display: flex
}

.constant {
    color: transparent;
    letter-spacing: -.17rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(181,187,186,.62);
    font-family: Changaone,sans-serif;
    font-size: 8.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 107%;
    display: inline
}

.changer {
    color: var(--neo-green-primary);
    -webkit-text-stroke-width: 0px;
    font-family: Changaone,sans-serif;
    font-size: 8.5rem;
    font-style: normal;
    line-height: 107%;
    position: relative;
    top: 0
}

.show-tablet {
    display: none
}

.form-row {
    margin-bottom: 2.5rem
}

.form-row.is-buttons {
    margin-bottom: 5rem
}

.c-submit {
    grid-column-gap: .5rem;
    justify-content: center;
    align-items: center;
    display: flex
}

.success-message {
    color: #fff;
    background-color: #333;
    border-bottom: 3px solid #2ea07c
}

.form-label {
    opacity: 0;
    text-transform: uppercase;
    background-color: rgba(255,255,255,0);
    border-radius: 5px;
    margin-bottom: 2px;
    padding: 5px 5px 5px 0;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1em;
    transition: all .25s;
    display: inline-block;
    position: relative;
    left: 15px;
    transform: translate(0)
}

.form-label.focus-in {
    opacity: 1;
    color: #d88eff;
    background-color: rgba(255,255,255,0);
    font-style: normal;
    left: 0;
    transform: translateY(10px)
}

.error-message {
    color: #ff4040;
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    font-size: .9em;
    font-weight: 400
}

.form-input {
    height: 70px;
    color: #e8eee8;
    background-color: rgba(255,255,255,0);
    border: 0 solid #000;
    border-bottom: 2px solid rgba(232,238,232,.05);
    margin-bottom: 0;
    padding: 13px 20px 15px 0;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500
}

.form-input:focus {
    border-color: #2ea07c #2ea07c #af5adb #af5adb
}

.form-input::-ms-input-placeholder {
    color: rgba(232,238,232,.69);
    font-size: 1.5rem;
    font-weight: 400
}

.form-input::placeholder {
    color: rgba(232,238,232,.69);
    font-size: 1.5rem;
    font-weight: 400
}

.form-input.text-area {
    height: auto;
    min-height: 150px
}

.checkbox-label {
    color: #e8eee8;
    font-size: 1.5rem;
    font-style: normal
}

.fs_checkbox-2_label {
    z-index: 1;
    color: #b5bbb5;
    margin-bottom: 0;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    position: relative
}

.fs_checkbox-2_label.link-hover-ix {
    cursor: none
}

.fs_checkbox-2_button {
    width: 100%;
    height: 100%;
    cursor: none;
    border: 1px #000;
    border-radius: 0;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    box-shadow: 1px 1px 3px transparent
}

.fs_checkbox-2_button.w--redirected-checked {
    background-color: transparent;
    background-image: none;
    border-style: none
}

.fs_checkbox-2_button.w--redirected-focus {
    box-shadow: none;
    border-style: none;
    border-radius: 0
}

.fs_checkbox-2_button.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs_checkbox-2_field {
    width: 17.5rem;
    min-height: 3rem;
    cursor: pointer;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding: 1.25rem 2rem;
    display: flex;
    position: relative
}

.fs_checkbox-2_field:hover {
    color: #696969;
    border-color: #696969
}

.fs_checkbox-2_field.is-active-inputactive {
    color: #fff;
    background-color: #1378d1
}

.fs_checkbox-2_group {
    min-height: 3rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    justify-content: start;
    align-items: start;
    display: grid
}

.fs_checkbox-2_component {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    margin-top: 1.5rem;
    display: grid
}

.div-block-2 {
    max-width: 55rem;
    margin-left: auto;
    margin-right: auto
}

.div-block-3 {
    min-height: 5rem;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.checkbox-label-2 {
    color: rgba(232,238,232,.6);
    font-size: .875rem;
    font-style: normal;
    font-weight: 500
}

.conact_checkbox {
    width: 2rem;
    height: 2rem;
    background-color: #f7f7f7;
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/652fc0f29aa9939d36b06047_check.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    margin-right: .75rem;
    padding: .25rem
}

.conact_checkbox.w--redirected-checked {
    width: 2rem;
    height: 2rem;
    border-color: var(--neo-green-primary);
    background-color: var(--neo-green-primary);
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/652fc0f29aa9939d36b06047_check.png);
    background-size: auto
}

.checkbox-field {
    justify-content: center;
    align-items: center;
    display: flex
}

.contact_sub-form-text {
    color: #e2e5e2;
    align-self: center;
    font-family: Changaone,sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    line-height: 1.625rem
}

.footer_component {
    z-index: 6;
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/652fd3781c0d6f6c0eebd89b_footer-globe.svg);
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: auto;
    position: relative;
    overflow: hidden
}

.padding-section-footer {
    padding-top: 13rem
}

.container-56 {
    width: 100%;
    max-width: 56.5rem;
    margin-left: auto;
    margin-right: auto
}

.footer_button {
    width: 15.5625rem;
    height: 9.75rem;
    background-image: linear-gradient(90deg,#d88eff,#b020fb);
    border: 1px solid #af5adb;
    border-radius: 31.875rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex;
    position: relative
}

.footer_button-text {
    color: #0e0d0f;
    margin-right: .5rem;
    font-family: Changaone,sans-serif;
    font-size: 1.25rem;
    text-decoration: none
}

.footer_button-wrapper {
    height: 9rem;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative
}

.container-960 {
    width: 100%;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto
}

.footer_links-wrapper {
    justify-content: space-between;
    display: flex
}

.footer_links {
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
    display: flex
}

.footer_link {
    color: var(--grey);
    border-bottom: 1px solid #000;
    font-weight: 500;
    text-decoration: none
}

.footer_link:hover {
    border-bottom: 1px solid var(--grey)
}

.footer_icon-wrap {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    display: flex
}

.footer_icon {
    width: 1.75rem;
    height: 1.75rem;
    opacity: .6;
    color: #e8eee8
}

.footer_icon:hover {
    color: var(--neo-green-primary)
}

.footer_line-divier {
    height: .0625rem;
    opacity: .1;
    background-color: #e8eee8
}

.footer_contact-details {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.footer_address {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    display: flex
}

.footer_svg-dot,.footer_addres-icon-embed {
    display: flex
}

.footer_address-link {
    color: rgba(232,238,232,.6);
    font-size: .875rem;
    font-weight: 500;
    text-decoration: none
}

.footer_address-link:hover {
    border-bottom: 1px solid rgba(232,238,232,.6)
}

.footer_address-link.non-link:hover {
    border-bottom-width: 0
}

.footer_logo {
    height: 5rem;
    justify-content: center;
    align-items: flex-start;
    display: inline-block;
    overflow: hidden
}

.footer_logo-img {
    width: 13.875rem;
    height: 4.125rem;
    opacity: .5;
    transform: translateY(35px)
}

.footer_logo-wrapper {
    justify-content: center;
    align-items: center;
    display: flex
}

.footer_button-icon {
    display: none
}

.section_about-us.is-header {
    padding-top: 8rem
}

.max-width-about {
    width: 100%;
    max-width: 58rem
}

.max-width-about.align-center {
    max-width: 62rem
}

.about-us_text-heading {
    text-align: right;
    font-style: normal
}

.text-primary-about {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#b5bbb5,#4b4c4b);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    display: inline-block
}

.about-us_highlighted-text {
    max-width: 37rem;
    margin-left: auto
}

.about-us_highlighted {
    color: var(--grey);
    font-size: 1.875rem;
    font-style: normal
}

.green-highlight-text {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#42ff42,#2fc62f);
    -webkit-background-clip: text;
    background-clip: text
}

.about-us_sub-wrapper {
    max-width: 54rem
}

.talk-to-us-float {
    width: 5rem;
    height: 4rem;
    grid-column-gap: .25px;
    grid-row-gap: .25px;
    border: 1px solid var(--indigo-dark);
    background-color: var(--bg-color);
    border-radius: 3.75rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex;
    position: relative
}

.talk-to-us-float:hover {
    height: 5rem
}

.talk-to-us-float.link-hover-ix {
    z-index: 5;
    transition: all .2s cubic-bezier(1,-.426,0,1.439);
    position: relative
}

.about-us_aim-first {
    max-width: 36rem;
    border-bottom: .0625rem solid var(--indigo-dark);
    background-image: linear-gradient(90deg,rgba(181,187,181,.08),rgba(75,76,75,.08));
    padding: 3rem 4rem
}

.text-primary-aim {
    color: var(--grey);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 166.667%;
    display: inline-block
}

.about-us_aim-heading {
    max-width: 30.7rem;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#e8eee8,#b5bbb5);
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: -1.8rem;
    font-family: Changaone,sans-serif;
    font-weight: 400
}

.about-us_aim-heading.is-left {
    max-width: 32.9rem;
    text-align: right;
    margin-left: auto
}

.about-us_aim-second {
    max-width: 36rem;
    border-bottom: .0625rem solid var(--indigo-dark);
    background-image: linear-gradient(90deg,rgba(181,187,181,.08),rgba(75,76,75,.08));
    margin-left: auto;
    padding: 3rem 4rem
}

.about-us_deliver-heading {
    max-width: 36rem;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#e8eee8,#b5bbb5);
    -webkit-background-clip: text;
    background-clip: text;
    font-family: Changaone,sans-serif;
    font-weight: 400
}

.about-us_deliver-heading.is-right {
    text-align: right;
    margin-left: auto
}

.about-us_deliver {
    grid-column-gap: 2rem;
    grid-row-gap: 3.5rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.about-us_deliver-box {
    max-height: 14.8125rem;
    min-height: 14.8125rem;
    text-align: center;
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/6531185186dd621a94dddd8f_BG.svg);
    background-position: 50%;
    background-size: contain;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 2rem;
    padding-left: 2.7rem;
    padding-right: 2.7rem;
    display: flex
}

.text-primary-deliver {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#e8eee8,#b5bbb5);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 166.667%;
    display: inline-block
}

.about-us_numbers {
    grid-column-gap: 2rem;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.about-us_num {
    font-family: Changaone,sans-serif;
    font-size: var(--h2);
    letter-spacing: -.1025rem;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#d88eff,#b020fb);
    -webkit-background-clip: text;
    background-clip: text;
    font-style: normal;
    line-height: 5.25rem
}

.about-us_button-main-wrapper {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding-left: 5rem;
    display: inline-block
}

.primary-button-wrapper {
    min-height: 5rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex
}

.about-us_button-label {
    color: #e8eee8;
    margin-bottom: 1rem;
    font-size: .875rem;
    font-style: normal
}

.about-us_right-align {
    justify-content: flex-end;
    margin-top: 4rem;
    padding-right: 7.5rem;
    display: flex
}

.case-study_meta-info {
    text-align: right;
    justify-content: space-between;
    display: flex
}

.case-study_services {
    color: transparent;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#d88eff,#b020fb);
    -webkit-background-clip: text;
    background-clip: text
}

.case-study_meta-info-left {
    width: 36rem;
    max-width: 36rem;
    grid-row-gap: 3rem;
    text-align: left;
    flex-direction: column;
    display: flex
}

.case-study_meta-info-left.is-full {
    width: 100%
}

.case-study_services-iist {
    grid-column-gap: 3rem;
    grid-row-gap: .5rem;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 1rem;
    display: flex
}

.case-study_services-iist.is-two {
    grid-column-gap: 3rem;
    grid-row-gap: .5rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.case-study_service-text {
    width: 16.5rem;
    max-width: 16.5rem;
    color: #e8eee8;
    font-size: 1.125rem;
    font-style: normal
}

.case-study_web-link {
    grid-column-gap: .5rem;
    color: var(--indigo);
    justify-content: center;
    align-items: center;
    display: flex
}

.case-study_web-link-text {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#d88eff,#b020fb);
    -webkit-background-clip: text;
    background-clip: text;
    font-style: normal
}

.case-study_icon {
    display: flex
}

.case-study_image-wrapper {
    text-align: center;
    margin-left: auto;
    margin-right: auto
}

.case-study_summery {
    grid-column-gap: 3rem;
    grid-row-gap: 6rem;
    grid-template-rows: auto;
    grid-template-columns: 15.625rem 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.gradients-neutral-dark {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#b5bbb5,#4b4c4b);
    -webkit-background-clip: text;
    background-clip: text
}

.text-light {
    color: var(--grey);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8125rem
}

.text-light.text-weight-bold {
    font-weight: 700
}

.case-study_video-real {
    min-height: 51.25rem;
    border-radius: 1.25rem;
    position: relative;
    overflow: hidden;
    box-shadow: 36px 0 80px 80px rgba(0,0,0,.8)
}

.case-study_bg-video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.case-study_bullet-wrap {
    grid-column-gap: 0rem;
    grid-row-gap: 2.5rem;
    flex-direction: column;
    display: flex
}

.case-study_bullet-wrap.less-space,.case-study_bullet-wrap.is_less {
    grid-row-gap: 1.5rem
}

.case-study_bullet {
    grid-column-gap: 1rem;
    align-items: flex-start;
    display: flex
}

.case-study_bullet.min-15-5 {
    min-width: 15.5rem;
    align-items: center
}

.bullet-icon {
    display: flex
}

.case-study_bullet-horizontal {
    grid-column-gap: 4rem;
    grid-row-gap: 1rem;
    flex-wrap: wrap;
    display: flex
}

.case-study_bullet-wrap2 {
    grid-column-gap: 0rem;
    grid-row-gap: 1.8rem;
    flex-direction: column;
    display: flex
}

.max-width-xmedium {
    width: 100%;
    max-width: 36rem
}

.gradients-secondary-indigo-light {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#d88eff,#b020fb);
    -webkit-background-clip: text;
    background-clip: text;
    font-style: normal
}

.gradients-secondary-indigo-light.is-absolute {
    opacity: 0;
    position: absolute
}

.case-study_image-wrap {
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: 16px 0 48px 2px rgba(0,0,0,.4)
}

.case-study_img {
    width: 100%;
    height: 100%
}

.case-study_full-img-wrap {
    margin-left: -7.5rem;
    margin-right: -7.5rem;
    overflow: hidden
}

.case-study_full-img {
    width: 100%;
    height: 100%
}

.case-study_image-crousel {
    max-height: 75rem;
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    display: grid
}

.case-study_image-wrap1 {
    height: 35.1875rem;
    max-height: 35.1875rem;
    border-radius: 20px;
    overflow: hidden
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover
}

.case-study_bullet-wrap1 {
    grid-column-gap: 0rem;
    grid-row-gap: 1.25rem;
    flex-direction: column;
    display: flex
}

.case-study_main-numbers-wrap {
    grid-column-gap: 3.5rem;
    flex-direction: column;
    display: flex
}

.case-study_number {
    letter-spacing: -.1025rem;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#af5adb,#7c12b4);
    -webkit-background-clip: text;
    background-clip: text;
    font-family: Changaone,sans-serif;
    font-size: 5.125rem;
    font-style: normal;
    line-height: 71%
}

.case-study_number-icon {
    display: flex
}

.case-study_num-wrap {
    grid-column-gap: 1.25rem;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1.75rem;
    display: flex
}

.case-study_next-wrap {
    position: relative
}

.tagline {
    color: var(--grey);
    letter-spacing: .07rem;
    text-transform: uppercase;
    font-size: .875rem;
    font-style: normal
}

.gradients-primary-green {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#42ff42,#2fc62f);
    -webkit-background-clip: text;
    background-clip: text
}

.case-study_next-img {
    width: 100%;
    height: 100%
}

.spacer-xxxhuge {
    width: 100%;
    padding-top: 18rem
}

.max-width-xxmedium {
    width: 100%;
    max-width: 30rem
}

.max-width-xxmedium.align-left {
    margin-left: auto
}

.services_ilu-img {
    width: 100%
}

.gradients-secondary-indigo-dark {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#af5adb,#7c12b4);
    -webkit-background-clip: text;
    background-clip: text
}

.gradients-neutral-light {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#e8eee8,#b5bbb5);
    -webkit-background-clip: text;
    background-clip: text
}

.services_slider_sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 20px
}

.services_tag-text {
    color: var(--grey);
    background-image: linear-gradient(90deg,rgba(181,187,181,.12),rgba(75,76,75,.12));
    border-radius: 3.75rem;
    padding: .75rem 1.5rem;
    font-size: 1.125rem;
    font-style: normal
}

.gallery20_arrow {
    width: 3.5rem;
    height: 3.5rem;
    color: var(--indigo-dark);
    border: 1px solid #d88eff;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    top: auto;
    bottom: 0%;
    left: auto;
    right: 0%
}

.gallery20_arrow.is-left {
    right: 4rem
}

.gallery20_slide {
    margin-right: 2rem
}

.gallery20_arrow-icon {
    width: 1rem;
    height: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.gallery20_mask {
    overflow: visible
}

.gallery20_slider {
    height: auto;
    background-color: transparent;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 5.5rem;
    overflow: hidden
}

.gallery20_image-wrapper {
    width: 100%;
    padding-top: 56.25%;
    position: relative
}

.gallery20_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.max-width-40 {
    width: 100%;
    max-width: 40rem
}

.max-width-40.align-right {
    margin-left: auto
}

.service_active-line {
    width: 3.5rem;
    height: .0625rem;
    background-color: var(--indigo)
}

.services_sidebar-nav {
    font-size: .875rem;
    font-style: normal;
    font-weight: 500;
    text-decoration: none
}

.services_sidebar_nav {
    grid-column-gap: 1.5rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
    text-decoration: none;
    display: flex
}

.services_sidebar-nav-text {
    font-size: .875rem;
    font-style: normal;
    font-weight: 500;
    text-decoration: none
}

.hype-monster-wrap {
    position: absolute;
    top: 20rem;
    bottom: auto;
    left: -9rem;
    right: auto
}

.layout121_timeline-right {
    padding-top: 3.5rem;
    padding-bottom: 2.5rem
}

.layout121_timeline-wrapper {
    position: relative
}

.layout121_progress-bar {
    width: 2px;
    height: 100%;
    background-image: linear-gradient(90deg,#af5adb,#7c12b4)
}

.layout121_timeline-icon-wrapper {
    z-index: 1;
    background-color: var(--body-bog);
    padding: 1rem 0;
    position: relative
}

.layout121_timeline-left {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    display: flex;
    position: relative
}

.layout121_timeline-step {
    grid-column-gap: 2.5rem;
    grid-row-gap: 0px;
    grid-template-rows: auto;
    grid-template-columns: max-content 1fr max-content
}

.layout121_progress-bar-wrapper {
    width: 2px;
    height: 70%;
    background-image: linear-gradient(90deg,#b5bbb5,#4b4c4b);
    position: absolute;
    top: 10%;
    left: 2.4375rem;
    right: auto
}

.spacer-xsmall-2 {
    width: 100%;
    padding-top: 1rem
}

.method_desc {
    color: var(--grey);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8125rem
}

.method_icon {
    display: flex
}

.div-block-8 {
    padding-top: 3.5rem;
    padding-bottom: 2.5rem
}

.div-block-9 {
    position: relative
}

.method_num {
    font-family: Changaone,sans-serif;
    font-size: var(--h3);
    font-style: normal;
    line-height: 121.6%
}

.method_num.is-stroke {
    opacity: .5;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--grey);
    position: absolute;
    top: 1rem;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.method_num-indigo {
    opacity: 0;
    font-family: Changaone,sans-serif;
    font-size: var(--h3);
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#d88eff,#b020fb);
    -webkit-background-clip: text;
    background-clip: text;
    font-style: normal;
    line-height: 121.6%
}

.tools_component {
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: center;
    justify-items: center;
    display: grid
}

.tools_on-hover {
    opacity: 0;
    display: flex;
    position: absolute
}

.tools_icon-wrapper {
    width: 9.75rem;
    height: 9.75rem;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    display: flex;
    position: relative
}

.tools_icon-wrapper:hover {
    background-color: var(--body-bog);
    border-radius: 100%;
    box-shadow: 12px 0 64px rgba(175,90,219,.2)
}

.tools_without-hover {
    display: flex
}

.text-allcaps-600 {
    letter-spacing: .1575rem;
    text-transform: uppercase;
    font-size: .875rem;
    font-style: normal;
    font-weight: 600
}

.max-width-22 {
    width: 100%;
    max-width: 23rem
}

.max-width-22.align-left {
    margin-left: auto
}

.padding-section-allservices {
    padding-top: 12rem
}

.max-width-50 {
    max-width: 50rem
}

.section_allservives {
    position: relative
}

.all-services_navbar {
    z-index: 10;
    width: 30rem;
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 7.5rem;
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 3rem;
    bottom: auto;
    left: 0%;
    right: auto
}

.all-services_navbar.hide-tablet {
    top: 45%
}

.allservices_buttons-wrap {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr .55fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: start;
    justify-items: end;
    display: grid
}

.section_img-scroll {
    height: 37.5rem;
    position: relative;
    overflow: hidden
}

.services_img {
    width: 100%;
    height: 100%;
    object-fit: cover
}

.right-to-left {
    width: 161rem;
    grid-column-gap: 1rem;
    display: flex;
    overflow: hidden;
    transform: translate(539px)
}

.services_img-wrap {
    width: 52rem;
    height: 37.5rem
}

.left-to-right {
    width: 159rem;
    grid-column-gap: 1rem;
    display: flex;
    overflow: hidden;
    transform: translate(-1161px)
}

.service_component {
    margin-top: -7rem
}

.service_component.no-margin {
    margin-top: 0
}

.overaly-right {
    width: 30rem;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: auto;
    right: 0%
}

.overaly-left {
    width: 30rem;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: auto
}

.color-overlay-right,.fade-overlay-right,.color-overlay-left,.fade-overlay-left {
    position: absolute
}

.case-study_image-wrap2 {
    height: 36.125rem;
    max-height: 36.125rem;
    border-radius: 20px;
    overflow: hidden
}

.case-study_image-wrap3 {
    height: 37.875rem;
    max-height: 37.875rem;
    border-radius: 20px;
    overflow: hidden
}

.case-study_image-wrap4 {
    height: 33.4375rem;
    max-height: 33.4375rem;
    border-radius: 20px;
    overflow: hidden
}

.div-block-15,.div-block-16 {
    grid-row-gap: 4rem;
    flex-direction: column;
    display: flex
}

.circle {
    width: 1rem;
    height: 1rem;
    -webkit-text-stroke-width: 0px;
    -webkit-text-stroke-color: rgba(181,187,181,0);
    -webkit-text-fill-color: inherit;
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/6538cb10e946fafc3460e02c_circle.webp);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    background-clip: border-box;
    position: relative
}

.circle:hover {
    background-image: linear-gradient(#2fc62f,#42ff42);
    background-position: 0 0;
    background-repeat: repeat;
    background-size: auto;
    border-radius: 100%
}

.circle.w--current {
    background-image: linear-gradient(#42ff42,#2fc62f);
    background-position: 0 0;
    border-radius: 100%
}

.all-services_navbar-wrap {
    width: 3rem;
    height: 7rem;
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #b5bbb5;
    background-image: linear-gradient(90deg,rgba(181,187,181,.1),rgba(75,76,75,.1));
    border-radius: 2.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0%;
    display: flex
}

.hover-box {
    min-width: 19rem;
    opacity: 0;
    align-items: center;
    transition: all .2s;
    display: none;
    position: absolute;
    top: 0%;
    bottom: 0;
    left: 1rem;
    right: auto
}

.text-hover {
    border: 1px solid var(--neo-green-primary);
    color: var(--grey);
    border-radius: 3.125rem;
    padding: .62rem 1rem;
    font-size: .875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.8125rem
}

.circle-line {
    width: 1.8rem;
    height: .0625rem;
    background-color: #34f034
}

.testimonial11_content {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    flex-direction: row;
    align-items: flex-start;
    display: flex
}

.testimonial11_component {
    height: auto;
    color: var(--grey);
    background-color: transparent;
    padding-bottom: 6rem;
    overflow: hidden
}

.testimonial11_mask {
    width: 39.5%;
    overflow: visible
}

.testimonial11_client-image {
    width: 5rem;
    height: 5rem;
    min-height: 5rem;
    min-width: 5rem;
    object-fit: cover;
    border-radius: 100%
}

.testimonial11_client {
    text-align: left;
    align-items: center;
    display: flex;
    position: relative
}

.testimonial11_slide {
    margin-right: 6rem
}

.testimonial11_client-image-wrapper {
    width: 9.75rem;
    height: 9.75rem;
    background-color: rgba(135,139,135,.1);
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative
}

.testimonial11_arrow-icon {
    width: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.testimonial11_slide-nav {
    height: 1.75rem;
    font-size: .5rem;
    display: none;
    top: auto;
    bottom: 0%;
    left: 0%;
    right: auto
}

.testimonial11_arrow {
    width: 3.5rem;
    height: 3.5rem;
    color: var(--indigo);
    border: 1px solid #d88eff;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    top: 0%;
    bottom: auto;
    left: auto;
    right: 0%
}

.testimonial11_arrow.is-left {
    top: 5rem
}

.padding-sec-testimonial {
    padding-top: 12rem;
    padding-bottom: 13rem
}

.text-light-v2 {
    opacity: .7;
    color: var(--grey);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8125rem
}

.text-light-v3 {
    color: var(--grey);
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.8125rem
}

.testimonials-content {
    padding-top: 3.75rem
}

.overlay-testimonial {
    z-index: 2;
    width: 10rem;
    height: 100%;
    background-color: var(--body-bog);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: auto;
    right: 0%
}

.testimonial-icon {
    height: 2rem;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: auto;
    bottom: -.9rem;
    left: 0%;
    right: 0%
}

.product2_slider-num-wrapper {
    z-index: 20;
    grid-column-gap: .3rem;
    grid-row-gap: .3rem;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 12rem;
    bottom: auto;
    left: auto;
    right: 0%
}

.product2_slider-counter {
    color: var(--grey);
    font-style: normal
}

.mobile-details {
    display: none
}

.section_empower {
    margin-top: 5rem;
    position: relative;
    overflow: hidden
}

.padding-section-empower {
    padding-top: 15rem;
    padding-bottom: 0
}

.text-empower {
    color: var(--grey);
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#dcf9f4,#aed7d0);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8125rem
}

.overlay-empower {
    height: 13.875rem;
    background-image: linear-gradient(rgba(14,13,15,0),rgba(14,13,15,.48) 35%,#0e0d0f);
    position: absolute;
    top: auto;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.empower_globe-wrap {
    z-index: 10;
    height: 138%;
    position: absolute;
    top: -38%;
    bottom: auto;
    left: 0%;
    right: 0%
}

.empower_globe {
    width: 35rem;
    height: 35rem;
    opacity: .8;
    border-radius: 35px;
    margin-left: auto;
    margin-right: auto
}

.empower_icons-svg {
    width: 100%;
    height: 100%
}

.empower_icons-svg.show-mobile-landscape {
    display: none
}

.h1-third {
    letter-spacing: -.17rem;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#43f943,#2cef2c);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 107.353%
}

.open-info {
    height: 5.5rem;
    background-color: rgba(14,13,15,.6);
    border-bottom: 1px solid #42ff42;
    justify-content: space-between;
    align-items: center;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
    display: none;
    position: absolute;
    top: auto;
    bottom: .8rem;
    left: 1rem;
    right: 1rem
}

.open-info._01,.open-info._02 {
    display: flex
}

.text-block-2 {
    color: var(--grey);
    font-size: 1.875rem;
    font-style: normal
}

.text-light-v4 {
    color: var(--grey);
    font-size: .875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8125rem
}

.forge_component {
    height: 20rem;
    text-align: center;
    letter-spacing: -.17rem;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: stretch;
    font-family: Changaone,sans-serif;
    font-size: 8.5rem;
    font-weight: 400;
    line-height: 122.059%
}

.text-block-3 {
    height: 20rem;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    color: #0f0d10;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #b5bbb5;
    text-shadow: 0 4px 4px rgba(52,240,52,.56);
    justify-content: center;
    align-items: flex-start;
    font-size: 8rem;
    font-style: normal;
    line-height: 100%;
    display: flex
}

.your {
    transform: translateY(3rem)
}

.way {
    transform: translateY(6rem)
}

.to {
    transform: translateY(9rem)
}

.success {
    align-self: flex-start;
    transform: translateY(12rem)
}

.padding-section-forge {
    padding-top: 5rem;
    padding-bottom: 7rem
}

.case-study_main-image {
    width: 100%;
    height: 100%
}

.navbar18_container {
    width: 100%;
    height: 100%;
    grid-template-rows: auto;
    grid-template-columns: 1fr max-content 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.navbar18_menu-wrapper {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: block;
    position: relative
}

.navbar18_logo-link {
    z-index: 50;
    padding-left: 0
}

.navbar18_menu-button {
    z-index: 1;
    width: auto;
    min-height: 4.1875rem;
    background-color: #0e0d0f;
    border: 1px solid #2d2b30;
    border-radius: 3.75rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    display: flex
}

.navbar18_menu-button.w--open {
    z-index: 50;
    background-color: var(--body-bog)
}

.navbar18_component {
    width: 100%;
    min-height: var(--navbar-height);
    background-color: rgba(221,221,221,0);
    align-items: center;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    display: flex;
    position: fixed;
    top: 0
}

.navbar18_wrapper {
    grid-column-gap: 1rem;
    flex-direction: row;
    align-items: center;
    display: flex
}

.menu-icon4 {
    height: 4.1875rem;
    min-height: 4.1875rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    display: flex;
    position: relative
}

.navbar18_links-wrapper {
    width: 100%;
    height: 100dvh;
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    background-color: var(--body-bog);
    flex: 1;
    grid-template-rows: auto;
    grid-template-columns: .6fr 1fr;
    grid-auto-columns: 1fr;
    align-content: center;
    justify-content: start;
    align-items: start;
    justify-items: start;
    display: grid
}

.navbar18_menu {
    height: 100dvh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: height .5s;
    position: absolute;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
    overflow: hidden
}

.spacer-xhuge {
    width: 100%;
    padding-top: 7rem
}

.navbar18_left-content {
    height: 100dvh;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
    overflow: hidden
}

.navbar18_right-content {
    height: 100dvh;
    background-image: linear-gradient(rgba(181,187,181,.08),rgba(75,76,75,.08));
    align-items: flex-end;
    display: flex;
    position: relative
}

.lottie-animation {
    z-index: 1;
    width: 100%;
    padding-bottom: 0;
    padding-left: 3rem;
    padding-right: 3rem;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.navbar18_link-text {
    z-index: 1;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#e8eee8,#b5bbb5);
    -webkit-background-clip: text;
    background-clip: text;
    margin-left: 0;
    margin-right: 0;
    padding: 2.5rem 0 2.5rem 7.5rem;
    font-family: Changaone,sans-serif;
    font-size: 3.125rem;
    font-weight: 400;
    line-height: .8;
    text-decoration: none;
    position: relative
}

.navbar18_link-text:hover {
    color: var(--body-bog);
    -webkit-text-fill-color: inherit;
    background-image: none;
    background-clip: border-box
}

.navbar18_link-text.w--current {
    color: transparent
}

.navbar18_menu-link {
    flex: none;
    align-self: stretch;
    text-decoration: none;
    display: block;
    position: relative
}

.navbar18_menu-link.is-contact {
    padding-top: 2rem;
    padding-bottom: 2rem
}

.navbar18_link-contact {
    z-index: 1;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#e8eee8,#b5bbb5);
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: .5rem;
    margin-left: 0;
    margin-right: 0;
    padding: .5rem 0 .5rem 7.5rem;
    font-family: Changaone,sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: .4;
    text-decoration: none;
    position: relative
}

.navbar18_link-contact.w--current {
    color: transparent
}

.navbar18_link-contact.is-hover {
    opacity: .6;
    color: var(--body-bog);
    -webkit-text-fill-color: inherit;
    background-image: none;
    background-clip: border-box;
    display: none
}

.navbar18_link-contact-green {
    z-index: 1;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(#42ff42,#2fc62f);
    -webkit-background-clip: text;
    background-clip: text;
    margin-left: 0;
    margin-right: 0;
    padding: .5rem 0 .5rem 7.5rem;
    font-family: Changaone,sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: .4;
    text-decoration: none;
    position: relative
}

.navbar18_link-contact-green.w--current {
    color: transparent
}

.navbar18_link-contact-green.is-hover {
    color: var(--body-bog);
    -webkit-text-fill-color: inherit;
    background-image: none;
    background-clip: border-box;
    display: none
}

.div-block-19 {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-self: stretch;
    display: flex
}

.div-block-20 {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    align-self: stretch;
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 7.5rem;
    display: flex
}

.navbar18_icon-hover {
    display: none
}

.navbar18_icons {
    border: 1px solid #b5bbb5;
    border-radius: 3.125rem;
    padding: .75rem 1.5rem;
    transition: all .2s;
    position: relative
}

.navbar18_icons:hover {
    border-color: rgba(181,187,181,0)
}

.navbar18_icon-hover-out {
    display: flex
}

.navbar_menu-image {
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.navbar_menu-image._01,.navbar_menu-image._02 {
    display: none
}

.navbar_menu-image._03,.navbar_menu-image._04 {
    background-image: linear-gradient(#353635,#2d2d2d);
    display: none
}

.navbar18_hover-bg {
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/653dfbea43889296cd137e74_navbar-hover.svg);
    background-position: 0 0;
    background-size: auto;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    transform: translate(101%)
}

.navbar18_hover-bg.is-green {
    background-image: url(https://assets-global.website-files.com/6512a53444f13f73f4311bff/653dffc74d9800b8d4f558fa_hover-green-bg.svg);
    transform: translate(101%)
}

.padding-section-legal {
    padding-top: 12rem;
    padding-bottom: 10rem
}

.legal1_link {
    width: 100%;
    color: var(--grey);
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: 1.125rem;
    font-style: normal;
    text-decoration: none;
    display: inline-block
}

.legal1_link.w--current {
    opacity: .6;
    font-weight: 600
}

.legal1-content {
    grid-column-gap: 4.5rem;
    grid-row-gap: 4.5rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.legal1_meta-wrapper {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-direction: column;
    align-items: center;
    display: flex
}

.legal1_left-content {
    display: none
}

.legal1_sidebar {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1.5rem 2rem;
    position: -webkit-sticky;
    position: sticky;
    top: 13rem
}

.fs-cc-prefs2_option {
    border-bottom: 1px solid rgba(192,192,192,.3);
    padding-top: 16px;
    padding-bottom: 16px
}

.fs-cc-prefs2_close {
    background-color: var(--indigo);
    color: #fff;
    cursor: pointer;
    padding: 12px;
    font-size: 20px;
    text-decoration: none;
    position: absolute;
    top: 0;
    bottom: auto;
    left: auto;
    right: 0;
    box-shadow: -1px 1px 4px rgba(51,51,51,.1)
}

.fs-cc-prefs2_overlay {
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(14,13,15,.5);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.fs-cc-prefs2_label {
    color: var(--grey);
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 32px;
    font-size: 16px;
    font-weight: 700
}

.fs-cc-prefs2_form-wrapper {
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding: 30px;
    display: flex;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.fs-cc-prefs2_toggle-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.fs-cc-banner2_component {
    z-index: 999;
    width: 35.375rem;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    color: #fff;
    border: 1px solid rgba(232,238,232,.1);
    border-radius: .375rem;
    grid-template-rows: auto;
    grid-template-columns: 7.5rem 1fr;
    grid-auto-columns: 1fr;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 2rem;
    display: none;
    position: fixed;
    top: auto;
    bottom: 0%;
    left: 0%;
    right: auto
}

.fs-cc-prefs2_checkbox-label {
    display: none
}

.fs-cc-banner2_text {
    color: var(--grey);
    font-size: .875rem
}

.fs-cc-prefs2_title {
    color: var(--neo-green-primary);
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2em
}

.fs-cc-banner2_container {
    width: 100%;
    max-width: 990px;
    flex-direction: column;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.fs-cc-prefs2_content {
    height: 100%;
    color: #000;
    padding: 40px 32px
}

.fs-cc-prefs2_checkbox {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-color: var(--indigo-dark);
    cursor: pointer;
    background-color: #fff;
    margin-top: 0;
    margin-left: 0;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.fs-cc-prefs2_checkbox.w--redirected-checked {
    border-color: var(--neo-green-primary);
    background-color: var(--neo-green-primary);
    background-size: auto
}

.fs-cc-prefs2_form {
    width: 100%;
    max-height: 85vh;
    max-width: 400px;
    color: #fff;
    background-color: #333;
    margin-bottom: 0;
    position: relative
}

.fs-cc-prefs2_submit {
    text-align: center;
    background-color: rgba(56,152,236,0);
    border: 1px solid rgba(232,238,232,.3);
    border-radius: .375px;
    margin-top: 12px;
    padding: 12px 20px;
    font-weight: 700
}

.fs-cc-prefs2_component {
    z-index: 997;
    opacity: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding: 32px;
    display: none;
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.fs-cc-prefs2_space-small {
    margin-bottom: 12px
}

.fs-cc-preferences2_close-icon {
    width: 24px;
    height: 24px;
    color: #fff
}

.fs-cc-banner2_buttons-wrapper {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex: none;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    grid-auto-columns: 1fr;
    align-items: center;
    margin-top: 16px;
    display: flex
}

.fs-cc-prefs2_buttons-wrapper {
    flex-direction: column;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-end;
    margin-top: 16px;
    display: flex
}

.fs-cc-prefs2_checkbox-field {
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding: 2px;
    display: flex;
    position: relative
}

.fs-cc-banner2_heading {
    letter-spacing: .045rem;
    text-transform: uppercase;
    font-family: Changaone,sans-serif;
    font-size: 1.125rem;
    font-weight: 400
}

.pp-link {
    color: var(--grey)
}

.deny-button {
    width: 9.9375rem;
    min-height: 3rem;
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    color: var(--grey);
    border: 1px solid rgba(232,238,232,.3);
    border-radius: .375rem;
    justify-content: center;
    padding-top: .75rem;
    padding-bottom: .75rem;
    text-decoration: none;
    display: flex
}

.deny-button:hover {
    background-color: rgba(232,238,232,.08)
}

.html-embed {
    width: 1.25rem;
    display: flex
}

.text-block-4 {
    font-size: .875rem
}

.settings {
    min-height: 3rem;
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    color: var(--grey);
    border: 1px solid rgba(232,238,232,.3);
    border-radius: .375rem;
    justify-content: center;
    padding: .75rem;
    text-decoration: none;
    display: flex
}

.settings:hover {
    background-color: rgba(232,238,232,.08)
}

.html-embed-2 {
    display: flex
}

.div-block-21 {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: -1.5rem;
    margin-bottom: -1.5rem;
    display: flex;
    position: relative
}

.overley-bg {
    opacity: .04;
    background-image: linear-gradient(90deg,#e8eee8,#b5bbb5);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.text-block-5 {
    color: var(--indigo-dark)
}

.menu-text-menu {
    color: #e2e5e2;
    font-size: 1rem
}

.menu-icon_line {
    display: flex
}

.menu-icon4_wrapper-without-hover-menu {
    grid-column-gap: .2rem;
    grid-row-gap: .2rem;
    color: var(--grey);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.menu-icon4_wrapper-close {
    grid-column-gap: .2rem;
    grid-row-gap: .2rem;
    color: var(--grey);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: none
}

.menu-icon_close {
    display: flex
}

.menu-text-close {
    color: #e2e5e2;
    font-size: 1rem;
    display: none
}

.link-block {
    z-index: 12;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: absolute;
    top: auto;
    bottom: 2.5rem;
    left: auto;
    right: auto
}

.section_video {
    position: relative
}

.html-embed-3 {
    width: 100%;
    height: 100%
}

.padding-section-intro {
    padding-top: 10rem;
    padding-bottom: 2.5rem
}

.intro_highlighted-text {
    margin-left: auto;
    padding-right: 2rem
}

.slider-content {
    padding-top: 10rem;
    padding-bottom: 6rem
}

.slide {
    width: 480px;
    height: 561px;
    min-height: 561px;
    min-width: 480px;
    opacity: 0;
    text-align: center;
    background-color: #0e0d0f;
    border: 1px solid #b5bbb5;
    border-radius: 5.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    transition: all .2s;
    display: flex
}

.slide.center {
    align-items: stretch;
    overflow: hidden
}

.scroll {
    cursor: grab;
    position: static
}

.anchor {
    align-self: flex-start;
    text-decoration: none
}

.sticky-container {
    max-width: 100%;
    position: relative
}

.section_marque {
    min-height: 25rem;
    align-items: center;
    display: flex;
    position: relative
}

.marquee {
    width: 100%;
    grid-column-gap: 1rem;
    -webkit-text-stroke-width: .25px;
    -webkit-text-stroke-color: #e8eee8;
    flex-direction: row;
    font-style: normal;
    display: flex;
    overflow: hidden
}

.marquee-content {
    min-width: 100%;
    grid-column-gap: 1rem;
    flex: none;
    justify-content: space-around;
    display: flex
}

.text-block-6 {
    color: transparent;
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: white;
    text-transform: none;
    font-family: Changaone,sans-serif;
    font-size: 9.5rem;
    font-weight: 400;
    line-height: 120%
}

.marqee-oervlay {
    background-image: linear-gradient(90deg,#0e0d0f,rgba(14,13,15,.7) 4.69%,rgba(14,13,15,0) 48%,rgba(14,13,15,.7) 94%,#0e0d0f);
    align-items: center;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.scroll-down-lottie {
    width: 6rem;
    display: flex
}

.html-embed-4 {
    display: none
}

.slider-inner-content {
    flex: 1
}

.div-block-22 {
    min-height: 23rem;
    border-bottom: 1px solid var(--grey);
    padding: 3.9rem 7rem 2.9rem
}

.slide-image {
    width: 254px;
    height: 254px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative
}

.image-7 {
    margin: auto;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.slider-circle {
    height: 254px;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.div-block-23 {
    height: 12rem;
    min-height: 12rem;
    justify-content: center;
    align-items: center;
    padding: 2.59rem 2.5rem 2.9rem;
    display: flex
}

.overlay-slider {
    width: 45rem;
    background-image: linear-gradient(270deg,#0e0d0f,#0e0d0f .01%,#0e0d0f 14%,rgba(14,13,15,0));
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: auto;
    right: 0%
}

.overlay-slider.left {
    background-image: linear-gradient(-270deg,#0e0d0f,#0e0d0f .01%,#0e0d0f 14%,rgba(14,13,15,0));
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: auto
}

.background-video-2 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.services_link-main,.case-study_main-link {
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.service-image-wrapper {
    height: 400px;
    position: relative;
    overflow: hidden
}

.overlay-image-green {
    mix-blend-mode: color;
    background-color: #425754;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.overlay-image-black {
    background-image: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3));
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.next-case-study-imge-wra {
    height: 28.125rem;
    position: relative;
    overflow: hidden
}

.case-study-imge {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.navbar18_overlay,.navbar18_overlay-mobile {
    opacity: .3;
    background-image: linear-gradient(#0e0d0f,rgba(14,13,15,0) 91.15%);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.cta01-wrapper {
    min-height: 5rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex
}

.cta01-wrapper.is-absolute {
    min-width: 11rem;
    position: absolute;
    top: auto;
    bottom: 0%;
    left: auto;
    right: -5.4rem
}

.cta01-wrapper.is-absolute-case {
    min-width: 11rem;
    position: absolute;
    top: auto;
    bottom: -7%;
    left: auto;
    right: -5rem
}

.cta01-button {
    width: 4rem;
    height: 4rem;
    border: 2px solid var(--indigo-dark);
    background-image: linear-gradient(90deg,#d88eff,#b020fb);
    border-radius: 4.375rem;
    justify-content: center;
    align-items: center;
    transition: all .3s cubic-bezier(1,-.274,0,1.235);
    display: flex;
    position: relative;
    overflow: hidden
}

.cta01-button:hover {
    background-image: linear-gradient(205deg,#d88eff 49.96%,#b020fb 86.76%)
}

.cta01_text {
    opacity: 1;
    filter: blur();
    color: #e2e5e2;
    letter-spacing: .0125rem;
    align-self: center;
    font-family: Changaone,sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    line-height: 1.625rem
}

.cta01_icon1 {
    display: flex;
    position: absolute;
    transform: translate(-35px,35px)
}

.cta01_icon2 {
    display: flex
}

.back-to-top {
    z-index: 100;
    width: 5rem;
    height: 4rem;
    grid-column-gap: .25px;
    grid-row-gap: .25px;
    background-color: var(--bg-color);
    opacity: .4;
    border-radius: 3.75rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    text-decoration: none;
    display: flex;
    position: static;
    top: auto;
    bottom: 5rem;
    left: auto
}

.back-to-top:hover {
    opacity: 1
}

.back-to-top.w--current {
    position: -webkit-sticky;
    position: sticky
}

.top-arrow {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--grey);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.fixed-buttons {
    z-index: 8;
    position: fixed;
    bottom: 2.25rem;
    right: 1.19rem
}

.cta02-wrapper {
    min-height: 5rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex
}

.cta02-button {
    width: 4rem;
    height: 4rem;
    border: 2px solid var(--indigo-dark);
    background-image: linear-gradient(90deg,#d88eff,#b020fb);
    border-radius: 4.375rem;
    justify-content: center;
    align-items: center;
    transition: all .3s cubic-bezier(1,-.274,0,1.235);
    display: flex;
    position: relative;
    overflow: hidden
}

.cta02-button:hover {
    background-image: linear-gradient(205deg,#d88eff 49.96%,#b020fb 86.76%)
}

.cta02_icon2 {
    display: flex
}

.cta03_icon1 {
    display: flex;
    position: absolute;
    transform: translate(-35px,35px)
}

.cta02_text {
    filter: blur();
    color: #e2e5e2;
    letter-spacing: .0125rem;
    align-self: center;
    font-family: Changaone,sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    line-height: 1.625rem
}

.background-overlay-green {
    z-index: 20;
    background-image: linear-gradient(90deg,#42ff42,#2fc62f);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.background-overlay-black {
    z-index: 21;
    width: 265.375rem;
    height: 153.25rem;
    background-color: var(--bg-color);
    border-radius: 100%;
    margin-left: auto;
    margin-right: 0;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    transform: translate(3000px,-770px)
}

.animated-bg {
    display: none;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    overflow: hidden
}

.div-block-25 {
    grid-column-gap: 3rem;
    grid-row-gap: .5rem;
    flex-direction: column;
    display: flex
}

.case-study_content {
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
    flex-direction: column;
    display: flex
}

.case-study_content.is_less {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem
}

.case-study_hidden-content {
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    display: flex
}

.case-study_read-more-text {
    color: var(--grey);
    flex: 0 auto;
    text-decoration: underline
}

.case-study_read-more-text.gradients-neutral-dark-link {
    color: var(--text-color-light)
}

.case-study_read-more {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    font-size: 1.125rem;
    font-style: normal;
    display: flex
}

.spacer-2-5 {
    width: 100%;
    padding-top: 2.5rem
}

.spacer-1-5 {
    width: 100%;
    padding-top: 1.5rem
}

.case-study_points-heading {
    font-size: 1.125rem
}

.case-study_numbers-wrap {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.case-study_up-arrow {
    margin-top: 1rem;
    display: flex
}

.text-block-7 {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#af5adb,#7c12b4 33%);
    -webkit-background-clip: text;
    background-clip: text;
    font-family: Changa One,Impact,sans-serif;
    font-size: 5.125rem;
    font-style: normal;
    line-height: 102%
}

.case-study_numbers-wrapper {
    grid-column-gap: 3.5rem;
    grid-row-gap: 3.5rem;
    flex-direction: column;
    display: flex
}

.footer-padding {
    padding-left: 0;
    padding-right: 0
}

.case-study_read-more-text-2 {
    color: #e8eee8;
    flex: 0 auto;
    text-decoration: underline
}

.case-study_read-more-text-2.gradients-neutral-dark-link {
    color: #e8eee8
}

.text-light-2,.text-light-3 {
    color: #e8eee8;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8125rem
}

.text-light-3.text-weight-bold {
    font-weight: 700
}

.header_video-bg-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

.header_bg-video {
    width: 100%;
    height: 100%;
    opacity: .1
}

.header_overlay-bg {
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%
}

@media screen and (max-width: 991px) {
    h1 {
        white-space:pre-wrap;
        font-size: 7rem
    }

    h2 {
        font-size: 4rem;
        line-height: 4.5rem
    }

    .padding-xlarge {
        padding: 3rem
    }

    .margin-xlarge {
        margin: 3rem
    }

    .padding-xhuge {
        padding: 6rem
    }

    .padding-xxhuge {
        padding: 8rem
    }

    .padding-huge {
        padding: 5rem
    }

    .margin-large {
        margin: 2.5rem
    }

    .padding-xxlarge {
        padding: 4rem
    }

    .padding-large {
        padding: 2.5rem
    }

    .margin-huge {
        margin: 5rem
    }

    .padding-medium {
        padding: 1.5rem
    }

    .margin-xxlarge {
        margin: 4rem
    }

    .margin-xhuge {
        margin: 6rem
    }

    .margin-medium {
        margin: 1.5rem
    }

    .margin-xxhuge {
        margin: 8rem
    }

    .margin-horizontal {
        margin-top: 0;
        margin-bottom: 0
    }

    .padding-top {
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0
    }

    .margin-vertical {
        margin-left: 0;
        margin-right: 0
    }

    .margin-bottom {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0
    }

    .padding-left {
        padding-top: 0;
        padding-bottom: 0;
        padding-right: 0
    }

    .padding-vertical {
        padding-left: 0;
        padding-right: 0
    }

    .padding-horizontal {
        padding-top: 0;
        padding-bottom: 0
    }

    .margin-right {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0
    }

    .margin-top {
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0
    }

    .margin-left {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0
    }

    .padding-right {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0
    }

    .padding-bottom {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .hide-tablet {
        display: none
    }

    .fs-styleguide_2-col {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: 1fr
    }

    .max-width-full-tablet {
        width: 100%;
        max-width: none
    }

    .padding-global {
        padding-left: 5%;
        padding-right: 5%
    }

    .fs-styleguide_1-col {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem
    }

    .fs-styleguide_heading-medium {
        font-size: 3rem
    }

    .fs-styleguide_4-col {
        grid-template-columns: 1fr
    }

    .max-width-medium {
        max-width: 30rem
    }

    .padding-section-large {
        padding-top: 6rem;
        padding-bottom: 6rem
    }

    .fs-styleguide_3-col {
        grid-template-columns: 1fr
    }

    .fs-styleguide_section {
        grid-column-gap: 2.5rem;
        grid-template-columns: 1fr
    }

    .padding-section-medium {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .header_text,.services_tagline {
        font-size: 1.3rem;
        line-height: 1.5
    }

    .h1-secondary {
        font-size: 7rem
    }

    .layout351_component {
        height: auto;
        grid-column-gap: 2rem;
        grid-row-gap: .75rem;
        border-top: 0 transparent;
        border-right: 1px solid transparent;
        flex-direction: column
    }

    .layout351_column {
        width: 100%;
        height: 5rem;
        min-width: 100%;
        border-top: 1px solid transparent;
        flex-direction: row;
        justify-content: center;
        display: none
    }

    .layout351_column-vertical-text {
        display: none
    }

    .padding-section-large-2 {
        padding-top: 6rem;
        padding-bottom: 6rem
    }

    .layout351_column-content {
        width: 100%;
        height: auto;
        min-width: auto;
        overflow: hidden
    }

    .layout351_content-wrapper {
        width: auto;
        padding: 3rem 2.5rem
    }

    .layout351_accordion {
        width: 100%;
        height: 30rem;
        min-width: auto;
        border-right-style: none;
        flex-direction: column;
        margin-left: 0
    }

    .layout351_column-horiztonal-text {
        display: block
    }

    .padding-section-contact {
        padding-bottom: 6rem
    }

    .text-wrap {
        padding-left: 0
    }

    .changer {
        display: block
    }

    .show-tablet {
        display: inline
    }

    .footer_component {
        background-repeat: no-repeat
    }

    .footer_contact-details {
        grid-row-gap: .5rem;
        flex-direction: column
    }

    .talk-to-us-float {
        bottom: 1.2rem
    }

    .about-us_deliver {
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr 1fr
    }

    .about-us_deliver-box {
        background-repeat: no-repeat;
        background-size: contain
    }

    .case-study_image-wrapper {
        width: auto;
        max-width: none
    }

    .text-light {
        font-size: 1rem
    }

    .max-width-xmedium {
        max-width: 30rem
    }

    .case-study_full-img-wrap {
        margin-left: -4%;
        margin-right: -4%
    }

    .case-study_image-crousel {
        max-height: none;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: 1fr
    }

    .spacer-xxxhuge {
        padding-top: 10rem
    }

    .max-width-xxmedium {
        max-width: 30rem
    }

    .hype-monster-wrap {
        display: none
    }

    .layout121_timeline-step {
        grid-column-gap: 24px
    }

    .tools_component {
        grid-row-gap: 2rem;
        grid-template-columns: 1fr 1fr 1fr
    }

    .padding-section-allservices {
        padding-top: 12rem;
        padding-bottom: 4rem
    }

    .allservices_buttons-wrap {
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr;
        justify-items: start
    }

    .service_component {
        margin-top: 0
    }

    .overaly-right,.overaly-left {
        display: none
    }

    .testimonial11_content {
        flex-direction: column
    }

    .testimonial11_component {
        padding-bottom: 3rem;
        padding-left: 0;
        padding-right: 0
    }

    .testimonial11_mask {
        width: 100%
    }

    .testimonial11_client {
        grid-column-gap: 3rem
    }

    .testimonial11_slide {
        width: 100%;
        margin-right: 2.5rem;
        padding-right: 0
    }

    .testimonials-content {
        padding-top: 0
    }

    .overlay-testimonial {
        display: none
    }

    .product2_slider-num-wrapper {
        bottom: -10%;
        right: auto
    }

    .product2_slider-num-wrapper.hide-mobile-portrait {
        top: auto;
        bottom: 0%;
        left: 0%;
        right: auto
    }

    .mobile-details {
        display: block
    }

    .overlay-empower {
        height: 5rem
    }

    .h1-third {
        font-size: 7rem
    }

    .open-info {
        height: auto;
        -webkit-backdrop-filter: blur(30px);
        backdrop-filter: blur(30px);
        background-color: rgba(14,13,15,.6);
        border-bottom-style: none;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        bottom: 0;
        left: 0;
        right: 0
    }

    .text-block-2 {
        font-size: 1.0625rem;
        font-weight: 600
    }

    .text-light-v4 {
        font-size: .8125rem;
        display: none
    }

    .forge_component {
        height: auto;
        flex-flow: row
    }

    .text-block-3 {
        height: auto;
        flex-wrap: wrap;
        font-size: 7rem;
        display: block
    }

    .padding-section-forge {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .navbar18_container {
        grid-auto-columns: 1fr
    }

    .navbar18_menu-wrapper {
        justify-content: flex-start;
        padding-top: 0
    }

    .navbar18_menu-button.w--open {
        background-color: transparent
    }

    .navbar18_component {
        padding-left: 5%;
        padding-right: 5%
    }

    .menu-icon4 {
        position: relative
    }

    .navbar18_links-wrapper {
        grid-template-columns: 1fr;
        display: block
    }

    .navbar18_menu {
        flex-direction: column;
        justify-content: center;
        position: absolute
    }

    .navbar18_link-text {
        padding-left: 5%;
        font-size: 2.5rem
    }

    .navbar18_link-contact.is-hover,.navbar18_link-contact.is-hover-out,.navbar18_link-contact-green.is-hover,.navbar18_link-contact-green.is-hover-out,.div-block-20 {
        padding-left: 5%
    }

    .legal1-content {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    .menu-text-menu {
        display: none
    }

    .menu-icon4_wrapper-without-hover-menu {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        display: flex
    }

    .menu-icon4_wrapper-close {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center
    }

    .slide {
        width: 358px;
        height: 436px;
        min-height: 436px;
        min-width: 358px
    }

    .slide.center {
        width: 22rem;
        height: 27rem;
        min-height: 27rem;
        min-width: 22rem
    }

    .scroll {
        width: auto;
        position: static
    }

    .section_marque {
        min-height: 18rem
    }

    .text-block-6 {
        font-size: 7rem
    }

    .div-block-22 {
        min-height: 19rem;
        justify-content: center;
        align-items: center;
        padding-left: 5rem;
        padding-right: 5rem;
        display: flex
    }

    .slide-image {
        width: 10rem;
        height: 10rem
    }

    .image-7 {
        width: 4rem
    }

    .slider-circle {
        height: 10rem
    }

    .div-block-23 {
        height: 8rem;
        min-height: 8rem
    }

    .overlay-slider {
        display: none
    }

    .back-to-top {
        bottom: 1.2rem
    }

    .footer-padding {
        padding-left: 5%;
        padding-right: 5%
    }

    .text-light-2,.text-light-3 {
        font-size: 1rem
    }
}

@media screen and (max-width: 767px) {
    body {
        cursor:default
    }

    h1 {
        font-size: 4.5rem
    }

    h2 {
        font-size: 3rem;
        line-height: 3.2rem
    }

    h3 {
        font-size: 2.25rem
    }

    h4 {
        font-size: 1.25rem
    }

    h5 {
        font-size: 1rem
    }

    h6 {
        font-size: .875rem
    }

    a {
        cursor: pointer
    }

    .padding-xlarge {
        padding: 2rem
    }

    .margin-xlarge {
        margin: 2rem
    }

    .padding-xhuge {
        padding: 4rem
    }

    .padding-xxhuge {
        padding: 4.5rem
    }

    .padding-huge {
        padding: 3.5rem
    }

    .margin-large {
        margin: 1.5rem
    }

    .padding-xxlarge {
        padding: 3rem
    }

    .padding-large {
        padding: 1.5rem
    }

    .margin-huge {
        margin: 3.5rem
    }

    .padding-medium {
        padding: 1.25rem
    }

    .margin-xxlarge {
        margin: 3rem
    }

    .margin-xhuge {
        margin: 4rem
    }

    .margin-medium {
        margin: 1.25rem
    }

    .margin-xxhuge {
        margin: 4.5rem
    }

    .margin-horizontal {
        margin-top: 0;
        margin-bottom: 0
    }

    .padding-top {
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0
    }

    .margin-vertical {
        margin-left: 0;
        margin-right: 0
    }

    .margin-bottom {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0
    }

    .padding-left {
        padding-top: 0;
        padding-bottom: 0;
        padding-right: 0
    }

    .padding-vertical {
        padding-left: 0;
        padding-right: 0
    }

    .padding-horizontal {
        padding-top: 0;
        padding-bottom: 0
    }

    .margin-right {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0
    }

    .margin-top {
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0
    }

    .margin-left {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0
    }

    .padding-right {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0
    }

    .padding-bottom {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .hide-mobile-landscape {
        display: none
    }

    .fs-styleguide_heading-large {
        font-size: 3rem
    }

    .heading-style-h3.text-color-light {
        line-height: 3rem
    }

    .heading-style-h1 {
        font-size: 2.5rem
    }

    .padding-global {
        padding-left: 1.25rem;
        padding-right: 1.25rem
    }

    .padding-section-small {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .fs-styleguide_section-header {
        font-size: .875rem
    }

    .fs-styleguide_heading-medium {
        font-size: 2rem
    }

    .max-width-medium {
        max-width: 25rem
    }

    .max-width-full-mobile-landscape {
        width: 100%;
        max-width: none
    }

    .heading-style-h4 {
        font-size: 1.5rem
    }

    .text-style-nowrap {
        white-space: normal
    }

    .heading-style-h6 {
        font-size: .75rem
    }

    .padding-section-large {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .text-size-large {
        font-size: 1.25rem
    }

    .heading-style-h2 {
        font-size: 3.5rem;
        line-height: 3.5rem
    }

    .heading-style-h2.is-60 {
        width: 70%;
        font-size: 3.5rem;
        line-height: 3rem
    }

    .heading-style-h2.is-50 {
        width: 60%
    }

    .fs-styleguide_version,.heading-style-h5 {
        font-size: .875rem
    }

    .button-group.is-center {
        justify-content: center
    }

    .button-group.is-center.show-mobile-landscape {
        display: flex
    }

    .padding-section-medium {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .spacer-2.show-mobile-landscape {
        display: block
    }

    .spacer-7 {
        padding-top: 7rem
    }

    .spacer-xxhuge {
        padding-top: 9.25rem
    }

    .spacer-5.show-mobile-landscape {
        display: block
    }

    .header_zoom-sticky-inner {
        padding-top: 0
    }

    .header_text {
        font-size: 1.1rem
    }

    .services_heading-main-wrap {
        grid-template-columns: 1fr
    }

    .services_left-content {
        display: none
    }

    .services_right-content {
        text-align: center
    }

    .services_heading-wrap {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-direction: column;
        margin-bottom: 0
    }

    .services_heading-icon-wrap {
        width: 4rem;
        height: 4rem
    }

    .services_heading-icon {
        width: 2.5rem;
        display: flex
    }

    .services_heading {
        max-width: 100%
    }

    .services_tagline {
        font-size: 1.1rem
    }

    .h1-secondary {
        font-size: 4.5rem
    }

    .services_box {
        margin-bottom: 6rem
    }

    .services_heading-wrapper {
        margin-bottom: -3rem
    }

    .services_name {
        width: 100%;
        text-align: center
    }

    .text-block {
        font-size: 1rem
    }

    .layout351_component {
        border-top-style: none;
        border-right-style: none
    }

    .layout351_column {
        height: 4rem
    }

    .layout351_column-vertical-text {
        font-size: 1.25rem
    }

    .padding-section-large-2 {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .layout351_content-wrapper {
        padding: 1rem 1.5rem 2rem
    }

    .layout351_column-horiztonal-text {
        font-size: 1.25rem
    }

    .primary-button {
        cursor: pointer
    }

    .primary-button.is-absolute-01 {
        bottom: -12%;
        right: .5rem
    }

    .services_button-icon {
        display: flex
    }

    .padding-section-contact {
        padding-top: 9rem
    }

    .text-wrap {
        padding-left: 0
    }

    .constant,.changer {
        font-size: 6rem
    }

    .fs_checkbox-2_group {
        grid-auto-flow: row
    }

    .div-block-3 {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-direction: column;
        align-items: flex-start
    }

    .padding-section-footer {
        padding-top: 5rem
    }

    .footer_links-wrapper {
        grid-row-gap: 2rem;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }

    .footer_contact-details {
        grid-row-gap: 1rem
    }

    .section_about-us.is-header {
        padding-top: 6rem
    }

    .text-primary-about {
        font-size: 1rem
    }

    .about-us_highlighted {
        font-size: 1.5rem
    }

    .about-us_aim-first {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .about-us_aim-heading {
        font-size: var(--h3)
    }

    .about-us_aim-second {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .about-us_deliver-heading {
        font-size: var(--h3)
    }

    .about-us_numbers {
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center
    }

    .about-us_num {
        text-align: center
    }

    .primary-button-wrapper {
        text-decoration: none
    }

    .case-study_meta-info {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-direction: column
    }

    .case-study_services {
        font-size: 1.125rem
    }

    .case-study_meta-info-left {
        width: auto;
        max-width: none;
        order: 1
    }

    .case-study_service-text {
        width: auto;
        font-size: 1rem
    }

    .case-study_meta-info-right {
        flex: none;
        align-self: flex-start
    }

    .case-study_summery {
        grid-row-gap: 1.5rem;
        grid-template-columns: 1fr
    }

    .gradients-neutral-dark.is-absolute {
        font-size: var(--h3)
    }

    .text-light {
        font-size: .9rem;
        line-height: 1.5rem
    }

    .case-study_video-real {
        min-height: 20rem
    }

    .case-study_bg-video {
        height: auto
    }

    .max-width-xmedium {
        max-width: 25rem
    }

    .gradients-secondary-indigo-light.is-absolute {
        font-size: var(--h3)
    }

    .case-study_image-crousel {
        grid-template-columns: 1fr
    }

    .case-study_image-wrap1 {
        height: auto;
        max-height: none
    }

    .case-study_number {
        font-size: 5rem
    }

    .max-width-xxmedium {
        max-width: 25rem
    }

    .services_tag-text {
        font-size: 1rem
    }

    .gallery20_arrow {
        width: 2.5rem;
        height: 2.5rem
    }

    .gallery20_arrow.is-left {
        right: 3.5rem
    }

    .gallery20_slider {
        padding-bottom: 4rem
    }

    .layout121_timeline-right {
        padding-top: 0;
        padding-bottom: 0
    }

    .layout121_timeline-icon-wrapper {
        padding: 0 .5rem 0 0
    }

    .layout121_timeline-left {
        padding-top: 0;
        padding-bottom: 0
    }

    .layout121_timeline-step {
        grid-template-columns: 1fr;
        justify-items: start;
        margin-bottom: 3rem
    }

    .layout121_progress-bar-wrapper {
        display: none;
        left: 2rem
    }

    .div-block-8 {
        display: none
    }

    .method_num.is-stroke {
        top: 0
    }

    .method_num-indigo {
        opacity: 0
    }

    .tools_component {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr
    }

    .tools_icon-wrapper.link-hover-ix {
        width: 8rem;
        height: 8rem
    }

    .max-width-22.align-left.full {
        max-width: 100%;
        text-align: center
    }

    .padding-section-allservices {
        padding-top: 9rem;
        padding-bottom: 3rem
    }

    .case-study_image-wrap2,.case-study_image-wrap3,.case-study_image-wrap4 {
        height: auto;
        max-height: none
    }

    .div-block-15,.div-block-16 {
        grid-row-gap: 2.5rem
    }

    .text-hover {
        font-size: 1rem
    }

    .testimonial11_content {
        grid-row-gap: 1.5rem
    }

    .testimonial11_component {
        padding-bottom: 5rem
    }

    .testimonial11_client-image {
        width: 4rem;
        height: 4rem;
        min-height: 4rem;
        min-width: 4rem
    }

    .testimonial11_client {
        width: 100%;
        grid-column-gap: 2rem;
        justify-content: flex-start;
        align-items: center
    }

    .testimonial11_slide {
        padding-left: 0;
        padding-right: 0
    }

    .testimonial11_client-image-wrapper {
        width: 8rem;
        height: 8rem;
        margin-bottom: 1rem;
        margin-right: 0
    }

    .testimonial11_arrow-icon {
        width: .8rem
    }

    .testimonial11_arrow {
        width: 3rem;
        height: 3rem;
        top: auto;
        bottom: 0%;
        left: auto;
        right: 0%
    }

    .testimonial11_arrow.is-left {
        top: auto;
        bottom: 0%;
        left: auto;
        right: 4.5rem
    }

    .text-light-v2,.text-light-v3 {
        font-size: 1rem
    }

    .testimonial-icon {
        height: 2rem;
        bottom: -1rem
    }

    .product2_slider-num-wrapper {
        top: auto;
        bottom: 0%;
        left: 0%;
        right: auto
    }

    .section_empower {
        margin-top: 2rem
    }

    .padding-section-empower {
        padding-top: 10rem
    }

    .text-empower {
        font-size: 1rem
    }

    .overlay-empower {
        height: 2rem
    }

    .empower_globe-wrap {
        height: 100%;
        top: -20%
    }

    .empower_globe {
        width: 20rem;
        height: 20rem;
        border-radius: 20px
    }

    .empower_icons-svg.show-mobile-landscape {
        display: inline-block
    }

    .h1-third {
        letter-spacing: normal;
        font-size: 4rem
    }

    .text-light-v4 {
        font-size: 1rem
    }

    .text-block-3 {
        height: auto;
        font-size: 4.5rem
    }

    .padding-section-forge {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .navbar18_container {
        justify-content: space-between
    }

    .navbar18_logo {
        max-width: 88%
    }

    .navbar18_component {
        min-height: 6rem
    }

    .navbar18_links-wrapper {
        padding-top: 1rem;
        padding-bottom: 1rem
    }

    .navbar18_menu {
        height: auto
    }

    .navbar18_link-text {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        font-size: 2rem
    }

    .navbar18_link-text:hover {
        color: var(--grey)
    }

    .navbar18_link-contact,.navbar18_link-contact-green {
        font-size: 1.5rem
    }

    .div-block-19 {
        justify-content: center;
        padding-top: 4rem
    }

    .padding-section-legal {
        padding-top: 9rem;
        padding-bottom: 6rem
    }

    .legal1_link {
        font-size: 1.125rem
    }

    .legal1_sidebar {
        padding: 1rem 1.5rem
    }

    .fs-cc-banner2_component {
        width: auto;
        padding-left: 2rem
    }

    .fs-cc-prefs2_title {
        font-size: 20px
    }

    .fs-cc-banner2_container {
        flex-direction: column;
        align-items: flex-start
    }

    .fs-cc-banner2_buttons-wrapper {
        margin-top: 12px
    }

    .div-block-21 {
        display: none
    }

    .padding-section-intro {
        padding-top: 3rem
    }

    .slider-content {
        padding-top: 8rem;
        padding-bottom: 5rem
    }

    .section_marque {
        min-height: 10rem
    }

    .text-block-6 {
        font-size: 4.5rem
    }

    .navbar18_overlay-mobile {
        opacity: .9;
        background-color: #0e0d0f;
        background-image: none
    }

    .cta01-wrapper {
        text-decoration: none
    }

    .cta01-button {
        cursor: pointer
    }

    .cta01_icon1,.cta01_icon2 {
        display: flex
    }

    .cta02-wrapper {
        text-decoration: none
    }

    .cta02-button {
        cursor: pointer
    }

    .cta02_icon2,.cta03_icon1 {
        display: flex
    }

    .footer-padding {
        padding-left: 1.25rem;
        padding-right: 1.25rem
    }

    .text-light-2,.text-light-3 {
        font-size: .9rem;
        line-height: 1.5rem
    }
}

@media screen and (max-width: 479px) {
    h1 {
        overflow-wrap:break-word
    }

    .margin-horizontal {
        margin-top: 0;
        margin-bottom: 0
    }

    .padding-top {
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0
    }

    .margin-vertical {
        margin-left: 0;
        margin-right: 0
    }

    .margin-bottom {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0
    }

    .padding-left {
        padding-top: 0;
        padding-bottom: 0;
        padding-right: 0
    }

    .padding-vertical {
        padding-left: 0;
        padding-right: 0
    }

    .padding-horizontal {
        padding-top: 0;
        padding-bottom: 0
    }

    .margin-right {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0
    }

    .margin-top {
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0
    }

    .margin-left {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0
    }

    .padding-right {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0
    }

    .padding-bottom {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .max-width-full-mobile-portrait {
        width: 100%;
        max-width: none
    }

    .hide-mobile-portrait {
        display: none
    }

    .heading-style-h2.is-60,.heading-style-h2.is-50 {
        width: 100%
    }

    .header_zoom-sticky-inner {
        padding-top: 0
    }

    .header_text {
        font-size: 1rem
    }

    .services_heading-main-wrap {
        grid-template-columns: 1fr
    }

    .services_left-content {
        display: none
    }

    .services_tagline {
        font-size: 1rem
    }

    .services_heading-wrapper {
        margin-bottom: -2.6rem
    }

    .layout351_accordion {
        height: 20rem
    }

    .breadcrumbs {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        flex-wrap: wrap
    }

    .constant,.changer {
        font-size: 4.5rem
    }

    .c-submit {
        width: 100%;
        justify-content: flex-start
    }

    .footer_links {
        grid-row-gap: 1rem;
        flex-wrap: wrap;
        justify-content: center
    }

    .text-primary-about {
        text-align: right;
        display: block
    }

    .about-us_highlighted {
        font-size: 1.125rem
    }

    .about-us_aim-heading {
        max-width: 100%
    }

    .about-us_deliver {
        grid-row-gap: 2rem;
        grid-template-columns: 1fr
    }

    .about-us_right-align {
        padding-right: 0
    }

    .case-study_heading-wrap {
        overflow: hidden
    }

    .case-study_number {
        font-size: 4rem
    }

    .gallery20_arrow-icon {
        width: .8rem;
        height: .8rem
    }

    .gallery20_slider {
        padding-bottom: 3.5rem
    }

    .layout121_progress-bar-wrapper {
        top: 5%
    }

    .tools_component {
        grid-template-columns: 1fr 1fr
    }

    .testimonial11_client {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .testimonial11_slide {
        margin-right: 0
    }

    .empower_globe-wrap {
        height: 100%
    }

    .h1-third {
        overflow-wrap: break-word;
        font-size: 3rem
    }

    .navbar18_links-wrapper {
        grid-template-columns: 1fr
    }

    .navbar18_link-text {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        font-size: 2rem
    }

    .div-block-19 {
        justify-content: center
    }

    .padding-section-legal {
        padding-left: 0;
        padding-right: 0
    }

    .legal1_meta-wrapper {
        text-align: center
    }

    .fs-cc-prefs2_close {
        padding: 8px
    }

    .fs-cc-prefs2_label {
        font-size: 14px
    }

    .fs-cc-banner2_component {
        width: 100%;
        padding-left: 2rem
    }

    .fs-cc-banner2_text {
        text-align: center
    }

    .fs-cc-prefs2_title {
        font-size: 18px
    }

    .fs-cc-banner2_container {
        justify-content: center;
        align-items: center
    }

    .fs-cc-prefs2_content {
        padding: 24px
    }

    .fs-cc-prefs2_submit {
        margin-top: 8px
    }

    .fs-cc-prefs2_component {
        padding: 24px
    }

    .fs-cc-banner2_buttons-wrapper {
        flex-direction: column;
        align-items: stretch
    }

    .fs-cc-banner2_heading.gradients-secondary-indigo-light {
        text-align: center
    }

    .settings,.div-block-21 {
        display: none
    }

    .text-block-6 {
        font-size: 4rem
    }

    .scroll-down-lottie {
        width: 5rem
    }
}

#w-node-_22da9232-ad4b-1952-46eb-783412b013ba-f4311c74,#w-node-c102f1fe-cee5-121f-cd51-adca118a79d3-f4311c74,#w-node-_5db9ce5f-766c-363b-16a2-037376106abf-f4311c74,#w-node-_5db9ce5f-766c-363b-16a2-037376106ac0-f4311c74,#w-node-eb7d2a96-7fd2-04d7-e67f-30125ddb7867-f4311c74,#w-node-eb7d2a96-7fd2-04d7-e67f-30125ddb7868-f4311c74,#w-node-_87bc3233-edeb-cb5f-a222-e6009626473b-96264736,#w-node-_87bc3233-edeb-cb5f-a222-e6009626473c-96264736 {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-_51cbed5a-8a31-f49e-02b8-bd2787cf4d75-50d70b0e {
    grid-area: span 1/span 1/span 1/span 1;
    justify-self: stretch
}

#w-node-_9d8ec18d-36d5-da52-8398-6c25f6cac2ae-50d70b0e {
    grid-area: span 1/span 1/span 1/span 1;
    align-self: end;
    justify-self: stretch
}

#w-node-_2286d6dd-c058-d27e-2d7c-1e1b71aa52fe-71aa52fc,#w-node-_340e1c46-2e80-44d7-bada-48b73c08b54b-0e473b19,#w-node-b1005322-6b94-e104-2bfc-d6300fa38a5c-0e473b19,#w-node-_94fb1dd6-9a9b-c2ae-efe3-d57d811248d2-0e473b19,#w-node-ee4e93f7-0195-2b50-5b46-20717e0d19ca-0e473b19,#w-node-_7ad4be24-442c-232a-74c6-72bb12c5520e-0e473b19,#w-node-c5ee6b81-fccf-31dc-d8ec-c87c7083047f-0e473b19,#w-node-e8f2809c-f612-6451-db5c-9195b7e294d2-0e473b19,#w-node-a74433c5-f2b4-5d3d-11b4-eb2b023e43bd-0e473b19,#w-node-b958238f-ec0e-2434-8051-6d4133dd3752-0e473b19,#w-node-_0bf51277-4fae-9733-0148-e55c5781ea38-443f7580,#w-node-_0bf51277-4fae-9733-0148-e55c5781ea40-443f7580,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c2d5-053a0ce2,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c2d6-053a0ce2,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c3f0-053a0ce2,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c3f1-053a0ce2,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edc2-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edc5-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edc8-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edcb-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edce-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edd1-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edd4-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edd7-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33edda-ea33edc1,#w-node-_12aab52c-c1d1-8f8c-0dde-58f2ea33eddd-ea33edc1,#w-node-_5bd55d22-7e53-b246-c4b7-9c2133d78136-33d78130,#w-node-_5bd55d22-7e53-b246-c4b7-9c2133d78137-33d78130,#w-node-_5bd55d22-7e53-b246-c4b7-9c2133d78156-33d78130,#w-node-_5bd55d22-7e53-b246-c4b7-9c2133d78169-33d78130,#w-node-_5bd55d22-7e53-b246-c4b7-9c2133d7817c-33d78130,#w-node-_5bd55d22-7e53-b246-c4b7-9c2133d7818f-33d78130,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c2d5-f618c380,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c2d6-f618c380,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c3f0-f618c380,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c3f1-f618c380,#w-node-eda26a90-58ea-a833-c658-7d5076d1d08e-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d091-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d094-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d097-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d09a-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d09d-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d0a0-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d0a3-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d0a6-76d1d08d,#w-node-eda26a90-58ea-a833-c658-7d5076d1d0a9-76d1d08d,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c2d5-cd66f599,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c2d6-cd66f599,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c3f0-cd66f599,#w-node-_5ca0f734-706d-09f9-7864-4141e0e1c3f1-cd66f599,#w-node-a44660c5-2608-3361-d93b-bd273c737d82-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d85-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d88-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d8b-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d8e-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d91-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d94-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d97-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d9a-3c737d81,#w-node-a44660c5-2608-3361-d93b-bd273c737d9d-3c737d81,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed91b-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed91d-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed921-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed923-95a34bfd,#w-node-_642a9c93-40c8-f46d-5ee1-8c8e50d2d4b3-95a34bfd,#w-node-_642a9c93-40c8-f46d-5ee1-8c8e50d2d4b5-95a34bfd,#w-node-_642a9c93-40c8-f46d-5ee1-8c8e50d2d4b6-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed96c-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed96d-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed96f-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed971-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed972-95a34bfd,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed974-95a34bfd,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af9552af-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af9552b1-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af9552b5-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af9552b7-6fef6688,#w-node-_89078c0e-a75d-37dc-3c1a-c4b35da3c3ed-6fef6688,#w-node-_89078c0e-a75d-37dc-3c1a-c4b35da3c3ef-6fef6688,#w-node-_89078c0e-a75d-37dc-3c1a-c4b35da3c3f0-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af955300-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af955301-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af955303-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af955305-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af955306-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af955308-6fef6688,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af9552af-f24199c3,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af9552b1-f24199c3,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af9552b5-f24199c3,#w-node-a18ab4b2-82ee-3210-e81f-5eb4af9552b7-f24199c3,#w-node-_89078c0e-a75d-37dc-3c1a-c4b35da3c3ed-f24199c3,#w-node-_89078c0e-a75d-37dc-3c1a-c4b35da3c3ef-f24199c3,#w-node-_89078c0e-a75d-37dc-3c1a-c4b35da3c3f0-f24199c3,#w-node-_79f1469b-abf7-b301-fdbb-5fbaca621b26-f24199c3,#w-node-d7b71e92-755c-04a8-e638-d085bd374713-f24199c3,#w-node-d7b71e92-755c-04a8-e638-d085bd374714-f24199c3,#w-node-d7b71e92-755c-04a8-e638-d085bd374716-f24199c3,#w-node-d7b71e92-755c-04a8-e638-d085bd374718-f24199c3,#w-node-d7b71e92-755c-04a8-e638-d085bd374719-f24199c3,#w-node-d7b71e92-755c-04a8-e638-d085bd37471b-f24199c3,#w-node-_1f6b581d-f226-f7ec-4f5f-3a30ead62d85-6b54e11d,#w-node-_10181fbe-9881-f8ff-ef77-01115bc0a28b-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed91b-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed91d-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed921-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed923-6b54e11d,#w-node-_642a9c93-40c8-f46d-5ee1-8c8e50d2d4b3-6b54e11d,#w-node-_642a9c93-40c8-f46d-5ee1-8c8e50d2d4b5-6b54e11d,#w-node-_642a9c93-40c8-f46d-5ee1-8c8e50d2d4b6-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed96c-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed96d-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed96f-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed971-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed972-6b54e11d,#w-node-d890a01f-bdb2-644c-4b7d-bf277b1ed974-6b54e11d,#w-node-b0b0bf94-8c06-6396-a32d-b20c18dd46a6-6b54e11d,#w-node-ea425a47-3097-55e1-a63a-0f0e19449296-6b54e11d,#w-node-_16ec7688-dd24-6f11-310a-beeea8bfd824-6b54e11d,#w-node-ccbf3253-eb67-e842-b297-18e11e3180d6-6b54e11d,#w-node-_6ad3636f-964f-5985-64da-f5f2ee629fbb-6b54e11d,#w-node-_6ad3636f-964f-5985-64da-f5f2ee629fbc-6b54e11d,#w-node-_6ad3636f-964f-5985-64da-f5f2ee629fbe-6b54e11d,#w-node-_6ad3636f-964f-5985-64da-f5f2ee629fc0-6b54e11d,#w-node-_6ad3636f-964f-5985-64da-f5f2ee629fc1-6b54e11d,#w-node-_6ad3636f-964f-5985-64da-f5f2ee629fc3-6b54e11d,#w-node-_47b3a814-9a5d-6b29-2f6d-bd6c84bac6ab-84bac6aa,#w-node-_47b3a814-9a5d-6b29-2f6d-bd6c84bac6ac-84bac6aa,#w-node-_47b3a814-9a5d-6b29-2f6d-bd6c84bac6ae-84bac6aa,#w-node-_47b3a814-9a5d-6b29-2f6d-bd6c84bac6b0-84bac6aa,#w-node-_47b3a814-9a5d-6b29-2f6d-bd6c84bac6b1-84bac6aa,#w-node-_47b3a814-9a5d-6b29-2f6d-bd6c84bac6b3-84bac6aa {
    grid-area: span 1/span 1/span 1/span 1
}

@font-face {
    font-family: 'Manrope';
    src: url('https://assets.website-files.com/6512a53444f13f73f4311bff/65154a37bd4330da753083bb_Manrope-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Manrope';
    src: url('https://assets.website-files.com/6512a53444f13f73f4311bff/65154a3753b15e82b4edc175_Manrope-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Manrope';
    src: url('https://assets.website-files.com/6512a53444f13f73f4311bff/65154a37612dba97dbb835f2_Manrope-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Manrope';
    src: url('https://assets.website-files.com/6512a53444f13f73f4311bff/65154a37d684360c1c650d10_Manrope-Bold.ttf') format('truetype'), url('https://assets.website-files.com/6512a53444f13f73f4311bff/65154a37cefd3807e2b0c949_Manrope-ExtraBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Manrope';
    src: url('https://assets.website-files.com/6512a53444f13f73f4311bff/65154a37266239ade1453c17_Manrope-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Manrope';
    src: url('https://assets.website-files.com/6512a53444f13f73f4311bff/65154a373534e42147b37641_Manrope-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Changaone';
    src: url('https://assets.website-files.com/6512a53444f13f73f4311bff/652d062da0dd2fd86c61eb71_ChangaOne-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Changaone';
    src: url('https://assets.website-files.com/6512a53444f13f73f4311bff/652d062de3e8f9733712778c_ChangaOne-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}
