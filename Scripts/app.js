// Alex Melano, 200249154
(function(){
    $(".btn-danger").click(function(event){

        if(!confirm("Are You Sure?")) {
            event.preventDefault();
            window.location.assign("index.php?pageId=GamesList");
        }
    });
})();
