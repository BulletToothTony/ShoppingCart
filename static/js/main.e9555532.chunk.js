(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(18),o=c.n(a),r=(c(26),c(7)),s=c(2),j=c(0),l=function(){return Object(j.jsx)("section",{className:"homeSection",children:Object(j.jsx)(r.b,{to:"/shop",children:Object(j.jsx)("h2",{children:"Go Shopping Now"})})})},u=c(11),d=c(12),m=(c.p,i.a.createContext()),b=function(e){var t=e.children,c=Object(n.useState)([{id:0,name:"Earth",price:3.99,image:"https://images.unsplash.com/photo-1633990017009-4d1eab0bf0d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",amount:0},{id:1,name:"Flames",price:19,image:"https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",amount:0},{id:2,name:"Garden",price:29,image:"https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80",amount:0},{id:3,name:"Gold",price:30,image:"https://images.unsplash.com/photo-1517196084897-498e0abd7c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",amount:0},{id:4,name:"Smoke",price:90,image:"https://images.unsplash.com/photo-1547070451-e3857a8ea62a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",amount:0},{id:5,name:"Clouds",price:23,image:"https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",amount:0},{id:6,name:"Cali",price:29,image:"https://images.unsplash.com/photo-1563494270-4e133aea0ede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",amount:0},{id:7,name:"Fog",price:10,image:"https://images.unsplash.com/photo-1519066473994-a7506988851d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80",amount:0}]),i=Object(d.a)(c,2),a=i[0],o=(i[1],Object(n.useState)([])),r=Object(d.a)(o,2),s=r[0],l=r[1],b=Object(n.useState)(0),x=Object(d.a)(b,2),f=x[0],h=(x[1],Object(n.useState)(0)),O=Object(d.a)(h,2),p=O[0],g=O[1];Object(n.useEffect)((function(){!function(){var e=s.reduce((function(e,t){return e+t.price*t.amount}),0).toFixed(2);g(e)}()}),[s]);return Object(j.jsx)(m.Provider,{value:{items:a,addItemToCart:function(e){var t=s.find((function(t){return t.id===e.id}));t?t.amount+=1:(e.amount+=1,l([].concat(Object(u.a)(s),[e])),console.log("null")),console.log(s)},cartItems:s,totalItems:f,clearCart:function(){l([])},increaseItem:function(e){console.log("id below"),console.log(e);var t=Object(u.a)(s);console.log("amount"),console.log(t);var c=t.find((function(t){return t.id===e}));console.log("find"),console.log(c),c.amount+=1,console.log(c),console.log("newcart"),console.log(t),l(t)},decreaseItem:function(e){if(Object(u.a)(s).find((function(t){return t.id===e})).amount<=1)l(s.filter((function(t){return t.id!==e})));else{var t=Object(u.a)(s);t.find((function(t){return t.id===e})).amount-=1,l(t)}},removeItem:function(e){l(s.filter((function(t){return t.id!==e})))},cartTotal:p},children:t})},x=function(){var e=Object(n.useContext)(m);return Object(j.jsx)("div",{className:"shopDiv",children:e.items.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("h3",{children:e.price}),Object(j.jsxs)("h4",{children:["Amount in Cart: ",e.amount]}),Object(j.jsxs)(r.b,{to:"/item/".concat(e.id),children:[Object(j.jsx)("img",{src:e.image,alt:e.name}),Object(j.jsx)("br",{}),"Link to item"]})]},e.id)}))})},f=function(){var e=Object(n.useContext)(m),t=Object(s.f)().id;return Object(j.jsxs)("div",{className:"singleItem",children:[Object(j.jsx)("h1",{className:"singleItemH1",children:e.items[t].name}),Object(j.jsx)("h1",{className:"singleItemH1",children:e.items[t].price}),Object(j.jsx)("img",{src:e.items[t].image,alt:e.items[t].name}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"itemAddBtn",onClick:function(){return e.addItemToCart(e.items[t])},children:"Add to Cart"})]})},h=c(21),O=function(e){var t=Object.assign({},e),c=Object(n.useContext)(m);return console.log(t),Object(j.jsxs)("div",{className:"itemCheckoutDiv",children:[Object(j.jsx)("h1",{children:t.name}),t.price,"amount: ",t.amount,Object(j.jsx)("img",{src:t.image,alt:t.title}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return c.increaseItem(t.id)},children:"Increase amount"}),Object(j.jsx)("button",{onClick:function(){return c.decreaseItem(t.id)},children:"Decrease amount"}),Object(j.jsx)("button",{onClick:function(){return c.removeItem(t.id)},children:"Remove Item"})]})]},t.id)},p=function(){var e=Object(n.useContext)(m);return 0===e.cartItems.length?Object(j.jsx)("h1",{children:"Empty Cart"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:e.clearCart,className:"clearCartBtn",children:"Clear Cart"}),Object(j.jsxs)("h1",{children:["Cart total: $",e.cartTotal]}),e.cartItems.map((function(e){return Object(j.jsx)(O,Object(h.a)({},e))}))]})},g=function(){return Object(j.jsx)(p,{})},w=function(){return Object(j.jsx)("div",{children:"ERRORRRRRR"})},v=function(){var e=Object(n.useContext)(m);return Object(j.jsxs)("div",{className:"navBar",children:[Object(j.jsx)("h1",{children:"Shopping Cart"}),Object(j.jsxs)("div",{className:"navbarRight",children:[Object(j.jsx)(r.b,{to:"/",children:"Home"}),Object(j.jsx)(r.b,{to:"/shop",children:"Shop"}),Object(j.jsxs)(r.b,{to:"/checkout",children:["Checkout Items: ",e.cartItems.length]})]})]})};var C=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(v,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",children:Object(j.jsx)(l,{})}),Object(j.jsx)(s.a,{path:"/shop",children:Object(j.jsx)(x,{})}),Object(j.jsx)(s.a,{path:"/item/:id",children:Object(j.jsx)(f,{})}),Object(j.jsx)(s.a,{path:"/checkout",children:Object(j.jsx)(g,{})}),Object(j.jsx)(s.a,{path:"*",children:Object(j.jsx)(w,{})})]})]})};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{children:Object(j.jsx)(C,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e9555532.chunk.js.map