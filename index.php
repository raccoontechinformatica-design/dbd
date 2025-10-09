<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css?cb=<?php echo time(); ?>">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7044182148289142"
     crossorigin="anonymous"></script>
    <title>Build Dead By Daylight</title>
</head>
<body>
    <div class="icon">
        <button type="button" id="toggleWallpaper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <!-- <img src="./assets/eye.svg" width="50px" height="50px" style="display: none;" class="open">
            <img src="./assets/eye-slash-svgrepo-com.svg" class="closed"  width="50px" height="50px"> -->
        </button>
    </div>
    <div id="header">
        <div class="title">
            <div style="flex-grow: 1;">
                🡐 Caso queira usar a minha build - apenas procure pelo assassino que desejar no botão superior esquerdo.
            </div>
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
    <script src="addons_perks.js?cb=<?php echo time(); ?>"></script>
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
