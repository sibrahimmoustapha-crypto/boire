<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Changeur de couleurs</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            text-align: center;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        h1 {
            margin-bottom: 20px;
            color: #333;
        }

        #color-box {
            width: 200px;
            height: 200px;
            background-color: #3498db;
            margin: 0 auto 20px auto;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }

        #change-color-btn {
            background-color: #2ecc71;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        #change-color-btn:hover {
            background-color: #27ae60;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Color Changer</h1>
        <!-- La boîte de couleur -->
        <div id="color-box"></div>
        <!-- Le bouton -->
        <button id="change-color-btn">Change Color</button>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const colorBox = document.getElementById('color-box');
            const changeColorBtn = document.getElementById('change-color-btn');

            // Fonction pour générer une couleur aléatoire
            function getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            // Écouteur d'événement sur le bouton
            changeColorBtn.addEventListener('click', function() {
                const randomColor = getRandomColor();
                colorBox.style.backgroundColor = randomColor;
            });
        });
    </script>
</body>
</html>