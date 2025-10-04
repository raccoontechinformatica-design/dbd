<?php

header("Content-Type: application/json");

function remove_after_last_slash(string $str): string
{
    $pos = strrpos($str, '/');
    if ($pos !== false) {
        return substr($str, 0, $pos);
    }
    return $str; // caso não tenha barra
}

function get_current_url(): string
{
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'
        || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";

    $host = $_SERVER['HTTP_HOST'];
    $requestUri = $_SERVER['REQUEST_URI'];
    $url = remove_after_last_slash($requestUri);

    return $protocol . $host . $url;
}

function get_asset($type, $path) 
{
    if($type === 'perk' || $type === 'addon') {
        return get_current_url() . "/assets/perks/$path";
    }

    if($type === 'killer' || $type === 'power') {
        return get_current_url() . "/assets/killers/$path";
    }

     if($type === 'bg') {
        return get_current_url() . "/assets/$path";
    }


    return '#';
}

function get_addons()
{
    return [
        [
            "name" => "pedra de amolar",
            "value" => "Pedra_De_Amolar",
            "image" => get_asset("addon", "FulliconAddon_honingStone.webp"),
            "description" => "Quando usada junto à Armadilha de Urso, a Pedra de Amolar afia suas lâminas. As lâminas afiadíssimas infligem feridas profundas, com o objetivo de sangrar a vítima o mais rápido possível. Inflige o Estado Morrendo sobre a vítima capturada se ela se libertar por conta própria."
        ],
        [
            "name" => "Ferramentas de Fixação",
            "value" => "Ferramentas_de_Fixação",
            "image" => get_asset("addon", "FulliconAddon_fasteningTools.webp"),
            "description" => "Aumenta tremendamente a velocidade de armação da Armadilha de Urso. Aumenta consideravelmente o tempo de resgate e fuga da Armadilha de Urso. Diminui moderadamente as chances de escapar de uma Armadilha de Urso."
        ],
        [
            "name" => "Caça Rápida",
            "value" => "Caça_Rápida",
            "image" => get_asset("addon", "FulliconAddon_swiftHunt-Blood.webp"),
            "description" => "O símbolo Kuntin-Takkho, representando uma rápida descida em uma presa, está estampado em sangue no corpo do Sino."
        ],
        [
            "name" => "Guerreiro Cego",
            "value" => "Guerreiro_Cego",
            "image" => get_asset("addon", "Adobe_Express_-_file-removebg-preview.png"),
            "description" => "
                O símbolo Baikra-Kaeug, representando ferocidade, está estampado com tinta branca no corpo do Sino.<br>Ataques Supresa afligem os Sobreviventes com os Efeitos de Status Dilacerado e Hemorragia até que sejam completamente curados.
            "
        ]
    ];
}

function get_perks()
{
    return [
        [
            "name" => "Feitiço: Devorar Esperança",
            "value" => "Feitiço:_Devorar_Esperança",
            "image"=> get_asset("perk", "108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_03.png"),
            "description" => "
                Um feitiço que pega seu poder de esperança. A falsa esperança dos Sobreviventes aumenta sua fome. Quando um Sobrevivente é salvado do Gancho pelo menos a 24 metros de você, Devorar Esperança recebe uma Moeda.
            "
        ],
        [
            "name" => "Feitiço: Imortal",
            "value" => "Feitiço:_Imortal",
            "image"=> get_asset("perk", "108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_08.png"),
            "description" => "
                As Auras de Sobreviventes dentro de 2/3/4 metros de qualquer Totem simples são reveladas a você.<br>
                Quando o Totem Enfeitiçado  de outra Vantagem é limpo, seu Feitiço é transferido para o Totem Feitiço: Imortal, incluindo quaisquer Moedas acumuladas, desativando Feitiço: Imortal.<br>
                Os efeitos do Feitiço persistem enquanto o Totem Enfeitiçado  relacionado estiver de pé
            "
        ],
        [
            "name" => "Intervenção Corrompida",
            "value" => "Intervenção_Corrompida",
            "image"=> get_asset("perk", "108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_11.png"),
            "description" => "
                Suas orações invocam um poder sombrio que interfere nas chances de sobrevivência.<br>
                Os 3 Geradores mais distantes de você são bloqueados pela Entidade por 80 segundos no começo da partida.<br>
            "
        ],
        [
            "name" => "Gancho do Tormento: Presente da Dor",
            "value"=> "Gancho_do_Tormento:_Presente_da_Dor",
            "image"=> get_asset("perk", "108f71d5-1a89-42d7-bb20-f8e6c887b92a_removalai_preview_05.png"),
            "description" => "
                Em cada partida, 4 Ganchos aleatórios viram Ganchos do Tormento. Quando um Sobrevivente é enganchado em um Gancho do Tormento, o gerador com mais progresso explode e perde progresso. Os Sobreviventes que estiverem reparando esse gerador vão gritar e revelar a própria localização.
            "
        ],
    ];
}

function get_killers()
{
    return [
        [
            "value" => "trapper",
            "name" => "o caçador",
            "image" => get_asset("killer", "DBD_Killer_Trapper_only_335b9655b2.png"),
            "power_img" => get_asset("killer", "Ach_crippleThemAll.webp"),
            "bg" => get_asset("bg", "bg1.jpeg"),
        ],
        [
            "value" => "wraith",
            "name" => "o espectro",
            "image" => get_asset("killer", "DBD_Killer_Wraith_only_23c19dc579.png"),
            "power_img" => get_asset("killer", "Ach_jumpScares.webp"),
            "bg" => get_asset("bg", "bg_espectro.png"),
        ]
    ];
}

echo json_encode([
    "addons" => get_addons(),
    "perks" =>  get_perks(),
    "killers" => get_killers()
]);