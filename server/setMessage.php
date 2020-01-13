<?php
require_once('RequestsPDO.php');
session_start();

$message = $_POST['message'] ?? '';

// Case 1: Si pseudo n'existe pas, affecter un à partir de column compteur
if (!isset($_SESSION['pseudo'])) {
    $data = new RequestsPDO();
    $get_nr_compteur = $data->getLastItem('compteurs', 'compteur');
    $last_nr_compteur = intval($get_nr_compteur['compteur']);
    
    // 2 storer le pseudo dans la session
    $pseudo = 'u_' . $last_nr_compteur;
    $_SESSION['pseudo'] = $pseudo;
    
    // 3 inserer le message avec le pseudo
    $data->setMessage($_SESSION['nr_webdiffusion'], $_SESSION['pseudo'], $message);
} else {
    // Case 2: Si pseudo exite dans la session, inserer le avec le message
    $data = new RequestsPDO();
    $data->setMessage($_SESSION['nr_webdiffusion'], $_SESSION['pseudo'], $message);
}