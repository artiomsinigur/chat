<?php
require_once('RequestsPDO.php');

$data = new RequestsPDO();
$data->getLastItem('compteurs', 'compteur');
