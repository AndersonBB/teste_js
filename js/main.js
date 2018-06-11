$.get("https://chain.so/api/v2/get_price/BTC/USD", function( response ) {
    $("#cotacao_bitcoin")  
        .html( "Cotação $" + response.data.prices[4].price + "<br/>")
}, "json" );

$.get( "https://chain.so/api/v2/get_price/LTC/USD", function( response ) {
    $("#cotacao_litecoin")  
        .html( "Cotação $" + response.data.prices[2].price + "<br/>" )
}, "json" );