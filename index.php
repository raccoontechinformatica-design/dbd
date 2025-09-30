<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css?cb=<?php echo time(); ?>">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <title>Build Dead By Daylight</title>
</head>
<body>
    <div id="header">
        <div class="title">
            🡐 Caso queira usar a minha build - apenas procure pelo assassino que desejar no botão superior esquerdo.
        </div>
    </div>
    <div class="main">
        <div id="sidebar">
            <div class="title" style="font-size: 18px; color: #fff; font-style: italic;">Selecione um killer</div>
            <div class="dropdown">
               <div id="itemlist"></div>
            </div>
            <div id="sidebar-content">
                
            </div>
            <button id="expand-more">
                abc
                <span></span>
            </button>
        </div>
        <div id="container">
            <div class="bg"></div>
            <div id="slices">
                <div class="top">
                    <div class="slice1">
                        <div class="item">
                            <img src="" class="icons comp" data-num="1">
                            <div class="compDesc" data-num="1">
                                Quando usada junto à Armadilha de Urso, a Pedra de Amolar afia suas lâminas. 
                                As lâminas afiadíssimas infligem feridas profundas, com o objetivo de sangrar a vítima o mais rápido possível. 
                                Inflige o Estado Morrendo sobre a vítima capturada se ela se libertar por conta própria.
                            </div>
                        </div>
                        <div class="item">
                            <img src="" class="icons comp" data-num="2">
                            <div class="compDesc" data-num="2">
                                Aumenta tremendamente a velocidade de armação da Armadilha de Urso. 
                                Aumenta consideravelmente o tempo de resgate e fuga da Armadilha de Urso. 
                                Diminui moderadamente as chances de escapar de uma Armadilha de Urso.
                            </div>
                        </div>
                    </div>
                    <!-- <div class="slice2">
                        <img src="assets/killers/Ach_crippleThemAll.webp" id="oferenda">
                    </div> -->
                    <div class="slice3">
                        <div id="killer">
                            <img src="#" id="killerImg">
                        </div>
                        <div class="power">
                            <img src="#" alt="" id="poder">
                        </div>
                    </div>
                </div>
                <div class="middle">
                    <div class="skills section-skill">
                        <div class="divider"></div>
                    </div>
                    <div class="section section-skill">
                        <div class="divider"></div>
                    </div>
                    <div class="section section-skill">
                        <div class="divider"></div>
                    </div>
                    <div class="section section-skill">
                        <div class="divider"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="credit-title" style="position: fixed; bottom: 15px; right:15px; z-index: 100;">
        <a href="javascript:void(0)" style="color:#fff; text-decoration: none; cursor: pointer;">
            Andressa Lucateli
        </a>
    </div>
    <div id="credits" style="display: none">
        Este site de perks de Dead by Daylight foi idealizado, criado e desenvolvido por <a href="https://github.com/drelocatelli" target="_blank">Andressa Lucatelli</a>.<br>
        O projeto foi concebido com o objetivo de mostrar as perks utilizada pelo Famz, reunindo informações detalhadas para auxiliar jogadores na construção de estratégias e combinações dentro do jogo.
    </div>

    <script src="script.js?cb=<?php echo time(); ?>"></script>
    <script src="killers.js?cb=<?php echo time(); ?>"></script>
    <script src="dropdown.js?cb=<?php echo time(); ?>"></script>

    <script>
        
        document.addEventListener('DOMContentLoaded', function() {
            const creditTitle = document.querySelector('#credit-title a');
            const credits = document.querySelector('#credits');


            creditTitle.onclick = () => {
                credits.style.display = (credits.style.display == 'block') ? 'none' : 'block';
            };
        });
    </script>

    <style>
        div#credits {
            border-radius: 10px;
            position: fixed;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            z-index: 111111111;
            padding: 1rem;
            font-size: 18px;
        }
    </style>
</body>
</html>
