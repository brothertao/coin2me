
/* The presenter */

(function() { 'use strict';
   window.exchanger= new Exchanger();

   // HTML for a single exchanger item
   var template = $("[type='html/exchanger']").html(),
      root = $("#exchanger-list tbody"),
      nav = $("#filters a");



   /* Listen to user events */

   /* Listen to model events */
   exchanger.on('add', function(item) {
      if (this.id) item = this;
      var elem = $($.render(template, item)).appendTo(root);
   }).on("update", function(item) {
      var elem = $("#" + item.id).replaceWith($.render(template, item));
   })



   /* Routing */




   /* Private functions */
   var item = {
      exchanger: 'mtgox',
      last_price: '444',
      buy_one: '444',
      sell_one: '455',
      hign_price: '2333',
      low_price: '234',
      volume: '434353423'
   }
   item['id'] = 'exchanger_'+item.exchanger;
   exchanger.add(item)
   item.last_price = 1111;
   //exchanger.update(item)

})()

function getData() {
   var exchangerUrls = {
      okcoin: 'https://www.okcoin.com/api/ticker.do?symbol=ltc_cny'
   }
   exchangerUrls.forEach()
}
