$(function() {
  // DOM is now ready
    _500px.init({
        sdk_key: '36734947feb3eb47fbe53ee816a069bfd9542f3b'
    });
    
    $('#login').click(function() {
        _500px.login();
    });

});
