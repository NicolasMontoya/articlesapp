<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct()
	{
			parent::__construct();
			$this->load-database();
	}

	public function index()
	{
		$sql = $this->db->get('article');
		echo $sql;
	}
}
