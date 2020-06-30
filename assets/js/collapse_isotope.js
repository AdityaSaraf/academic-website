$('.collapse').on('shown.bs.collapse hidden.bs.collapse', function(){
    let $container = $('.projects-container');
    $container.isotope('layout'); 
});

$(".myaccordion").each(function (index) {
    console.log(this);
    $(this).on("hide.bs.collapse show.bs.collapse", e => {
        $(e.target)
            .prev()
            .find("i:last-child")
            .toggleClass("fa-minus fa-plus");
    });
})