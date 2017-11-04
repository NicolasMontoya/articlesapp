<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Article extends CI_Controller {

    public function __construct(){
		parent::__construct();
		$this->load->model('Article_Model','model');
    }
    public function index($id,$num){
        echo "Works";
    }
		public function getAll(){
			$data = $this->model->get();
			print json_encode($data);
    }
    public function getById($id){
			$data = $this->model->getById($id);
			print json_encode($data);
    }
    public function saveArticle(){
			$title = $_POST['title'];
			$message = $_POST['message'];
			$code = uniqid('img_');
			$config['upload_path']          = './uploads/';
			$config['allowed_types']        = 'gif|jpg|png';
			$config['max_size']             = 100;
			$config['max_width']            = 2000;
			$config['max_height']           = 2000;
			$config['file_name']			= $code;
			$this->load->library('upload', $config);
			if($title != null && $message != null && $title != '' && $message != ''){
				if ( ! $this->upload->do_upload('userfile'))
				{
								$error = array('error' => $this->upload->display_errors());
								print json_encode($error);
				}
				else
				{
								$img = 'uploads/'.$this->upload->data('file_name');
								$response = $this->model->saveArticle($title,$message,$img);
								print json_encode($response);
				}
			}
			else{
				$error = array('error' => "Some data empty");
				print json_encode($error);
			}
			       
    }
    public function updateArticle(){

    }
    public function removeArticle(){

    }
}
