<?php
class Article_Model extends CI_Model {
    public function __construct()
	{
			parent::__construct();
			
    }
    public function get(){
        $query = $this->db->get('article');
        $data = $query->result();
        return $data;
    }
    public function getById($id){
        $this->db->where('id',$id);
        $query = $this->db->get('article');
        $data = $this->result();
        return $data;
    }
    public function saveArticle($title, $message, $img){
        
    }
    public function removeArticle($id){

    }
    public function updateArticle($id){

    }
    
}