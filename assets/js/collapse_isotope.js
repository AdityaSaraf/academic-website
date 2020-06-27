$('.collapse').on('shown.bs.collapse hidden.bs.collapse', function(){
    let $container = $('.projects-container');
    $container.isotope('layout'); 
});