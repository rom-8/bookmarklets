javascript: (function() {
  var discount = prompt("割引率指定 例:\n50- ⇒ 50%以上割引している\n-50 ⇒ 50%以上割引しているものを除く\n50-90 ⇒ 50〜90%割引している","30-");
  location.href += "&pct-off="+discount;
})();

