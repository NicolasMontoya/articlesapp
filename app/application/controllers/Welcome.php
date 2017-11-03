<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct()
	{
			parent::__construct();
			$this->load->model('Article','std');
	}

	public function index()
	{
		$sql = $this->std->get();
		print_r($sql);
	}
}
