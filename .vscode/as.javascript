<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            text-align: center;
            font-family: sans-serif;
        }
        button
       {
           padding: 10px 20px;
           font-size: 25px;
           border: none;
           border-radius: 5px;
           background-color: rgb(50, 50, 202);
           margin-left: 600px;
           color: white;
       }
    </style>
</head>
<body>
    <p id="demo">Welcome to JavaScript</p>
    <br>
    <button onclick="func()">Click</button>



    <script>
        function func(){
            document.getElementById("demo").style.fontSize = "100px";
            console.log("hello");
        }

       

    </script>
</body>
</html>