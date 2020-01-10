

function callback(response) {
    console.log(response);
    $('main').html(response);
}


$.get('exemple.php', callback);

function callback2 (response) {
    console.log(response);
        $('main').append('<div><p>'+response.name+'</p></div>');
}

$.getJSON('exemple2.php', callback2);
