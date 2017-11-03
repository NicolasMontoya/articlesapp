<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Article extends CI_Controller {

    public function __construct(){
		parent::__construct();
		$this->load->model('Article_Model','model');
    }
    public function index(){
        echo "Works";
    }
	public function getAll(){
		
    }
    public function getById(){

    }
    public function saveArticle(){
        
    }
    public function updateArticle(){

    }
    public function removeArticle(){

    }
}
