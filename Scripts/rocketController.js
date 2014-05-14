#pragma strict
var rocket:Rigidbody;
var rocketSound: AudioSource;
//creates an instance of the rocket at 
//a random position in x and y

transform.position.x = transform.parent.position.x;
function createRocket()
{ 
	var x : float;
	var y : float;
	y = 8;
	x = Random.Range(-4,4);
	x = x + transform.position.x;
	Instantiate(rocket,Vector3(x,y,19),Quaternion.identity);
	rocketSound.Play();
}


function Start () {
 //parameter 1: wait 4.0 seconds
 //parameter 2: every 4.0 seconds
 InvokeRepeating("createRocket",10.0,10.0);
}


function Update () {

}


