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
								$error = array('status' => 'Error','error' => $this->upload->display_errors());
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
				$error = array('status'=>'Error','error' => "Some data empty");
				print json_encode($error);
			}
			       
    }
    public function updateArticle(){
		$id = $_POST['id'];
		$title = $_POST['title'];
		$message = $_POST['message'];
		$code = uniqid('img_');
		$exist = $this->model->getById($id);
		if($exist != array() && $exist != '' && $exist != null){
			if(isset($_FILES['userfile']))
			{
				$config['upload_path']          = './uploads/';
				$config['allowed_types']        = 'gif|jpg|png';
				$config['max_size']             = 100;
				$config['max_width']            = 2000;
				$config['max_height']           = 2000;
				$config['file_name']			= $code;
				$this->load->library('upload', $config);
				if ( ! $this->upload->do_upload('userfile'))
				{
								$error = array('status'=>'Error','error' => $this->upload->display_errors());
								print json_encode($error);
				}
				else
				{
								unlink($exist->img);
								$img = 'uploads/'.$this->upload->data('file_name');
								$response = $this->model->updateArticle($id,$title,$message,$img,true);
								print json_encode($response);
				}
			}else{
				$response = $this->model->updateArticle($id,$title,$message,$exist->img,false);
				print json_encode($response);
			}
		}else{
			$error = array('status'=>'Error','error' => "Some data empty");
			print json_encode($error);
		}	
		
    }
    public function removeArticle(){
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		$id = $request->id;
		if(isset($id)){
			$response = $this->model->removeArticle($id);
			unlink($response['data']->img);
			print json_encode($response);
		}else{
			$error = array('status'=>'Error','error' => "Some data empty");
			print json_encode($error);
		}
    }
}
