 <?php
	$status = ['status' => 9];	//default status code: unidentified error

 	include ('includes/db_init.php');
 	$post = json_decode(readfile('php://input'));
 	$stmt = $pdo -> prepare ('select name from users where name = ?');
 	$stmt -> execute ([$post['name']]);

 	if ($stmt -> rowCount() == 0)	//username is available
 	{
		//we're adding user to database
		$stmt = $pdo -> prepare ('insert into users (name, password) values (:name, :pass)');
		$post['password'] = password_hash ($post['password'], PASSWORD_DEFAULT);
		$stmt -> execute ([':name' => $post['name'], ':pass' => $post['password']]);
		if ($stmt -> rowCount() == 1)
			$status = ['status' => 0];	//all right, only one row added
 	}
 	else
 	{
 		//return error
 		$status = ['status' => 1];
 	}
 	echo json_encode($status);	//return status code
 	