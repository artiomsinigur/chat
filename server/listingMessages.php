<?php
require_once('RequestsPDO.php');
session_start();

$data = new RequestsPDO();

// 1 si pas de session et la bd est vide
if (!isset($_SESSION['nr_webdiffusion'])) {
    $get_nr_webdiff = $data->getLastItem('compteurs', 'compteur');
    if ($get_nr_webdiff === false) {
        $data->setCompteur(1);
        $_SESSION['nr_webdiffusion'] = 1;
    }
}

// 2 si pas de session mais la bd n'est pas vide
if (!isset($_SESSION['nr_webdiffusion'])) {
    $get_nr_webdiff = $data->getLastItem('compteurs', 'compteur');
    $last_nr_webdiff = intval($get_nr_webdiff['nr_webdiffusion']);

    if ($last_nr_webdiff >= 0) {
        $_SESSION['nr_webdiffusion'] = ++$last_nr_webdiff;
        $data->setCompteur($_SESSION['nr_webdiffusion']);
    }
}

$data = new RequestsPDO();
$data->getAllMessages();

