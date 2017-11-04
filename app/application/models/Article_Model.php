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
        $data = $query->result();
        return $data;
    }
    public function saveArticle($title, $message, $img){
		$data = array(
			'title' => $title,
			'message' => $message,
			'img' => $img
	);
		$this->db->insert('article',$data);
		if($this->db->affected_rows() > 0){
			$data['id'] = $this->db->insert_id();
			$response = array("status" => "Success",'data' => $data);
		}
		else{
			$response = array("status" => "Error", "data" => "No inserted register");
		}
		return $response;
    }
    public function removeArticle($id){

    }
    public function updateArticle($id){

    }
    
}
