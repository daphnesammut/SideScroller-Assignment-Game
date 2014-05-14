#pragma strict
var bomb:Rigidbody;
var bombDrop: AudioSource;

//creates an instance of the bomb at 
//a random position in x and y

transform.position.x = transform.parent.position.x;
function createBomb()
{ 
	var x : float;
	var y : float;
	y = 8;
	x = Random.Range(-4,4);
	x = x + transform.position.x;
	Instantiate(bomb,Vector3(x,y,19),Quaternion.identity);
	bombDrop.Play();
}


function Start () {
 //parameter 1: wait 4.0 seconds
 //parameter 2: every 4.0 seconds
 InvokeRepeating("createBomb",10.0,10.0);
}


function Update () {

}



