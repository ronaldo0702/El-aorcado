        var words = [['ronaldo'], ['videojuego'], ['xbox'], ['santos'], ['mexico'], ['torreon'], ['universidad'], ['españa'], ['consola'], ['original'], ['region'], ['discos'], ['teclado'], ['raton']];
        var word = '';
        var hidden_letter = [];
        var letter_space = document.getElementById("palabra");
        var vidas = 3;
        var fallidas = 1;


        function generarPalabra() 
        {
            var total_words = words.length - 1;
            rand = (Math.random() * total_words).toFixed(0);
            word = words[rand][0].toUpperCase();
        }

        function generarguion(num) 
        {

        }
