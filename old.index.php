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
                            <img src="assets/perks/FulliconAddon_honingStone.webp" class="icons comp" data-num="1">
                            <div class="compDesc" data-num="1">
                                Quando usada junto à Armadilha de Urso, a Pedra de Amolar afia suas lâminas. 
                                As lâminas afiadíssimas infligem feridas profundas, com o objetivo de sangrar a vítima o mais rápido possível. 
                                Inflige o Estado Morrendo sobre a vítima capturada se ela se libertar por conta própria.
                            </div>
                        </div>
                        <div class="item">
                            <img src="assets/perks/FulliconAddon_fasteningTools.webp" class="icons comp" data-num="2">
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
                        <img src="#" id="killerImg">
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

    <script src="script.js?cb=<?php echo time(); ?>"></script>
    <script src="killers.js?cb=<?php echo time(); ?>"></script>
    <script src="dropdown.js?cb=<?php echo time(); ?>"></script>
</body>
</html>
