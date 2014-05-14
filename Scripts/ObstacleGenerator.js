#pragma strict
var obstacle:Rigidbody;

//creates an instance of the bomb at 
//a random position in x and y

transform.position.x = transform.parent.position.x;
function createObs()
{ 
	var x : float;
	var y : float;
	y = -4;
	x = Random.Range(-4,4);
	x = x + transform.position.x;
	Instantiate(obstacle,Vector3(x,y,19),Quaternion.identity);
}


function Start () {
 //parameter 1: wait 4.0 seconds
 //parameter 2: every 4.0 seconds
 InvokeRepeating("createObs",10.0,10.0);
}


function Update () {

}



