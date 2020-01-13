<?php
require_once('db.php');

class RequestsPDO {
    /**
     * Reads the content from a table
     * @param      $id The cle primaire from the table you'll want to read
     */
    public function getItem($id, $table) {
        global $pdo;

        $stmt = $pdo->prepare("SELECT * FROM " . " $table " . " WHERE id=?");
        $stmt->execute([$id]); 
        $data = $stmt->fetch();
        echo json_encode($data);

    }
    
    public function getLastItem($table, $column) {
        global $pdo;

        $stmt = $pdo->query("SELECT * FROM " . "$table" . " ORDER BY " . $column . " DESC LIMIT 1");
        $data = $stmt->fetch();
        return $data;
        // echo json_encode($data);
    }

    /**
     * { read all the rows from a table }
     */
    public function getAllMessages() {
        global $pdo;

        try {
            $stmt = $pdo->query("SELECT * FROM messages ORDER BY created_at DESC LIMIT 50");
            $data = $stmt->fetchAll();
            echo json_encode($data);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    public function setCompteur($nr_webdiffusion) {
        global $pdo;

        try {
            $sql = "INSERT INTO compteurs 
                    SET nr_webdiffusion = :nr_webdiffusion";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                'nr_webdiffusion'   => $nr_webdiffusion, 
                ]);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    public function setMessage($nr_webdiffusion, $pseudo, $message) {
        global $pdo;

        $success = 0;
        $error_msg = 'Une erreur est survenue';

        if (isset($message) && !empty(trim($message))) {
            $success = 1;
            $message = strip_tags($message);
            echo json_encode([
                'success' => $success,
                'message' => $_POST,
                ]);
        } else {
            $success = 0;
            echo json_encode([
                'success' => $success,
                'error_msg' => $error_msg,
            ]);
            return;
        }

        try {
            $sql = "INSERT INTO messages 
                    SET nr_webdiffusion = :nr_webdiffusion, 
                    pseudo = :pseudo, 
                    message = :message,
                    created_at = now()";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                'nr_webdiffusion'   => $nr_webdiffusion, 
                'pseudo'            => $pseudo, 
                'message'           => $message,
                ]);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }
}