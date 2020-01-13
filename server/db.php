<?php
    // Connexion à la base de donnée
    $host = 'localhost';
    $db   = 'webdiffusion';
    $user = 'root';
    $pass = '';
    $dsn = "mysql:host=$host;dbname=$db;";

    try {
        $pdo = new PDO($dsn, $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $pdo->exec("SET NAMES 'utf8'");
    } catch (\PDOException $e) {
         throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }