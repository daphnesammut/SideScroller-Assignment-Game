#pragma strict
var boss:GameObject;
var isgrounded : boolean;
var alienSpawn:AudioSource;
static var lives : int;

//creates an instance of the alien at 
//a random position in x and y

function createBoss()
{ 

	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+6;
	yposition = -3.5;
	
	//make it relative to the position of the current gameobject
	//xposition = transform.position.x + xposition;
	
	Instantiate(boss,Vector3(xposition,yposition,19),Quaternion.identity);
	lives =6;
//	alienSpawn.Play();
}


function Start () {
 //parameter 1: wait 4.0 seconds
 //parameter 2: every 4.0 seconds
 InvokeRepeating("createBoss",4.0,10.0);
 lives = 6;
}


function Update () {
transform.Translate(Vector3.left * 5 * Time.deltaTime);


}