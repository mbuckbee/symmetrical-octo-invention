

        function clearTerminal(){
            $('#terminal').text("");
        }


        // Updates the Terminal 
        function updateTerminal(text){

            var terminal = $('#terminal');

            starting = terminal.text();
            terminal.text(starting + "\n" + text);

            var textarea = document.getElementById('terminal');
            textarea.scrollTop = textarea.scrollHeight;

        }

        // Updates the Port Scan
        function startPortScan(target){

            $.getJSON( "/ports.json", function( data ) {
              
                var ports = data['ports'];

                $.each( ports, function( key, val ) {
                   updateTerminal(key);
                });  

            });

            var terminal = $('#terminal');

            starting = terminal.text();
            terminal.text(starting + "\n" + text);

            var textarea = document.getElementById('terminal');
            textarea.scrollTop = textarea.scrollHeight;

        }


        function updateGibberish() {
     
            // Random Line
            items = $('#source').text().split(/\n/);
            var item = items[Math.floor(Math.random() * items.length)];

            updateTerminal(item);

        }

        function updateStep(){
            starting = $('#terminal').text();

            // Random Line
            items = $('#source').text().split(/\n/);

            var item = items[Math.floor(Math.random() * items.length)];

            $('#terminal').text(starting + "\n" + item);
        }


        /* Randomize array in-place using Durstenfeld shuffle algorithm */
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

            return array;
        }


        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function getUrlParameter(sParam) {
            var sPageURL = window.location.search.substring(1),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;
        
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
        
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                }
            }
        };