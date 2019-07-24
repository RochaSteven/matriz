<html>
<body>
    <h1>Matriz</h1>
    <div>
            <h2>filas</h2>
        <label for="Columas"></label>
        <input type="number"  name="Columas" id="Columnas">
        <br><br>
        <label for="Filas"></label>
        <h2>columnas</h2>
        <input type="number"  name="Filas" id="Filas">
        <hr>
        <input type="button" value="crear" id="crear">
    </div>
</body>
<script>
    // autor: Steven Rocha
    // descripcion : matriz con n numero de filas y columnas
    var matriz = [];
    var cont = 0;
    document.getElementById("crear")
        .addEventListener("click", function () {
            var fil = document.getElementById("Filas").value;
            var col= document.getElementById("Columnas").value;
            // genera la matriz 
            for (let i = 0; i < col; i++) {
                matriz.push(new Array);
                for (let j = 0; j < fil; j++) {
                    cont++;
                    
                    matriz[i].push(cont);
                }
            }
        })
        // imprime todo
        function todo (){
            console.log(matriz);

        }
        // imprime todas las filas
        function filas (){
            for (let i = 0; i < matriz.length; i++) {
                console.log(matriz[i])
            } 

        }
        // imprime todas las columnas 
        function columnas(){
            for (let i = 0; i < matriz.length; i++){
            for (let j = 0; j < matriz.length; j++){
                console.log(matriz[i][j])
                
            }
        }
        }
        </script>
        </html>
