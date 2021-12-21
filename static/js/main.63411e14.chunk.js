(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var i,r,c,a=t(0),s=t.n(a),o=t(19),l=t.n(o),d=t(8),b=t(4),h=t(2),j=t(5),f=Object(b.b)(i||(i=Object(j.a)(["\n@font-face {\n  font-family: 'Calibri';\n  src:url('../../assets/fonts/calibri-font-family/calibri-bold.ttf');\n  src:url('../../assets/fonts/calibri-font-family/calibri-bold-italic.ttf');\n  src:url('../../assets/fonts/calibri-font-family/calibri-italic.ttf');\n  src:url('../../assets/fonts/calibri-font-family/calibri-regular.ttf');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Libre Barcode 39 Text';\n  src:url('../../assets/fonts/libre-barcode-39-text/LibreBarcode39Text-Regular.ttf');\n}\n\n@font-face {\n  font-family: 'Source Code Pro';\n  src:url('../../assets/fonts/source_code_pro/SourceCodePro-Light.ttf');\n}\n\n@font-face {\n  font-family: 'Pattaya';\n  src:url('../../assets/fonts/pattaya/Pattaya-Regular.ttf');\n}\n\n@font-face {\n  font-family: 'Ethnocentric';\n  src:url('../../assets/fonts/ethnocentric/ethnocentric rg.ttf');\n}\n\n@font-face {\n  font-family: 'Arty';\n  src:url('../../assets/fonts/arty-signature/Arty Signature.otf');\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Calibri\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #ededed;\n}\n  \ncode {\n  font-family: 'Source Code Pro', sans-serif;\n}\n"]))),u=t(9),x=t(23),g=t(10),m=t(6);function p(){var n=s.a.useState({width:window.innerWidth,height:window.innerHeight}),e=Object(m.a)(n,2),t=e[0],i=e[1];function r(){i({width:window.innerWidth,height:window.innerHeight})}return s.a.useEffect((function(){return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}})),t}var O,w=b.d.header(r||(r=Object(j.a)(["\nposition: sticky;\ntop: 0;\nbox-shadow: 1px 1px 2px #eeeeee;\nz-index: 10;\n\nnav {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    background-color: ",";\n\n    img {\n        margin: 10px 15px;\n        cursor: pointer;\n    }\n\n    ul {\n        position: absolute;\n        align-items: center;\n        width: 100%;\n        transform: ",";\n        transition: 200ms ease-out;\n        text-align: center;\n        background-color: ",";\n        z-index: -1;\n\n        li {\n            display: grid;\n            grid-template-columns: 1fr auto;\n            padding: 20px 0;\n            list-style: none;\n            border-bottom: thin solid #eeeeee;\n\n            a {\n                display: block;\n                width: 100%;\n            }\n\n            div {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                right: 0;\n                height: 60px;\n                width: 60px;\n                align-self: center;\n                background-color: #333;\n                color: #fff;\n                font-size: x-large;\n                z-index: -1;\n            }\n\n            .twitter {\n                background-color: #1A8CD8 !important;\n            }\n\n            .linkedin {\n                background-color: #0077b5;\n            }\n        }\n    }\n\n    button {\n        margin: 10px 15px;\n        border: none;\n        background: none;\n        font-size: larger;\n        cursor: pointer;\n    }\n}\n\n/* Tablet size & ^ */\n","\n"])),(function(n){return n.theme.bg.header}),(function(n){return n.isNavOpen?"translateY(49px)":"translateY(-150%)"}),(function(n){return n.theme.bg.header}),(function(n){return n.width>n.theme.breakpoints.mobile&&Object(b.c)(c||(c=Object(j.a)(["\nnav {\n    grid-template-columns: auto 50%;\n\n    ul {\n        display: flex;\n        position: relative;\n        transform: translateY(0px);\n        justify-content: space-evenly;\n        align-items: center;\n        z-index: 1;\n\n        li {\n            display: inline;\n            border: none;\n            padding: 0;\n            a {\n                display: inline;\n            }\n            div {\n                display: none;\n            }\n        }\n    }\n\n    button {\n        display: none;\n    }\n}\n"])))})),A=t(1);function y(){var n=function(){var n=s.a.useState(!1),e=Object(m.a)(n,2),t=e[0],i=e[1],r=p().width;return{isNavOpen:t,handleNav:function(){return i(!t)},width:r}}(),e=n.isNavOpen,t=n.handleNav,i=n.width;return Object(A.jsx)(w,{isNavOpen:e,width:i,children:Object(A.jsxs)("nav",{children:[Object(A.jsx)(d.b,{to:"/",children:Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo",height:"25px"})}),Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:Object(A.jsx)(d.b,{to:"/",children:"Home"})}),Object(A.jsx)("li",{children:Object(A.jsx)(d.b,{to:"/contact",children:"Contact"})}),Object(A.jsxs)("li",{children:[Object(A.jsx)("a",{href:"https://github.com/TristinCodingham",target:"_blank",rel:"noreferrer",children:"Github"}),Object(A.jsx)("div",{className:"github",children:Object(A.jsx)(u.a,{icon:g.a})})]}),Object(A.jsxs)("li",{children:[Object(A.jsx)("a",{href:"https://twitter.com/Codingham",target:"_blank",rel:"noreferrer",children:"Twitter"}),Object(A.jsx)("div",{className:"twitter",children:Object(A.jsx)(u.a,{icon:g.d})})]}),Object(A.jsxs)("li",{children:[Object(A.jsx)("a",{href:"https://www.linkedin.com/in/tristincodingham/",target:"_blank",rel:"noreferrer",children:"Linkedin"}),Object(A.jsx)("div",{className:"linkedin",children:Object(A.jsx)(u.a,{icon:g.c})})]})]}),Object(A.jsx)("button",{onClick:t,children:Object(A.jsx)(u.a,{icon:x.a})})]})})}function k(){return Object(A.jsx)("div",{})}var v,C,B,S,F,T=b.d.main(O||(O=Object(j.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]))),z=b.d.section(v||(v=Object(j.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmin-height: calc(100vh - 49px);\n\n.jumbotron {\n    background-color: #fff;\n    border-radius: 15px;\n    box-shadow: 1px 1px 10px #dddddd;\n    transform: ",";\n    transition: 200ms ease-out;\n\n    .heading {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        \n        div {\n            display: grid;\n            ul {\n                display: none;\n                padding: 10px 0px;\n                li {\n                    display: inline;\n                    list-style: none;\n                    margin-right: 5px;\n                    font-size: xx-large;\n                }\n            }\n        }\n\n        .github a {\n            color: #333;\n        }\n\n        .twitter a {\n            color: #1A8CD8;\n        }\n\n        .linkedin a {\n            color: #0077b5;\n        }\n\n        h1 {\n            font-family: 'Pattaya', sans-serif;\n            letter-spacing: 3px;\n            font-size: 2.5rem;\n            max-width: 15ch;\n            height: min-content;\n            text-align: center;\n            justify-self: center;\n\n            span {\n                color: ",";\n\n                span {\n                    color: ",";\n                }\n            }\n        }\n        img {\n            margin: 40px auto;\n            display: inline-block;\n            object-fit: cover;\n            object-position: center;\n            width: 60vw;\n            max-width: 400px;\n            aspect-ratio: 1/1;\n            clip-path: polygon(45% 0, 0 92%, 100% 100%);\n            transition: 200ms cubic-bezier(1, 0.63, 0.24, 2.55);\n\n            &:hover {\n                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n            }\n        }\n    }\n\n    .info {\n        p {\n            font-size: x-large;\n            text-align: center;\n            max-width: 600px;\n        }\n    }\n}\n\n/* Tablet size & ^ */\n","\n"])),(function(n){return!n.isLoaded&&"translateX(-1000px)"}),(function(n){return n.theme.accents.skyBlue}),(function(n){return n.theme.accents.skyBlueShade}),(function(n){return n.width>n.theme.breakpoints.mobile&&Object(b.c)(C||(C=Object(j.a)(["\n    .jumbotron {\n        .heading {\n            flex-direction: row-reverse;\n\n            div ul {\n                display: block;\n            }\n        \n            h1 {\n                display: inline-block;\n                text-align: start;\n                justify-self: start;\n            }\n        }\n    }\n"])))})),E=t.p+"static/media/profilepic.bf8313e3.jpg",D=b.d.div(B||(B=Object(j.a)(["\nwidth: 100%;\nmax-width: 1024px;\npadding: ",";\n"])),(function(n){var e=n.padding;return"30px ".concat(e)}));function K(n){var e=n.children,t=function(){var n=Object(a.useState)("15px"),e=Object(m.a)(n,2),t=e[0],i=e[1],r=p().width;return Object(a.useEffect)((function(){r<=768&&i("15px"),r>768&&i("30px"),r>1024&&i("120px")}),[r]),{padding:t}}(),i=t.padding;return Object(A.jsx)(D,{padding:i,children:e})}var P,X=Object(b.d)(d.b)(S||(S=Object(j.a)(['\nfont-family: \'Source Code Pro\', sans-serif;\nfont-weight: bold;\ntext-transform: uppercase;\ntext-decoration: none;\ntext-align: center;\ndisplay: block;\nwidth: 100%;\nmax-width: 200px;\nheight: 60px;\nmargin: 10px auto;\npadding: 20px 0;\ncolor: #fff;\nbackground: hsla(192, 100%, 50%, 1);\nbackground: linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);\nbackground: -moz-linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);\nbackground: -webkit-linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);\nfilter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00CEFF", endColorstr="#007EA7", GradientType=1 );\ntransition: 200ms cubic-bezier(1, 0.63, 0.24, 2.55);\n\n&:hover {\n    font-size: larger;\n}\n\n',"\n"])),(function(n){return n.ghost&&Object(b.c)(F||(F=Object(j.a)(["\ncolor: #333;\nbackground: none;\nborder: 1px solid;\n"])))}));function L(){var n=function(){var n=s.a.useState(!1),e=Object(m.a)(n,2),t=e[0],i=e[1];return s.a.useEffect((function(){i(!0)}),[]),{isLoaded:t}}(),e=n.isLoaded,t=p().width;return Object(A.jsx)(z,{width:t,isLoaded:e,children:Object(A.jsx)("div",{className:"jumbotron",children:Object(A.jsxs)(K,{children:[Object(A.jsxs)("div",{className:"heading",children:[Object(A.jsxs)("div",{children:[Object(A.jsxs)("h1",{children:["Frontend ",Object(A.jsxs)("span",{children:["UI/",Object(A.jsx)("span",{children:"UX"})]})," Web Developer"]}),Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{className:"github",children:Object(A.jsx)("a",{href:"https://github.com/TristinCodingham",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(u.a,{icon:g.b})})}),Object(A.jsx)("li",{className:"twitter",children:Object(A.jsx)("a",{href:"https://twitter.com/Codingham",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(u.a,{icon:g.e})})}),Object(A.jsx)("li",{className:"linkedin",children:Object(A.jsx)("a",{href:"https://www.linkedin.com/in/tristincodingham/",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(u.a,{icon:g.c})})})]}),Object(A.jsx)("p",{children:"I build accessible, SEO-friendly websites with meaningful semantics and memorable experiences."})]}),Object(A.jsx)("img",{src:E,alt:"Tristin Cunningham profile"})]}),Object(A.jsxs)("div",{className:"info",children:[Object(A.jsx)(X,{to:"/contact",children:"Hire"}),Object(A.jsx)(X,{ghost:!0,to:"/about",children:"Learn More"})]})]})})})}function q(){return Object(A.jsx)(T,{children:Object(A.jsx)(L,{})})}function N(){return Object(A.jsx)("div",{children:Object(A.jsx)("h1",{children:"Error"})})}var G,I=b.d.main(P||(P=Object(j.a)(["\n\n"])));function U(){return Object(A.jsx)(I,{children:Object(A.jsx)("form",{action:"https://formspree.io/f/xlezeybe",method:"POST",children:Object(A.jsxs)(K,{children:[Object(A.jsx)("input",{type:"email",name:"_replyto",placeholder:"Full name"}),Object(A.jsx)("textarea",{name:"message",placeholder:"Your message"}),Object(A.jsx)("button",{type:"submit",children:"Send"})]})})})}var W=b.d.main(G||(G=Object(j.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"])));function Z(){return Object(A.jsxs)(W,{children:[Object(A.jsx)("div",{className:"about-me"}),Object(A.jsx)("div",{className:"toolbox"}),Object(A.jsx)("div",{className:"projects"}),Object(A.jsx)("div",{className:"certificates"})]})}var V=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(f,{}),Object(A.jsx)(y,{}),Object(A.jsxs)(h.c,{children:[Object(A.jsx)(h.a,{path:"/about",element:Object(A.jsx)(Z,{})}),Object(A.jsx)(h.a,{path:"/contact",element:Object(A.jsx)(U,{})}),Object(A.jsx)(h.a,{path:"/",exact:!0,element:Object(A.jsx)(q,{})}),Object(A.jsx)(h.a,{path:"/*",element:Object(A.jsx)(N,{})})]}),Object(A.jsx)(k,{})]})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))};l.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(d.a,{children:Object(A.jsx)(b.a,{theme:{accents:{skyBlue:"#00ceff",skyBlueShade:"#31BFE2"},fg:{header:"",body:"",footer:""},bg:{header:"#fff",body:"",footer:""},breakpoints:{mobile:768,tablet:1024,laptop:1200,desktop:1920}},children:Object(A.jsx)(V,{})})})}),document.getElementById("root")),H()}},[[34,1,2]]]);
//# sourceMappingURL=main.63411e14.chunk.js.map